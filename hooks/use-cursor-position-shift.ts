import { useRef, useEffect, useState } from "react";

interface PositionShiftOptions {
  direction?: "horizontal" | "vertical";
  smoothing?: number; // 0 to 1, higher = more lag, lower = snappier
  intensity?: number; // Multiplier for the movement range
  initialValue?: number; // -1 to 1, where to start and return to
}

export function useCursorPositionShift<T extends HTMLElement, U extends HTMLElement = T>(
  options: PositionShiftOptions = {}
) {
  const { 
    direction = "horizontal",
    smoothing = 0.1,
    intensity = 1.0,
    initialValue = 0
  } = options;

  const containerRef = useRef<U>(null);
  const [normalizedCursor, setNormalizedCursor] = useState(initialValue); // -1 to 1
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [shift, setShift] = useState(initialValue);
  
  // Track target shift to allow for return-to-center on leave
  const targetShift = useRef(initialValue);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const isHorizontal = direction === "horizontal";
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      setCursorPos({ x: mouseX, y: mouseY });

      const center = isHorizontal ? rect.left + rect.width / 2 : rect.top + rect.height / 2;
      const pos = isHorizontal ? mouseX : mouseY;
      const maxDist = isHorizontal ? rect.width / 2 : rect.height / 2;
      
      let normalized = (pos - center) / maxDist;
      normalized = Math.max(-1, Math.min(1, normalized));
      setNormalizedCursor(normalized);

      // The shift is direct: mapping -1 to 1 
      // We don't know the track width here yet, so we return normalized
      // and let the component decide the pixel value, OR we can calculate it if we have nested refs.
      targetShift.current = normalized;
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      targetShift.current = initialValue; // Return to initial state
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    const loop = () => {
      setShift((prev) => {
        const diff = targetShift.current - prev;
        if (Math.abs(diff) < 0.001) return targetShift.current;
        return prev + diff * smoothing;
      });
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [direction, smoothing]);

  return { 
    containerRef, 
    normalizedCursor: shift, // Smoothed normalized value (-1 to 1)
    isHovering,
    cursorPos
  };
}
