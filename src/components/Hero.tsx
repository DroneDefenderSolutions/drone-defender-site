'use client';

import { useEffect, useRef } from 'react';

interface HeroProps {
    headline: string;
    subline: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    backgroundImage: string;
}

export default function Hero({
    headline,
    subline,
    primaryButtonText,
    secondaryButtonText,
    backgroundImage,
}: HeroProps) {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const scrolled = window.scrollY;
                const parallaxSpeed = 0.01; // 1% parallax drift
                heroRef.current.style.transform = `translate(${scrolled * parallaxSpeed}%, ${scrolled * parallaxSpeed}%) scale(${1 + scrolled * parallaxSpeed * 0.0001})`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Parallax Drift */}
            <div
                ref={heroRef}
                className="absolute inset-0 w-full h-full animate-drift"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.1s ease-out',
                }}
            >
                {/* 5% dark overlay for text readability */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'rgba(5, 6, 8, 0.05)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container-grid">
                    <div className="max-w-4xl">
                        {/* Headline */}
                        <h1
                            className="text-inverted mb-8 animate-fade"
                            style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
                        >
                            {headline}
                        </h1>

                        {/* Subline */}
                        <p
                            className="text-inverted text-body-large leading-relaxed mb-10 max-w-3xl animate-fade"
                            style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
                        >
                            {subline}
                        </p>

                        {/* Buttons */}
                        <div
                            className="flex flex-col sm:flex-row gap-6 animate-fade"
                            style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}
                        >
                            <button className="btn-primary bg-surface-white text-surface-navy hover:opacity-85">
                                {primaryButtonText}
                            </button>
                            <button className="btn-secondary border-surface-white text-surface-white hover:bg-surface-white hover:text-surface-navy">
                                {secondaryButtonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
