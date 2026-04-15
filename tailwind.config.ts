import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-blue': '#003366',
                'brand-green': '#50C878',   // "Gale Force Green"
                'brand-yellow': '#FFCC00',
                'brand-dark': '#0a0a0a',    // Dark theme bg
                'gale-red': '#EF4444',      // High contrast red for leaks
            },
            fontFamily: {
                montserrat: ['var(--font-montserrat)', 'sans-serif'],
            },
            backgroundImage: {
                'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
            },
            boxShadow: {
                'glass': '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            },
        },
    },
    plugins: [],
};
export default config;
