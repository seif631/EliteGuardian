import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageSquare, Rocket, Trophy } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: ShoppingCart,
            title: 'Choose Service',
            description: 'Browse our catalog and select the boosting service you need'
        },
        {
            icon: MessageSquare,
            title: 'Place Order',
            description: 'Complete checkout and we\'ll contact you via Discord'
        },
        {
            icon: Rocket,
            title: 'We Boost',
            description: 'Our expert players complete your order safely and efficiently'
        },
        {
            icon: Trophy,
            title: 'Enjoy Rewards',
            description: 'Receive your completed service and enjoy your new gear!'
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        How It <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Works</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Getting started is quick and easy - follow these simple steps
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative text-center"
                            >
                                <div className="relative inline-block mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 border-2 border-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-slate-400">{step.description}</p>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-500/50 to-transparent -z-10" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;