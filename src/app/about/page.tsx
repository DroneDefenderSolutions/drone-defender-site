import React from 'react';
import Header from '../../components/Header';
import SectionLabel from '../../components/SectionLabel';
import ContactTrigger from '../../components/ContactTrigger';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />

            <main>
                {/* A1: HERO - Institutionally Restrained */}
                <section className="relative h-[calc(100vh-90px)] min-h-[550px] w-full overflow-hidden bg-[#050910] flex items-center">
                    {/* Background - Pure Dark Gradient, No Imagery */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050910] via-[#0B1221] to-[#050910]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050910_100%)] opacity-50" />
                    </div>

                    <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl -mt-20">
                            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6 uppercase">
                                About <br />
                                Drone Defender
                            </h1>
                            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8 border-l-2 border-[#3B82F6] pl-6">
                                Founded to bring real world operational discipline, evidence, and governance to counter UAS advisory work.
                            </p>

                            <ContactTrigger
                                className="
                                    group relative overflow-hidden
                                    px-8 py-4 bg-white text-[#050910] 
                                    text-base font-bold tracking-wider uppercase
                                    transition-all duration-300
                                    hover:bg-red-600 hover:text-white
                                "
                            >
                                Start Consultation
                            </ContactTrigger>
                        </div>
                    </div>
                </section>

                {/* A2: POSITIONING & LEADERSHIP */}
                <section className="py-24 md:py-32 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

                            {/* Mission / Context */}
                            <div className="bg-[#F8FAFC] p-10 md:p-12 border-l-4 border-[#0D2C51] flex flex-col">
                                <SectionLabel text="MISSION" />
                                <h2 className="text-4xl md:text-5xl font-bold text-[#0D2C51] mt-6 mb-6 leading-tight">
                                    Governance Led <br /> Advisory
                                </h2>
                                <div className="space-y-6 text-lg font-light leading-relaxed text-slate-600">
                                    <p>
                                        The counter-UAS market is crowded with vendor promises and unverified claims. Drone Defender exists to provide a counterbalance: independent, evidence-led scrutiny that prioritises the client's operational requirements.
                                    </p>
                                    <p>
                                        We operate as a strictly vendor-neutral entity. We do not sell hardware. We do not take commissions. Our loyalty is to our clients and the integrity of their security architecture.
                                    </p>
                                </div>
                            </div>

                            {/* Principal Consultant Profile */}
                            <div className="bg-[#F8FAFC] p-10 md:p-12 border-l-4 border-[#0D2C51]">
                                <SectionLabel text="LEADERSHIP" />
                                <h3 className="text-4xl md:text-5xl font-bold text-[#0D2C51] mt-6 mb-6 leading-tight">Principal Consultant</h3>
                                <div className="space-y-6 text-lg font-light leading-relaxed text-slate-700">
                                    <p>
                                        A senior law enforcement practitioner with over thirty years of operational service in high-threat and high-risk sensitive environments.
                                    </p>
                                    <p>
                                        Bringing specialisms from all covert policing disciplines, physical as well as technical, to the C-UAS world to ensure every recommendation is rooted in successful operational delivery whilst being proportionate, necessary and therefore defensible.
                                    </p>
                                    <p className="font-medium text-[#0D2C51]">
                                        Focus: Operational Credibility, proportionality in risk and sound logical defensibility.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* A3: PRINCIPLES */}
                <section className="py-24 bg-[#050910] text-white border-y border-white/10">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="mb-16">
                            <SectionLabel text="ETHOS" color="text-blue-500" />
                            <h2 className="text-4xl font-bold mt-6">Core Principles</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                            {[
                                {
                                    title: "Professional Independence",
                                    text: "Our advice is free from commercial relationships with manufacturers. We sell truth, not products."
                                },
                                {
                                    title: "Evidence Centred",
                                    text: "Every recommendation is documented, tested, and justifiable—ready for boardroom scrutiny or courtroom defence."
                                },
                                {
                                    title: "Confidentiality Default",
                                    text: "We assume every engagement is sensitive. Your data, vulnerabilities, and architecture never leave our secure perimeter."
                                }
                            ].map((p, i) => (
                                <div key={i} className="group">
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#3B82F6] transition-colors duration-300">
                                        {p.title}
                                    </h3>
                                    <p className="text-slate-400 font-light leading-relaxed text-lg">
                                        {p.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* A4: OPERATING APPROACH */}
                <section className="py-32 bg-[#F8FAFC]">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="max-w-[800px] mb-20">
                            <SectionLabel text="METHOD" />
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0D2C51] mt-6">Operating Approach</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Engagement",
                                    text: "Confidential briefing to establish threat, liabilities, and operational constraints."
                                },
                                {
                                    step: "02",
                                    title: "Assessment",
                                    text: "Rigorous physical on-site assessment to establish threat model, parameters, systems analysis, and current electromagnetic spectrum survey."
                                },
                                {
                                    step: "03",
                                    title: "Delivery",
                                    text: "Presentation of the strategic defence architecture suggestions all the way up to a step-by-step implementation."
                                }
                            ].map((op) => (
                                <div
                                    key={op.step}
                                    className="
                                        bg-white p-10 border border-slate-200 
                                        transition-all duration-300
                                        hover:border-[#0D2C51] hover:-translate-y-1 hover:shadow-lg
                                        cursor-default
                                        flex flex-col h-full relative overflow-hidden
                                    "
                                >
                                    <span className="text-8xl font-bold text-slate-200 absolute -top-4 -right-4 select-none">
                                        {op.step}
                                    </span>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-[#0D2C51] mb-4">{op.title}</h3>
                                        <p className="text-slate-600 font-light leading-relaxed text-lg">{op.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* A5: CTA - Standardised */}
                <section className="py-32 bg-[#050910] text-center border-t border-white/5">
                    <div className="max-w-2xl mx-auto px-6">
                        <h2 className="text-white text-4xl font-bold mb-8 tracking-tight">
                            Partner with Proven Experience
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 font-light">
                            Secure the services of a senior counter UAS consultant.
                        </p>
                        <ContactTrigger
                            className="
                                px-12 py-5 bg-[#3B82F6] text-white 
                                text-lg font-bold tracking-wider uppercase
                                transition-all duration-300
                                hover:bg-red-600 hover:text-white
                            "
                        >
                            Start Contact
                        </ContactTrigger>
                    </div>
                </section>
            </main>
        </div>
    );
}
