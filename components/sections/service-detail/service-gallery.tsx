"use client";

import Image from "next/image";

export default function ServiceGallery({ images }: { images: string[] }) {
    if (!images || images.length === 0) return null;

    return (
        <section className="py-12 bg-[#141414]">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((image, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
                        >
                            <Image
                                src={image}
                                alt={`Gallery image ${idx + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
