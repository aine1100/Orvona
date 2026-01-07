"use client"; 

import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote, Play, Star } from "lucide-react";

const testimonials = [
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
  {
    text: "Exceptional design meets flawless execution. Our villa is now a reflection of modern luxury and comfort.",
    author: "Sofia Rodriguez",
    role: "Art Collector",
    avatar: "/about-villa.png",
    rating: 5,
  },
];

const marqueeItems = [
  "design",
  "3d visualization",
  "sustainable design",
  "color theory",
  "furniture layout",
  "cad drafting",
  "scandinavian style",
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("left");
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/about-villa.png"
          alt="Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Testimonial Card with horizontal slide animation */}
          <div className="relative overflow-hidden">
            <div
              key={activeIndex}
              className={`bg-[#1a1a1a]/60 backdrop-blur-md p-10 md:p-14 border border-white/5 animate-in slide-in-from-right duration-700`}
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 md:w-14 md:h-14 text-primary/40 mb-8" strokeWidth={1} />

              {/* Testimonial Text */}
              <p className="text-base md:text-lg leading-relaxed text-white/60 mb-8">
                {currentTestimonial.text}
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-white/5">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-medium tracking-tight">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-sm text-white/40">{currentTestimonial.role}</p>
                </div>
              </div>

              {/* Decorative Pattern */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center gap-8">
            {/* Large Brand Name */}
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white/[0.03] select-none">
              ORNAVA
            </h2>

            {/* Watch Trailer Button */}
            <button className="group flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 hover:border-primary transition-all duration-300 hover:bg-primary/10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <Play className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" />
              </div>
              <span className="text-sm font-medium tracking-wider">Watch the trailer</span>
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > activeIndex ? "left" : "right");
                setActiveIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "bg-primary w-8 md:w-10"
                  : "bg-white/20 w-1.5 md:w-2 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Scrolling Text Marquee */}
        <div className="absolute bottom-0 left-0 right-0 py-6 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {/* First set */}
            {marqueeItems.map((item, index) => (
              <div key={`first-${index}`} className="flex items-center gap-5 px-8">
                <span className="text-sm text-white/40 font-medium">{item}</span>
                <span className="text-primary text-xs">✦</span>
              </div>
            ))}
            {marqueeItems.map((item, index) => (
              <div key={`second-${index}`} className="flex items-center gap-5 px-8">
                <span className="text-sm text-white/40 font-medium">{item}</span>
                <span className="text-primary text-xs">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}