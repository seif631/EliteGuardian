import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import CheckoutDialog from './CheckoutDialog';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, total, isCartOpen, setIsCartOpen } = useCart();
    const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);

    return (
        <>
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setIsCartOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full max-w-md bg-slate-900 shadow-2xl z-50 flex flex-col"
                        >
                            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                    <ShoppingBag className="w-6 h-6 text-amber-400" />
                                    Your Cart
                                </h2>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsCartOpen(false)}
                                    className="text-slate-400 hover:text-white hover:bg-slate-800"
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6">
                                {cart.length === 0 ? (
                                    <div className="text-center py-12">
                                        <ShoppingBag className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                                        <p className="text-slate-400 text-lg">Your cart is empty</p>
                                        <p className="text-slate-500 text-sm mt-2">Add some boosting services to get started!</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {cart.map((item) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                className="bg-slate-800 rounded-lg p-4 border border-slate-700"
                                            >
                                                <div className="flex gap-4">
                                                    <div className="w-20 h-20 bg-slate-700 rounded-lg overflow-hidden flex-shrink-0">
                                                        <img
                                                            alt={item.name}
                                                            className="w-full h-full object-cover"
                                                            src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-white font-semibold mb-1 truncate">{item.name}</h3>
                                                        <p className="text-amber-400 font-bold text-lg">${item.price}</p>
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="h-8 w-8 border-slate-600 hover:bg-slate-700"
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            >
                                                                <Minus className="w-3 h-3 text-white" />
                                                            </Button>
                                                            <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="h-8 w-8 border-slate-600 hover:bg-slate-700"
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            >
                                                                <Plus className="w-3 h-3 text-white" />
                                                            </Button>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-8 w-8 ml-auto text-red-400 hover:text-red-300 hover:bg-red-950/30"
                                                                onClick={() => removeFromCart(item.id)}
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {cart.length > 0 && (
                                <div className="p-6 border-t border-slate-800 bg-slate-900/95">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-slate-400 text-lg">Total</span>
                                        <span className="text-white font-bold text-2xl">${total.toFixed(2)}</span>
                                    </div>
                                    <Button
                                        onClick={() => {
                                            setIsCartOpen(false);
                                            setIsCheckoutOpen(true);
                                        }}
                                        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold text-lg py-6 h-auto"
                                    >
                                        Proceed to Checkout
                                    </Button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <CheckoutDialog isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
        </>
    );
};

export default Cart;