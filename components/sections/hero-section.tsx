"use client";

import { Mouse, ChevronDown } from "lucide-react";
import Button from "@/components/ui/button/button";
import CircularBadge from "@/components/ui/circular-badge/circular-badge";
import { useEffect, useState } from "react";

// Animation component for line-by-line reveal
const AnimatedLine = ({ children, delay = 0, className = "" }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-1000 ease-out ${className} ${
        show 
          ? 'opacity-100 translate-y-0 translate-x-0' 
          : 'opacity-0 translate-y-8 -translate-x-4'
      }`}
    >
      {children}
    </div>
  );
};

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
                    <AnimatedLine delay={300}>
                        <h4 className="text-[10px] md:text-[11px] font-medium tracking-[0.4em] md:tracking-[0.5em] text-primary uppercase">
                            SUSTAINABLE PROJECT
                        </h4>
                    </AnimatedLine>

                    {/* Main Heading with Line-by-Line Animation */}
                    <div className="text-[40px] font-medium tracking-tight leading-[1.1] md:leading-[1.1]">
                        <AnimatedLine delay={800} className="block">
                            DESIGN THAT WORKS
                        </AnimatedLine>
                        <AnimatedLine delay={1300} className="block">
                            EFFICIENT SPACES
                        </AnimatedLine>
                        <AnimatedLine delay={1800} className="block mt-2 md:mt-4">
                            CONTROLLED COSTS
                        </AnimatedLine>
                        <AnimatedLine delay={2300} className="block">
                            DELIVERED ON TIME
                        </AnimatedLine>
                    </div>

                    <AnimatedLine delay={2800} className="mt-4 md:mt-8 lg:mt-10">
                        <Button variant="outline" className="px-10 md:px-14 py-6 text-[10px] md:text-xs tracking-[0.2em] w-full sm:w-auto">
                            EXPLORE PROJECT
                        </Button>
                    </AnimatedLine>
                </div>
            </div>

            {/* Circular Badge - Optimized for larger screens */}
            <AnimatedLine delay={3200} className="absolute right-12 md:right-24 bottom-[15%] hidden lg:block">
                <CircularBadge />
            </AnimatedLine>

            {/* Scroll Indicator */}
            <AnimatedLine delay={3600} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="relative flex items-center justify-center">
                    <Mouse className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <ChevronDown className="absolute -bottom-4 w-4 h-4 text-white animate-bounce" />
                </div>
            </AnimatedLine>

            
        </section>
    );
}
