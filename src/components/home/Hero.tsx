'use client';

import Link from 'next/link';
import ContactTrigger from '../ContactTrigger';

export default function Hero() {
    return (
        <section className="relative h-[calc(100vh-90px)] min-h-[600px] w-full overflow-hidden bg-[#050910]">
            <div className="flex flex-col lg:flex-row h-full">

                {/* Left Side: Content Box */}
                <div className="w-full lg:w-1/2 h-full flex items-center justify-center lg:justify-end px-6 py-12 lg:py-0 z-20">
                    <div className="max-w-xl lg:mr-12 -mt-10 lg:-mt-20">
                        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-8 uppercase">
                            Counter-UAS <br />
                            Consultancy <br />
                            <span className="text-[#3B82F6]"> & Training</span>
                        </h1>

                        <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-10 border-l-2 border-[#3B82F6] pl-6">
                            Independent consultancy and specialist training <br />
                            for high-risk environments.
                        </p>

                        <ContactTrigger
                            className="
                                group relative overflow-hidden inline-block
                                px-10 py-5 bg-white text-[#050910] 
                                text-base font-bold tracking-wider uppercase
                                transition-all duration-300
                                hover:bg-red-600 hover:text-white
                                cursor-pointer
                            "
                        >
                            Start Consultation
                        </ContactTrigger>
                    </div>
                </div>

                {/* Right Side: Video Graphic */}
                <div className="w-full lg:w-1/2 h-[400px] lg:h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#050910]" /> {/* Placeholder/Bakground */}
                    <video
                        src="/Grok-Video-A14A9B10-680B-45A5-9B01-05E64677E3EB.MP4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Subtle Gradient to blend into the navy left side on large screens */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050910] via-transparent to-transparent hidden lg:block" />
                    {/* Perspective lines/Atmospheric layer */}
                    <div className="absolute inset-0 bg-primary-navy/10 mix-blend-multiply" />
                </div>

            </div>
        </section>
    );
}
