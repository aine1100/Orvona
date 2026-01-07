"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Button from "@/components/ui/button/button";

export default function AboutSection() {
    return (
        <section id="about" className="relative py-20 lg:py-32 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#141414] text-white overflow-hidden">
            {/* Background/Layout Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

            <div className="max-w-[1400px] mx-auto">
                {/* Header Label */}
                <div className="flex items-center gap-6 mb-16 lg:mb-24">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold tracking-widest text-white/40">
                        A
                    </div>
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] text-primary uppercase">
                        ABOUT.
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-8 md:gap-10">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight uppercase">
                            BUILDING MODERN <br className="hidden md:block" /> DREAMS
                        </h2>

                        <p className="text-muted text-sm md:text-base leading-relaxed max-w-xl">
                            At Ornava, we merge creativity and functionality to design spaces
                            that reflect your vision. We turn ordinary areas into extraordinary
                            experiences, where every detail tells a story.
                        </p>

                        <ul className="flex flex-col gap-4">
                            {[
                                "Bespoke interior solutions.",
                                "Modern and timeless design vision.",
                                "Design that tells your story.",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-sm md:text-base font-medium text-white/80">
                                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4">
                            <Button variant="outline" className="px-10 py-6 text-[10px] md:text-xs tracking-[0.2em]">
                                READ MORE
                            </Button>
                        </div>
                    </div>

                    {/* Right Visuals */}
                    <div className="relative group">
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/5">
                            <Image
                                src="/about-villa.png"
                                alt="Modern Villa Architecture"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute  -left-4 md:-left-8 -bottom-8 md:-left-12 md:-bottom-12 bg-[#121212] p-8 md:p-10 border border-white/5 shadow-2xl z-20 animate-float">
                            <span className="block text-[10px] md:text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase mb-2">
                                Years of <br /> experience
                            </span>
                            <span className="text-6xl md:text-8xl font-medium text-primary leading-none">
                                15
                            </span>
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to top mock dot in corner */}
            <div className="absolute top-10 left-10 hidden lg:block">
                <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>

            {/* Right bottom scroll to top indicator */}
            <div className="absolute right-10 bottom-10 hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-primary transition-colors cursor-pointer group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/60 group-hover:text-primary transition-colors">
                    <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </section>
    );
}
