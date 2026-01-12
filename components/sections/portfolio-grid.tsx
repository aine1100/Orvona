"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Portfolio projects data (mapping source)
const projects = [
  {
    title: "Casa Minimal Kitchen",
    image: "/villa2.jpg",
    category: "Interior Design",
  },
  {
    title: "Armada Center",
    image: "/villa3.webp",
    category: "Architecture",
  },
  {
    title: "The Horizon Residence",
    image: "/about-villa.png",
    category: "Residential",
  },
  {
    title: "Loft Living Room",
    image: "/hero-bg.png",
    category: "Interior Design",
  },
];

// Project Card Component (modulation)
function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div 
        data-cursor="drag"
        className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-none"
    >
      {/* Project Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-fit transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/60" />
      
      {/* Arrow Icon */}
      <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
        <ArrowUpRight className="w-5 h-5 text-white transition-colors duration-500 group-hover:text-black" />
      </div>
      
      {/* Project Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
        <h3 className="text-xl md:text-2xl font-medium mb-2 transition-transform duration-500 group-hover:translate-x-2">
          {project.title}
        </h3>
        <p className="text-sm text-white/70">{project.category}</p>
      </div>
    </div>
  );
}

// Main Portfolio Grid Section
export default function PortfolioGrid() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#202020] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        
        {/* Portfolio Grid (Mapping) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
