'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Only show the loading screen once per session to keep navigation fast
        const hasSeenIntro = sessionStorage.getItem('dd_intro_seen');

        if (hasSeenIntro) {
            setIsLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('dd_intro_seen', 'true');
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loading-screen"
                    // The loading screen stays at opacity 1 while visible
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    // When leaving (isLoading becomes false), we fade out
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }} // "Snap fade"
                    className="fixed inset-0 z-[100] bg-primary-navy flex items-center justify-center"
                >
                    <div className="relative w-[600px] h-auto aspect-[3.33]">
                        <motion.div
                            // Logo fade-in sequence
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                // Fades into full brightness over 2.0s (80% of total duration)
                                duration: 2.0,
                                ease: "easeOut"
                            }}
                            className="w-full h-full relative"
                        >
                            <Image
                                src="/logos/drone-defender-white.png"
                                alt="Drone Defender"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
