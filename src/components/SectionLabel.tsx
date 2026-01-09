import React from 'react';

interface SectionLabelProps {
    text: string;
    className?: string;
    color?: string;
}

export default function SectionLabel({ text, className = "", color }: SectionLabelProps) {
    return (
        <div
            className={`mb-4 text-sm font-medium uppercase tracking-[0.12em] ${color || "text-[#1E3A5F]"} ${className}`}
        >
            {text}
        </div>
    );
}
