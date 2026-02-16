import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Zap, Shield, Flame } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { setIsCartOpen, addToCart } = useCart();
    const navigate = useNavigate();

    const categoryImages = {
        'Raids': 'https://skycoach.gg/storage/uploads/products/salvations-edge-raid1718616296_picture_item_small.png',
        'Trials': 'https://skycoach.gg/storage/uploads/products/rufus-fury1678547593_picture_item_small.png',
        'Dungeons': 'https://skycoach.gg/storage/uploads/products/ice-breaker1728980735_picture_item_small.png',
        'PvP': 'https://skycoach.gg/storage/uploads/products/rufus-fury1678547593_picture_item_small.png',
        'PvE': 'https://skycoach.gg/storage/uploads/products/vex-mythoclast1644240176_picture_item_small.png',
        'Exotics': 'https://skycoach.gg/storage/uploads/products/salvations-edge-raid1718616296_picture_item_small.png',
        'Crucible': 'https://skycoach.gg/storage/uploads/products/rufus-fury1678547593_picture_item_small.png',
        'Titles': 'https://skycoach.gg/storage/uploads/products/ice-breaker1728980735_picture_item_small.png',
        'Bundles': 'https://skycoach.gg/storage/uploads/products/salvations-edge-raid1718616296_picture_item_small.png',
        'Power': 'https://skycoach.gg/storage/uploads/products/salvations-edge-raid1718616296_picture_item_small.png',
        'Vanguard': 'https://skycoach.gg/storage/uploads/products/vex-mythoclast1644240176_picture_item_small.png',
        'Gambit': 'https://skycoach.gg/storage/uploads/products/touch-of-malice1661529282_picture_item_small.png',
        'Seasonal': 'https://skycoach.gg/storage/uploads/products/salvations-edge-raid1718616296_picture_item_small.png',
        'Coaching': 'https://skycoach.gg/storage/uploads/products/rufus-fury1678547593_picture_item_small.png',
        'Account': 'https://skycoach.gg/storage/uploads/products/salvations-edge-raid1718616296_picture_item_small.png',
        'Collections': 'https://skycoach.gg/storage/uploads/products/vex-mythoclast1644240176_picture_item_small.png',
        'Quests': 'https://skycoach.gg/storage/uploads/products/ice-breaker1728980735_picture_item_small.png',
        'Catalysts': 'https://skycoach.gg/storage/uploads/products/vex-mythoclast1644240176_picture_item_small.png',
        'Triumphs': 'https://skycoach.gg/storage/uploads/products/salvations-edge-raid1718616296_picture_item_small.png',
        'default': 'https://skycoach.gg/storage/uploads/products/salvations-edge-raid1718616296_picture_item_small.png'
    };

    const displayImage = service.image || categoryImages[service.category] || categoryImages['default'];

    const handleSelect = (e) => {
        e.stopPropagation();
        addToCart(service);
    };

    const handleCardClick = () => {
        navigate(`/service/${service.id}`);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -10 }}
            onClick={handleCardClick}
            className="group relative flex flex-col h-full rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden backdrop-blur-md hover:bg-white/10 transition-all duration-500 shadow-3xl cursor-pointer"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={displayImage}
                    alt={service.name}
                    onError={(e) => {
                        e.target.src = categoryImages[service.category] || categoryImages['default'];
                    }}
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
