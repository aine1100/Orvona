"use client";

import Image from "next/image";
import { Home, Palette, Box, ArrowUpRight, ArrowLeftRight } from "lucide-react";

const services = [
  {
    title: "Architecture",
    description: "Architectural designs that balance aesthetics, interior, function and innovative thinking.",
    icon: Home,
  },
  {
    title: "Interior design",
    description: "We create elegant, functional interiors that reflect your lifestyle and personal taste.",
    icon: Palette,
  },
  {
    title: "3D modelling",
    description: "High-quality 3D modelling solutions for architecture, interiors, exterior, design and products.",
    icon: Box,
  },
];

export default function ServicesSection() {
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
                <div className="relative flex items-center gap-6 mb-20 lg:mb-32">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold tracking-widest text-white/30 backdrop-blur-md">
                        S
                    </div>
                    
                    <div className="absolute left-[24px] right-0 h-px bg-white/5 -z-10" />
                    
                    <div className="flex flex-col items-start   backdrop-blur-sm px-4 py-2">
                        <span className="text-[10px] md:text-[11px] font-bold tracking-[0.5em] text-primary uppercase mb-2">
                            SERVICES.
                        </span>
                    </div>

                   
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-10 md:p-12 bg-[#202020] border border-white/[0.03] transition-all duration-500 flex flex-col gap-10 overflow-hidden cursor-pointer hover:bg-[#141414]"
                        >
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary transition-all duration-500 group-hover:top-0 group-hover:right-0 group-hover:w-32 group-hover:h-32 rounded-bl-[100px] opacity-0 group-hover:opacity-100 flex items-center justify-center p-8">
                                <ArrowUpRight className="w-6 h-6 text-white relative top-2 left-2" />
                            </div>

                            <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/5 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                                <ArrowUpRight className="w-4 h-4 text-white/30" />
                            </div>

                            <div className="relative group-hover:translate-x-2 transition-transform duration-500">
                                <service.icon className="w-12 h-12 text-primary" strokeWidth={1} />
                            </div>

                            <div className="flex flex-col gap-5">
                                <h3 className="text-2xl md:text-3xl font-medium tracking-tight uppercase transition-colors duration-500">
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
        </section>
    );
}
