"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import CircularBadge from "../ui/circular-badge/circular-badge";
import SectionHeader from "../ui/section-header";

// Benefits data for mapping
const founderBenefits = [
    "Bespoke interior solutions.",
    "Modern and timeless design vision.",
    "Design that tells your story.",
];

export default function FounderSection() {
    return (
        <section className="py-24 lg:py-32 bg-[#202020] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">

                {/* Header */}
                <SectionHeader title="Founder." letter="F" />

                {/* Content Grid */}
                <div className="grid w-full lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">

                    {/* Left: Image */}
                    <div className="relative min-h-[400px] w-full lg:min-h-full rounded-sm overflow-hidden border border-white/5 shadow-2xl group">
                        <Image
                            src="/spink.png"
                            alt="Founder of K&C Design"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Right: Content */}
                    <div className="relative flex flex-col gap-8">
                        <div>
                            <span className="text-primary text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase block mb-4">
                                Personal Commitment
                            </span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight uppercase">
                                Designing Your Vision <br /> with K&C Design
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-6 text-white/50 text-[15px] leading-relaxed italic border-l-2 border-primary/30 pl-8 py-2">
                            <p>
                                “At K&C Design, our mission is simple: to provide integrated, high-quality design and engineering solutions that bring our clients’ visions to life. From architecture and civil engineering to MEP, fire protection, interior design, and landscape architecture, we coordinate every aspect of your project under one roof to ensure clarity, efficiency, and exceptional results."
                            </p>
                            <p>
                                "Whether it’s a new building, a renovation, or an expansion, our team works closely with you through every phase—from concept and permitting to construction and completion. We don’t just design buildings—we create spaces that inspire, perform, and stand the test of time.”
                            </p>
                        </div>

                        {/* Core Values List */}

                        {/* Signature */}
                        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                            <div>
                                <h4 className="text-white font-medium text-lg tracking-tight">Chad Spink</h4>
                                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">Owner, K&C Design</p>
                            </div>
                            <svg className="h-10 w-28 text-primary opacity-60" viewBox="0 0 100 40" fill="none">
                                <path
                                    d="M10 30 Q 20 10, 40 25 T 80 20"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
