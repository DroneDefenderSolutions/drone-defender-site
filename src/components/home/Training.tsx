'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Training() {
    return (
        <section className="relative w-full bg-[#FAFBFD] overflow-hidden border-t border-slate-200">
            <div className="flex flex-col lg:flex-row min-h-[700px]">

                {/* Text - Left */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[500px] border-l-2 border-[#0D2C51] pl-8"
                    >
                        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#0D2C51]/60 mb-6">SECTION 006</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C51] mb-8 leading-tight">
                            Training for Operational Readiness
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                            Structured training for police, correctional facilities, and private security teams. We bridge the gap between technology deployment and tactical decision making. Global delivery is provided in partnership with BLD, an established provider of specialist training to law enforcement and security agencies.
                        </p>

                        <div className="space-y-8 mt-10">
                            {[
                                { t: "Operator Training", d: "Hands-on detection interpretation and immediate action drills." },
                                { t: "Command Briefings", d: "Structured decision making for all levels of commanders." },
                                { t: "Private Security", d: "Discreet protection protocols for high-net-worth residences." }
                            ].map((item) => (
                                <div key={item.t}>
                                    <h4 className="text-lg font-bold text-[#0D2C51] mb-2">{item.t}</h4>
                                    <p className="text-base text-slate-600 font-medium">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Image - Right - Flush */}
                <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full order-1 lg:order-2">
                    <Image
                        src="/images/dd-training-field.jpg"
                        alt="Field training exercise with tactical drone surveillance"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={90}
                        style={{ objectPosition: 'center' }}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
