"use client";

import { cn } from "@/lib/cn";

export default function CircularBadge() {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Rotating Text SVG */}
      <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="text-[7.5px] uppercase font-medium tracking-[0.2em] fill-white/60">
          <textPath href="#circlePath" startOffset="0%">
            Villa Project Completed • Villa Project Completed • 
          </textPath>
        </text>
      </svg>
      
      {/* Center Icon */}
      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm relative z-10">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
