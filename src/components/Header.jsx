import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import Cart from '@/components/Cart';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { itemCount, setIsCartOpen } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'py-3 bg-black/60 backdrop-blur-2xl border-b border-white/5'
                    : 'py-6 bg-transparent'
                    }`}
            >
                <nav className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 cursor-pointer group"
                            onClick={() => scrollToSection('hero')}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-black text-xl relative">
                                    <Shield className="w-6 h-6 fill-black" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-black text-xl tracking-tighter leading-none">ELITE</span>
                                <span className="text-indigo-400 font-bold text-[10px] tracking-[0.3em] leading-none uppercase">Guardian</span>
                            </div>
                        </motion.div>

                        <div className="hidden lg:flex items-center gap-10">
                            {[
                                { name: 'Catalog', id: 'services' },
                                { name: 'Features', id: 'features' },
                                { name: 'Experience', id: 'how-it-works' },
                                { name: 'Testimonials', id: 'testimonials' }
                            ].map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-slate-400 hover:text-white transition-all duration-300 font-bold text-sm tracking-widest uppercase hover:scale-105"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative p-3 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors"
                                onClick={() => setIsCartOpen(true)}
                            >
                                <ShoppingCart className="w-5 h-5" />
                                <AnimatePresence>
                                    {itemCount > 0 && (
                                        <motion.span
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow-2xl"
                                        >
                                            {itemCount}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden text-white bg-white/5 border border-white/10 rounded-2xl p-6"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </Button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                className="lg:hidden absolute top-[100%] left-4 right-4 mt-4 p-6 glass-dark rounded-3xl flex flex-col gap-4 shadow-3xl"
                            >
                                {[
                                    { name: 'Full Catalog', id: 'services' },
                                    { name: 'Platform Ethics', id: 'features' },
                                    { name: 'The Process', id: 'how-it-works' },
                                    { name: 'Hall of Fame', id: 'testimonials' }
                                ].map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-slate-300 hover:text-white transition-all text-xl font-bold p-4 rounded-2xl hover:bg-white/5 text-left"
                                    >
                                        {link.name}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </motion.header>
            <Cart />
        </>
    );
};

export default Header;