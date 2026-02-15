import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Star, Zap } from 'lucide-react';

const Hero = () => {
    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />

            <div className="absolute inset-0 opacity-20">
                <img
                    alt="Destiny 2 The Final Shape landscape"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1624729930209-d28351f1c0c8" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950/0 to-slate-950/0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                            <Shield className="w-4 h-4 text-indigo-400" />
                            <span className="text-indigo-200 text-sm font-medium tracking-wide">THE #1 BOOSTING PLATFORM</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
                            BECOME AN
                            <br />
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent filter drop-shadow-2xl">ELITE GUARDIAN</span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Unlock the full potential of your guardian. From <strong className="text-indigo-400">Salvation's Edge</strong> to <strong className="text-purple-400">Trials Flawless</strong>, we provide the safest and fastest boosting services in the galaxy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Button
                                size="lg"
                                onClick={scrollToServices}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg px-10 py-7 h-auto group rounded-xl shadow-lg shadow-indigo-500/25"
                            >
                                Browse Catalog
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-white hover:bg-slate-800 hover:border-slate-600 font-bold text-lg px-10 py-7 h-auto rounded-xl"
                                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                How It Works
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6"
                            >
                                <Zap className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
                                <h3 className="text-white font-bold mb-1">Lightning Fast</h3>
                                <p className="text-slate-400 text-sm">Starts within 15 minutes</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6"
                            >
                                <Shield className="w-8 h-8 text-indigo-400 mb-3 mx-auto" />
                                <h3 className="text-white font-bold mb-1">100% Secure</h3>
                                <p className="text-slate-400 text-sm">VPN protected, no bots</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6"
                            >
                                <Star className="w-8 h-8 text-pink-400 mb-3 mx-auto" />
                                <h3 className="text-white font-bold mb-1">Best Prices</h3>
                                <p className="text-slate-400 text-sm">Price match guarantee</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;