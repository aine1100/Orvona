"use client";

import { useState, useEffect } from "react";
import { Quote, Play, Star } from "lucide-react";
import { cn } from "@/lib/cn";

const testimonials = [
  {
    text: "Creative, practical, and well-coordinated. The architectural team translated our vision into a functional and beautiful design.",
    author: "James Lee",
    role: "Architectural Client",
    avatar: "/about-villa.png",
    rating: 5,
  },
  {
    text: "The civil engineering team handled site planning and drainage efficiently, keeping the project compliant and on schedule.",
    author: "Tirrell Summers",
    role: "Property Developer",
    avatar: "/about-villa.png",
    rating: 5,
  },
  {
    text: "Clear structural solutions and excellent coordination with other trades. The plans were solid and easy to build from.",
    author: "Michael Derby",
    role: "Construction Manager",
    avatar: "/about-villa.png",
    rating: 5,
  },
  {
    text: "The MEP design was thorough and well-integrated, helping avoid conflicts and streamline construction.",
    author: "Josh Anderson",
    role: "General Contractor",
    avatar: "/about-villa.png",
    rating: 5,
  },
  {
    text: "Professional and code-compliant fire protection design that passed reviews smoothly and without delays.",
    author: "Jimmy Polpeka",
    role: "Life Safety Consultant",
    avatar: "/about-villa.png",
    rating: 5,
  },
  {
    text: "Thoughtful interior design that balanced aesthetics and functionality perfectly. The spaces feel both refined and practical.",
    author: "Sarah Bolinder",
    role: "Interior Client",
    avatar: "/about-villa.png",
    rating: 5,
  },
  {
    text: "The landscape design complemented the building beautifully while remaining functional and low maintenance.",
    author: "Kao Saechao",
    role: "Landscape Client",
    avatar: "/about-villa.png",
    rating: 5,
  }
];

const marqueeItems = [
  "Architectural Design",
  "Civil Engineering",
  "Structural Engineering",
  "MEP Engineering",
  "Fire Protection",
  "Interior Design",
  "Landscape Architecture",
  "3D Modeling & BIM",
];
import Image from "next/image";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger transition
      const next = (activeIndex + 1) % testimonials.length;
      setNextIndex(next);

      // Wait for animation to complete before resetting
      // Animation total duration = delay (300ms) + duration (800ms) = 1100ms
      // We give it a bit of buffer
      setTimeout(() => {
        setActiveIndex(next);
        setNextIndex(null);
      }, 1100);

    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const renderContent = (index: number, state: 'active' | 'next') => {
    const testimonial = testimonials[index];
    const isNext = state === 'next';

    return (
      <div
        key={`${index}-${state}`}
        className={cn(
          "absolute inset-0 px-8 py-8 justify-center  flex flex-col gap-4", // Fill the static card
          // Base state
          !isNext && nextIndex !== null && "animate-[curtainOut_0.8s_ease-in-out_forwards]", // Outgoing
          isNext && "animate-[curtainIn_0.8s_ease-in-out_0.3s_backwards]", // Incoming (with delay)
          // Static state
          state === 'active' && nextIndex === null && "translate-x-0 opacity-100"
        )}
        style={{
          zIndex: isNext ? 20 : 10
        }}
      >
        {/* Quote Icon */}
        <div className="">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            className="text-[#d4af6a]"
          >
            <path
              d="M12 40C12 33.3726 17.3726 28 24 28V20C12.9543 20 4 28.9543 4 40V52H24V40H12Z"
              fill="currentColor"
              opacity="0.2"
            />
            <path
              d="M40 40C40 33.3726 45.3726 28 52 28V20C40.9543 20 32 28.9543 32 40V52H52V40H40Z"
              fill="currentColor"
              opacity="0.2"
            />
          </svg>
        </div>

        {/* Testimonial Text */}
        <p className="text-md leading-relaxed text-gray-400 font-light">
          {testimonial.text}
        </p>

        {/* Star Rating */}
        <div className="flex gap-1 pb-2">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#d4af6a] text-[#d4af6a]" />
          ))}
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/5">
            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-base font-medium text-white">
              {testimonial.author}
            </h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen bg-[#141414] text-white overflow-hidden flex items-center">
      <style jsx global>{`
        @keyframes curtainIn {
          0% {
            transform: translateX(100%) scaleX(0.9) scaleY(0.95);
            opacity: 1;
          }
          100% {
            transform: translateX(0) scaleX(1) scaleY(1);
            opacity: 1;
          }
        }
        @keyframes curtainOut {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%) scale(1);
            opacity: 1;
          }
        }
      `}</style>



      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-16 py-12 md:py-20">
        <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-start min-h-[600px] md:min-h-[500px] lg:min-h-[600px]">

          {/* Testimonial Card Container - STATIC NOW */}
          <div className="relative z-20  w-[300px] md:w-full max-w-[400px] min-h-[320px] bg-[#1c1c1c] rounded-md shadow-2xl overflow-hidden md:-top-32 lg:left-20">
            {renderContent(activeIndex, 'active')}
            {nextIndex !== null && renderContent(nextIndex, 'next')}
          </div>


          {/* Image Block - Right Side with Overlap (Background on mobile) */}
          <div className="absolute  inset-0 md:inset-auto md:left-[280px] lg:left-[200px] md:right-0 md:top-0 md:bottom-0 h-full">
            <div className="relative  rounded-none md:rounded-md w-full h-full lg:max-h-[550px] overflow-hidden group">
              <Image
                src="/about-villa.png"
                width={800} // Increased for background use
                height={600}
                alt="Modern interior design bedroom"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Responsive Overlay */}
              <div className="absolute inset-0 bg-black/60 md:bg-transparent md:bg-gradient-to-r md:from-black/40 md:to-transparent" />

              {/* Watch Trailer Button - Hidden on small mobile to avoid clutter, visible on md+ */}
              <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-20 hidden xs:block">
                <button className="group/btn flex items-center gap-4 hover:gap-5 transition-all duration-300">
                  <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover/btn:bg-[#d4af6a] group-hover/btn:border-[#d4af6a] transition-all duration-300">
                    <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5 fill-white" />
                  </div>
                  <span className="text-sm md:text-base font-light tracking-wide text-white">
                    Watch the trailer
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="absolute -bottom-2 md:bottom-0 left-0 right-0 py-8 z-30 ">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-marquee">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <div key={index} className="flex items-center gap-8 px-6">
                <span className="text-sm uppercase tracking-[0.3em] text-gray-500 font-light hover:text-white transition-colors duration-300 cursor-default">
                  {item}
                </span>
                <span className="text-[#d4af6a]/40 text-xs">★</span>
              </div>
            ))}
          </div>
        </div>
      </div>



    </section>
  );
}