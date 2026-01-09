'use client';

import { motion } from 'framer-motion';

export default function Discretion() {
    return (
        <section className="relative py-40 overflow-hidden bg-[#0a1f38]">
            {/* Background Texture - Animated Grain */}
            <div className="absolute inset-0 opacity-[0.03] animate-pulse pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#0D2C51]/80 to-[#051120]" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl lg:text-7xl font-bold text-white mb-12 tracking-tight">
                        Discretion and Integrity
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-12">
                        <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
                            Experience anchored in confidential operations, legal awareness and disciplined evidence handling. Your security posture is treated with the highest classification.
                        </p>

                        <div className="relative py-8">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-white/20" />
                            <span className="block text-2xl lg:text-3xl font-serif italic text-white/90 tracking-wide">
                                "Operational trust built through disciplined practice."
                            </span>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-white/20" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
