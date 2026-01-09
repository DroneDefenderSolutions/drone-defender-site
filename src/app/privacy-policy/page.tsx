'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
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

                <h1 className="text-4xl font-bold text-primary-navy mb-8">Privacy Policy</h1>

                <div className="space-y-8 text-slate-600 leading-relaxed">
                    <p className="text-sm text-text-muted">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">1. Introduction</h2>
                        <p>
                            Drone Defender Limited ("we", "us", "our") is committed to protecting and respecting your privacy.
                            This policy explains how we collect, use, and protect your personal data when you use our website or services.
                            We operate in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">2. Information We Collect</h2>
                        <p className="mb-4">We may collect and process the following data about you:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Identity Data:</strong> Name, job title, and organisation.</li>
                            <li><strong>Contact Data:</strong> Email address, telephone number, and office details.</li>
                            <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, operating system, and platform.</li>
                            <li><strong>Usage Data:</strong> Information about how you use our website.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">3. How We Use Your Data</h2>
                        <p>We use your data to:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Respond to your enquiries regarding our consultancy and training services.</li>
                            <li>Manage our relationship with you as a client.</li>
                            <li>Comply with legal and regulatory obligations.</li>
                            <li>Improve our website and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">4. Data Security</h2>
                        <p>
                            We treat all client information with specific discretion given the sensitive nature of our work.
                            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">5. Your Legal Rights</h2>
                        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Request access to your personal data.</li>
                            <li>Request correction of your personal data.</li>
                            <li>Request erasure of your personal data.</li>
                            <li>Object to processing of your personal data.</li>
                            <li>Request restriction of processing your personal data.</li>
                            <li>Request transfer of your personal data.</li>
                            <li>Withdraw consent.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary-navy mb-4">6. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our data protection practices, please contact us at:
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
