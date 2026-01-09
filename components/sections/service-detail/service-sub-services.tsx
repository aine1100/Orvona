"use client";

import { SubService } from "@/data/services-data";

export default function ServiceSubServices({ subServices }: { subServices: SubService[] }) {
    if (!subServices || subServices.length === 0) return null;

    return (
        <section className="pb-24 bg-[#141414] text-white">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                    {subServices.map((sub, idx) => (
                        <div key={idx} className="flex flex-col gap-6 group">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl md:text-2xl font-medium tracking-tight border-l-2 border-primary/30 pl-6 transition-colors duration-300 group-hover:border-primary">
                                    {sub.title}
                                </h3>
                                <p className="text-white/50 leading-relaxed font-light pl-6">
                                    {sub.description}
                                </p>
                            </div>

                            {sub.items && sub.items.length > 0 && (
                                <ul className="grid grid-cols-1 gap-y-2 pl-6">
                                    {sub.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-[13px] md:text-sm text-white/40 leading-relaxed">
                                            <div className="w-1 h-1 rounded-full bg-primary/20 mt-[7px] flex-shrink-0" />
                                            <span className="group-hover:text-white/50 transition-colors duration-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
