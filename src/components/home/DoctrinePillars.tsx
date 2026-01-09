'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PillarId = 'detect' | 'assess' | 'defend';

interface PillarData {
    id: PillarId;
    title: string;
    body: string;
    sub: string;
}

const PILLARS: PillarData[] = [
    {
        id: 'detect',
        title: 'DETECT',
        body: 'Early identification of unmanned aerial activity through layered sensing, pattern recognition, and environmental awareness. Focused on detection without assumption, escalation without alarmism.',
        sub: 'Detection is about visibility, not reaction.',
    },
    {
        id: 'assess',
        title: 'ASSESS',
        body: 'Rapid synthesis of signal data against established threat matrices. Distinguishing between benign neglect, amateur curiosity, and hostile intent with minimised latency.',
        sub: 'Context determines the countermeasure.',
    },
    {
        id: 'defend',
        title: 'DEFEND',
        body: 'Proportionate denial of airspace through kinetic and non-kinetic means. Execution of pre-authorised protocols ensuring compliance, safety, and neutralisation.',
        sub: 'Control the space, control the outcome.',
    },
];

const SMOOTH_TRANSITION = {
    type: "tween",
    ease: [0.4, 0, 0.2, 1], // Smooth, cinematic ease
    duration: 0.7
} as const;

export default function DoctrinePillars() {
    const [activeId, setActiveId] = useState<PillarId | null>(null);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    // Debounce for responsiveness
    const handleMouseEnter = (id: PillarId) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        hoverTimeout.current = setTimeout(() => {
            setActiveId(id);
        }, 50); // Slightly faster response
    };

    const handleMouseLeave = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setActiveId(null);
    };

    return (
        <div
            className="w-full h-[600px] flex flex-row relative bg-[#0D2C51] overflow-hidden rounded-md"
            onMouseLeave={handleMouseLeave}
        >
            {PILLARS.map((pillar) => {
                const isActive = activeId === pillar.id;
                const isDimmed = activeId !== null && !isActive;

                return (
                    <motion.div
                        key={pillar.id}
                        onMouseEnter={() => handleMouseEnter(pillar.id)}
                        className="relative h-full border-r border-white/10 last:border-r-0 overflow-hidden cursor-crosshair group"
                        style={{
                            backgroundColor: '#0D2C51',
                        }}
                        animate={{
                            flex: isActive ? 4 : 1, // Stronger expansion
                            opacity: 1,
                        }}
                        transition={SMOOTH_TRANSITION}
                    >
                        {/* Spatial Gradient */}
                        <div
                            className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                background:
                                    pillar.id === 'detect'
                                        ? 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(13,44,81,0) 70%)'
                                        : pillar.id === 'assess'
                                            ? 'radial-gradient(circle at center, rgba(255,255,255,0.07) 0%, rgba(13,44,81,0) 50%)'
                                            : 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(13,44,81,0) 35%)',
                            }}
                        />

                        {/* Inactive Dimming Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-[#0D2C51] pointer-events-none z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isDimmed ? 0.6 : 0 }}
                            transition={{ duration: 0.5 }}
                        />

                        {/* Content Container */}
                        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-8 lg:p-12 overflow-hidden">

                            {/* Vertical Label (Inactive) */}
                            <AnimatePresence>
                                {!isActive && (
                                    <motion.div
                                        key="vertical-label"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: isDimmed ? 0.3 : 1,
                                            color: isDimmed ? 'rgba(255,255,255,0.3)' : '#FFFFFF'
                                        }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <h3
                                            className="text-5xl lg:text-7xl font-bold tracking-[0.15em] uppercase select-none whitespace-nowrap"
                                            style={{
                                                writingMode: 'vertical-rl',
                                                transform: 'rotate(180deg)',
                                                textShadow: isDimmed ? 'none' : '0 0 20px rgba(13,44,81,0.5)'
                                            }}
                                        >
                                            {pillar.title}
                                        </h3>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Active Content - Simplified Fades */}
                            {isActive && (
                                <div className="flex flex-col items-start justify-center h-full w-full max-w-xl">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                    >
                                        <div className="mb-8">
                                            <span className="block text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
                                                SECTION 005 : {pillar.title}
                                            </span>
                                        </div>

                                        <h3 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-wide">
                                            {pillar.title}
                                        </h3>

                                        <p className="text-lg lg:text-xl text-white/80 leading-relaxed font-light mb-12 max-w-lg">
                                            {pillar.body}
                                        </p>

                                        <div className="border-l-2 border-white/20 pl-6">
                                            <p className="text-white font-medium italic text-lg tracking-wide">
                                                "{pillar.sub}"
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            )}

                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
