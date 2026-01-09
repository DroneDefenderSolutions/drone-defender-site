'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Consultancy() {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-0 lg:min-h-[700px]">
                {/* Text - Left - Centered */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16 lg:p-24 bg-white order-1 lg:order-none">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[500px] border-l-2 border-[#0D2C51] pl-6 md:pl-8"
                    >
                        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#0D2C51]/60 mb-6">SECTION 002</span>
                        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#0D2C51] mb-6 md:mb-8 leading-[1.1] tracking-tight">
                            Consultancy at the <br className="hidden lg:block" />
                            Highest Standard
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                            Independent threat assessments, strategic design and technical guidance for counter UAS within critical environments. All guidance is grounded on proven operational experience:
                        </p>
                        <ul className="space-y-4">
                            {['Governance aligned threat assessment', 'Strategic layered defence design', 'Evidence disciplined procedure'].map((item) => (
                                <li key={item} className="flex items-center text-[#0D2C51] font-semibold text-xs sm:text-sm tracking-wide">
                                    <span className="w-1.5 h-1.5 bg-[#0D2C51] rounded-full mr-4" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Image - Right - Flush */}
                <div className="
                    w-full lg:w-1/2 relative order-2 lg:order-none
                    /* Mobile: Aspect Ratio based sizing to prevent cropping */
                    aspect-[4/3] sm:aspect-video lg:aspect-auto lg:min-h-full
                ">
                    <Image
                        src="/images/home_meeting_room.png"
                        alt="Strategic command room with tactical planning on screens"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={90}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
