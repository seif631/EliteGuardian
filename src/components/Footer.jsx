import React from 'react';
import { MessageSquare, Mail, Shield, CheckCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                                EG
                            </div>
                            <span className="text-white font-bold text-xl tracking-wide">ELITE GUARDIAN</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            The premier destination for Destiny 2 boosting. We help guardians achieve their goals with speed, security, and professionalism.
                        </p>
                        <div className="flex items-center gap-4">
                            {/* Payment icons could go here */}
                            <div className="h-8 w-12 bg-slate-800 rounded border border-slate-700 flex items-center justify-center text-xs text-slate-500">VISA</div>
                            <div className="h-8 w-12 bg-slate-800 rounded border border-slate-700 flex items-center justify-center text-xs text-slate-500">MC</div>
                            <div className="h-8 w-12 bg-slate-800 rounded border border-slate-700 flex items-center justify-center text-xs text-slate-500">PP</div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Services</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Raids & Dungeons</li>
                            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Trials of Osiris</li>
                            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Grandmaster Nightfalls</li>
                            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Exotic Weapons</li>
                            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Titles & Seals</li>
                            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Power Leveling</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Support</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-400 group cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                    <MessageSquare className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm group-hover:text-white transition-colors">Discord: EliteGuardian#9999</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400 group cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                    <Mail className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm group-hover:text-white transition-colors">support@eliteguardian.gg</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Our Guarantee</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-medium text-sm">100% Safe</h4>
                                    <p className="text-slate-500 text-xs">VPN protection on all orders</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-medium text-sm">Money Back</h4>
                                    <p className="text-slate-500 text-xs">Full refund if not started</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-600 text-xs text-center md:text-left">
                        © 2025 Elite Guardian. All rights reserved. Destiny 2 is a registered trademark of Bungie Inc.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Refund Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;