"use client";

export default function HeroTeam() {
    return (
        <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/about-villa.png")' }}
            >
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wider text-white mb-4 uppercase">
                    Meet Our Team
                </h1>
                {/* Decorative dot */}
                <div className="flex justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
            </div>
        </section>
    );
}
