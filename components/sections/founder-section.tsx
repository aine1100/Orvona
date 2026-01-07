"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import CircularBadge from "../ui/circular-badge/circular-badge";

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
                <div className="flex items-center gap-6 mb-16 lg:mb-24">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold tracking-widest text-white/40">
                        F
                    </div>
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] text-primary uppercase">
                        FOUNDER.
                    </span>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Image */}
                    <div className="relative aspect-[4/3] rounded-md overflow-hidden">
                        <Image
                            src="/about-villa.png"
                            alt="Founder at work"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="relative">

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-6 leading-tight">
                            CREATIVE VISION<br />BEHIND THE DESIGN
                        </h2>

                        {/* Description */}
                        <p className="text-muted text-base leading-relaxed mb-8">
                            Driven by a passion for design, our founder merges creativity with function to craft inspiring spaces.
                        </p>

                        {/* Benefits List (Mapping) */}
                        <ul className="space-y-4 mb-10">
                            {founderBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-muted text-sm">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Signature */}
                        <div className="border-t border-white/10 pt-6">
                            <p className="text-xs text-muted mb-2">Creative Director</p>
                            <div className="flex items-center gap-4">
                                {/* Signature SVG placeholder - you can replace with actual signature */}
                                <svg className="h-8 w-24 text-primary" viewBox="0 0 100 40" fill="none">
                                    <path
                                        d="M10 30 Q 20 10, 40 25 T 80 20"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <p className="text-white font-medium">Martin H. Dan</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
