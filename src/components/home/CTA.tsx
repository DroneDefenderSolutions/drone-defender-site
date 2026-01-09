'use client';

import Link from 'next/link';
import ContactTrigger from '../ContactTrigger';

export default function CTA() {
    return (
        <section className="py-20 lg:py-32 bg-[#081C34] text-center border-t border-white/5">
            <div className="max-w-[1000px] mx-auto px-6">
                <h2 className="text-2xl font-bold text-white mb-8 tracking-wide">
                    Speak with the Lead Advisor
                </h2>

                <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
                    <ContactTrigger
                        className="
                            px-10 py-5 
                            bg-white text-[#081C34] 
                            text-lg font-bold 
                            uppercase tracking-wider 
                            hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-600 hover:text-white hover:border-red-600
                            transition-all duration-300
                            border-2 border-white
                        "
                    >
                        Start Contact
                    </ContactTrigger>

                    <Link
                        href="/capability-statement"
                        className="inline-block"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    >
                        <button className="
                                px-10 py-5 
                                bg-transparent text-white 
                                text-lg font-bold 
                                uppercase tracking-wider 
                                hover:scale-[1.03] hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                                transition-all duration-300
                                border-2 border-white/30 hover:border-white
                                w-full
                        ">
                            Download Capability Statement
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
