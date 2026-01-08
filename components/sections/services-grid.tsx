"use client";

import Link from "next/link";
import { Home, Palette, Box, Sofa, UtensilsCrossed, Bath, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

// Services data (mapping source) - expanded to 6 services
export const services = [
    {
        slug: "architecture",
        title: "Architecture",
        description: "Architectural designs that balance aesthetics, function and innovative thinking.",
        icon: Home,
    },
    {
        slug: "interior-design",
        title: "Interior design",
        description: "We create elegant, functional interiors that reflect your lifestyle and personal taste.",
        icon: Palette,
    },
    {
        slug: "3d-modelling",
        title: "3D modelling",
        description: "High-quality 3D modelling solutions for architecture, interiors and products.",
        icon: Box,
    },
    {
        slug: "decor-plan",
        title: "Decor plan",
        description: "Creative decor plans that balance style, comfort and functional harmony.",
        icon: Sofa,
    },
    {
        slug: "kitchen-design",
        title: "Kitchen design",
        description: "Transforming everyday cooking with elegant modern and functional kitchen design.",
        icon: UtensilsCrossed,
    },
    {
        slug: "bathroom-design",
        title: "Bathroom design",
        description: "Elevating daily routines with timeless, modern and elegant bathroom design.",
        icon: Bath,
    },
];

// Service Card Component (modulation)
function ServiceCard({ service }: { service: typeof services[0] }) {
    return (
        <div
            data-cursor="drag"
            className="group relative p-10 md:p-12 bg-surface border border-white/[0.03] transition-all duration-500 flex flex-col gap-10 overflow-hidden cursor-none hover:bg-[#141414]"
        >
            {/* Animated corner accent */}
            <Link 
                href={`/services/${service.slug}`}
                className="absolute -top-12 -right-12 w-24 h-24 bg-primary transition-all duration-500 group-hover:top-0 group-hover:right-0 group-hover:w-32 group-hover:h-32 rounded-bl-[100px] opacity-0 group-hover:opacity-100 flex items-center justify-center p-8 z-20"
            >
                <ArrowUpRight className="w-6 h-6 text-white relative top-2 left-2" />
            </Link>

            {/* Static arrow */}
            <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/5 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <ArrowUpRight className="w-4 h-4 text-white/30" />
            </div>

            {/* Icon */}
            <div className="relative group-hover:translate-x-2 transition-transform duration-500">
                <service.icon className="w-12 h-12 text-primary" strokeWidth={1} />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-500">
                    {service.title}
                </h3>
                <p className="text-white/30 text-[15px] leading-relaxed max-w-[300px] transition-colors duration-500 group-hover:text-white/50">
                    {service.description}
                </p>
            </div>

            {/* Dot pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}
            />
        </div>
    );
}

// Main Services Grid Section
export default function ServicesGrid() {
    return (
        <section className="relative py-24  bg-[#141414] text-white overflow-hidden">
            <div className="relative z-10  max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                <SectionHeader title="SERVICES." letter="S" />
                {/* Services Grid (Mapping) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
                <p className="text-base md:text-lg py-5 text-muted text-center">
                    <span className="text-primary font-medium">Ornava</span> transforms spaces into living experiences.
                </p>
            </div>
        </section>
    );
}
