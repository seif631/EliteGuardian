import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Star, Check, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { useToast } from './ui/use-toast';
import { servicesData } from '../data/services';
import { getAvailableVariants, calculatePrice, getDefaultVariants } from '../data/serviceVariants';

const ServiceDetailPage = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { toast } = useToast();

    const service = servicesData.find(s => s.id === serviceId);
    const [selectedVariants, setSelectedVariants] = useState({});
    const [finalPrice, setFinalPrice] = useState(0);

    useEffect(() => {
        if (service) {
            const defaults = getDefaultVariants(service.id);
            setSelectedVariants(defaults);
            setFinalPrice(service.price);
        }
    }, [service]);

    useEffect(() => {
        if (service) {
            const price = calculatePrice(service.price, selectedVariants, service.id);
            setFinalPrice(price);
        }
    }, [selectedVariants, service]);

    if (!service) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Service not found</h2>
                    <Button onClick={() => navigate('/')}>
                        Return to Home
                    </Button>
                </div>
            </div>
        );
    }

    const availableVariants = getAvailableVariants(service.id);

    const handleVariantChange = (variantKey, optionId) => {
        setSelectedVariants(prev => ({
            ...prev,
            [variantKey]: optionId
        }));
    };

    const generateVariantDescription = () => {
        const descriptions = [];
        Object.entries(selectedVariants).forEach(([variantKey, optionId]) => {
            const variantType = availableVariants.find(v => v.key === variantKey);
            if (variantType) {
                const option = variantType.options.find(opt => opt.id === optionId);
                if (option) {
                    descriptions.push(option.label);
                }
            }
        });
        return descriptions.join(', ');
    };

    const handleAddToCart = () => {
        const serviceWithVariants = {
            ...service,
            selectedVariants,
            finalPrice: finalPrice,
            price: finalPrice,
            variantDescription: generateVariantDescription()
        };

        addToCart(serviceWithVariants);
        toast({
            title: "Added to cart!",
            description: `${service.name} has been added to your cart.`,
        });
    };

    return (
        <div className="min-h-screen bg-slate-950 font-sans">
            {/* Background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/5">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/')}
                        className="text-slate-400 hover:text-white hover:bg-white/5 rounded-full"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Vault
                    </Button>
                    <div className="text-white font-black tracking-widest uppercase text-xs">Elite Configuration</div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Image & Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                            <img
                                src={service.image || 'https://skycoach.gg/storage/uploads/products/salvations-edge-raid1718616296_picture_item_small.png'}
                                alt={service.imageDescription || service.name}
                                onError={(e) => {
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
                                    e.target.src = categoryImages[service.category] || categoryImages['default'];
                                }}
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                            <div className="absolute bottom-10 left-10">
                                <span className="bg-indigo-600 text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest mb-4 inline-block">
                                    {service.category}
                                </span>
                                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
                                    {service.name}
                                </h1>
                            </div>
                        </div>

                        <div className="glass rounded-[2.5rem] p-10 space-y-8 border-white/10">
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    <span className="text-white font-black text-xl">{service.rating}</span>
                                    <span className="text-slate-500 text-sm font-bold">({service.reviews} verified)</span>
                                </div>
                                <div className="h-4 w-px bg-white/10 hidden md:block" />
                                <div className="flex items-center gap-2 text-slate-300">
                                    <Check className="w-5 h-5 text-green-500" />
                                    <span className="text-sm font-bold uppercase tracking-widest">{service.duration} Delivery</span>
                                </div>
                            </div>

                            <p className="text-lg text-slate-400 font-medium leading-relaxed">
                                {service.description}
                            </p>

                            <div className="pt-8 border-t border-white/5">
                                <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Service Protocol:</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-slate-400 group">
                                            <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center mt-0.5 group-hover:bg-indigo-500/20 transition-colors">
                                                <Check className="w-3 h-3 text-indigo-400" />
                                            </div>
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Variants & Cart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:sticky lg:top-32"
                    >
                        <div className="glass-dark rounded-[3rem] p-10 border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase border-b border-white/5 pb-6">Personalize</h2>

                            <div className="space-y-8 mb-10 max-h-[500px] overflow-y-auto pr-2 scrollbar-hide">
                                {availableVariants.length === 0 ? (
                                    <div className="text-center py-12 glass rounded-3xl">
                                        <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Fixed Protocol Service</p>
                                        <p className="text-slate-500 text-sm mt-2">No additional variants required.</p>
                                    </div>
                                ) : (
                                    availableVariants.map((variant) => {
                                        let shouldShow = true;
                                        const rollType = selectedVariants['rollType'] || selectedVariants['difficulty'];

                                        if (variant.key === 'guaranteedPerk') shouldShow = rollType === 'guaranteed-perk';
                                        if (variant.key === 'godRollChoice') shouldShow = rollType === 'god-roll';
                                        if (variant.key === 'deepsightRolls') shouldShow = rollType === 'pattern';

                                        if (!shouldShow) return null;

                                        return (
                                            <div key={variant.key} className="space-y-4">
                                                <h3 className="text-slate-500 font-black text-[10px] tracking-[0.3em] uppercase">{variant.label}</h3>
                                                <div className="grid gap-3">
                                                    {variant.options.map((option) => {
                                                        const isSelected = selectedVariants[variant.key] === option.id;
                                                        return (
                                                            <button
                                                                key={option.id}
                                                                onClick={() => handleVariantChange(variant.key, option.id)}
                                                                className={`
                                                                    p-5 rounded-2xl border transition-all duration-300 text-left relative group
                                                                    ${isSelected
                                                                        ? 'bg-white border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                                                                        : 'bg-white/5 border-white/10 hover:border-white/20'}
                                                                `}
                                                            >
                                                                <div className="flex items-center justify-between">
                                                                    <div>
                                                                        <div className={`font-black uppercase tracking-tight ${isSelected ? 'text-black' : 'text-white'}`}>
                                                                            {option.label}
                                                                        </div>
                                                                        {option.description && (
                                                                            <div className={`text-xs mt-1 font-medium ${isSelected ? 'text-slate-600' : 'text-slate-500'}`}>
                                                                                {option.description}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <div className={`font-black text-sm ${isSelected ? 'text-black' : 'text-indigo-400'}`}>
                                                                        {option.priceAdd ? `+$${option.priceAdd.toFixed(2)}` :
                                                                            option.multiplier && option.multiplier !== 1 ? `x${option.multiplier}` : ''}
                                                                    </div>
                                                                </div>
                                                                {isSelected && (
                                                                    <motion.div layoutId="active" className="absolute inset-0 bg-white rounded-2xl -z-10" />
                                                                )}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex flex-col">
                                        <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Authorized Quote</span>
                                        <span className="text-4xl font-black text-white tracking-tighter">
                                            ${finalPrice.toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-indigo-400 fill-indigo-400" />
                                    </div>
                                </div>

                                <Button
                                    onClick={handleAddToCart}
                                    className="w-full bg-white text-black hover:bg-slate-100 h-16 text-xl font-black tracking-tight rounded-2xl transition-transform active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                                >
                                    <ShoppingCart className="w-6 h-6 mr-3 border-none" />
                                    Confirm Configuration
                                </Button>

                                <p className="mt-6 text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                                    Encrypted Checkout • 100% Satisfaction Guarantee
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
