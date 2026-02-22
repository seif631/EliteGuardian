import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, CreditCard, ArrowLeft, Zap, Info, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

const PaymentPortal = ({ orderData, onConfirm, onCancel }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [completed, setCompleted] = useState(false);

    const handlePayment = async (e) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate bank authorization
        await new Promise(resolve => setTimeout(resolve, 3000));
        setCompleted(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        onConfirm();
    };

    return (
        <div className="fixed inset-0 z-[200] bg-[#f6f9fc] text-slate-900 font-sans flex items-center justify-center p-4 md:p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
            >
                {/* Left Side: Order Info */}
                <div className="bg-slate-50 p-8 md:p-12 border-r border-slate-200">
                    <div className="flex items-center gap-2 mb-12">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white fill-white" />
                        </div>
                        <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">Elite Guardian</span>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <span className="text-slate-400 text-sm font-medium">Amount to pay</span>
                            <div className="text-4xl font-bold text-slate-900 mt-1">${orderData.total.toFixed(2)}</div>
                        </div>

                        <div className="space-y-4">
                            {orderData.items.map((item, i) => (
                                <div key={i} className="flex justify-between items-center text-sm">
                                    <span className="text-slate-600 font-medium">{item.name} <span className="text-slate-400">× {item.quantity}</span></span>
                                    <span className="text-slate-900 font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-slate-200 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                                <Shield className="w-5 h-5 text-indigo-600" />
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed italic">
                                This transaction is protected by Stripe Relay and Elite Sentinel encryption.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onCancel}
                        className="mt-12 flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors text-sm font-bold"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to store
                    </button>
                </div>

                {/* Right Side: Payment Form */}
                <div className="p-8 md:p-12 bg-white">
                    <AnimatePresence mode="wait">
                        {!completed ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <h2 className="text-2xl font-bold mb-8">Secure Checkout</h2>

                                <form onSubmit={handlePayment} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Card information</label>
                                        <div className="relative">
                                            <input
                                                required
                                                placeholder="1234 5678 9101 1121"
                                                className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-mono"
                                            />
                                            <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <input required placeholder="MM / YY" className="h-12 px-4 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono" />
                                            <input required placeholder="CVC" className="h-12 px-4 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Cardholder name</label>
                                        <input required placeholder="Guardian Name" className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                    </div>

                                    <div className="p-4 bg-indigo-50 rounded-xl flex items-start gap-3">
                                        <Info className="w-5 h-5 text-indigo-600 mt-0.5" />
                                        <p className="text-[10px] text-indigo-700 font-medium leading-relaxed">
                                            By clicking "Authorize", you agree to our terms of service and acknowledge that this is a digital service fulfillment.
                                        </p>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isProcessing}
                                        className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2"
                                    >
                                        {isProcessing ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                Processing Security Layer...
                                            </>
                                        ) : (
                                            <>
                                                <Lock className="w-4 h-4" />
                                                Authorize ${orderData.total.toFixed(2)}
                                            </>
                                        )}
                                    </Button>
                                </form>

                                <div className="mt-8 flex items-center justify-center gap-6">
                                    <div className="flex items-center gap-1 opacity-40">
                                        <Shield className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase">PCI Compliant</span>
                                    </div>
                                    <div className="flex items-center gap-1 opacity-40">
                                        <Lock className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase">SSL Secured</span>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-20"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">Payment Authorized</h2>
                                <p className="text-slate-500 font-medium">Redirecting back to Elite Guardian...</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default PaymentPortal;
