import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Shield, Headphones, Zap, CreditCard } from 'lucide-react';

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { type: 'bot', text: 'Welcome to Elite Guardian Support. How can we assist your ascent today?' }
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const newHistory = [...chatHistory, { type: 'user', text: message }];
        setChatHistory(newHistory);
        setMessage('');

        // Simulate bot response
        setTimeout(() => {
            setChatHistory(prev => [...prev, {
                type: 'bot',
                text: "An Elite Agent has been notified. For immediate priority service, please message us on Discord: EliteGuardian#0001"
            }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] font-sans">
            {/* Chat Bubble Button */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] relative group overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8 fill-black" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="absolute bottom-20 right-0 w-[400px] h-[600px] max-w-[calc(100vw-2rem)] glass-dark rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 bg-white/5 border-b border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center relative">
                                    <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse" />
                                    <Headphones className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-xl tracking-tight">Elite Support</h3>
                                    <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Average reply: 2 mins</p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow overflow-y-auto p-8 flex flex-col gap-6 scrollbar-hide">
                            {chatHistory.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: msg.type === 'bot' ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-3xl text-sm font-medium ${msg.type === 'bot'
                                            ? 'bg-white/10 text-white rounded-tl-none'
                                            : 'bg-white text-black rounded-tr-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="px-8 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
                            {[
                                { icon: Shield, label: 'Safety' },
                                { icon: Zap, label: 'Speed' },
                                { icon: CreditCard, label: 'Payment' }
                            ].map((action, idx) => (
                                <button key={idx} className="flex-shrink-0 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-[10px] font-black uppercase text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                    <action.icon className="w-3 h-3 inline mr-1" />
                                    {action.label}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-8 pt-4">
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-bold"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-2 w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
                                >
                                    <Send className="w-5 h-5 fill-black" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LiveChat;
