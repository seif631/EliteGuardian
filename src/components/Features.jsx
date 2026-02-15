import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Headphones, Award, Lock, Users } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Shield,
            title: 'Account Safety',
            description: 'We use VPN and never use any cheats or exploits to ensure your account stays safe'
        },
        {
            icon: Clock,
            title: 'Fast Completion',
            description: 'Most orders completed within 24-48 hours with professional boosters'
        },
        {
            icon: Headphones,
            title: '24/7 Support',
            description: 'Round-the-clock customer support via Discord and email'
        },
        {
            icon: Award,
            title: 'Top Players',
            description: 'All our boosters are in the top 1% of Destiny 2 players'
        },
        {
            icon: Lock,
            title: 'Secure Payment',
            description: 'Safe and encrypted payment processing via 2Checkout'
        },
        {
            icon: Users,
            title: 'Trusted Service',
            description: 'Over 10,000 satisfied customers and 5-star reviews'
        }
    ];

    return (
        <section id="features" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Why Choose <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Us?</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        We're committed to providing the best boosting experience in Destiny 2
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-slate-800 border border-slate-700 rounded-xl p-6 group hover:border-amber-500/50 transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;