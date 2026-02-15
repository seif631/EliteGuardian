import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import Cart from '@/components/Cart';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { itemCount, setIsCartOpen } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                    }`}
            >
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => scrollToSection('hero')}
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-indigo-500/20">
                                <Shield className="w-6 h-6" />
                            </div>
                            <span className="text-white font-bold text-xl hidden sm:block tracking-wide">ELITE GUARDIAN</span>
                        </motion.div>

                        <div className="hidden md:flex items-center gap-6">
                            <button
                                onClick={() => scrollToSection('services')}
                                className="text-slate-300 hover:text-white transition-colors font-medium"
                            >
                                Catalog
                            </button>
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-slate-300 hover:text-white transition-colors font-medium"
                            >
                                Features
                            </button>
                            <button
                                onClick={() => scrollToSection('how-it-works')}
                                className="text-slate-300 hover:text-white transition-colors font-medium"
                            >
                                How It Works
                            </button>
                            <button
                                onClick={() => scrollToSection('testimonials')}
                                className="text-slate-300 hover:text-white transition-colors font-medium"
                            >
                                Reviews
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative text-white hover:bg-slate-800"
                                onClick={() => setIsCartOpen(true)}
                            >
                                <ShoppingCart className="w-5 h-5" />
                                {itemCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-1 -right-1 bg-indigo-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                                    >
                                        {itemCount}
                                    </motion.span>
                                )}
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden text-white hover:bg-slate-800"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </Button>
                        </div>
                    </div>

                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4 pb-4 flex flex-col gap-3"
                        >
                            <button
                                onClick={() => scrollToSection('services')}
                                className="text-slate-300 hover:text-white transition-colors text-left py-2"
                            >
                                Catalog
                            </button>
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-slate-300 hover:text-white transition-colors text-left py-2"
                            >
                                Features
                            </button>
                            <button
                                onClick={() => scrollToSection('how-it-works')}
                                className="text-slate-300 hover:text-white transition-colors text-left py-2"
                            >
                                How It Works
                            </button>
                            <button
                                onClick={() => scrollToSection('testimonials')}
                                className="text-slate-300 hover:text-white transition-colors text-left py-2"
                            >
                                Reviews
                            </button>
                        </motion.div>
                    )}
                </nav>
            </motion.header>
            <Cart />
        </>
    );
};

export default Header;