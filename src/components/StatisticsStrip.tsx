'use client';

import { useEffect, useState, useRef } from 'react';

const stats = [
    {
        label: 'Systems Assessed',
        value: 50,
        suffix: '+',
        desc: 'Active and passive radars, Kinetic, Radio Frequency Jamming and Cyber-take-over solutions'
    },
    {
        label: 'Years Operational Experience',
        value: 25,
        suffix: '+',
        desc: 'Operational expertise across law enforcement and high security CUAS operations'
    },
    {
        label: 'Hour Response Window',
        value: 24,
        suffix: '',
        desc: 'For time critical requests'
    },
];

export default function StatisticsStrip() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full bg-[#FAFBFD] border-y border-primary-navy/10 py-6" // Cooler off-white, horiz dividers
        >
            <div className="max-w-[1320px] mx-auto px-6">
                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {stats.map((stat, i) => (
                        <StatItem
                            key={i}
                            label={stat.label}
                            target={stat.value}
                            suffix={stat.suffix}
                            desc={stat.desc}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function StatItem({
    label,
    target,
    suffix,
    desc,
    isVisible
}: {
    label: string;
    target: number;
    suffix: string;
    desc: string;
    isVisible: boolean;
}) {
    const [count, setCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const duration = 1800;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            const ease = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(ease * target));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(target);
                setIsComplete(true);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, target]);

    return (
        <div className="flex flex-col items-center text-center">
            <div className="text-5xl lg:text-6xl font-bold text-primary-navy mb-4 tracking-tight tabular-nums h-[1.1em] flex items-center justify-center">
                {count}
                {suffix && (
                    <span className={`transition-opacity duration-300 ${isComplete ? 'opacity-100' : 'opacity-0'}`}>
                        {suffix}
                    </span>
                )}
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#0D2C51] mb-2">
                {label}
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[240px] mx-auto">
                {desc}
            </p>
        </div>
    );
}
