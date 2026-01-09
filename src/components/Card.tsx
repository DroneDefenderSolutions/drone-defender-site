'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CardProps {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    description?: string;
}

export default function Card({ children, className = '', title, description }: CardProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Animate once
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`
        relative bg-white p-10 h-full transition-all duration-700 ease-out group
        border-t-2 border-primary-navy
        shadow-md hover:shadow-xl hover:-translate-y-2
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
        ${className}
      `}
        >
            {title && (
                <h3 className="text-2xl font-bold text-primary-navy mb-4 group-hover:text-primary-navy-soft transition-colors">
                    {title}
                </h3>
            )}
            {description && (
                <p className="text-text-body leading-relaxed mb-6 font-medium">
                    {description}
                </p>
            )}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
