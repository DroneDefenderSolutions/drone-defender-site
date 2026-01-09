import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import SectionLabel from '../../components/SectionLabel';
import SplitSection from '../../components/SplitSection';
import ContactTrigger from '../../components/ContactTrigger';
import TrainingTicker from '../../components/TrainingTicker';

export default function TrainingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#0A0C0F]">
            <Header />

            <main>
                {/* 1. HERO - Already Updated */}
                <section className="relative h-[calc(100vh-90px)] min-h-[550px] w-full overflow-hidden bg-[#050910] flex items-center">
                    {/* Background - Compressed to right 60% */}
                    <div className="absolute top-0 right-0 bottom-0 w-3/5 z-0">
                        <Image
                            src="/images/training_hero_hq.png"
                            alt="Operational Training Centre"
                            fill
                            className="object-cover opacity-75"
                            style={{ objectPosition: 'left center' }}
                            priority
                            sizes="60vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050910] via-[#050910]/60 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050910] via-transparent to-transparent" />
                    </div>

                    <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl -mt-20">
                            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6 uppercase">
                                Operational <br />
                                Training <br />
                                <span className="text-[#3B82F6]"> & Readiness</span>
                            </h1>
                            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8 border-l-2 border-[#3B82F6] pl-6">
                                Specialist instruction for operators, commanders <br />
                                and decision makers on the front lines <br />
                                of the counter UAS mission.
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
                                Request Training Schedule
                            </ContactTrigger>
                        </div>
                    </div>
                </section>

                {/* 2. TRAINING TICKER */}
                <TrainingTicker />

                {/* 3. WHO WE TRAIN - Institutional Grid */}
                <section className="py-24 bg-[#F8FAFC] border-b border-slate-200">
                    <div className="max-w-[1400px] mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto mb-16">
                            <SectionLabel text="COHORTS" />
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0D2C51] mt-6 mb-4">Who We Train</h2>
                            <p className="text-slate-600 text-lg font-light">
                                Professional cohorts operating within high-risk and regulated environments.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                {
                                    title: "Corporate and Private Security",
                                    desc: "Protection teams securing high-value assets, corporate headquarters, and private estates against intrusive aerial surveillance."
                                },
                                {
                                    title: "CNI Security Teams",
                                    desc: "Personnel responsible for the protection of energy, water, and communications infrastructure against unauthorised drone incursions."
                                },
                                {
                                    title: "Correctional Staff",
                                    desc: "Security teams managing the detection and interdiction of contraband delivery via unmanned systems within prison perimeters."
                                },
                                {
                                    title: "Government and Specialist Roles",
                                    desc: "Personnel operating within sensitive departments requiring bespoke instruction on multi-domain threat assessment and mitigation."
                                },
                                {
                                    title: "Police Forces",
                                    desc: "Specialist units and front-line officers requiring operational awareness of aerial threats and legal response frameworks."
                                },
                                {
                                    title: "Aviation Security",
                                    desc: "Airport operators and airside security personnel tasked with maintaining airspace integrity and preventing runway incursions."
                                }
                            ].map((cohort) => (
                                <div key={cohort.title} className="flex flex-col border-t-2 border-[#0D2C51] pt-6">
                                    <h3 className="text-xl font-bold text-[#0D2C51] mb-3">{cohort.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                                        {cohort.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20">
                            <p className="text-slate-500 text-lg italic tracking-wide">
                                Training is delivered only to appropriate organisations and individuals operating within lawful authority.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. PARTNERSHIP - Mimics "Framework" SplitSection */}
                <SplitSection
                    title="Strategic Training Partnership"
                    imageSrc="/images/dd-training-ops-room.jpg"
                    imageAlt="Blue Lights Training Partnership"
                    imagePosition="right"
                    sectionLabel="ACCREDITATION"
                >
                    <div className="space-y-8 text-lg md:text-xl font-light leading-[1.8] text-slate-700">
                        <p>
                            We deliver our specialist curriculum in strategic partnership with BLD, ensuring all training meets the rigorous standards required by the legislation set and our clients needs.
                        </p>
                        <p>
                            This collaboration combines our subject matter expertise in drone defence with BLD's proven track record in delivering training for high-risk operations.
                        </p>
                    </div>
                </SplitSection>

                {/* 4. PROGRAMMES - Mimics "Services" Grid */}
                <section className="py-8 bg-[#F8FAFC] border-y border-slate-200">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="mb-20">
                            <SectionLabel text="CURRICULUM" />
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0D2C51] mt-6">Core Modules</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Operator Training",
                                    desc: "Technical instruction on detection systems, verification protocols and legal response measures."
                                },
                                {
                                    title: "On-Site Instruction",
                                    desc: "Practical training in your specific operating environment, building terrain familiarity."
                                },
                                {
                                    title: "Table Top Scenarios",
                                    desc: "Command-level exercises testing decision making under pressure without deployment costs."
                                },
                                {
                                    title: "Law Enforcement",
                                    desc: "Specialised modules on evidence handling, public safety and inter-agency coordination."
                                },
                                {
                                    title: "Executive Briefings",
                                    desc: "High-level strategic overviews of the threat landscape and organisational liability."
                                },
                                {
                                    title: "Estate Security",
                                    desc: "Discreet protection protocols for private residences and family office assets."
                                }
                            ].map((pillar) => (
                                <div
                                    key={pillar.title}
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
                                        {pillar.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-light">
                                        {pillar.desc}
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
                            Educate Your Force
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 font-light">
                            Equip your personnel with the knowledge to detect, assess, and respond to the drone threat.
                        </p>
                        <ContactTrigger
                            className="
                                px-12 py-5 bg-[#3B82F6] text-white 
                                text-lg font-bold tracking-wider uppercase
                                transition-all duration-300
                                hover:bg-red-600 hover:text-white
                            "
                        >
                            Request Training Schedule
                        </ContactTrigger>
                    </div>
                </section>
            </main>
        </div>
    );
}
