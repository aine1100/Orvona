"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, MapPin, Box, Palette, Zap, Leaf, Shield, Layers, ArrowUpRight } from "lucide-react";
import SectionHeader from "../ui/section-header";
import { useCursorPositionShift } from "@/hooks/use-cursor-position-shift";
import { cn } from "@/lib/cn";

const services = [
    {
        slug: "architectural",
        title: "Architectural",
        description: "Architecture Built on Precision, Compliance, and Vision",
        icon: Home,
    },
    {
        slug: "civil-and-environmental",
        title: "Civil and Environmental",
        description: "Civil Engineering Solutions That Build Strong Foundations",
        icon: MapPin,
    },
    {
        slug: "structural",
        title: "Structural",
        description: "Reliable Structural Engineering for Safe, Efficient, and Durable Buildings",
        icon: Box,
    },
    {
        slug: "interior",
        title: "Interior",
        description: "Thoughtful Interior Design That Balances Function, Aesthetics, and Code",
        icon: Palette,
    },
    {
        slug: "mep-engineering",
        title: "MEP Engineering",
        description: "Integrated Mechanical, Electrical & Plumbing Engineering Solutions",
        icon: Zap,
    },
    {
        slug: "landscape",
        title: "Landscape",
        description: "Integrated Landscape Architecture for Functional and Sustainable Sites",
        icon: Leaf,
    },
    {
        slug: "fire-protection",
        title: "Fire Protection",
        description: "Comprehensive Fire Protection & Life Safety Solutions",
        icon: Shield,
    },
    {
        slug: "3d-modeling-and-bim",
        title: "3D Modeling & BIM",
        description: "Advanced 3D Modeling & Building Information Modeling (BIM)",
        icon: Layers,
    },
];

export default function ServicesSection() {
    const { containerRef, normalizedCursor, isHovering } = useCursorPositionShift<HTMLDivElement>({ 
        smoothing: 0.2,
        initialValue: -1
    });
    
    const [activeIndex, setActiveIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const [trackWidth, setTrackWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const updateWidths = () => {
            if (trackRef.current) setTrackWidth(trackRef.current.scrollWidth);
            if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
        };
        updateWidths();
        window.addEventListener('resize', updateWidths);
        return () => window.removeEventListener('resize', updateWidths);
    }, []);

    const maxShift = Math.max(0, trackWidth - containerWidth);
    const centerOffset = -maxShift / 2;
    const currentShift = centerOffset - (normalizedCursor * (maxShift / 2));

    useEffect(() => {
        if (maxShift === 0) return;
        const percentage = Math.abs(currentShift) / maxShift;
        const newIndex = Math.round(percentage * (services.length - 1));
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < services.length) {
            setActiveIndex(newIndex);
        }
    }, [currentShift, maxShift, activeIndex]);

    return (
        <section id="services" className="relative py-24 lg:py-40 bg-[#141414] text-white overflow-hidden">
            {/* Background Image for Header Section */}
            <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none opacity-20">
                <Image
                    src="/about-villa.png"
                    alt="Background"
                    fill
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                {/* Section Header */}
                <SectionHeader title="SERVICE." letter="S" />

                <div className="relative mb-8">
                   
                </div>

                <div
                    ref={containerRef}
                    className="relative overflow-hidden cursor-none py-8 -my-8"
                >
                    <div
                        ref={trackRef}
                        className="flex gap-6 lg:gap-10 will-change-transform pr-[20vw]"
                        style={{ 
                            transform: `translateX(${currentShift}px)`,
                            transition: isHovering ? 'none' : 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
                        }}
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                data-cursor="drag"
                                className="group relative flex-shrink-0 w-[95vw] md:w-[450px] aspect-[4/3] p-10 md:p-12 bg-[#202020] border border-white/[0.03] transition-all duration-500 flex flex-col gap-10 overflow-hidden hover:bg-[#141414] cursor-none"
                            >
                                <Link 
                                    href={`/services/${service.slug}`}
                                    className="absolute -top-12 -right-12 w-24 h-24 bg-primary transition-all duration-500 group-hover:top-0 group-hover:right-0 group-hover:w-32 group-hover:h-32 rounded-bl-[100px] opacity-0 group-hover:opacity-100 flex items-center justify-center p-8 z-20"
                                >
                                    <ArrowUpRight className="w-6 h-6 text-white relative top-2 left-2" />
                                </Link>

                                <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/5 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                                    <ArrowUpRight className="w-4 h-4 text-white/30" />
                                </div>

                                <div className="relative group-hover:translate-x-2 transition-transform duration-500">
                                    <service.icon className="w-12 h-12 text-primary" strokeWidth={1} />
                                </div>

                                <div className="flex flex-col gap-5">
                                    <h3 className="text-xl md:text-2xl font-medium tracking-tight uppercase transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/30 text-[15px] leading-relaxed max-w-[300px] transition-colors duration-500 group-hover:text-white/50">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                                    style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px'}} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="flex justify-center mt-12 gap-2 items-center">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            className={cn(
                                "h-1 rounded-full transition-all duration-500",
                                i === activeIndex
                                    ? "bg-primary w-12"
                                    : "bg-white/10 w-2 hover:bg-white/20"
                            )}
                            aria-label={`Service ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
