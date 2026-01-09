'use client';

import DoctrinePillars from './DoctrinePillars';

export default function ThreatLandscape() {
    return (
        <section className="py-32 bg-white relative">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

                    {/* Left: Narrative */}
                    <div className="flex flex-col justify-center">
                        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#0D2C51]/60 mb-8">SECTION 005</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2C51] mb-8 leading-tight">
                            The Threat Landscape
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-10">
                            The rapid proliferation of unmanned systems presents an asymmetric threat. Traditional physical security measures leave blind spots that modern platforms can exploit.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Rapid evolution of capability",
                                "Blind spots in physical security",
                                "Operational disruption potential",
                                "Legal and compliance pressures"
                            ].map((item) => (
                                <li key={item} className="flex items-center text-[#0D2C51] font-bold text-2xl">
                                    <span className="w-2.5 h-2.5 bg-[#0D2C51] rounded-full mr-5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Vertical Panels - DETECT / ASSESS / DEFEND */}
                    <div className="flex flex-col justify-stretch h-full w-full">
                        <DoctrinePillars />
                    </div>

                </div>
            </div>
        </section>
    );
}
