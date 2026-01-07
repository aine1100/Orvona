"use client";

import Image from "next/image";
import Link from "next/link";

// 1. Define the data type
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

// 2. Create the data array
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "James Dan",
    role: "Project Manager",
    image: "/about-villa.png", 
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Interior Director",
    image: "/about-villa.png",
  },
  {
    id: 3,
    name: "Marcus Reynolds",
    role: "Lead Architect",
    image: "/about-villa.png",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Lighting Specialist",
    image: "/about-villa.png",
  },
  {
    id: 5,
    name: "David Kim",
    role: "3D Visualizer",
    image: "/about-villa.png",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 lg:py-40 bg-[#121212] relative overflow-hidden text-white">
      
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/[0.03]" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        
        {/* Header Layout */}
        <div className="flex items-center gap-6 mb-24">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold tracking-widest text-white/40">
                T
            </div>
            {/* Line container needing relative for absolute position text */}
            <div className="relative flex-1 h-px bg-white/10">
                <span className="absolute top-4 left-0 text-[10px] md:text-[11px] font-bold tracking-[0.4em] text-primary uppercase">
                    TEAM.
                </span>
            </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Title & Intro */}
            <div className="lg:w-1/3 flex flex-col items-start gap-8 flex-shrink-0">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-normal tracking-wide leading-tight uppercase">
                    OUR DESIGN EXPERTS
                </h2>
                
                <p className="text-white/40 text-lg leading-relaxed max-w-sm">
                    We develop aesthetic, functional and innovative design solutions with our team of experts.
                </p>

                <div className="mt-8">
                    <Link 
                        href="/team" 
                        className="inline-flex items-center justify-center px-8 py-4 border border-white/10 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                    >
                        ALL TEAM
                    </Link>
                </div>
            </div>

            {/* Right Column: Team Slider */}
            <div className="lg:w-2/3 min-w-0"> {/* min-w-0 forces flex child to shrink properly if needed */}
                 <div className="flex gap-6 overflow-x-auto pb-12 -mb-12 no-scrollbar scroll-smooth" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                    {teamMembers.map((member) => (
                        <div 
                            key={member.id} 
                            data-cursor="drag"
                            className="group relative flex-shrink-0 w-[280px] md:w-[240px] aspect-[3/4] overflow-hidden bg-[#1a1a1a] rounded-sm cursor-none"
                        >
                            {/* Image */}
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />

                            {/* Hover Overlay - Gradient from bottom */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content - Centered Bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                <h3 className="text-xl font-normal text-white mb-3 text-center">
                                    {member.name}
                                </h3>
                                {/* Separator Line */}
                                <div className="w-12 h-px bg-white/20 mb-3" />
                                
                                <span className="text-sm font-medium tracking-wide text-white/60 uppercase">
                                    {member.role}
                                </span>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>

        </div>

      </div>
    </section>
  );
}
