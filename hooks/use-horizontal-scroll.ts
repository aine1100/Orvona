import { useRef, useEffect } from "react";

export function useHorizontalScroll<T extends HTMLElement>() {
  const elRef = useRef<T>(null);

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;

        // Check if we are at the boundaries
        const isAtLeft = el.scrollLeft === 0;
        const isAtRight = Math.abs(el.scrollLeft + el.clientWidth - el.scrollWidth) < 10; // Increased tolerance

        // If scrolling up (negative deltaY) and at the start, allow default (vertical scroll up)
        if (e.deltaY < 0 && isAtLeft) return;

        // If scrolling down (positive deltaY) and at the end, allow default (vertical scroll down)
        if (e.deltaY > 0 && isAtRight) return;

        // Otherwise, prevent vertical scroll and scroll horizontally
        e.preventDefault();

        // Scroll horizontally instead with a speed multiplier for better feel
        el.scrollTo({
          left: el.scrollLeft + (e.deltaY * 3), // 3x multiplier
          behavior: "auto"
        });
      };

      el.addEventListener("wheel", onWheel, { passive: false }); // passive: false needed for preventDefault

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return elRef;
}
