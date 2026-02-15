import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { servicesData } from '@/data/services';
import { Search, Sparkles } from 'lucide-react';

const Services = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', ...new Set(servicesData.map(service => service.category))];

    const filteredServices = servicesData.filter(service => {
        const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
        const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="services" className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Design accents */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent opacity-50" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-indigo-400" />
                            <span className="text-indigo-400 font-black text-xs tracking-[.3em] uppercase">Elite Arsenal</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                            THE VAULT
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed">
                            A curated selection of the galaxy's most coveted achievements. Filter by discipline or search for your specific target.
                        </p>
                    </div>

                    <div className="relative group w-full md:w-80">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-500 group-focus-within:text-white transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search the vault..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-bold"
                        />
                    </div>
                </motion.div>

                {/* Category Filter */}
                <div className="mb-16">
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`
                                    px-8 py-4 rounded-2xl text-xs font-black tracking-widest uppercase transition-all duration-300 border
                                    ${activeCategory === category
                                        ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.1)] scale-105'
                                        : 'bg-white/5 text-slate-500 border-white/5 hover:border-white/20 hover:text-white hover:bg-white/10'}
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredServices.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-40 border-2 border-dashed border-white/5 rounded-[3rem]"
                    >
                        <p className="text-slate-600 text-2xl font-black italic uppercase tracking-tighter">Negative scan results in the vault.</p>
                        <button
                            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                            className="mt-6 text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
                        >
                            Reset all filters
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Services;
