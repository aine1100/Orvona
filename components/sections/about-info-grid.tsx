"use client";

import { Check } from "lucide-react";

const expertiseItems = [
    "Commercial and office developments",
    "Institutional and educational facilities",
    "Healthcare and medical buildings",
    "Industrial and operational facilities",
    "Religious and community buildings",
    "Mixed-use and specialty projects"
];

const values = [
    {
        title: "Communication",
        desc: "We prioritize direct and transparent reporting throughout the design process."
    },
    {
        title: "Coordination",
        desc: "Seamless integration across all disciplines to ensure construction-ready plans."
    },
    {
        title: "Efficiency",
        desc: "Reducing delays through proactive regulatory group engagement and review."
    }
];

export default function AboutInfoGrid() {
    return (
        <section className="relative py-20 lg:py-32 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#111111] text-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-3 gap-16 lg:gap-12">
                    
                    {/* Column 1: Expertise */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">Capabilities</span>
                            <h2 className="text-2xl font-medium uppercase tracking-tight">Comprehensive Expertise</h2>
                        </div>
                        <ul className="flex flex-col gap-4">
                            {expertiseItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/50 group">
                                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                                    <span className="group-hover:text-white/80 transition-colors uppercase tracking-wide text-[11px] font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Commitment */}
                    <div className="lg:col-span-2 flex flex-col gap-12">
                        <div className="flex flex-col gap-4">
                            <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">Core Values</span>
                            <h2 className="text-2xl font-medium uppercase tracking-tight">Our Commitment to Excellence</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="md:col-span-2">
                                <p className="text-white/60 text-base leading-relaxed italic border-l border-primary/30 pl-6">
                                    "We emphasize clear communication, proactive coordination, and timely responses to plan review comments, helping reduce delays and minimize revisions. Our integrated structure allows us to deliver complex, multi-discipline projects with efficiency and accountability."
                                </p>
                            </div>
                            
                            {values.map((v, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{v.title}</h4>
                                    <p className="text-xs text-white/40 leading-relaxed font-medium">
                                        {v.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Background Detail */}
            <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-white/10 to-transparent" />
        </section>
    );
}
