"use client";

export default function HeroTeam() {
    return (
        <section className="relative h-[50vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute object-top  inset-0 bg-fit bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/team.png")' }}
            >
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center p-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wider text-white mb-4 uppercase">
                    Meet Our Team
                </h1>
                
            </div>
        </section>
    );
}
