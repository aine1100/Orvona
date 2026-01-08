"use client";

import Image from "next/image";
import { ArrowUpRight, Ruler, Home, MapPin, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import SectionHeader from "@/components/ui/section-header";
import { useState, useEffect, useRef } from "react";
import { useCursorPositionShift } from "@/hooks/use-cursor-position-shift";

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

interface Project {
  title: string;
  image: string;
  area: string;
  type: string;
  location: string;
  status: string;
}

function ProjectCard({ project, isHovering, cursorPos }: {
  project: Project,
  isHovering: boolean,
  cursorPos: { x: number, y: number }
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [proximityScale, setProximityScale] = useState(1);

  useEffect(() => {
    if (!cardRef.current || !isHovering) {
      setProximityScale(1);
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const dist = Math.abs(cursorPos.x - centerX);
    const maxDist = 400;

    if (dist < maxDist) {
      const factor = 1 - (dist / maxDist);
      setProximityScale(1 + (factor * 0.03));
    } else {
      setProximityScale(1);
    }
  }, [cursorPos, isHovering]);

  return (
    <div
      ref={cardRef}
      data-cursor="drag"
      className="relative flex-shrink-0 w-[85vw] md:w-[500px] aspect-[4/3] group overflow-hidden rounded-sm transition-transform duration-500 ease-out"
      style={{
        transform: `scale(${proximityScale})`,
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
        <ArrowUpRight className="w-5 h-5 text-white transition-colors duration-500 group-hover:text-black" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col items-center text-center transition-all duration-500">
        <h3 className="text-xl font-medium tracking-tight mb-2 group-hover:mb-6 transition-all duration-500">
          {project.title}
        </h3>
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
  );
}

export default function PortfolioSection() {
  const { containerRef, normalizedCursor, isHovering, cursorPos } = useCursorPositionShift<HTMLDivElement>({
    smoothing: 0.1,
    initialValue: -1
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidths = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.scrollWidth);
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  const maxShift = Math.max(0, trackWidth - containerWidth);
  const centerOffset = -maxShift / 2;
  const currentShift = centerOffset - (normalizedCursor * (maxShift / 2));

  useEffect(() => {
    if (maxShift === 0) return;
    const percentage = Math.abs(currentShift) / maxShift;
    const newIndex = Math.round(percentage * (projects.length - 1));
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
      setActiveIndex(newIndex);
    }
  }, [currentShift, maxShift]);

  return (
    <section id="portfolio" className="relative py-24 lg:py-40 bg-[#202020] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeader title="PORTFOLIO." letter="P" />

        <div className="relative mb-8">
          <div className={cn(
            "text-center text-sm text-white/40 transition-opacity duration-500",
            isHovering ? "opacity-0" : "opacity-100"
          )}>

          </div>
        </div>

        <div
          ref={containerRef}
          className="relative overflow-hidden cursor-none py-8 -my-8"
        >
          <div
            ref={trackRef}
            className="flex gap-6 lg:gap-10 will-change-transform"
            style={{
              transform: `translateX(${currentShift}px)`,
              transition: isHovering ? 'none' : 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isHovering={isHovering}
                cursorPos={cursorPos}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 gap-2 items-center">
          {projects.map((_, i) => (
            <button
              key={i}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                i === activeIndex
                  ? "bg-primary w-12"
                  : "bg-white/10 w-2 hover:bg-white/20"
              )}
              aria-label={`Project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
