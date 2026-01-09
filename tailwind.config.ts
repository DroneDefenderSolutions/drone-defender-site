import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    navy: '#12345A',
                    'navy-soft': '#163B68',
                },
                deep: {
                    background: '#050910',
                    slate: '#1A2330',
                },
                soft: {
                    steel: '#E6ECF5',
                },
                line: {
                    grey: '#CFD6E0',
                },
                text: {
                    body: '#111827',
                    muted: '#4B5563',
                    inverted: '#FFFFFF',
                },
                alert: {
                    accent: '#F97316',
                }
            },
            fontFamily: {
                sans: [
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"SF Pro Text"',
                    '"Segoe UI"',
                    'sans-serif',
                ],
            },
            letterSpacing: {
                widest: '0.2em',
            },
        },
    },
    plugins: [],
};
export default config;
