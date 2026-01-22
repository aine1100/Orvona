"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import SectionHeader from "@/components/ui/section-header";

// 1. Define the data type
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Kwok Yee Chan",
    role: "Founder & Financial Manager",
    image: "/Kwok Yee Chan.png",
  },
  {
    id: 2,
    name: "Chad Spink",
    role: "CEO & Project Manager",
    image: "/chad_spink (1).png",
  },
  {
    id: 3,
    name: "Wesley Spradling",
    role: "Architect",
    image: "/Wesley_Spradling (1).png",
  },
  {
    id: 4,
    name: "Robert Benedict",
    role: "Architect",
    image: "/Robert Benedict.png",
  },
  {
    id: 5,
    name: "Williams David",
    role: "Architect",
    image: "/Williams David (1).png",
  },
  {
    id: 6,
    name: "Joseph Clair",
    role: "Architect",
    image: "/Joseph Clair.png",
  },
  {
    id: 7,
    name: "Alexey Leonichev",
    role: "Architect",
    image: "/Alexey Leonichev.png",
  },
  {
    id: 8,
    name: "Julie Margetich",
    role: "Architect",
    image: "/Julie Margetich.png",
  },
  {
    id: 9,
    name: "Michael Robert",
    role: "Architect",
    image: "/Michael_Robert.png",
  },
  {
    id: 10,
    name: "James Mellor",
    role: "Architect",
    image: "/James Mellor.png",
  },
  {
    id: 11,
    name: "Fuk Sang Chan",
    role: "Administrative Assistant",
    image: "/fuk.png",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div
      data-cursor="drag"
      className="group relative flex-shrink-0 w-[280px] md:w-[245px] aspect-[3/4] overflow-hidden bg-[#1a1a1a] rounded-sm cursor-grab active:cursor-grabbing transition-all duration-500 ease-out select-none"
    >
      {/* Image */}
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 pointer-events-none"
        draggable={false}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
        <h3 className="text-xl font-normal text-white mb-3 text-center">
          {member.name}
        </h3>
        <div className="w-12 h-px bg-white/20 mb-3" />
        <span className="text-sm font-medium tracking-wide text-center text-white/60 uppercase">
          {member.role}
        </span>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const [trackWidth, setTrackWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

  const maxShift = Math.max(0, trackWidth - containerWidth);

  // Update widths on resize
  useEffect(() => {
    const updateWidths = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.scrollWidth);
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  // Handle mouse down - start dragging
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    startXRef.current = e.clientX;
    scrollStartRef.current = scrollPosition;
  }, [scrollPosition]);

  // Document-level mouse move and up handlers
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = startXRef.current - e.clientX;
      let newPosition = scrollStartRef.current + deltaX;
      
      // Clamp to bounds
      newPosition = Math.max(0, Math.min(maxShift, newPosition));
      setScrollPosition(newPosition);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Add document-level listeners when dragging
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, maxShift]);

  // Touch event handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    scrollStartRef.current = scrollPosition;
  }, [scrollPosition]);

  useEffect(() => {
    if (!isDragging) return;

    const handleTouchMove = (e: TouchEvent) => {
      const deltaX = startXRef.current - e.touches[0].clientX;
      let newPosition = scrollStartRef.current + deltaX;
      
      // Clamp to bounds
      newPosition = Math.max(0, Math.min(maxShift, newPosition));
      setScrollPosition(newPosition);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, maxShift]);

  const currentShift = -scrollPosition;

  return (
    <section className="py-24 lg:py-40 bg-[#121212] relative overflow-hidden text-white">
      <div className="absolute top-0 left-0 w-full h-px bg-white/[0.03]" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeader title="TEAM." letter="T" />

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col items-start gap-8 flex-shrink-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight leading-tight uppercase">
              OUR DESIGN EXPERTS
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-sm">
              A collaborative team delivering thoughtful design, technical excellence, and reliable project execution.
            </p>
           
            <div className="mt-4">
              <Link
                href="/team"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/10 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                ALL TEAM
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic Track */}
          <div
            ref={containerRef}
            className={cn(
              "lg:w-2/3 min-w-0 relative overflow-hidden py-4 -my-4 select-none",
              isDragging ? "cursor-grabbing" : "cursor-grab"
            )}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="flex flex-col gap-12">
              <div
                ref={trackRef}
                className="flex gap-6 will-change-transform"
                style={{
                  transform: `translateX(${currentShift}px)`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                }}
              >
                {teamMembers.map((member) => (
                  <TeamCard
                    key={member.id}
                    member={member}
                  />
                ))}
              </div>

              {/* Scroll Indicator */}
              <div className="flex justify-start gap-2 items-center">
                {teamMembers.map((_, i) => {
                  const roughIndex = maxShift > 0 
                    ? Math.round((scrollPosition / maxShift) * (teamMembers.length - 1))
                    : 0;
                  const isActive = i === roughIndex;
                  return (
                    <div
                      key={i}
                      className={cn(
                        "h-1 rounded-full transition-all duration-500",
                        isActive
                          ? "bg-primary w-12"
                          : "bg-white/10 w-2"
                      )}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
