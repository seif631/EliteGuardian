import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Zap, ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/service/${service.id}`);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full cursor-pointer"
            onClick={handleViewDetails}
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    alt={service.imageDescription || service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={service.image || "https://horizons-cdn.hostinger.com/8c4147fa-212b-4ef7-bb02-69f44b4a9de7/c1ebea8a4109a222fdbd806c591c2910.png"} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                {service.popular && (
                    <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded flex items-center gap-1 shadow-lg">
                        <Zap className="w-3 h-3 fill-current" />
                        Best Seller
                    </div>
                )}

                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded border border-slate-700">
                    {service.category}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-indigo-400 transition-colors">{service.name}</h3>
                </div>

                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center text-yellow-400">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="text-xs font-bold ml-1 text-slate-200">{service.rating}</span>
                    </div>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-slate-500 text-xs">{service.reviews} reviews</span>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-slate-500 text-xs">{service.duration}</span>
                </div>

                <p className="text-slate-400 text-xs mb-4 line-clamp-2 leading-relaxed">{service.description}</p>

                <div className="space-y-1.5 mb-5 flex-grow">
                    {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                            <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                            {feature}
                        </div>
                    ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                        <span className="text-slate-400 text-xs">Starting at</span>
                        <div className="text-xl font-bold text-white">${service.price}</div>
                    </div>
                    <Button
                        size="sm"
                        onClick={handleViewDetails}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/20"
                    >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;