"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeftRight, ArrowLeftRightIcon } from "lucide-react";
import Image from "next/image";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!hasMoved) setHasMoved(true);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target or parent has 'data-cursor="drag"'
      if (target.closest('[data-cursor="drag"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [hasMoved]);

  // Hide cursor until user interacts
  if (!hasMoved) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center -ml-12 -mt-12 w-24 h-24 transition-transform duration-75 ease-out"
    >
      <div className="relative flex items-center justify-center w-full h-full">
         
         {/* State 1: Default Small Dot */}
         <div 
            className={`absolute w-2 h-2 bg-white rounded-full transition-all duration-300 ease-out border border-black/10 shadow-sm ${isHovering ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
         />

         {/* State 2: Custom Drag Cursor Loop */}
         <div 
            className={`absolute inset-5 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 ease-out shadow-2xl ${isHovering ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
         >
            <Image src="/left-right.png" alt="left-right" width={20} height={20} />
        </div>

      </div>
    </div>
  );
}
