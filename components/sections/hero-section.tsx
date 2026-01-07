"use client";

import { Mouse, ChevronDown } from "lucide-react";
import Button from "@/components/ui/button/button";
import CircularBadge from "@/components/ui/circular-badge/circular-badge";

export default function HeroSection() {
    return (
        <section className="relative h-[100dvh] w-full flex items-center justify-start px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden bg-black text-white">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{ backgroundImage: 'url("/hero-bg.png")' }}
            >
                <div className="absolute inset-0 bg-black/60 md:bg-black/50 lg:bg-black/40" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] pt-20 md:pt-10">
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
                    <h4 className="text-[10px] md:text-[11px] font-medium tracking-[0.4em] md:tracking-[0.5em] text-primary uppercase animate-in fade-in slide-in-from-left-4 duration-700">
                        SUSTAINABLE PROJECT
                    </h4>
                    <h1 className="text-[40px] sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[110px] font-medium tracking-tight leading-[1.1] md:leading-[0.9] animate-in fade-in slide-in-from-left-8 duration-1000">
                        CONTEMPORARY <span className="block mt-1 md:mt-2">VILLA LIVING</span>
                    </h1>
                    <div className="mt-4 md:mt-8 lg:mt-10 animate-in fade-in slide-in-from-bottom-4 duration-1200 delay-300">
                        <Button variant="outline" className="px-10 md:px-14 py-6 text-[10px] md:text-xs tracking-[0.2em] w-full sm:w-auto">
                            EXPLORE PROJECT
                        </Button>
                    </div>
                </div>
            </div>

            {/* Circular Badge - Optimized for larger screens */}
            <div className="absolute right-12 md:right-24 bottom-[15%] hidden lg:block animate-in fade-in zoom-in duration-1000 delay-500">
                <CircularBadge />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="relative flex items-center justify-center">
                    <Mouse className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <ChevronDown className="absolute -bottom-4 w-4 h-4 text-white animate-bounce" />
                </div>
            </div>

            {/* Side Progress (Mock) - Hidden on mobile for cleaner look */}
            <div className="absolute left-6 md:left-12 bottom-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-6 md:gap-8">
                <div className="relative flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                    <div className="absolute w-4 h-4 rounded-full border border-white/20 animate-pulse" />
                </div>
                <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />
                <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />
            </div>
        </section>
    );
}
