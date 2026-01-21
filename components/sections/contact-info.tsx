"use client";

import { Mail, MapPin, Phone } from "lucide-react";

// Contact info data (mapping source)
const contactInfo = [
    {
        title: "E-mail address",
        detail: "design@kcdesign.com",
        icon: Mail,
        bgColor: "bg-surface",
    },
    {
        title: "Our address",
        detail: "673 Stickley Oak Way, Woodstock, GA, 30189",
        icon: MapPin,
        bgColor: "bg-surface",
    },
    {
        title: "Call us",
        detail: "+01 123 456 7890",
        icon: Phone,
        bgColor: "bg-primary",
        textColor: "text-black",
    },
];

// Contact Card Component (modulation)
function ContactCard({ info }: { info: typeof contactInfo[0] }) {
    const Icon = info.icon;
    const isHighlight = info.bgColor === "bg-primary";

    return (
        <div className={`p-8 md:p-10 ${info.bgColor} border border-white/5 transition-all duration-300 hover:border-primary/30`}>
            <div className="flex flex-col gap-6">
                {/* Icon */}
                <div className="w-12 h-12 border border-white/10 rounded-sm flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${isHighlight ? 'text-black' : 'text-primary'}`} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div>
                    <h3 className={`text-sm font-medium mb-3 ${isHighlight ? 'text-black' : 'text-white'}`}>
                        {info.title}
                    </h3>
                    <p className={`text-sm ${isHighlight ? 'text-black/70' : 'text-muted'}`}>
                        {info.detail}
                    </p>
                </div>
            </div>
        </div>
    );
}

// Main Contact Info Section
export default function ContactInfo() {
    return (
        <section className="relative py-16 bg-[#141414] text-white">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">

                {/* Contact Cards Grid (Mapping) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {contactInfo.map((info, index) => (
                        <ContactCard key={index} info={info} />
                    ))}
                </div>

            </div>
        </section>
    );
}
