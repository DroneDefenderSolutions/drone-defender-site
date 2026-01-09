'use client';

import { useState, useEffect, useRef } from 'react';
import ContactTrigger from '../ContactTrigger';

export default function Hero() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="
            relative w-full overflow-hidden bg-[#050910]
            /* Mobile: Dynamic Viewport Height minus header */
            min-h-[calc(100svh-90px)] max-h-[850px]
            /* Tablet: Tighter than desktop */
            md:min-h-[600px] md:max-h-[800px]
            /* Desktop: Large and assertive */
            lg:h-[calc(100vh-90px)] lg:min-h-[600px] lg:max-h-none
        ">
            <div className="flex flex-col lg:flex-row h-full">

                {/* Left Side: Content Box */}
                <div className="
                    w-full lg:w-1/2 flex items-center justify-center lg:justify-end 
                    px-6 py-12 sm:py-16 md:py-20 lg:py-0 
                    z-20 order-1 lg:order-none
                ">
                    <div className="max-w-xl lg:mr-12 lg:-mt-20">
                        <h1 className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6 sm:mb-8 uppercase">
                            Counter-UAS <br />
                            Consultancy <br />
                            <span className="text-[#3B82F6]"> & Training</span>
                        </h1>

                        <p className="text-slate-300 text-base sm:text-lg md:text-lg lg:text-xl font-light leading-relaxed mb-8 sm:mb-10 border-l-2 border-[#3B82F6] pl-6 max-w-md lg:max-w-none">
                            Independent consultancy and specialist training <br className="hidden sm:block" />
                            for high-risk environments.
                        </p>

                        <ContactTrigger
                            className="
                                group relative overflow-hidden inline-block
                                px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#050910] 
                                text-sm sm:text-base font-bold tracking-wider uppercase
                                transition-all duration-300
                                hover:bg-red-600 hover:text-white
                                cursor-pointer
                                min-h-[44px] flex items-center justify-center
                            "
                        >
                            Start Consultation
                        </ContactTrigger>
                    </div>
                </div>

                {/* Right Side: Video/Static Graphic */}
                <div className="
                    w-full lg:w-1/2 relative overflow-hidden order-2 lg:order-none group/video
                    /* Mobile: Aspect Ratio based sizing to prevent cropping/shifting */
                    aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-full
                ">
                    <div className="absolute inset-0 bg-[#050910]" />

                    <video
                        ref={videoRef}
                        src="/Grok-Video-A14A9B10-680B-45A5-9B01-05E64677E3EB.MP4"
                        autoPlay={!isMobile}
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isMobile && !isPlaying ? 'opacity-40' : 'opacity-60 lg:opacity-100'}`}
                    />

                    {/* Mobile Play Button */}
                    {isMobile && (
                        <button
                            onClick={togglePlay}
                            className="absolute inset-0 z-30 flex items-center justify-center bg-black/20 group-active:bg-black/40 transition-colors"
                        >
                            {!isPlaying && (
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                </div>
                            )}
                        </button>
                    )}

                    {/* Subtle Gradient to blend into the navy left side on large screens */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050910] via-transparent to-transparent hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050910] via-transparent to-transparent lg:hidden" />

                    {/* Perspective lines/Atmospheric layer */}
                    <div className="absolute inset-0 bg-primary-navy/10 mix-blend-multiply pointer-events-none" />
                </div>

            </div>
        </section>
    );
}
