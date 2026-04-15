import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    weight: ['400', '500', '700', '900']
});

export const metadata: Metadata = {
    title: 'Conversion Engine | Gale Force Vector',
    description: 'Interactive ROI simulator for automated lead conversion.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={montserrat.variable}>{children}</body>
        </html>
    );
}
