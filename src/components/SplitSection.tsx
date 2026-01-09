import React from 'react';
import Image from 'next/image';

interface SplitSectionProps {
    imageSrc: string;
    imageAlt: string;
    imagePosition?: 'left' | 'right';
    sectionLabel: string;
    title: string;
    children: React.ReactNode;
}

export default function SplitSection({
    imageSrc,
    imageAlt,
    imagePosition = 'left',
    sectionLabel,
    title,
    children
}: SplitSectionProps) {
    return (
        <section className="w-full bg-white border-b border-line-grey/30">
            <div className="flex flex-col lg:flex-row h-full">
                {/* Image Column */}
                <div className={`relative min-h-[400px] lg:min-h-[600px] w-full lg:w-[55%] ${imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        style={{
                            filter: 'grayscale(30%) contrast(90%) brightness(95%)' // Subtle DroneShield-like grade
                        }}
                    />
                </div>

                {/* Content Column */}
                <div className={`
          flex flex-col justify-center 
          w-full lg:w-[45%] 
          p-8 lg:p-16 xl:p-24 
          lg:min-h-[600px]
          ${imagePosition === 'right' ? 'lg:order-1 bg-soft-steel/20' : 'lg:order-2 bg-white'}
        `}>
                    <div className="max-w-xl mx-auto lg:mx-0">
                        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-primary-navy mb-6">
                            {sectionLabel}
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary-navy mb-6 leading-tight">
                            {title}
                        </h2>
                        <div className="text-text-body text-base leading-relaxed space-y-6">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
