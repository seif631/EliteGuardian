import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { servicesData } from '@/data/services';

const Services = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Extract unique categories from base services only
    const categories = ['All', ...new Set(servicesData.map(service => service.category))];

    // Filter base services only (no variants)
    const filteredServices = activeCategory === 'All'
        ? servicesData
        : servicesData.filter(service => service.category === activeCategory);

    return (
        <section id="services" className="py-20 bg-slate-950 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-900/50 to-transparent" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        SERVICE <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">CATALOG</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Choose from our extensive range of <span className="text-indigo-400 font-bold">{servicesData.length}+</span> professional services. Click any service to customize your order.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <div className="mb-10 overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex justify-center min-w-max px-4 space-x-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`
                  px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border
                  ${activeCategory === category
                                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/25 scale-105'
                                        : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white hover:bg-slate-800'}
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Services Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredServices.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">No services found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services;