'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ContactTrigger from '../../components/ContactTrigger';

export default function CapabilityStatementPage() {
    const [accessKey, setAccessKey] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [error, setError] = useState(false);

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        if (accessKey === 'Colin26') {
            setIsAuthorized(true);
            setError(false);
        } else {
            setError(true);
            // Shake effect or feedback
            setTimeout(() => setError(false), 1000);
        }
    };

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#050910]">
            {/* Left Column: Info */}
            <div className="relative flex flex-col justify-start p-8 md:p-16 lg:p-24 !pt-6 md:!pt-8 lg:!pt-10 overflow-hidden">
                {/* Content */}
                <div className="relative z-10 max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Capability <br /> Statement
                        </h1>
                        <div className="h-0.5 w-16 bg-[#3B82F6] mb-12" />

                        <p className="text-slate-400 text-[11px] font-light leading-relaxed mb-8 uppercase tracking-wider">
                            This document contains sensitive operational methodology and proprietary governance frameworks. It is reserved for qualified partners and governmental agencies.
                        </p>

                        <p className="text-slate-500 text-base mb-12 italic">
                            If you require access and do not have a key, please contact us directly.
                        </p>

                        <ContactTrigger
                            className="
                                inline-block px-10 py-4 
                                bg-white/5 border border-white/20 
                                text-white text-sm font-bold tracking-widest uppercase
                                hover:bg-white hover:text-[#050910]
                                transition-all duration-300
                            "
                        >
                            Request Access
                        </ContactTrigger>
                    </motion.div>
                </div>


                {/* Subtle Background Pattern/Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] pointer-events-none" />
            </div>

            {/* Right Column: Key Entry */}
            <div className="bg-[#F8FAFC] flex items-start justify-center p-8 md:p-16 !pt-6 md:!pt-10">
                <div className="w-full max-w-md">
                    <AnimatePresence mode="wait">
                        {!isAuthorized ? (
                            <motion.div
                                key="login"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="block text-[#0D2C51] text-xs font-bold tracking-[0.2em] uppercase mb-12">
                                    Private Access Barrier
                                </span>

                                <h2 className="text-2xl font-bold text-[#0D2C51] mb-2 uppercase tracking-tight">
                                    Enter Access Key
                                </h2>

                                <form onSubmit={handleVerify} className="mt-8 space-y-8">
                                    <div className="relative">
                                        <input
                                            type="password"
                                            value={accessKey}
                                            onChange={(e) => setAccessKey(e.target.value)}
                                            placeholder="Key"
                                            className={`
                                                w-full bg-transparent border-b-2 py-4 text-xl
                                                placeholder:text-slate-300 focus:outline-none transition-all duration-300
                                                text-[#0D2C51]
                                                ${error ? 'border-red-500 animate-shake' : 'border-slate-200 focus:border-[#3B82F6]'}
                                            `}
                                        />
                                        {error && (
                                            <span className="absolute left-0 -bottom-6 text-xs text-red-500 font-bold uppercase tracking-wider">
                                                Invalid key—Verification failed.
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="
                                            group flex items-center gap-4
                                            text-[#0D2C51] text-lg font-bold 
                                            transition-all duration-300 hover:gap-6
                                        "
                                    >
                                        View Statement
                                        <svg
                                            className="w-6 h-6 transform transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-[#0D2C51] mb-4">Access Granted</h2>
                                <p className="text-slate-600 mb-10">You have been verified. Click below to view the Capability Statement.</p>

                                <a
                                    href="/documents/capability-statement.pdf" // Placeholder or actual path
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        inline-block px-12 py-5 bg-[#0D2C51] text-white 
                                        text-lg font-bold uppercase tracking-wider
                                        hover:bg-red-600 transition-all duration-300
                                        shadow-lg hover:shadow-xl
                                    "
                                >
                                    Download Document
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

        </main>
    );
}
