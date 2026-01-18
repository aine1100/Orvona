"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers, FolderOpen } from "lucide-react";
import { cn } from "@/lib/cn";
import SectionHeader from "@/components/ui/section-header";
import { useState, useEffect, useRef, useCallback } from "react";
import { portfolioCategories } from "@/data/portfolio-data";

// Map portfolio categories to the project card format
const projects = portfolioCategories.map(category => ({
  title: category.title,
  image: category.coverImage,
  projectCount: `${category.projects.length} Projects`,
  type: category.slug,
  description: category.description,
  slug: category.slug,
}));

interface Project {
  title: string;
  image: string;
  projectCount: string;
  type: string;
  description: string;
  slug: string;
}

function ProjectCard({ project, isDragging }: {
  project: Project,
  isDragging: boolean
}) {
  const handleClick = (e: React.MouseEvent) => {
    // Prevent navigation if user was dragging
    if (isDragging) {
      e.preventDefault();
    }
  };

  return (
    <Link href={`/portfolio/${project.slug}`} onClick={handleClick}>
      <div
        data-cursor="drag"
        className="relative flex-shrink-0 w-[85vw] md:w-[500px] aspect-[4/3] group overflow-hidden rounded-sm transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing select-none"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105 pointer-events-none"
          draggable={false}
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
                <Layers className="w-3.5 h-3.5 text-primary" />
                <span>{project.projectCount}</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] md:text-[13px] text-white/50 font-medium whitespace-nowrap">
                <FolderOpen className="w-3.5 h-3.5 text-primary" />
                <span>View Category</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const [trackWidth, setTrackWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
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
    setHasDragged(false);
    startXRef.current = e.clientX;
    scrollStartRef.current = scrollPosition;
  }, [scrollPosition]);

  // Document-level mouse move and up handlers
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = startXRef.current - e.clientX;
      if (Math.abs(deltaX) > 5) {
        setHasDragged(true);
      }
      let newPosition = scrollStartRef.current + deltaX;
      
      // Clamp to bounds
      newPosition = Math.max(0, Math.min(maxShift, newPosition));
      setScrollPosition(newPosition);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setTimeout(() => setHasDragged(false), 100);
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
    setHasDragged(false);
    startXRef.current = e.touches[0].clientX;
    scrollStartRef.current = scrollPosition;
  }, [scrollPosition]);

  useEffect(() => {
    if (!isDragging) return;

    const handleTouchMove = (e: TouchEvent) => {
      const deltaX = startXRef.current - e.touches[0].clientX;
      if (Math.abs(deltaX) > 5) {
        setHasDragged(true);
      }
      let newPosition = scrollStartRef.current + deltaX;
      
      // Clamp to bounds
      newPosition = Math.max(0, Math.min(maxShift, newPosition));
      setScrollPosition(newPosition);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      setTimeout(() => setHasDragged(false), 100);
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
    <section id="portfolio" className="relative py-24 lg:py-40 bg-[#202020] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeader title="PORTFOLIO." letter="P" />

        <div
          ref={containerRef}
          className={cn(
            "relative overflow-hidden py-8 -my-8 select-none",
            isDragging ? "cursor-grabbing" : "cursor-grab"
          )}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div
            ref={trackRef}
            className="flex gap-6 lg:gap-10 will-change-transform"
            style={{
              transform: `translateX(${currentShift}px)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isDragging={hasDragged}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 gap-2 items-center">
          {projects.map((_, i) => {
            const roughIndex = maxShift > 0 
              ? Math.round((scrollPosition / maxShift) * (projects.length - 1))
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
    </section>
  );
}
