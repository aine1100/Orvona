"use client";

import React, { useRef, useState, useEffect } from "react";
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

// ... (teamMembers array remains the same)

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Chad Spink",
    role: "CEO & Architect Lead",
    image: "/chad_spink.png",
  },
  {
    id:2,
    name:"Kwok Yee Chan",
    role:"Founder & Financial Manager",
    image:"/KwokYeeChan.png"
  },{
    id:3,
    name:"Wesley Spradling",
    role:"Principal Architect",
    image:"/wesley.png"
  },
  {
    id:4,
    name:"Linda Russell",
    role:"Administrative Assistant",
    image:"/linda.png"
  }
  // {
  //   id: 2,
  //   name: "Sarah Chen",
  //   role: "Interior Director",
  //   image: "/about-villa.png",
  // },
  // {
  //   id: 3,
  //   name: "Marcus Reynolds",
  //   role: "Lead Architect",
  //   image: "/about-villa.png",
  // },
  // {
  //   id: 4,
  //   name: "Elena Rodriguez",
  //   role: "Lighting Specialist",
  //   image: "/about-villa.png",
  // },
  // {
  //   id: 5,
  //   name: "David Kim",
  //   role: "3D Visualizer",
  //   image: "/about-villa.png",
  // },
];

import { useCursorPositionShift } from "@/hooks/use-cursor-position-shift";

function TeamCard({ member, isHovering, cursorPos, normalizedCursor }: {
  member: TeamMember,
  isHovering: boolean,
  cursorPos: { x: number, y: number },
  normalizedCursor: number
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [emphasis, setEmphasis] = useState({ scale: 1, brightness: 100 });
  const shiftX = isHovering ? normalizedCursor * -20 : 0;

  useEffect(() => {
    if (!cardRef.current || !isHovering) {
      setEmphasis({ scale: 1, brightness: 100 });
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const dist = Math.abs(cursorPos.x - cardCenterX);
    const maxDist = 400; // Activation radius

    if (dist < maxDist) {
      const factor = 1 - (dist / maxDist); // 0 to 1
      setEmphasis({
        scale: 1 + (factor * 0.05), // Max scale 1.05
        brightness: 100 + (factor * 20), // Max brightness 120%
      });
    } else {
      setEmphasis({ scale: 1, brightness: 100 });
    }
  }, [cursorPos, isHovering]);

  return (
    <div
      ref={cardRef}
      data-cursor="drag"
      className="group relative flex-shrink-0 w-[280px] md:w-[245px] aspect-[3/4] overflow-hidden bg-[#1a1a1a] rounded-sm cursor-none transition-all duration-500 ease-out"
      style={{
        transform: `translateX(${shiftX}px) scale(${emphasis.scale * (isHovering ? (1 - Math.abs(normalizedCursor) * 0.02) : 1)})`,
        filter: `brightness(${emphasis.brightness}%)`,
      }}
    >
      {/* Image */}
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover   transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
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
  const { containerRef: sectionRef, normalizedCursor, isHovering, cursorPos } = useCursorPositionShift<HTMLDivElement>({
    smoothing: 0.1,
    initialValue: -1
  });

  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidths = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.scrollWidth);
      if (sectionRef.current) setContainerWidth(sectionRef.current.offsetWidth);
    };
    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  const maxShift = Math.max(0, trackWidth - containerWidth);
  const centerOffset = -maxShift / 2;
  const currentShift = centerOffset - (normalizedCursor * (maxShift / 2));

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
              <div className={cn(
                "text-sm text-white/20 transition-opacity duration-500 font-medium tracking-wider uppercase",
                isHovering ? "opacity-0" : "opacity-100"
              )}>
              </div>
            </div>
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
            ref={sectionRef}
            className="lg:w-2/3 min-w-0 cursor-none relative overflow-hidden py-4 -my-4"
          >
            <div className="flex flex-col gap-12">
              <div
                ref={trackRef}
                className="flex gap-6 will-change-transform"
                style={{
                  transform: `translateX(${currentShift}px)`,
                  transition: isHovering ? 'none' : 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
              >
                {teamMembers.map((member) => (
                  <TeamCard
                    key={member.id}
                    member={member}
                    isHovering={isHovering}
                    cursorPos={cursorPos}
                    normalizedCursor={normalizedCursor}
                  />
                ))}
              </div>

              {/* Scroll Indicator */}
              <div className="flex justify-start gap-2 items-center">
                {teamMembers.map((_, i) => {
                  const roughIndex = Math.round((Math.abs(currentShift) / maxShift) * (teamMembers.length - 1));
                  const isActive = i === (isNaN(roughIndex) ? 0 : roughIndex);
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

