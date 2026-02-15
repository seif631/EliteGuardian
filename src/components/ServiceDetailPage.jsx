import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Star, Check } from 'lucide-react';
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
        <div className="min-h-screen bg-slate-950">
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
                <div className="container mx-auto px-4 py-4">
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/')}
                        className="text-slate-400 hover:text-white"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Services
                    </Button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Image & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src={service.image || "https://horizons-cdn.hostinger.com/8c4147fa-212b-4ef7-bb02-69f44b4a9de7/c1ebea8a4109a222fdbd806c591c2910.png"}
                                alt={service.imageDescription || service.name}
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h1 className="text-3xl font-black text-white">{service.name}</h1>
                                <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-lg font-bold">
                                    {service.category}
                                </span>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center text-yellow-400">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="text-sm font-bold ml-1 text-slate-200">{service.rating}</span>
                                </div>
                                <span className="text-slate-600">•</span>
                                <span className="text-slate-400 text-sm">{service.reviews} reviews</span>
                                <span className="text-slate-600">•</span>
                                <span className="text-slate-400 text-sm">{service.duration}</span>
                            </div>

                            <p className="text-slate-400 mb-6">
                                {service.description}
                            </p>

                            <div className="space-y-2">
                                <h3 className="text-white font-bold mb-3">What's Included:</h3>
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-slate-300">
                                        <Check className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Variants & Cart */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sticky top-24">
                            <h2 className="text-2xl font-bold text-white mb-6">Customize Your Service</h2>

                            {availableVariants.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-slate-400">No customization options available for this service.</p>
                                    <p className="text-slate-500 text-sm mt-2">This is a fixed-price service.</p>
                                </div>
                            ) : (
                                <>
                                    {availableVariants.map((variant) => {
                                        let shouldShow = true;

                                        // --- SKYCOACH STYLE PERK SELECTION LOGIC ---
                                        const rollType = selectedVariants['rollType'] || selectedVariants['difficulty'];

                                        // Logic 1: 'guaranteedPerk' dropdown only shows if 'guaranteed-perk' is selected (by ID)
                                        if (variant.key === 'guaranteedPerk') {
                                            shouldShow = rollType === 'guaranteed-perk';
                                        }

                                        // Logic 2: 'godRollChoice' radio/dropdown only shows if 'god-roll' is selected (by ID)
                                        if (variant.key === 'godRollChoice') {
                                            shouldShow = rollType === 'god-roll';
                                        }

                                        // Logic 3: 'deepsightRolls' only shows if 'pattern' is selected (for Nullify/Imminence)
                                        if (variant.key === 'deepsightRolls') {
                                            shouldShow = rollType === 'pattern';
                                        }

                                        if (!shouldShow) return null;

                                        return (
                                            <div key={variant.key} className="mb-6">
                                                <h3 className="text-white font-semibold mb-3">{variant.label}</h3>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {variant.options.map((option) => {
                                                        const isSelected = selectedVariants[variant.key] === option.id;
                                                        return (
                                                            <button
                                                                key={option.id}
                                                                onClick={() => handleVariantChange(variant.key, option.id)}
                                                                className={`
                                  p-4 rounded-lg border-2 transition-all duration-200 text-left
                                  ${isSelected
                                                                        ? 'border-indigo-500 bg-indigo-500/10'
                                                                        : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'}
                                `}
                                                            >
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex-1">
                                                                        <div className="text-white font-medium">{option.label}</div>
                                                                        {option.description && (
                                                                            <div className="text-slate-400 text-sm mt-1">{option.description}</div>
                                                                        )}
                                                                    </div>
                                                                    <div className="text-slate-300 font-bold ml-4">
                                                                        {option.priceAdd ? `+$${option.priceAdd.toFixed(2)}` :
                                                                            option.multiplier && option.multiplier !== 1 ? `x${option.multiplier}` : ''}
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </>
                            )}

                            {/* Price Calculation */}
                            <div className="mt-8 pt-6 border-t border-slate-800">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-slate-400">Total Price</span>
                                    <span className="text-3xl font-black text-white">
                                        ${finalPrice.toFixed(2)}
                                    </span>
                                </div>

                                <div className="flex gap-4">
                                    <Button
                                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 h-14 text-lg font-bold"
                                        onClick={handleAddToCart}
                                    >
                                        <ShoppingCart className="w-5 h-5 mr-2" />
                                        Add to Cart
                                    </Button>
                                </div>

                                <div className="mt-4 text-center">
                                    <p className="text-xs text-slate-500">
                                        *Guaranteed safe and secure service
                                    </p>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
