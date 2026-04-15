'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ROICalculator = ({
    onOptimizeToggle
}: {
    onOptimizeToggle: (isOptimized: boolean) => void
}) => {
    // State
    const [adSpend, setAdSpend] = useState(5000);
    const [convRate, setConvRate] = useState(2.5);
    const [dealValue, setDealValue] = useState(1500);
    const [isOptimized, setIsOptimized] = useState(false);

    // Constants
    const OPTIMIZATION_BOOST = 1.4; // 40% lift from "Lead Capture" stat

    // Metrics
    const projectedRevenue = Math.round((adSpend / 50) * (convRate / 100) * dealValue); // Assuming $50 CPC for logic
    const optimizedRevenue = Math.round(projectedRevenue * OPTIMIZATION_BOOST);
    const leakedRevenue = optimizedRevenue - projectedRevenue;

    // Handlers
    const handleToggle = () => {
        setIsOptimized(!isOptimized);
        onOptimizeToggle(!isOptimized);
    };

    return (
        <div className="w-full bg-brand-dark/80 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-glass">
            <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">ROI Simulator</h2>

            {/* Sliders */}
            <div className="space-y-6 mb-8">

                {/* Ad Spend */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Monthly Ad Spend</span>
                        <span className="text-brand-yellow font-bold">${adSpend.toLocaleString()}</span>
                    </div>
                    <input
                        type="range"
                        min="1000"
                        max="50000"
                        step="1000"
                        value={adSpend}
                        onChange={(e) => setAdSpend(parseInt(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                    />
                </div>

                {/* Conversion Rate */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Current Conv. Rate</span>
                        <span className="text-white font-bold">{convRate}%</span>
                    </div>
                    <input
                        type="range"
                        min="0.5"
                        max="10"
                        step="0.1"
                        value={convRate}
                        onChange={(e) => setConvRate(parseFloat(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                    />
                </div>

                {/* Deal Value */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Avg. Deal Value</span>
                        <span className="text-white font-bold">${dealValue.toLocaleString()}</span>
                    </div>
                    <input
                        type="range"
                        min="500"
                        max="10000"
                        step="500"
                        value={dealValue}
                        onChange={(e) => setDealValue(parseInt(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                    />
                </div>

            </div>

            <hr className="border-white/10 mb-6" />

            {/* Main Stats Display */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Current Revenue</p>
                    <p className="text-xl font-bold text-white">${projectedRevenue.toLocaleString()}</p>
                </div>

                {/* Optimization Toggle Area */}
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs uppercase font-bold transition-colors ${isOptimized ? 'text-brand-green' : 'text-gray-500'}`}>
                            Optimization
                        </span>
                        <button
                            onClick={handleToggle}
                            className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isOptimized ? 'bg-brand-green' : 'bg-white/20'}`}
                        >
                            <motion.div
                                className="w-4 h-4 bg-white rounded-full shadow-sm"
                                animate={{ x: isOptimized ? 24 : 0 }}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* The Big Number */}
            <div className="text-center bg-black/20 rounded-lg p-4 border border-white/5">
                <AnimatePresence mode="wait">
                    {isOptimized ? (
                        <motion.div
                            key="optimized"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <p className="text-sm text-brand-green uppercase font-bold mb-1">Potential Revenue Unlocked</p>
                            <h3 className="text-4xl font-extrabold text-brand-green font-montserrat">
                                ${optimizedRevenue.toLocaleString()}
                            </h3>
                            <p className="text-xs text-brand-green/80 mt-1">+${leakedRevenue.toLocaleString()} recovered</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="leaked"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <p className="text-sm text-gale-red uppercase font-bold mb-1">Monthly Revenue Leaking</p>
                            <h3 className="text-4xl font-extrabold text-gale-red font-montserrat">
                                -${leakedRevenue.toLocaleString()}
                            </h3>
                            <p className="text-xs text-gale-red/80 mt-1">Activate optimization to recover</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    );
};
