'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AnimatedNavLink from './AnimatedNavLink';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsContactOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    useEffect(() => {
        const handleOpenContact = () => setIsContactOpen(true);
        window.addEventListener('open-contact-modal', handleOpenContact);
        return () => window.removeEventListener('open-contact-modal', handleOpenContact);
    }, []);

    const navItems = [
        { name: 'Consultancy', href: '/consultancy' },
        { name: 'Training', href: '/training' },
    ];

    const handleEnquireClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsContactOpen(true);
    };

    const closeOverlay = () => {
        setIsContactOpen(false);
        setTimeout(() => setFormSubmitted(false), 300);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary-navy shadow-lg py-0' : 'bg-primary-navy py-0'
                    }`}
                style={{ height: '90px' }}
            >
                <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
                    {/* Logo - Increased size by another ~50% from previous 270px width to roughly 400px base scale visually if needed, but constraint is bounds. 
              User asked for 50% increase *relative to current*.
              Previous was 270w. Let's bump to 320w render size in CSS or equivalent.
          */}
                    <Link
                        href="/"
                        className="flex items-center z-10 pl-2"
                        scroll={true}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    >
                        <Image
                            src="/logos/drone-defender-white.png"
                            alt="Drone Defender"
                            width={350}
                            height={105}
                            className="h-[80px] w-auto"
                            priority
                        />
                    </Link>



                    {/* Center Navigation */}
                    <nav className="hidden lg:flex items-center gap-16 absolute left-1/2 transform -translate-x-1/2 h-full">
                        {navItems.map((item) => (
                            <AnimatedNavLink
                                key={item.href}
                                href={item.href}
                                label={item.name.toUpperCase()}
                            />
                        ))}
                    </nav>

                    {/* Enquire Button */}
                    <div className="flex items-center gap-4 z-10">
                        <button
                            onClick={handleEnquireClick}
                            className="
                                px-8 py-3 
                                bg-white 
                                text-primary-navy 
                                border border-primary-navy
                                text-base font-bold uppercase tracking-wider 
                                rounded-sm
                                transition-all duration-300 
                                hover:bg-red-600 
                                hover:text-white 
                                hover:border-red-600
                                hover:shadow-lg
                            "
                        >
                            Enquire
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden text-white p-2">
                        <div className="space-y-1.5">
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* FULL PAGE CONTACT OVERLAY */}
            {isContactOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-deep-background/90 backdrop-blur-sm transition-opacity"
                        onClick={closeOverlay}
                    />
                    <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl p-8 md:p-12 m-4 animate-fade-in-up overflow-y-auto max-h-[90vh]">
                        <button
                            onClick={closeOverlay}
                            className="absolute top-6 right-6 text-text-muted hover:text-primary-navy transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {!formSubmitted ? (
                            <>
                                <h2 className="text-3xl font-bold text-primary-navy mb-2">Direct Enquiry</h2>
                                <p className="text-text-muted mb-8">All enquiries are reviewed directly by the Principal Consultant.</p>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* ... same form fields ... */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-primary-navy mb-2">Full Name</label>
                                            <input type="text" required className="w-full p-3 bg-soft-steel/30 border border-line-grey rounded focus:border-primary-navy focus:outline-none transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-primary-navy mb-2">Organisation (Optional)</label>
                                            <input type="text" className="w-full p-3 bg-soft-steel/30 border border-line-grey rounded focus:border-primary-navy focus:outline-none transition-colors" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-primary-navy mb-2">Work Email</label>
                                            <input type="email" required className="w-full p-3 bg-soft-steel/30 border border-line-grey rounded focus:border-primary-navy focus:outline-none transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-primary-navy mb-2">Phone (Optional)</label>
                                            <input type="tel" className="w-full p-3 bg-soft-steel/30 border border-line-grey rounded focus:border-primary-navy focus:outline-none transition-colors" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-primary-navy mb-2">Nature of Enquiry</label>
                                        <select required className="w-full p-3 bg-soft-steel/30 border border-line-grey rounded focus:border-primary-navy focus:outline-none transition-colors">
                                            <option value="">Select Nature of Enquiry...</option>
                                            <option>Consultancy</option>
                                            <option>Training</option>
                                            <option>CNI Site Defence</option>
                                            <option>Correctional Facility</option>
                                            <option>Private Estate / VIP</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-primary-navy mb-2">Subject</label>
                                        <input type="text" required className="w-full p-3 bg-soft-steel/30 border border-line-grey rounded focus:border-primary-navy focus:outline-none transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-primary-navy mb-2">Message</label>
                                        <textarea required rows={4} className="w-full p-3 bg-soft-steel/30 border border-line-grey rounded focus:border-primary-navy focus:outline-none transition-colors resize-none"></textarea>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" id="urgent" className="w-4 h-4 text-primary-navy border-line-grey rounded focus:ring-primary-navy" />
                                        <label htmlFor="urgent" className="text-sm text-text-muted">This matter is time sensitive</label>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <button type="submit" className="px-8 py-3 bg-primary-navy text-white font-bold uppercase tracking-wider rounded shadow hover:bg-red-600 transition-all duration-300">Send Enquiry</button>
                                        <button type="button" onClick={closeOverlay} className="text-sm text-text-muted hover:text-primary-navy underline decoration-transparent hover:decoration-primary-navy transition-all">Close</button>
                                    </div>
                                </form>
                            </>
                        ) : (
                            // Success state same as before
                            <div className="text-center py-16">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-primary-navy mb-2">Thank You</h3>
                                <p className="text-text-muted mb-8 text-center max-w-md mx-auto">
                                    Thank you for your submission. A member of our team will be in touch in 48 hours. We look forward to working with you.
                                </p>
                                <button
                                    onClick={closeOverlay}
                                    className="px-6 py-2 border border-line-grey text-primary-navy font-semibold rounded hover:bg-soft-steel/50 transition-colors"
                                >
                                    Close Window
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
