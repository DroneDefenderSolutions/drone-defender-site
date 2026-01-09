import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import SectionLabel from '../../components/SectionLabel';
import SplitSection from '../../components/SplitSection';
import ContactTrigger from '../../components/ContactTrigger';

export default function SectorsPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />

            <main>
                {/* S1: HERO - Institutionally Restrained */}
                <section className="
                    relative w-full overflow-hidden bg-[#050910] flex items-center
                    /* Mobile: Dynamic Viewport Height */
                    min-h-[calc(100svh-90px)] max-h-[800px]
                    /* Tablet */
                    md:min-h-[500px] md:max-h-[700px]
                    /* Desktop */
                    lg:h-[calc(100vh-90px)] lg:min-h-[550px] lg:max-h-none
                ">
                    {/* Background - Pure Dark Gradient, No Imagery */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050910] via-[#0B1221] to-[#050910]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050910_100%)] opacity-50" />
                    </div>

                    <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 py-12 sm:py-20 lg:py-0">
                        <div className="max-w-4xl lg:-mt-20">
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6 uppercase text-balance">
                                Sectors <br />
                                Served
                            </h1>
                            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8 border-l-2 border-[#3B82F6] pl-6 text-balance">
                                Advisory support for high-risk environments facing aerial threats.
                            </p>

                            <ContactTrigger
                                className="
                                    group relative overflow-hidden inline-block
                                    px-8 py-4 bg-white text-[#050910] 
                                    text-base font-bold tracking-wider uppercase
                                    transition-all duration-300
                                    hover:bg-red-600 hover:text-white
                                    min-h-[44px] flex items-center justify-center
                                "
                            >
                                Discuss Your Sector
                            </ContactTrigger>
                        </div>
                    </div>
                </section>

                {/* S2: SECTOR GRID */}
                <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="max-w-[1120px] mx-auto mb-16 text-center">
                            <SectionLabel text="INDUSTRIES" />
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0D2C51] mt-6">Specialised Environments</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Critical Infrastructure",
                                    id: "cni",
                                    desc: "Power stations, water treatment, and communications grids requiring always-on protection from disruption."
                                },
                                {
                                    title: "Correctional Facilities",
                                    id: "correctional",
                                    desc: "Prisons and detention centres facing the daily threat of contraband delivery by autonomous systems."
                                },
                                {
                                    title: "Law Enforcement",
                                    id: "police",
                                    desc: "Public safety teams managing airspace awareness at mass gatherings and critical events."
                                },
                                {
                                    title: "Private Estates",
                                    id: "estates",
                                    desc: "Family offices and high-net-worth residences requiring absolute privacy and discretion."
                                },
                                {
                                    title: "Aviation & FBOs",
                                    id: "aviation",
                                    desc: "Aviation facilities managing the complex risk of runway incursions and flight path safety."
                                },
                                {
                                    title: "Corporate Security",
                                    id: "corporate",
                                    desc: "Headquarters and data centres protecting intellectual property from surveillance and interruption."
                                }
                            ].map((sector) => (
                                <div key={sector.title} className="group bg-white border border-slate-200 p-8 transition-all duration-300 hover:border-[#0D2C51] hover:shadow-lg flex flex-col h-full">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#0D2C51] mb-3">{sector.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">{sector.desc}</p>
                                    </div>
                                    <Link
                                        href={`#${sector.id}`}
                                        className="text-[#3B82F6] font-semibold text-sm uppercase tracking-wider flex items-center group-hover:translate-x-1 transition-transform"
                                    >
                                        Jump to Analysis <span className="ml-2">→</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* S3: SECTOR DEEP DIVES */}

                {/* CNI */}
                <div id="cni" className="scroll-mt-24">
                    <SplitSection
                        title="Critical National Infrastructure"
                        imageSrc="/images/sectors_cni_gen.png"
                        imageAlt="CNI"
                        imagePosition="right"
                        sectionLabel="CNI"
                    >
                        <div className="space-y-6 text-lg font-light leading-[1.8] text-slate-700">
                            <p>
                                For energy, water, and telecommunications providers, the drone threat is existential. A single payload delivering a kinetic impact or cyber-injection can disrupt services for millions.
                            </p>
                            <p>
                                We assess the physical and electromagnetic gaps in your facility, designing hardening measures that integrate with your existing security without disrupting operations.
                            </p>
                        </div>
                    </SplitSection>
                </div>

                {/* Correctional */}
                <div id="correctional" className="scroll-mt-24">
                    <SplitSection
                        title="Correctional Facilities"
                        imageSrc="/images/sectors_correctional_real.png"
                        imageAlt="Prisons"
                        imagePosition="left"
                        sectionLabel="CORRECTIONAL"
                    >
                        <div className="space-y-6 text-lg font-light leading-[1.8] text-slate-700">
                            <p>
                                Prisons face a unique, high-frequency challenge: the delivery of contraband (drugs, phones, weapons) over perimeter walls. Traditional fences are obsolete against airborne deliveries.
                            </p>
                            <p>
                                Our advice focuses on delivery path analysis and the development of detection grids to provide early warning of approach to allow for interdiction before the payload reaches intended drop zone be that a landing window, exercise area or anywhere else inside the wall.
                            </p>
                        </div>
                    </SplitSection>
                </div>

                {/* Law Enforcement */}
                <div id="police" className="scroll-mt-24">
                    <SplitSection
                        title="Police and Law Enforcement"
                        imageSrc="/images/sectors_police_gen.png"
                        imageAlt="Police"
                        imagePosition="right"
                        sectionLabel="PUBLIC SAFETY"
                    >
                        <div className="space-y-6 text-lg font-light leading-[1.8] text-slate-700">
                            <p>
                                Managing airspace at mass gatherings requires rapid threat assessment and classification. Is it a hobbyist filming the crowd, or a hostile actor attempting to cause panic—an eventuality which would require immediate intervention?
                            </p>
                            <p>
                                We train command staff in logical decision-making that considers all relevant information, and operational staff to understand the nuances of identified threats and the appropriate responses for each situation. We provide instruction on gaining evidence from recovered equipment whilst adhering to legal frameworks and standards, ensuring that every intervention is proportionate, justified, lawful, and necessary.
                            </p>
                        </div>
                    </SplitSection>
                </div>

                {/* Private Estates */}
                <div id="estates" className="scroll-mt-24">
                    <SplitSection
                        title="Private Estates"
                        imageSrc="/images/sectors_estates_real.png"
                        imageAlt="Private Estates"
                        imagePosition="left"
                        sectionLabel="PRIVACY"
                    >
                        <div className="space-y-6 text-lg font-light leading-[1.8] text-slate-700">
                            <p>
                                For family offices and high-net-worth individuals, the drone is a tool of intrusion. Paparazzi and hostile surveillance undermine the sanctity of the private residence.
                            </p>
                            <p>
                                We design discreet detection capabilities that operate silently, alerting security teams to unwanted observation without alerting the intruder or disturbing the residents.
                            </p>
                        </div>
                    </SplitSection>
                </div>

                {/* Aviation */}
                <div id="aviation" className="scroll-mt-24">
                    <SplitSection
                        title="Airports and FBOs"
                        imageSrc="/images/sectors_aviation_gen.png"
                        imageAlt="Aviation"
                        imagePosition="right"
                        sectionLabel="AVIATION"
                    >
                        <div className="space-y-6 text-lg font-light leading-[1.8] text-slate-700">
                            <p>
                                Runway incursions pose a catastrophic risk to flight safety. The cost of closure is measured in millions; the cost of collision is incalculable.
                            </p>
                            <p>
                                We assist aviation security teams in establishing protocols that integrate C-UAS data into the existing air traffic management picture, ensuring coordinated responses to airspace breaches.
                            </p>
                        </div>
                    </SplitSection>
                </div>

                {/* Corporate */}
                <div id="corporate" className="scroll-mt-24 pb-24">
                    <SplitSection
                        title="Corporate Security"
                        imageSrc="/images/sectors_corporate_real.png"
                        imageAlt="Corporate"
                        imagePosition="left"
                        sectionLabel="ENTERPRISE"
                    >
                        <div className="space-y-6 text-lg font-light leading-[1.8] text-slate-700">
                            <p>
                                Headquarters and data centres are targets for industrial espionage. Drones can land on roofs to intercept Wi-Fi signals or use high-zoom optics to read screens through windows.
                            </p>
                            <p>
                                We conduct ground level to roof-top vulnerability assessments and spectrum surveys to identify exposure to technical surveillance, recommending countermeasures.
                            </p>
                        </div>
                    </SplitSection>
                </div>

                {/* S4: CTA */}
                <section className="py-16 lg:py-24 bg-[#050910] text-center border-t border-white/5">
                    <div className="max-w-2xl mx-auto px-6">
                        <h2 className="text-white text-4xl font-bold mb-6 tracking-tight">
                            Sector Specific Intelligence
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 font-light">
                            Discuss the unique threat parameters of your industry with the Principal Consultant.
                        </p>
                        <ContactTrigger
                            className="
                                px-10 py-4 bg-[#3B82F6] text-white 
                                text-base font-bold tracking-wider uppercase
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
