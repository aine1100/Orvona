import { useRef, useEffect, useState } from "react";

interface AutoScrollOptions {
  deadZone?: number; // 0 to 1, threshold for center dead zone
  maxSpeed?: number; // Pixels per frame
  smoothing?: number; // 0 to 1, momentum smoothing
  direction?: "horizontal" | "vertical";
  edgeAcceleration?: number; // Exponential acceleration near edges
}

interface AutoScrollOptions {
  deadZone?: number; // 0 to 1, threshold for center dead zone
  maxSpeed?: number; // Pixels per frame
  smoothing?: number; // 0 to 1, momentum smoothing
  direction?: "horizontal" | "vertical";
  edgeAcceleration?: number; // Exponential acceleration multiplier near edges
}

export function useCursorAutoScroll<T extends HTMLElement, U extends HTMLElement = T>(
  options: AutoScrollOptions = {}
) {
  const { 
    deadZone = 0.15, 
    maxSpeed = 25, // Increased for snappier response to movement
    smoothing = 0.2, // Smoother follow
    direction = "horizontal",
    edgeAcceleration = 1.5
  } = options;

  const elRef = useRef<T>(null);
  const triggerRef = useRef<U>(null);
  const rafId = useRef<number | null>(null);
  const velocity = useRef(0);
  const targetVelocity = useRef(0);
  const lastMovementTime = useRef(0);
  const lastCursorPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [normalizedCursor, setNormalizedCursor] = useState(0); 
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = elRef.current;
    const trigger = triggerRef.current || (el as unknown as U);
    if (!el || !trigger) return;

    const movementThreshold = 100; // ms to consider cursor "stopped"

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      
      // 1. Calculate Delta (Direction and Speed of hand)
      const dx = e.clientX - lastCursorPos.current.x;
      const dy = e.clientY - lastCursorPos.current.y;
      const delta = direction === "horizontal" ? dx : dy;
      
      lastMovementTime.current = now;
      lastCursorPos.current = { x: e.clientX, y: e.clientY };
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      const rect = trigger.getBoundingClientRect();
      const isHorizontal = direction === "horizontal";
      const center = isHorizontal ? rect.left + rect.width / 2 : rect.top + rect.height / 2;
      const mousePos = isHorizontal ? e.clientX : e.clientY;
      const distFromCenter = Math.abs(mousePos - center);
      const maxDist = isHorizontal ? rect.width / 2 : rect.height / 2;
      
      // normalized pos (-1 to 1) for visual effects
      let normalized = (mousePos - center) / maxDist;
      normalized = Math.max(-1, Math.min(1, normalized));
      setNormalizedCursor(normalized);

      // 2. Calculate Position Weight
      // Moving near edges gives more "power" to the scroll
      const posFactor = distFromCenter / maxDist; // 0 (center) to 1 (edge)
      const weight = 1 + Math.pow(posFactor, edgeAcceleration) * 2; 

      // 3. Drive target velocity by movement delta
      // We divide by a scalar to normalize the "flick" speed
      const baseVelocity = (delta / 15) * weight;
      targetVelocity.current = baseVelocity;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      setIsHovering(true);
      lastMovementTime.current = Date.now();
      lastCursorPos.current = { x: e.clientX, y: e.clientY };
      startLoop();
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      targetVelocity.current = 0;
      velocity.current = 0;
      setNormalizedCursor(0);
    };

    const startLoop = () => {
      if (rafId.current) return;
      
      const loop = () => {
        if (!elRef.current) return;

        const timeSinceMove = Date.now() - lastMovementTime.current;
        const isActuallyMoving = timeSinceMove < movementThreshold;

        // If stopped moving, target speed goes to 0
        let currentTarget = isActuallyMoving ? targetVelocity.current : 0;
        
        velocity.current += (currentTarget - velocity.current) * smoothing;

        if (Math.abs(velocity.current) > 0.001) {
          const moveAmount = velocity.current * maxSpeed;
          if (direction === "horizontal") {
            elRef.current.scrollLeft -= moveAmount;
          } else {
            elRef.current.scrollTop -= moveAmount;
          }
          rafId.current = requestAnimationFrame(loop);
        } else if (!isHovering) {
          rafId.current = null;
        } else {
          rafId.current = requestAnimationFrame(loop);
        }
      };

      rafId.current = requestAnimationFrame(loop);
    };

    trigger.addEventListener("mousemove", handleMouseMove);
    trigger.addEventListener("mouseenter", handleMouseEnter);
    trigger.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      trigger.removeEventListener("mousemove", handleMouseMove);
      trigger.removeEventListener("mouseenter", handleMouseEnter);
      trigger.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [direction, edgeAcceleration, smoothing, maxSpeed, isHovering]);

  return { 
    elRef: elRef as React.RefObject<any>, 
    triggerRef: triggerRef as React.RefObject<any>, 
    normalizedCursor, 
    isHovering,
    cursorPos
  };
}
