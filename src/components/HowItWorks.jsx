import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageSquare, Rocket, Trophy, ShieldCheck, Cpu, Target, Headphones } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Target,
            title: 'Designation',
            subtitle: 'Select your target from the vault. Customize every detail of your ascent.'
        },
        {
            icon: Cpu,
            title: 'Encryption',
            subtitle: 'Secure your order through our military-grade checkout system.'
        },
        {
            icon: ShieldCheck,
            title: 'Protection',
            subtitle: 'Our top-0.1% operatives begin execution with VPN protocols active.'
        },
        {
            icon: Trophy,
            title: 'Dominance',
            subtitle: 'Retrieve your rewards and dominate the battlefield with your new gear.'
        }
    ];

    return (
        <section id="how-it-works" className="py-32 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
                        <span className="text-indigo-400 font-bold text-xs tracking-widest uppercase">The Protocol</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                        THE PROCESS
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                        A seamless, secure, and professional journey from selection to conquest.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="mb-8 relative">
                                    <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-2xl">
                                        <Icon className="w-10 h-10 text-white group-hover:text-black transition-colors duration-500" />
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-white font-black text-xs">
                                        0{index + 1}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-indigo-300 transition-colors uppercase tracking-tight">{step.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{step.subtitle}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;