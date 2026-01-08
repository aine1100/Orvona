"use client";

import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

export default function ServiceFeaturesFAQ({ features, faqs }: {
    features: string[];
    faqs: { question: string; answer: string }[]
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#141414] text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Key Features */}
                    <div className="flex flex-col gap-10">
                        <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Key Features:</h2>
                        <ul className="flex flex-col gap-6">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex gap-4 items-start group">
                                    <div className="mt-1">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-white/40 text-lg group-hover:text-white/70 transition-colors duration-300 italic">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FAQs */}
                    <div className="flex flex-col gap-10">
                        <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Frequently Asked Questions</h2>
                        <div className="flex flex-col border-t border-white/5">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border-b border-white/5">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                        className="w-full py-6 flex items-center justify-between group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-primary font-medium text-sm">{idx + 1}.</span>
                                            <span className={cn(
                                                "text-lg text-left transition-colors duration-300",
                                                openIndex === idx ? "text-white" : "text-white/50 group-hover:text-white/80"
                                            )}>
                                                {faq.question}
                                            </span>
                                        </div>
                                        <ChevronDown className={cn(
                                            "w-4 h-4 transition-transform duration-500",
                                            openIndex === idx ? "rotate-180 text-primary" : "text-white/30"
                                        )} />
                                    </button>
                                    <div className={cn(
                                        "overflow-hidden transition-all duration-500",
                                        openIndex === idx ? "max-h-[300px] mb-8" : "max-h-0"
                                    )}>
                                        <p className="text-white/40 leading-relaxed pl-8">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
