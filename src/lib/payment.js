const MERCHANT_CODE = '255826557458';
const API_KEY = '6USq_P*1)nQO8C]0T&@';

export const process2CheckoutPayment = async (orderData) => {
    try {
        const orderDetails = {
            merchantCode: MERCHANT_CODE,
            currency: 'USD',
            language: 'en',
            country: 'US',
            customerEmail: orderData.email,
            customerName: orderData.name,
            items: orderData.items.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                description: item.description
            })),
            total: orderData.total,
            customFields: {
                discordTag: orderData.discordTag
            }
        };

        localStorage.setItem('pending_order', JSON.stringify({
            ...orderDetails,
            timestamp: new Date().toISOString(),
            status: 'pending'
        }));

        console.log('2Checkout Payment Data:', orderDetails);
        console.log('Merchant Code:', MERCHANT_CODE);
        console.log('API Key:', API_KEY.substring(0, 4) + '***');

        await new Promise(resolve => setTimeout(resolve, 1500));

        return {
            success: true,
            orderId: `ORDER-${Date.now()}`,
            paymentUrl: `https://secure.2checkout.com/checkout/buy?merchant=${MERCHANT_CODE}`,
            message: 'Order created successfully'
        };

    } catch (error) {
        console.error('Payment processing error:', error);
        throw new Error('Failed to process payment. Please try again.');
    }
};

export const verify2CheckoutWebhook = (webhookData) => {
    console.log('2Checkout Webhook received:', webhookData);

    const order = JSON.parse(localStorage.getItem('pending_order') || '{}');

    if (webhookData.status === 'COMPLETE') {
        const completedOrder = {
            ...order,
            status: 'completed',
            completedAt: new Date().toISOString()
        };

        localStorage.setItem('completed_order', JSON.stringify(completedOrder));
        localStorage.removeItem('pending_order');

        return { success: true, order: completedOrder };
    }

    return { success: false, message: 'Payment not completed' };
};