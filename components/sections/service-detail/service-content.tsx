"use client";

export default function ServiceContent({ letter, description, quote }: {
    letter: string;
    description: string;
    quote: { text: string; author: string }
}) {
    return (
        <section className="py-24 bg-[#141414] text-white">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Description with Letter */}
                    <div className="lg:col-span-7 flex flex-col md:flex-row gap-10 items-start">
                        <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 flex items-center justify-center">
                            <span className="text-4xl md:text-6xl font-light text-primary/80">{letter}</span>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light mt-4 whitespace-pre-line">
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Quote Box */}
                    <div className="lg:col-span-1" /> {/* Spacer */}

                    <div className="lg:col-span-4">
                        <div className="bg-[#C5A37F] p-10 md:p-12 relative overflow-hidden group">
                            {/* Decorative SVG quote mark - simplified representation */}
                            <div className="absolute top-8 right-8 text-black/10">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 7.55228 15.017 7V4H21.017C21.5693 4 22.017 4.44772 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C4.44772 8 4 7.55228 4 7V4H10C10.5523 4 11 4.44772 11 5V15C11 18.3137 8.31371 21 5 21H3Z" />
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <p className="text-xl md:text-2xl text-black font-medium leading-tight mb-8">
                                    "{quote.text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-[1px] bg-black/30" />
                                    <span className="text-black/60 text-sm font-medium uppercase tracking-widest italic">{quote.author}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
