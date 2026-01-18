"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/portfolio-data";

interface CategoryProjectsGridProps {
  projects: Project[];
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <div 
      data-cursor="drag"
      className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-none"
    >
      {/* Project Image */}
      <Image
        src={project.coverImage}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
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
      </div>
    </div>
  );
}

// Category Projects Grid Component
export default function CategoryProjectsGrid({ projects }: CategoryProjectsGridProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-[#202020] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
