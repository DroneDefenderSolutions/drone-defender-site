'use client';

import React from 'react';

interface ContactTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function ContactTrigger({ className, children, onClick, ...props }: ContactTriggerProps) {
    return (
        <button
            onClick={(e) => {
                window.dispatchEvent(new Event('open-contact-modal'));
                if (onClick) onClick(e);
            }}
            className={className}
            {...props}
        >
            {children}
        </button>
    );
}
