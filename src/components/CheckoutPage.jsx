import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CreditCard, Lock, ShieldCheck, ArrowLeft,
    Sparkles, Trash2, ShoppingBag, Terminal,
    Zap, Gem, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { process2CheckoutPayment } from '@/lib/payment';
import { useToast } from '@/components/ui/use-toast';
import PaymentPortal from './PaymentPortal';

const CheckoutPage = () => {
    const { cart, total, clearCart, removeFromCart } = useCart();
    const { toast } = useToast();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isGatewayLoading, setIsGatewayLoading] = useState(false);
    const [isPortalOpen, setIsPortalOpen] = useState(false);
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        discordTag: '',
        bungieTag: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvc: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        if (cart.length === 0 && !isProcessing) {
            navigate('/');
        }
    }, [cart, navigate, isProcessing]);

    const handleInputChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleNextStep = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.discordTag) {
            toast({
                title: "Incomplete details",
                description: "Email and Discord tag are required to proceed.",
                variant: "destructive"
            });
            return;
        }

        setIsGatewayLoading(true);
        // "snappier" handshake for direct transition
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsGatewayLoading(false);
        setIsPortalOpen(true);
    };

    const handleFinalPurchase = async () => {
        setIsGatewayLoading(true);
        // Simulate "Opening Payment Page" feel
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsGatewayLoading(false);
        setIsPortalOpen(true);
    };

    const onPaymentComplete = async () => {
        setIsPortalOpen(false);
        setIsProcessing(true);
        try {
            const orderData = {
                ...formData,
                items: cart,
                total: total
            };

            await process2CheckoutPayment(orderData);

            clearCart();
            navigate('/success');
        } catch (error) {
            toast({
                title: "Gateway Error",
                description: "Internal connection failure. Please retry.",
                variant: "destructive"
            });
        } finally {
            setIsProcessing(false);
        }
    };

    if (cart.length === 0 && !isProcessing) return null;

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500/30">
            <AnimatePresence>
                {isPortalOpen && (
                    <PaymentPortal
                        orderData={{ items: cart, total: total }}
                        onConfirm={onPaymentComplete}
                        onCancel={() => setIsPortalOpen(false)}
                    />
                )}
                {isGatewayLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center p-6"
                    >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full" />
                        </div>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center space-y-8 relative z-10"
                        >
                            <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto relative">
                                <div className="absolute inset-0 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                                <Lock className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black uppercase tracking-tighter italic">Establishing Secure Handshake</h2>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mt-2">Connecting to Secure Stripe Nodes...</p>
                            </div>
                            <div className="flex gap-2 justify-center">
                                {[0, 1, 2].map(i => (
                                    <motion.div
                                        key={i}
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                        className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                                    />
                                ))}
                            </div>
                            <div className="max-w-xs mx-auto p-4 bg-white/5 border border-white/5 rounded-2xl">
                                <p className="text-[8px] font-mono text-slate-700 text-left line-clamp-3 leading-relaxed">
                                    [LOG] TLS 1.3 Handshake Initialized<br />
                                    [LOG] Certificate Verified: DigiCert Global G2<br />
                                    [LOG] Redirection Protocol: SECURE_STRIPE_OVERLAY
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header / Nav */}
            <div className="border-b border-white/5 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                            <Zap className="w-6 h-6 text-white fill-white" />
                        </div>
                        <span className="font-black tracking-tighter text-2xl uppercase italic">Elite Guardian</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">AES-256 Encrypted</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Side: Form */}
                    <div className="lg:col-span-7 space-y-12">
                        <header>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.8] mb-6">
                                Securing<br /><span className="text-indigo-500">Deployment</span>
                            </h1>
                            <div className="flex items-center gap-4">
                                <div className={`h-1 w-12 rounded-full transition-colors ${step >= 1 ? 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-white/10'}`} />
                                <div className={`h-1 w-12 rounded-full transition-colors ${step >= 2 ? 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-white/10'}`} />
                            </div>
                        </header>

                        <AnimatePresence mode="wait">
                            {step === 1 ? (
                                <motion.form
                                    key="step1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    onSubmit={handleNextStep}
                                    className="space-y-8"
                                >
                                    <div className="space-y-6 bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] glass-dark">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Sparkles className="w-5 h-5 text-indigo-400" />
                                            <h3 className="font-black uppercase tracking-[0.2em] text-xs text-indigo-400">Guardian Identity</h3>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                                                <input
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Commander Zavala"
                                                    className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-700"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Email Address *</label>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="vanguard@lastcity.com"
                                                    className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-700"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Discord Tag *</label>
                                                <input
                                                    required
                                                    name="discordTag"
                                                    value={formData.discordTag}
                                                    onChange={handleInputChange}
                                                    placeholder="username#0000"
                                                    className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-700"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Bungie ID (Optional)</label>
                                                <input
                                                    name="bungieTag"
                                                    value={formData.bungieTag}
                                                    onChange={handleInputChange}
                                                    placeholder="Guardian#1234"
                                                    className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-700"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full h-20 bg-indigo-500 text-white hover:bg-indigo-600 font-black uppercase tracking-widest text-sm rounded-[2rem] shadow-[0_20px_40px_rgba(99,102,241,0.2)] group">
                                        COMPLETE ORDER & PAY
                                        <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.form>
                            ) : (
                                <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-6">
                                    <ShieldCheck className="w-16 h-16 text-indigo-400 opacity-20" />
                                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Awaiting Authorization...</p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Side: Order Summary */}
                    <div className="lg:col-span-5 sticky top-32">
                        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 glass space-y-8 relative overflow-hidden">
                            {/* Decorative background logo */}
                            <Zap className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 -rotate-12 pointer-events-none" />

                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-black uppercase tracking-tighter">Summary</h2>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                                    {cart.length} Ops Queued
                                </span>
                            </div>

                            <div className="space-y-6 relative z-10">
                                {cart.map(item => (
                                    <div key={item.id} className="group flex gap-5 items-start">
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 border border-white/5 flex-shrink-0 relative">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-black text-sm uppercase leading-tight">{item.name}</h4>
                                                <button onClick={() => removeFromCart(item.id)} className="text-slate-600 hover:text-red-400 transition-colors p-1">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-indigo-400 font-black text-sm">${item.price}</span>
                                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">x{item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-8 border-t border-white/5">
                                <div className="flex justify-between text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                                    <span>Subtotal</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                                    <span>Processing Fee</span>
                                    <span className="text-emerald-400">FREE</span>
                                </div>
                                <div className="flex justify-between items-end pt-4">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Net Exposure</span>
                                        <span className="text-4xl font-black text-white tracking-tighter">${total.toFixed(2)}</span>
                                    </div>
                                    <Gem className="w-8 h-8 text-amber-400 fill-amber-400/20" />
                                </div>
                            </div>

                            <div className="bg-indigo-500/5 rounded-2xl p-4 flex items-start gap-3">
                                <Terminal className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                                <p className="text-[10px] text-indigo-300/60 leading-relaxed font-bold uppercase tracking-widest">
                                    Log: Encryption keys established. Secure tunnel ready for handshake. Awaiting authorized signature.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
