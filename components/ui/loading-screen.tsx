"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading - you can adjust the duration or add actual loading logic
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5 seconds loading time

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-[#202020] flex items-center justify-center">
            {/* Rotating spinner with white border */}
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
                <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin" />
            </div>
        </div>
    );
}
