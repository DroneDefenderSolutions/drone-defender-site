'use client';

import Link from 'next/link';
import { useState, useRef, useEffect, useCallback } from 'react';

interface AnimatedNavLinkProps {
    href: string;
    label: string;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function AnimatedNavLink({ href, label }: AnimatedNavLinkProps) {
    const [isHovered, setIsHovered] = useState(false);
    // We keep track of the display character for each letter index.
    // Initial state is the correct label characters.
    const [displayChars, setDisplayChars] = useState(label.split(''));

    // Refs to manage animation frames and timeouts clearing
    const scrambleRef = useRef<number | null>(null);
    const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

    const startScramble = useCallback(() => {
        // Clear any ongoing
        if (scrambleRef.current) cancelAnimationFrame(scrambleRef.current);
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];

        // Original timings (Fast)
        const totalDuration = 400; // ms

        const startTime = Date.now();
        let lastUpdate = 0;

        // For each letter, determine when it stops scrambling
        const resolveTimes = label.split('').map((_, i) => {
            // Fill left to right: 200ms delay before start + 40ms per letter
            return startTime + 200 + (i * 40);
        });

        const animate = () => {
            const now = Date.now();

            // Throttle updates to slow the visual effect (every ~60ms)
            if (now - lastUpdate < 60) {
                scrambleRef.current = requestAnimationFrame(animate);
                return;
            }
            lastUpdate = now;

            let allResolved = true;

            const nextChars = label.split('').map((char, i) => {
                if (now < resolveTimes[i]) {
                    allResolved = false;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                } else {
                    return char; // Resolved to original
                }
            });

            setDisplayChars(nextChars);

            if (!allResolved) {
                scrambleRef.current = requestAnimationFrame(animate);
            }
        };

        scrambleRef.current = requestAnimationFrame(animate);

    }, [label]);

    const stopScramble = useCallback(() => {
        if (scrambleRef.current) cancelAnimationFrame(scrambleRef.current);
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
        // Reset immediately
        setDisplayChars(label.split(''));
    }, [label]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (!mediaQuery.matches) {
            startScramble();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        stopScramble();
    };

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    return (
        <Link
            href={href}
            className="group relative flex items-center h-full px-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
            scroll={true}
            onClick={handleScrollTop}
        >
            {/* Nav Label Container */}
            <span className="relative flex items-center text-2xl font-bold tracking-wide text-white">
                {/* Render individual letters with layout stability */}
                {label.split('').map((originalChar, i) => (
                    <span key={i} className="relative inline-block text-center whitespace-pre">
                        {/* Invisible original char defines the width */}
                        <span className="opacity-0">{originalChar}</span>

                        {/* Visible char (scrambled or original) positioned absolutely */}
                        <span className="absolute inset-0 flex items-center justify-center">
                            {displayChars[i]}
                        </span>
                    </span>
                ))}
            </span>

            {/* Arrow - Fades and slides in */}
            <span
                className={`
                    absolute top-1/2 -translate-y-1/2 
                    left-full ml-1
                    text-white/80 text-xl font-light
                    transition-all duration-300 ease-out
                    ${isHovered ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-2 pointer-events-none'}
                `}
                aria-hidden="true"
            >
                ↗
            </span>

            {/* Background Pill - 10% Opacity Navy Fade In */}
            <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 bg-[#0D2C51]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

            {/* White Underline - Animate width */}
            <span className="absolute bottom-[28px] left-0 w-full h-[2px] bg-[#0D2C51] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
        </Link>
    );
}
