import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Alex M.',
            service: 'Raid Completion',
            rating: 5,
            text: 'Absolutely amazing service! Got my first Vow of the Disciple clear and the exotic. Team was professional and fast.',
            avatar: 'Happy guardian with exotic weapon'
        },
        {
            name: 'Sarah K.',
            service: 'Trials Flawless',
            rating: 5,
            text: 'Went flawless for the first time ever! The boosters were incredibly skilled and made it look easy. Highly recommend!',
            avatar: 'Female guardian in trials armor'
        },
        {
            name: 'Marcus L.',
            service: 'Power Leveling',
            rating: 5,
            text: 'Leveled from 1750 to 1800 in just 2 days. Super efficient service and great communication throughout.',
            avatar: 'Guardian showing off high power level'
        },
        {
            name: 'Jennifer T.',
            service: 'Grandmaster NF',
            rating: 5,
            text: 'Got all my GM clears for the seal. The team knew exactly what to do and we never wiped. Worth every penny!',
            avatar: 'Guardian with conqueror title'
        },
        {
            name: 'David R.',
            service: 'Dungeon Run',
            rating: 5,
            text: 'Great experience with the Duality dungeon boost. Got the exotic SMG on first run. Will definitely use again!',
            avatar: 'Guardian in dungeon gear'
        },
        {
            name: 'Emma W.',
            service: 'Catalyst Completion',
            rating: 5,
            text: 'Finally got my Witherhoard catalyst done! Service was quick and my account was perfectly safe. Thanks!',
            avatar: 'Guardian wielding Witherhoard'
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Customer <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Reviews</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        See what our satisfied customers have to say about our services
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800 border border-slate-700 rounded-xl p-6 relative hover:border-amber-500/50 transition-all"
                        >
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-500/20" />

                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-slate-700 rounded-full overflow-hidden flex-shrink-0">
                                    <img
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                        src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                                    <p className="text-amber-400 text-sm">{testimonial.service}</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed">"{testimonial.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;