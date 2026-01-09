import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GovernanceTicker from '../../components/GovernanceTicker';
import SplitSection from '../../components/SplitSection';
import SectionLabel from '../../components/SectionLabel';
import ContactTrigger from '../../components/ContactTrigger';

export default function ConsultancyPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <main>
                {/* 1. HERO - Static, Authoritative, Government Scale - VIEWPORT FITTED */}
                <section className="relative h-[calc(100vh-90px)] min-h-[550px] w-full overflow-hidden bg-[#050910] flex items-center">
                    {/* Background - Stable, no motion */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/consultancy_split.jpg"
                            alt="Strategic Command Centre"
                            fill
                            className="object-cover opacity-50 mix-blend-overlay"
                            style={{ objectPosition: '65% 20%' }}
                            priority
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050910] via-[#050910]/70 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050910] via-transparent to-transparent" />
                    </div>

                    <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl">
                            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6 uppercase">
                                Defence <br />
                                Architecture <br />
                                <span className="text-[#3B82F6]"> & Oversight</span>
                            </h1>
                            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8 border-l-2 border-[#3B82F6] pl-6">
                                Specialised counter-UAS consulting for high-risk environments.
                                Uncompromising protection strategies for the real world.
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
                                Start Engagement
                            </ContactTrigger>
                        </div>
                    </div>
                </section>

                {/* 2. GOVERNANCE TICKER */}
                <GovernanceTicker />

                {/* 3. FRAMEWORK - Refined Typography, Static Anchor */}
                <SplitSection
                    title="From Assessment to Integration"
                    imageSrc="/images/consultancy_framework_new.png"
                    imageAlt="Consultancy Framework"
                    imagePosition="right"
                    sectionLabel="FRAMEWORK"
                >
                    <div className="space-y-8 text-lg md:text-xl font-light leading-[1.8] text-slate-700">
                        <p>
                            Our engagement model ensures recommendations are rooted in operational reality.
                            We move methodically from initial threat assessment through to strategic design and integration.
                        </p>
                        <p>
                            We operate as a strictly vendor-neutral entity. Technology selection is driven solely
                            by your specific threat profile, not market incentives.
                        </p>
                    </div>
                </SplitSection>

                {/* 4. SERVICES - Informational Grid, No Dead Links */}
                <section className="py-8 bg-[#F8FAFC] border-y border-slate-200">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="mb-20">
                            <SectionLabel text="SERVICES" />
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0D2C51] mt-6">Detailed Capabilities</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Operational Risk Assessments",
                                    desc: "Evaluation of physical and digital security vectors to identify specific UAS vulnerabilities."
                                },
                                {
                                    title: "Counter UAS Strategy",
                                    desc: "Development of layered defence architectures integrating mitigation within legal frameworks."
                                },
                                {
                                    title: "Policy Support",
                                    desc: "Drafting of governance documentation, rules of engagement, and compliance frameworks."
                                },
                                {
                                    title: "Technology Selection",
                                    desc: "Independent, vendor-neutral advisory to identify the most appropriate sensor and effector mix."
                                },
                                {
                                    title: "Integration Oversight",
                                    desc: "Technical monitoring of vendor installation and calibration to ensure operational readiness."
                                },
                                {
                                    title: "Incident Response Planning",
                                    desc: "Creation of detailed SOPs for detection, verification, and response phases."
                                }
                            ].map((service) => (
                                <div
                                    key={service.title}
                                    className="
                                        group bg-white p-10 
                                        border border-slate-200
                                        hover:border-[#0D2C51] hover:shadow-lg hover:-translate-y-1
                                        transition-all duration-300 ease-out
                                        cursor-default
                                        flex flex-col h-full
                                    "
                                >
                                    <h3 className="text-xl font-bold text-[#0D2C51] mb-4 group-hover:text-[#3B82F6] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-light">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. EXPERIENCE - Profiles, High Contrast */}
                <section className="pt-8 pb-24 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0D2C51] mb-20">Example Profiles</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                {
                                    title: "Critical Infrastructure",
                                    desc: "Multi-layer C-UAS shield for a high-priority energy facility. Integrated radar, Radio Frequency detection."
                                },
                                {
                                    title: "Correctional Facility",
                                    desc: "Contraband delivery strategy to secure perimeters. Focus on automated delivery paths."
                                },
                                {
                                    title: "Executive Estate",
                                    desc: "Discreet early warning systems for a family home or office. Prioritising privacy with a low electronic profile."
                                }
                            ].map((study) => (
                                <div key={study.title} className="flex flex-col border-t-2 border-[#0D2C51] pt-6">
                                    <h3 className="text-2xl font-bold text-[#0D2C51] mb-4">{study.title}</h3>
                                    <p className="text-base text-slate-600 font-medium leading-relaxed max-w-sm">
                                        {study.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. CTA - Final Authority */}
                <section className="py-32 bg-[#050910] text-center border-t border-white/5">
                    <div className="max-w-2xl mx-auto px-6">
                        <h2 className="text-white text-4xl font-bold mb-8 tracking-tight">
                            Secure Specialist Consultancy
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 font-light">
                            Engage directly with the Principal Consultant to discuss requirements.
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
