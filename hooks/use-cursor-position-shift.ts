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
  const [isDragging, setIsDragging] = useState(false);
  const [shift, setShift] = useState(initialValue);
  
  // Track target shift to allow for return-to-center on leave
  const targetShift = useRef(initialValue);
  const lastMousePos = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const isHorizontal = direction === "horizontal";
      const currentPos = isHorizontal ? e.clientX : e.clientY;
      setCursorPos({ x: e.clientX, y: e.clientY });

      if (isDragging) {
        const containerSize = isHorizontal ? container.offsetWidth : container.offsetHeight;
        if (containerSize > 0) {
          const delta = currentPos - lastMousePos.current;
          // 1 full container width traverse = 2 units of normalized shift (-1 to 1)
          const normalizedDelta = delta / (containerSize / 2);
          
          // To reveal more to the right, we move track left (targetShift increases towards 1)
          // Dragging LEFT (delta < 0) should reveal more to the RIGHT.
          // So we SUBTRACT the normalizedDelta (negative delta makes it positive)
          targetShift.current -= normalizedDelta * intensity;
          targetShift.current = Math.max(-1, Math.min(1, targetShift.current));
        }
      }
      
      lastMousePos.current = currentPos;
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Only handle left click
      if (e.button !== 0) return;
      
      setIsDragging(true);
      const isHorizontal = direction === "horizontal";
      lastMousePos.current = isHorizontal ? e.clientX : e.clientY;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      // Snap back to initial only if NOT actively dragging
      if (!isDragging) {
        targetShift.current = initialValue;
      }
    };

    // Container specific listeners
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousedown", handleMouseDown);
    
    // Window listeners to handle dragging outside the container
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    const loop = () => {
      setShift((prev) => {
        const diff = targetShift.current - prev;
        if (Math.abs(diff) < 0.0001) return targetShift.current;
        return prev + diff * smoothing;
      });
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [direction, smoothing, intensity, initialValue, isDragging]);

  return { 
    containerRef, 
    normalizedCursor: shift, // Smoothed normalized value (-1 to 1)
    isHovering,
    isDragging,
    cursorPos
  };
}
