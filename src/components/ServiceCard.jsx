import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, ArrowRight, Zap, Shield, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const ServiceCard = ({ service }) => {
    const { setIsCartOpen, setSelectedService } = useCart();

    const handleSelect = () => {
        setSelectedService(service);
        setIsCartOpen(true);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col h-full rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden backdrop-blur-md hover:bg-white/10 transition-all duration-500 shadow-3xl"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {service.popular && (
                        <div className="px-3 py-1 bg-white text-black text-[10px] font-black uppercase rounded-full tracking-widest flex items-center gap-1 shadow-lg">
                            <Flame className="w-3 h-3 fill-black" />
                            Popular
                        </div>
                    )}
                    {(service.id && service.id.includes('raid')) && (
                        <div className="px-3 py-1 bg-indigo-500 text-white text-[10px] font-black uppercase rounded-full tracking-widest flex items-center gap-1 shadow-lg">
                            <Shield className="w-3 h-3 fill-white" />
                            Elite Raid
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow relative">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-white leading-tight group-hover:text-indigo-300 transition-colors duration-300">
                        {service.name}
                    </h3>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-yellow-400 text-xs font-black">{service.rating || '5.0'}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-bold">{service.duration || '1-2 hours'}</span>
                    </div>
                </div>

                <p className="text-slate-400 text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
                    {service.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex flex-col">
                        <span className="text-white font-black text-3xl">
                            ${service.price}
                        </span>
                        <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">Base Payout</span>
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={handleSelect}
                        className="w-14 h-14 bg-white hover:bg-indigo-50 text-black rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:rotate-12"
                    >
                        <Zap className="w-6 h-6 fill-black" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
