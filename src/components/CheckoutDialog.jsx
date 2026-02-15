import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Lock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { process2CheckoutPayment } from '@/lib/payment';

const CheckoutDialog = ({ isOpen, onClose }) => {
    const { cart, total, clearCart } = useCart();
    const { toast } = useToast();
    const [isProcessing, setIsProcessing] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        discordTag: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleCheckout = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.name || !formData.discordTag) {
            toast({
                title: "Missing information",
                description: "Please fill in all required fields.",
                variant: "destructive"
            });
            return;
        }

        setIsProcessing(true);

        try {
            const orderData = {
                email: formData.email,
                name: formData.name,
                discordTag: formData.discordTag,
                items: cart,
                total: total
            };

            await process2CheckoutPayment(orderData);

            toast({
                title: "Order placed successfully!",
                description: "You will be redirected to the payment page...",
            });

            clearCart();
            setTimeout(() => {
                onClose();
                setFormData({ email: '', name: '', discordTag: '' });
            }, 2000);

        } catch (error) {
            toast({
                title: "Payment processing error",
                description: error.message || "Unable to process payment. Please try again.",
                variant: "destructive"
            });
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-slate-900 rounded-xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
                    >
                        <div className="sticky top-0 bg-slate-900 p-6 border-b border-slate-800 flex items-center justify-between z-10">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <CreditCard className="w-6 h-6 text-amber-400" />
                                Checkout
                            </h2>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={onClose}
                                className="text-slate-400 hover:text-white hover:bg-slate-800"
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        <div className="p-6">
                            <div className="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-700">
                                <h3 className="text-white font-semibold mb-3">Order Summary</h3>
                                <div className="space-y-2">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex justify-between text-sm">
                                            <span className="text-slate-300">
                                                {item.name} x{item.quantity}
                                            </span>
                                            <span className="text-white font-medium">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    ))}
                                    <div className="pt-3 border-t border-slate-700 flex justify-between">
                                        <span className="text-white font-bold">Total</span>
                                        <span className="text-amber-400 font-bold text-xl">
                                            ${total.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleCheckout} className="space-y-4">
                                <div>
                                    <label className="block text-white font-medium mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Discord Tag *</label>
                                    <input
                                        type="text"
                                        name="discordTag"
                                        value={formData.discordTag}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                                        placeholder="username#1234"
                                        required
                                    />
                                    <p className="text-slate-400 text-sm mt-1">We'll contact you via Discord to coordinate the service</p>
                                </div>

                                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex items-start gap-3">
                                    <Lock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-amber-300 font-medium text-sm">Secure Payment via 2Checkout</p>
                                        <p className="text-amber-200/70 text-xs mt-1">Your payment information is encrypted and secure</p>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold text-lg py-6 h-auto disabled:opacity-50"
                                >
                                    {isProcessing ? (
                                        <>Processing...</>
                                    ) : (
                                        <>
                                            <Lock className="w-5 h-5 mr-2" />
                                            Complete Order - ${total.toFixed(2)}
                                        </>
                                    )}
                                </Button>

                                <p className="text-slate-400 text-xs text-center">
                                    By completing this purchase, you agree to our Terms of Service and Privacy Policy
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CheckoutDialog;