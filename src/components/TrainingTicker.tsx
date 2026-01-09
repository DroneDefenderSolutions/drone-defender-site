'use client';

import { motion } from 'framer-motion';

const PRINCIPLES = [
    "ACCREDITED INSTRUCTION",
    "SCENARIO BASED",
    "OPERATIONAL REALISM",
    "LAW ENFORCEMENT ALIGNED",
    "BLD PARTNERSHIP"
];

// Duplicate for infinite loop coverage
const TICKER_CONTENT = [...PRINCIPLES, ...PRINCIPLES, ...PRINCIPLES, ...PRINCIPLES, ...PRINCIPLES, ...PRINCIPLES];

export default function TrainingTicker() {
    return (
        <section className="bg-[#050910] border-y border-white/5 overflow-hidden py-16 select-none relative group cursor-default">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050910] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050910] to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden max-w-full">
                <motion.div
                    className="flex w-max items-center gap-16 whitespace-nowrap pl-16 group/track"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 80,
                        ease: "linear",
                    }}
                    style={{ willChange: "transform" }}
                >
                    {TICKER_CONTENT.map((text, i) => (
                        <div key={i} className="flex items-center gap-16 ">
                            <span className="text-white/60 font-bold text-sm lg:text-base tracking-[0.3em] transition-colors duration-300 hover:text-white">
                                {text}
                            </span>
                            <div className="w-[1px] h-4 bg-white/20" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
