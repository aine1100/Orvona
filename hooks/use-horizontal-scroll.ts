import { useRef, useEffect } from "react";

export function useHorizontalScroll<T extends HTMLElement>() {
  const elRef = useRef<T>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;

        // Check if we are at the boundaries
        const isAtLeft = el.scrollLeft === 0;
        const isAtRight = Math.abs(el.scrollLeft + el.clientWidth - el.scrollWidth) < 10; 

        // If scrolling up (negative deltaY) and at the start, allow default (vertical scroll up)
        if (e.deltaY < 0 && isAtLeft) return;

        // If scrolling down (positive deltaY) and at the end, allow default (vertical scroll down)
        if (e.deltaY > 0 && isAtRight) return;

        // Otherwise, prevent vertical scroll and scroll horizontally
        e.preventDefault();

        // Scroll horizontally instead with a speed multiplier for better feel
        el.scrollTo({
          left: el.scrollLeft + (e.deltaY * 3), 
          behavior: "auto"
        });
      };

      // Mouse Drag Events
      const onMouseDown = (e: MouseEvent) => {
        isDragging.current = true;
        el.classList.add('active'); // Optional: for styling if needed
        startX.current = e.pageX - el.offsetLeft;
        scrollLeft.current = el.scrollLeft;
        el.style.cursor = 'grabbing';
      };

      const onMouseLeave = () => {
        isDragging.current = false;
        el.classList.remove('active');
        el.style.cursor = 'grab';
      };

      const onMouseUp = () => {
        isDragging.current = false;
        el.classList.remove('active');
        el.style.cursor = 'grab';
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX.current) * 2; // Scroll-fast speed
        el.scrollLeft = scrollLeft.current - walk;
      };

      el.addEventListener("wheel", onWheel, { passive: false });
      el.addEventListener("mousedown", onMouseDown);
      el.addEventListener("mouseleave", onMouseLeave);
      el.addEventListener("mouseup", onMouseUp);
      el.addEventListener("mousemove", onMouseMove);

      return () => {
        el.removeEventListener("wheel", onWheel);
        el.removeEventListener("mousedown", onMouseDown);
        el.removeEventListener("mouseleave", onMouseLeave);
        el.removeEventListener("mouseup", onMouseUp);
        el.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, []);

  return elRef;
}
