'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LeakyBucket = ({ isOptimized }: { isOptimized: boolean }) => {
    return (
        <div className="relative w-full h-[400px] flex items-center justify-center bg-brand-dark/50 rounded-xl overflow-hidden glass-panel border border-white/10">

            {/* Bucket Container */}
            <div className="relative z-10 w-48 h-56">
                {/* Bucket Body SVG */}
                <svg width="100%" height="100%" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Main Bucket Shape */}
                    <path
                        d="M20 40 L40 220 H160 L180 40"
                        stroke="white"
                        strokeWidth="4"
                        fill="rgba(255,255,255,0.05)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Rim */}
                    <ellipse cx="100" cy="40" rx="80" ry="15" stroke="white" strokeWidth="4" fill="none" />

                    {/* Fluid Level */}
                    <motion.path
                        d="M25 55 L40 215 H160 L175 55"
                        fill={isOptimized ? "#50C878" : "#EF4444"} // Green vs Red based on state
                        fillOpacity="0.6"
                        animate={{
                            height: isOptimized ? "100%" : "40%",
                            fill: isOptimized ? "#50C878" : "#EF4444"
                        }}
                        transition={{ duration: 1.5 }}
                    />
                </svg>

                {/* Leak Holes - Only visible when NOT optimized */}
                <AnimatePresence>
                    {!isOptimized && (
                        <>
                            {/* Hole 1 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute left-[50px] bottom-[40px] w-2 h-2 bg-black rounded-full"
                            />
                            {/* Hole 2 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute right-[50px] bottom-[60px] w-2 h-2 bg-black rounded-full"
                            />
                        </>
                    )}
                </AnimatePresence>
            </div>

            {/* Leaking Dollars Animation */}
            <AnimatePresence>
                {!isOptimized && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(5)].map((_, i) => (
                            <DollarBill key={i} delay={i * 0.8} xPosition={40 + (i * 20) % 60} />
                        ))}
                        {[...Array(5)].map((_, i) => (
                            <DollarBill key={`right-${i}`} delay={i * 0.9 + 0.5} xPosition={140 - (i * 10) % 40} />
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* Label */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className={`text-lg font-bold font-montserrat ${isOptimized ? 'text-brand-green' : 'text-gale-red'}`}>
                    {isOptimized ? 'REVENUE SEALED' : 'REVENUE LEAKING'}
                </span>
            </div>
        </div>
    );
};

// Falling Dollar Component
const DollarBill = ({ delay, xPosition }: { delay: number; xPosition: number }) => {
    return (
        <motion.div
            initial={{ y: 250, opacity: 1, x: xPosition, scale: 1 }}
            animate={{
                y: 400,
                opacity: [1, 1, 0],
                rotate: [0, 45, -45, 0],
                x: xPosition + (Math.random() * 40 - 20)
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
            }}
            className="absolute text-gale-red font-bold text-xl"
        >
            $
        </motion.div>
    );
};
