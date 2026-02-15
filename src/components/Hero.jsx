import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Star, Zap, ChevronDown } from 'lucide-react';

const Hero = () => {
    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-indigo-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.25, 0.1],
                        rotate: [0, -90, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-500/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10 backdrop-blur-md shadow-2xl"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            <span className="text-indigo-200 text-xs font-bold tracking-[0.2em] uppercase">Authorized Elite Services</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                            ELITE<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">GUARDIAN</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
                            The galaxy's most prestigious boosting collective. Secure your legacy with <span className="text-white font-medium underline decoration-indigo-500 underline-offset-8">unmatched protection</span> and lightning-fast execution.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
                            <Button
                                size="lg"
                                onClick={scrollToServices}
                                className="bg-white text-black hover:bg-indigo-50 text-xl font-black px-12 py-8 h-auto group rounded-full shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-500 hover:scale-105 active:scale-95"
                            >
                                Browse Services
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 text-xl font-bold px-12 py-8 h-auto rounded-full transition-all duration-300"
                                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Learn More
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                { icon: Zap, color: 'text-yellow-400', label: 'Priority Launch', desc: 'Starts in 15min' },
                                { icon: Shield, color: 'text-indigo-400', label: 'Nexus Security', desc: 'VPN & Encrypted' },
                                { icon: Star, color: 'text-pink-400', label: 'Ascendant Tier', desc: 'Top 0.1% Players' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (idx * 0.1) }}
                                    className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 group"
                                >
                                    <item.icon className={`w-10 h-10 ${item.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-500`} />
                                    <h3 className="text-white font-black text-xl mb-2">{item.label}</h3>
                                    <p className="text-slate-500 font-medium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 cursor-pointer hover:text-white/60 transition-colors"
                onClick={scrollToServices}
            >
                <ChevronDown className="w-10 h-10" />
            </motion.div>
        </section>
    );
};

export default Hero;