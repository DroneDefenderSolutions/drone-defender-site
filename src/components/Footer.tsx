'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-deep-background text-white py-6 border-t border-white/5 relative">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-start justify-between">

                {/* 1. Left - Branding */}
                <div className="flex flex-col gap-2 mb-4 md:mb-0 md:w-1/4">
                    <span className="text-base font-bold text-white tracking-wide">
                        Drone Defender
                    </span>
                    <p className="text-xs text-white/40 leading-relaxed font-light">
                        © {new Date().getFullYear()} Drone Defender Limited.<br />All rights reserved.
                    </p>
                </div>

                {/* 2. Middle - Links (2x2 Grid) */}
                <div className="grid grid-cols-2 gap-x-16 gap-y-2 md:gap-y-3 md:w-1/3 text-sm mb-4 md:mb-0">
                    {/* Left Column */}
                    <div className="flex flex-col gap-2 md:gap-3">
                        <Link
                            href="/about"
                            className="text-white/60 hover:text-white hover:underline transition-all duration-200"
                            scroll={true}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                        >
                            About
                        </Link>
                        <Link
                            href="/sectors"
                            className="text-white/60 hover:text-white hover:underline transition-all duration-200"
                            scroll={true}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                        >
                            Sectors
                        </Link>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-2 md:gap-3">
                        <Link
                            href="/privacy-policy"
                            className="text-white/60 hover:text-white hover:underline transition-all duration-200"
                            scroll={true}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms-of-service"
                            className="text-white/60 hover:text-white hover:underline transition-all duration-200"
                            scroll={true}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>

                {/* 3. Right - Contact Email (No Address) */}
                <div className="w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0 md:self-center">
                    <a
                        href="mailto:enquiries@dronedefender.solutions"
                        className="text-white/60 hover:text-white hover:underline transition-all duration-200 text-sm"
                    >
                        enquiries@dronedefender.solutions
                    </a>
                </div>

                {/* 4. Far Right - Back to Top (Standalone Section) */}
                <div className="flex items-center justify-end md:w-auto md:pl-12 md:self-center">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="
                            group flex items-center justify-center 
                            w-11 h-11 rounded-full border border-white/20 
                            transition-all duration-300
                            hover:bg-white hover:border-white
                            active:bg-white active:scale-95
                        "
                        aria-label="Back to top"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white group-hover:text-deep-background transition-colors duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>

            </div>
        </footer>
    );
}
