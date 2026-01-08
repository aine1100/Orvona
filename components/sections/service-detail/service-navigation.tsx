"use client";

import Link from "next/link";
import { LayoutGrid } from "lucide-react";

export default function ServiceNavigation({ prev, next }: {
    prev: { title: string; slug: string };
    next: { title: string; slug: string }
}) {
    return (
        <section className="bg-[#1A1A1A] border-y border-white/5 text-white">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                <div className="flex items-center">

                    {/* Prev */}
                    <Link
                        href={`/services/${prev.slug}`}
                        className="flex-1 py-12 md:py-16 hover:bg-black/20 transition-colors duration-500 group border-r border-white/5"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[11px] uppercase tracking-[0.3em] text-white/30 group-hover:text-primary transition-colors">Previous</span>
                            <span className="text-lg md:text-xl font-medium">{prev.title}</span>
                        </div>
                    </Link>

                    {/* Home/Gallery */}
                    <Link
                        href="/services"
                        className="px-10 py-12 md:py-16 hover:bg-black/20 transition-colors duration-500 group border-r border-white/5"
                    >
                        <LayoutGrid className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                    </Link>

                    {/* Next */}
                    <Link
                        href={`/services/${next.slug}`}
                        className="flex-1 py-12 md:py-16 hover:bg-black/20 transition-colors duration-500 group"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[11px] uppercase tracking-[0.3em] text-white/30 group-hover:text-primary transition-colors">Next</span>
                            <span className="text-lg md:text-xl font-medium">{next.title}</span>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
}
