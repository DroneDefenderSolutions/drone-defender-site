import React from 'react';

export default function GovernanceBand() {
    const statements = [
        'Governance aligned',
        'Vendor neutral',
        'Confidentiality by default',
        'Evidence disciplined',
        'Operationally proven'
    ];

    return (
        <section style={{ backgroundColor: '#D9DCE1' }} className="py-8 border-t border-b border-[#C4C7CC]">
            <div className="max-w-[1480px] mx-auto px-6">
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-center">
                    {statements.map((statement, index) => (
                        <React.Fragment key={index}>
                            <span className="text-[#1E3A5F] font-medium text-lg whitespace-nowrap">
                                {statement}
                            </span>
                            {index < statements.length - 1 && (
                                <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[#C4C7CC]" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
