"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateCursorPosition);

        return () => {
            window.removeEventListener("mousemove", updateCursorPosition);
        };
    }, []);

    return (
        <div
            className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: "translate(-50%, -50%)",
            }}
        />
    );
}
