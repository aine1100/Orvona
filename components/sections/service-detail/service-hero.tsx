"use client";

import Image from "next/image";

export default function ServiceHero({ title, image }: { title: string; image: string }) {
    return (
        <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    quality={100}
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[0.2em] text-white uppercase translate-y-4">
                    {title}
                </h1>
            </div>
        </section>
    );
}
