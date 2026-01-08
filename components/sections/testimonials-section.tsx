"use client";

import { useState, useEffect } from "react";
import { Quote, Play, Star } from "lucide-react";

const testimonials = [
  {
    text: "A seamless design journey from start to finish. Every detail was thoughtfully planned and perfectly executed.",
    author: "Emily Collins",
    role: "Interior Consultant",
    avatar: "/about-villa.png",
    rating: 5,
  },
  {
    text: "They transformed our space beyond expectations. Elegant and truly timeless design work throughout.",
    author: "Martin Dan",
    role: "Real Estate Developer",
    avatar: "/about-villa.png",
    rating: 5,
  },
  {
    text: "Working with Ornava transformed our home into a masterpiece. The attention to detail was extraordinary.",
    author: "Marcus Chen",
    role: "Entrepreneur",
    avatar: "/about-villa.png",
    rating: 5,
  },
];

const marqueeItems = [
  "urban style",
  "open concept",
  "material selection",
  "interior design",
  "architecture",
  "minimalist",
  "modern living",
  "space planning",
  "lighting design",
];
import Image from "next/image";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="relative min-h-screen bg-[#141414] text-white overflow-hidden flex items-center">
      
      {/* Large Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[clamp(8rem,20vw,24rem)] font-bold text-white/[0.03] select-none tracking-tighter leading-none">
          ORNAVA
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-16 py-20">
        <div className="relative flex items-center min-h-[600px]">
          
          {/* Testimonial Card - Left Side */}
          <div className="relative  z-20 md:-top-44 lg:left-20 w-full max-w-[450px]">
            <div
              key={activeIndex}
              className="bg-[#1c1c1c] rounded-md px-6 py-2 shadow-2xl animate-in fade-in slide-in-from-left-8 duration-700"
            >
              {/* Quote Icon */}
              <div className="mb-8">
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
              <p className="text-md leading-relaxed text-gray-400 mb-8 font-light">
                {currentTestimonial.text}
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#d4af6a] text-[#d4af6a]" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/5">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-medium text-white">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
                </div>
              </div>

              {/* Navigation Dots */}
              
            </div>
          </div>

          {/* Image Block - Right Side with Overlap */}
          <div className="absolute left-[280px] lg:left-[200px] right-0 top-0 bottom-0 h-full">
            <div className="relative rounded-md w-full h-full lg:max-h-[550px] overflow-hidden group">
              <Image
                src="/about-villa.png"
                width={500}
                height={300}
                alt="Modern interior design bedroom"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 bg-black/70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              
              {/* Watch Trailer Button */}
              <div className="absolute bottom-16 right-16 z-20">
                <button className="group/btn flex items-center gap-4 hover:gap-5 transition-all duration-300">
                  <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover/btn:bg-[#d4af6a] group-hover/btn:border-[#d4af6a] transition-all duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                  </div>
                  <span className="text-base font-light tracking-wide text-white">
                    Watch the trailer
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-8 z-30 ">
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