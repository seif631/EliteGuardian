import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

const CallToAction = () => {
    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-40 bg-mesh relative overflow-hidden">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto glass rounded-[4rem] p-12 md:p-24 text-center border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-center mb-8">
                            <div className="p-4 bg-white/5 rounded-3xl border border-white/10">
                                <Sparkles className="w-10 h-10 text-indigo-400" />
                            </div>
                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                            READY TO ASCEND?<br />
                            <span className="text-indigo-400">COMMAND YOUR LEGACY.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Join over 5,000 top-tier Guardians who have chosen the Elite path. Your legend starts with a single click.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                onClick={scrollToServices}
                                className="bg-white text-black hover:bg-indigo-50 text-2xl font-black px-12 py-9 h-auto group rounded-full transition-transform active:scale-95"
                            >
                                Secure My Boost
                                <ArrowRight className="ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform h-auto" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;