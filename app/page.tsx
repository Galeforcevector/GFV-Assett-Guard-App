'use client';

import React, { useState } from 'react';
import { LeakyBucket } from '../components/LeakyBucket';
import { ROICalculator } from '../components/ROICalculator';
import { StatsGrid } from '../components/StatsGrid';
import Link from 'next/link';

export default function ConversionEnginePage() {
    const [isOptimized, setIsOptimized] = useState(false);

    return (
        <main className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-green selection:text-brand-dark">

            {/* Navbar Placeholder */}
            <nav className="sticky top-0 z-50 bg-brand-blue/90 backdrop-blur-md p-4 border-b border-white/10">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link href="/" className="font-bold text-xl uppercase tracking-wider">Gale Force Vector</Link>
                    <Link href="#audit" className="bg-brand-green text-dark px-4 py-2 rounded font-bold text-sm">Get Audit</Link>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">

                <div className="text-center mb-16">
                    <div className="inline-block bg-brand-yellow text-brand-dark font-bold px-3 py-1 rounded-full text-xs uppercase mb-4">
                        Interactive Demo
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-montserrat">
                        Stop The Leak.
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See exactly how much revenue your current manual processes are costing you,
                        and watch what happens when you turn one switch.
                    </p>
                </div>

                {/* Interactive Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

                    {/* Left: Visualization */}
                    <div className="order-2 lg:order-1">
                        <LeakyBucket isOptimized={isOptimized} />
                    </div>

                    {/* Right: Calculator Widget */}
                    <div className="order-1 lg:order-2">
                        <ROICalculator onOptimizeToggle={setIsOptimized} />
                    </div>

                </div>

                {/* Stats Grid */}
                <div className="mb-24">
                    <h2 className="text-2xl font-bold text-center mb-8">System Performance</h2>
                    <StatsGrid />
                </div>

                {/* CTA */}
                <div id="audit" className="text-center bg-brand-blue rounded-2xl p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-glass-gradient opacity-20"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Ready to Seal the Deal?</h2>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Our systems function exactly like this simulation. We plug the leaks, automate the follow-up, and hand you closed deals.
                        </p>
                        <button className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
                            Book Your Architecture Call
                        </button>
                    </div>
                </div>

            </div>
        </main>
    );
}
