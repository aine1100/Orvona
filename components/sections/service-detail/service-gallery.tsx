"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

export default function ServiceGallery({ images }: { images: string[] }) {
    if (!images || images.length === 0) return null;

    return (
        <section className="py-12 bg-[#141414]">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                <div className={cn(
                    "grid grid-cols-1 gap-6",
                    images.length === 2 && "md:grid-cols-2",
                    images.length >= 3 && "md:grid-cols-3"
                )}>
                    {images.map((image, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "relative w-full aspect-[4/5] overflow-hidden group cursor-pointer",
                                images.length === 1 && "md:aspect-[16/9]"
                            )}
                        >
                            <Image
                                src={image}
                                alt={`Gallery image ${idx + 1}`}
                                fill
                                quality={100}
                                sizes="(max-w-[768px]) 100vw, (max-w-[1200px]) 50vw, 33vw"
                                className="object-cover w-full transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Removed darkening overlay for better visibility */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
