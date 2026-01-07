"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { Linkedin, Twitter, Instagram } from "lucide-react";

// 1. Define the data type
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
};

// 2. Create the data array (Mapping source)
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Lead Architect",
    image: "/about-villa.png", 
    bio: "Visionary architect with 15+ years of experience in sustainable luxury design.",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Interior Director",
    image: "/villa3.webp",
    bio: "Award-winning interior designer specializing in minimalist aesthetics.",
    socials: {
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Marcus Reynolds",
    role: "Project Manager",
    image: "/villa2.jpg",
    bio: "Ensuring every project is delivered on time with impeccable quality.",
    socials: {
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Lighting Specialist",
    image: "/hero-bg.png", // Fallback image for demo
    bio: "Creating atmosphere and mood through innovative lighting solutions.",
    socials: {
      instagram: "#",
      linkedin: "#",
    },
  },
];

// 3. Create the sub-component (Modulation)
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative overflow-hidden rounded-md bg-surface border border-white/5 transition-all duration-500 ">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden grayscale transition-all duration-500 group-hover:grayscale-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
        
        {/* Socials - Slide in */}
        <div className="absolute right-4 top-4 translate-x-12 flex flex-col gap-3 transition-transform duration-500 group-hover:translate-x-0">
          {member.socials.linkedin && (
             <a href={member.socials.linkedin} className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-black text-white transition-colors">
               <Linkedin className="w-4 h-4" />
             </a>
          )}
          {member.socials.twitter && (
             <a href={member.socials.twitter} className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-black text-white transition-colors">
               <Twitter className="w-4 h-4" />
             </a>
          )}
          {member.socials.instagram && (
             <a href={member.socials.instagram} className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-black text-white transition-colors">
               <Instagram className="w-4 h-4" />
             </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
        <span className="mb-2 block text-xs font-medium tracking-widest text-primary uppercase">
          {member.role}
        </span>
        <h3 className="mb-1 text-2xl font-medium text-white">
          {member.name}
        </h3>
        <div className="h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2">
            <p className="text-sm text-muted">
                {member.bio}
            </p>
        </div>
      </div>
    </div>
  );
}

// 4. Main Section Component
export default function TeamSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#202020] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        
        {/* Header */}
        <div className="flex items-center gap-6 mb-16 lg:mb-24">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold tracking-widest text-white/40">
                T
            </div>
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] text-primary uppercase">
                OUR TEAM
            </span>
        </div>

        {/* Introduction */}
        <div className="mb-16 md:w-2/3 lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-6">
              Our Design  Experts
            </h2>
            <p className="text-muted text-lg leading-relaxed">
                We are a diverse team of architects, designers, and creative thinkers united by a passion for redefining space and form.
            </p>
        </div>

        {/* Grid Layout (Mapping) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}
