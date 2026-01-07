"use client";

import Image from "next/image";
import { ArrowUpRight, Ruler, Home, MapPin, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    title: "The Horizon Residence",
    image: "/about-villa.png",
    area: "850 m²",
    type: "Residence",
    location: "Malibu, USA",
    status: "Completed",
  },
  {
    title: "Loft Living Room",
    image: "/hero-bg.png",
    area: "120 m²",
    type: "Loft",
    location: "Berlin, DE",
    status: "Completed",
  },
  {
    title: "Casa Minimal Kitchen",
    image: "/villa2.jpg",
    area: "30 m²",
    type: "Kitchen",
    location: "NY, USA",
    status: "Completed",
  },
  {
    title: "Armada Center",
    image: "/villa3.webp",
    area: "1200 m²",
    type: "Commercial",
    location: "London, UK",
    status: "Completed",
  },
];

export default function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle scroll to update active indicator
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth * 0.45; // Approx card width
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section id="portfolio" className="relative py-24 lg:py-40 bg-[#202020] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Section Header */}
         <div className="flex items-center gap-6 mb-16 lg:mb-24">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold tracking-widest text-white/40">
                        p
                    </div>
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] text-primary uppercase">
                        PORTIFOLIO
                    </span>
                </div>
        {/* Horizontal Scrolling Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 lg:gap-10 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              data-cursor="drag"
              className="relative flex-shrink-0 w-full md:w-[500px] aspect-[4/3] group overflow-hidden snap-center rounded-sm cursor-none"
            >
              {/* Main Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay Gradient (Darkens on hover for better text visibility) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top-Right Arrow (Fixed position) */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
                <ArrowUpRight className="w-5 h-5 text-white transition-colors duration-500 group-hover:text-black" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col items-center text-center transition-all duration-500">
                <h3 className="text-xl  font-medium tracking-tight mb-2 group-hover:mb-6 transition-all duration-500">
                  {project.title}
                </h3>

                {/* Detailed Info (Revealed on Hover) */}
                <div className="w-full flex flex-col items-center gap-6 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                  <div className="w-full h-px bg-white/20" />
                  
                  <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
                    <div className="flex items-center gap-2 text-[12px] md:text-[13px] text-white/50 font-medium whitespace-nowrap">
                      <Ruler className="w-3.5 h-3.5 text-primary" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] md:text-[13px] text-white/50 font-medium whitespace-nowrap">
                      <Home className="w-3.5 h-3.5 text-primary" />
                      <span>{project.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] md:text-[13px] text-white/50 font-medium whitespace-nowrap">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] md:text-[13px] text-white/50 font-medium whitespace-nowrap">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      <span>{project.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator (Pill style) */}
        <div className="flex justify-center mt-12 gap-3 items-center">
          {projects.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-1.5 rounded-full transition-all duration-500", 
                i === activeIndex 
                  ? "bg-primary w-8 md:w-10" // Pill shape
                  : "bg-white/20 w-1.5 md:w-2" // Dot shape
              )} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
