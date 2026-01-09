'use client';

import Link from 'next/link';

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-[800px] mx-auto px-6">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="text-sm text-text-muted hover:text-primary-navy transition-colors"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    >
                        ← Back to Home
                    </Link>
                </div>

                <h1 className="text-4xl font-bold text-primary-navy mb-8">Terms of Service</h1>

                <div className="space-y-8 text-slate-600 leading-relaxed">
                    <p className="text-sm text-text-muted">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Drone Defender Limited. These Terms of Service govern your use of our website and our advisory services.
                            By engaging with Drone Defender Limited, you agree to comply with these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">2. Scope of Services</h2>
                        <p>
                            Drone Defender Limited provides specialised counter-UAS (Unmanned Aircraft Systems) advisory, consultancy, and training services.
                            We offer independent assessments, strategy development, and guidance for high-risk sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">3. Confidentiality and Sensitive Information</h2>
                        <p>
                            Given the nature of our work, strict confidentiality is paramount. We abide by rigorous non-disclosure agreements (NDAs).
                            Both parties agree to treat all sensitive operational details, site vulnerabilities, and security strategies as classified or commercially sensitive information, not to be disclosed to third parties without express written consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">4. No Guarantee of Outcome</h2>
                        <p>
                            While we leverage extensive expertise and industry best practices, the security landscape is evolving.
                            Our advice is provided based on the information available at the time. We do not guarantee that the implementation of our recommendations will prevent all security breaches or drone incursions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">5. Advisory Only, No Commission on Equipment</h2>
                        <p>
                            We act as independent advisors. We do not sell hardware or software, nor do we accept commissions from manufacturers.
                            Our recommendations for equipment or vendors are made solely based on technical merit and suitability for your specific requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">6. Client Responsibilities</h2>
                        <p>
                            Clients are responsible for providing accurate and complete information regarding their site, existing security measures, and operational constraints.
                            The effectiveness of our advisory depends on the transparency and accuracy of this information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">7. Liability Limitation</h2>
                        <p>
                            To the maximum extent permitted by law, Drone Defender Limited shall not be liable for any indirect, incidental, or consequential damages arising out of or in connection with our services.
                            Our total liability for any claim shall be limited to the fees paid for the specific service engagement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">8. Intellectual Property</h2>
                        <p>
                            All reports, training materials, and strategic documents provided by Drone Defender Limited remain our intellectual property until full payment is received, at which point a licence for internal use is granted to the client.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">9. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of England and Wales.
                            Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">10. Contact Information</h2>
                        <p>
                            For any questions regarding these Terms of Service, please contact us at:
                        </p>
                        <p className="mt-4 font-medium text-primary-navy">
                            Email: <a href="mailto:enquiries@dronedefender.solutions" className="underline hover:text-primary-navy-soft">enquiries@dronedefender.solutions</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
