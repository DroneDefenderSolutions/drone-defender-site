'use client';

import { motion } from 'framer-motion';

const capabilities = [
    {
        title: "Assessment",
        desc: "Evaluation of vulnerabilities across multiple environments.",
        detail: "Site surveyed. Risks catalogued. Baseline established."
    },
    {
        title: "Strategy",
        desc: "Designing layered defence architectures independent to manufacturers and aligned with governance.",
        detail: "Protocols defined. Roles assigned. Command structures created."
    },
    {
        title: "Integration",
        desc: "Third party monitoring of vendor installation and calibration.",
        detail: "Sensors optimised. Blindspots eliminated. Systems unified."
    },
    {
        title: "Validation",
        desc: "Active testing to validate security posture and response protocols.",
        detail: "Penetration tested. Reactions timed. Gaps closed."
    }
];

export default function CoreCapabilities() {
    return (
        <section className="bg-[#FAFBFD] py-24 px-6 border-b border-slate-200">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-16 text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#0D2C51] tracking-tight">Core Capabilities</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 group/container"> {/* Group container for dimming siblings */}
                    {capabilities.map((cap, _index) => (
                        <motion.div
                            key={cap.title}
                            className="bg-white p-8 min-h-[280px] flex flex-col justify-start relative cursor-default border-t-[3px] border-[#0D2C51] shadow-sm group/panel z-10 hover:z-20 group-hover/container:opacity-50 hover:!opacity-100"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: _index * 0.1 }}
                            whileHover="hover"
                            animate="rest"
                        >
                            {/* Background color animation layer */}
                            <motion.div
                                variants={{
                                    rest: { backgroundColor: '#ffffff', y: 0 },
                                    hover: {
                                        backgroundColor: '#0D2C51',
                                        y: -8,
                                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                                    }
                                }}
                                className="absolute inset-0 z-0 border-t-[3px] border-[#0D2C51]"
                            />

                            {/* Animated Top Rule */}
                            <motion.div
                                className="absolute top-[-3px] left-0 right-0 h-[3px] bg-sky-400 z-10 origin-left"
                                variants={{
                                    rest: { opacity: 0, scaleX: 0.8 },
                                    hover: {
                                        opacity: 1,
                                        scaleX: 1,
                                        transition: { duration: 0.5, ease: "easeOut" }
                                    }
                                }}
                            />

                            {/* Content Layer */}
                            <div className="relative z-10 flex flex-col h-full pointer-events-none"> {/* pointer-events-none ensures hover sticks to parent */}
                                <motion.h4
                                    className="text-xl font-bold mb-6"
                                    variants={{
                                        rest: { color: '#0D2C51' },
                                        hover: { color: '#ffffff', transition: { duration: 0.3 } }
                                    }}
                                >
                                    {cap.title}
                                </motion.h4>
                                <motion.p
                                    className="leading-relaxed text-sm mb-6 font-medium"
                                    variants={{
                                        rest: { color: '#475569' }, // slate-600
                                        hover: { color: 'rgba(255,255,255,0.9)', transition: { duration: 0.3 } }
                                    }}
                                >
                                    {cap.desc}
                                </motion.p>

                                {/* Detail line - Fixed Layout with Smooth Reveal */}
                                <div className="mt-auto overflow-hidden">
                                    <motion.p
                                        className="text-sm text-sky-200 font-light tracking-wide border-t border-white/20 pt-4"
                                        variants={{
                                            rest: { opacity: 0, y: 12 },
                                            hover: {
                                                opacity: 1,
                                                y: 0,
                                                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
                                            }
                                        }}
                                    >
                                        {cap.detail}
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Narrative Reinforcement */}
                <div className="mt-16 text-center">
                    <p className="text-lg font-black tracking-[0.2em] text-[#0D2C51] uppercase leading-[2.6]">
                        Each engagement follows this proven structure.<br />
                        No phases omitted.<br />
                        No shortcuts taken.
                    </p>
                </div>
            </div>
        </section>
    );
}
