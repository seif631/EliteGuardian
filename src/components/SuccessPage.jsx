import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, MessageSquare, ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const orderNumber = `EG-${Math.floor(100000 + Math.random() * 900000)}`;

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 text-center relative z-10"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                    className="w-24 h-24 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(99,102,241,0.4)]"
                >
                    <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl font-black text-white mb-4 tracking-tighter"
                >
                    PURCHASE VERIFIED
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-400 text-lg font-medium mb-12"
                >
                    Order <span className="text-white font-bold">{orderNumber}</span> has been successfully processed.
                    Our Elite guardians are being dispatched to your account.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white/5 rounded-3xl p-6 border border-white/5 text-left"
                    >
                        <ShieldCheck className="w-8 h-8 text-indigo-400 mb-3" />
                        <h3 className="text-white font-black text-sm uppercase tracking-widest mb-1">Status</h3>
                        <p className="text-slate-400 text-sm font-medium">Payment secured & order queued for immediate start.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-white/5 rounded-3xl p-6 border border-white/5 text-left"
                    >
                        <MessageSquare className="w-8 h-8 text-indigo-400 mb-3" />
                        <h3 className="text-white font-black text-sm uppercase tracking-widest mb-1">Next Step</h3>
                        <p className="text-slate-400 text-sm font-medium">Check your Discord for a DM from our coordinator within 10 mins.</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link to="/">
                        <Button className="w-full sm:w-auto h-14 px-8 bg-white text-black hover:bg-slate-100 font-black uppercase tracking-widest text-xs rounded-2xl">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Return Home
                        </Button>
                    </Link>
                    <Button variant="outline" className="h-14 px-8 border-white/10 text-white hover:bg-white/5 font-black uppercase tracking-widest text-xs rounded-2xl">
                        <Download className="w-4 h-4 mr-2" />
                        Order Receipt
                    </Button>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 text-slate-600 font-bold uppercase tracking-[0.3em] text-[10px]"
            >
                Elite Guardian Security Systems • Active
            </motion.div>
        </div>
    );
};

export default SuccessPage;
