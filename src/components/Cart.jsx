import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, total, isCartOpen, setIsCartOpen } = useCart();
    const navigate = useNavigate();

    const handleCheckoutRedirect = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                        onClick={() => setIsCartOpen(false)}
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-slate-900 shadow-2xl z-[101] flex flex-col"
                    >
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-black tracking-tighter uppercase italic">
                                <ShoppingBag className="w-6 h-6 text-indigo-400" />
                                Cart
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

                        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                            {cart.length === 0 ? (
                                <div className="text-center py-20">
                                    <ShoppingBag className="w-20 h-20 text-slate-800 mx-auto mb-6" />
                                    <p className="text-slate-400 text-xl font-black uppercase tracking-tighter">Your cart is empty</p>
                                    <p className="text-slate-600 text-sm mt-2 font-medium">Add some elite services to proceed.</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {cart.map((item) => (
                                        <motion.div
                                            key={item.key || item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            className="bg-white/5 rounded-3xl p-4 border border-white/5 group transition-colors hover:bg-white/10"
                                        >
                                            <div className="flex gap-4">
                                                <div className="w-20 h-20 bg-slate-800 rounded-2xl overflow-hidden flex-shrink-0 border border-white/5 relative">
                                                    <img
                                                        alt={item.name}
                                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                                        src={item.image} />
                                                </div>
                                                <div className="flex-1 min-w-0 flex flex-col justify-between">
                                                    <div>
                                                        <h3 className="text-white font-black text-xs uppercase tracking-tight truncate mb-1">{item.name}</h3>
                                                        <p className="text-indigo-400 font-black text-sm">${item.price}</p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex items-center bg-black/40 rounded-xl p-1 border border-white/5">
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-8 w-8 text-slate-400 hover:text-white"
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            >
                                                                <Minus className="w-3 h-3 text-white" />
                                                            </Button>
                                                            <span className="text-white font-black text-xs w-6 text-center">{item.quantity}</span>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-8 w-8 text-slate-400 hover:text-white"
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            >
                                                                <Plus className="w-3 h-3 text-white" />
                                                            </Button>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8 ml-auto text-slate-600 hover:text-red-400 hover:bg-red-400/10 rounded-xl"
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
                            <div className="p-8 border-t border-white/5 bg-slate-900/95 backdrop-blur-xl">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex flex-col">
                                        <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Total Valuation</span>
                                        <span className="text-3xl font-black text-white tracking-tighter">${total.toFixed(2)}</span>
                                    </div>
                                    <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center border border-indigo-500/20">
                                        <ShoppingBag className="w-6 h-6 text-indigo-400" />
                                    </div>
                                </div>
                                <Button
                                    onClick={handleCheckoutRedirect}
                                    className="w-full bg-white text-black hover:bg-slate-100 h-16 text-lg font-black tracking-widest uppercase rounded-[2rem] shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-transform active:scale-95"
                                >
                                    Proceed to Checkout
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Cart;