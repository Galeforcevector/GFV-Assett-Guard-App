import React from 'react';
import { Target, Clock, Moon } from 'lucide-react';

export const StatsGrid = () => {
    const stats = [
        {
            icon: <Target className="w-8 h-8 text-brand-yellow" />,
            value: "+40%",
            label: "Lead Capture",
            desc: "More volume from same ad spend"
        },
        {
            icon: <Clock className="w-8 h-8 text-brand-green" />,
            value: "< 2m",
            label: "Response Time",
            desc: "Speed-to-lead automation"
        },
        {
            icon: <Moon className="w-8 h-8 text-brand-blue" />,
            value: "45%",
            label: "After Hours",
            desc: "Coverage when you sleep"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {stats.map((stat, i) => (
                <div key={i} className="glass-panel p-6 rounded-xl border border-white/10 flex flex-col items-center text-center hover:bg-white/5 transition-colors">
                    <div className="mb-4 p-3 bg-white/5 rounded-full border border-white/10">
                        {stat.icon}
                    </div>
                    <h4 className="text-3xl font-extrabold text-white mb-1 font-montserrat">{stat.value}</h4>
                    <p className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-2">{stat.label}</p>
                    <p className="text-xs text-gray-400">{stat.desc}</p>
                </div>
            ))}
        </div>
    );
};
