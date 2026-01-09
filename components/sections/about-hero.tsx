"use client";

export default function AboutHero() {
    return (
        <section className="relative h-[50vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Video with Overlay */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-top"
                >
                    <source src="/aboutus.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wider text-white mb-4">
                    ABOUT US
                </h1>
                
            </div>
        </section>
    );
}
