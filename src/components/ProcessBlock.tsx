import React from 'react';

export default function ProcessBlock() {
    const steps = ['DETECTION', 'ASSESSMENT', 'RESPONSE'];

    return (
        <div className="flex flex-col space-y-4 w-full max-w-sm">
            <h3 className="text-sm font-medium uppercase tracking-widest text-[#1E3A5F] mb-2 text-center">
                Detection to Response Framework
            </h3>

            <div className="relative flex flex-col items-center">
                {/* Vertical connecting line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#1E3A5F] -z-10 transform -translate-x-1/2"></div>

                {steps.map((step, index) => (
                    <div
                        key={step}
                        className="w-full bg-white py-6 mb-4 last:mb-0 transition-transform duration-300 hover:-translate-y-[1px]"
                        style={{
                            border: '2px solid #1E3A5F',
                        }}
                    >
                        <div className="text-center font-semibold text-[#0A0C0F] tracking-wider">
                            {step}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
