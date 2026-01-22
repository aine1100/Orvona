"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroTeam from "@/components/sections/hero-team";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Shared data type
type TeamMember = {
    id: number;
    name: string;
    role: string;
    image: string;
};

// Expanded data for the full page
const teamMembers: TeamMember[] = [
    { id: 1, name: "Kwok Yee Chan", role: "Founder & Financial Manager", image: "/Kwok Yee Chan.png" },
    { id: 2, name: "Chad Spink", role: "CEO & Project Manager", image: "/chad_spink (1).png" },
    { id: 3, name: "Wesley Spradling", role: "Architect", image: "/Wesley_Spradling (1).png" },
    { id: 4, name: "Robert Benedict", role: "Architect", image: "/Robert Benedict.png" },
    { id: 5, name: "Williams David", role: "Architect", image: "/Williams David (1).png" },
    { id: 6, name: "Joseph Clair", role: "Architect", image: "/Joseph Clair.png" },
    { id: 7, name: "Alexey Leonichev", role: "Architect", image: "/Alexey Leonichev.png" },
    { id: 8, name: "Julie Margetich", role: "Architect", image: "/Julie Margetich.png" },
    { id: 9, name: "Michael Robert", role: "Architect", image: "/Michael_Robert.png" },
    { id: 10, name: "James Mellor", role: "Architect", image: "/James Mellor.png" },
    { id: 11, name: "Fuk Sang Chan", role: "Administrative Assistant", image: "/fuk.png" },
];

export default function TeamPage() {
    return (
        <main className="relative min-h-screen bg-[#121212]">
            <Navbar />
            <HeroTeam />

            <section className="py-24 lg:py-32 px-6 sm:px-12 md:px-16 lg:px-24">
                <div className="max-w-[1400px] mx-auto">
                    {/* Team Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                data-cursor="drag"
                                className="group relative aspect-[3/4]  overflow-hidden bg-[#1a1a1a] rounded-sm cursor-none"
                            >
                                {/* Image - Grayscale to Color on Hover */}
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                                {/* Hover Overlay - Gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content - Slide Up & Center */}
                                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <h3 className="text-2xl font-normal text-white mb-3 text-center">
                                        {member.name}
                                    </h3>
                                    {/* Decorative Line */}
                                    <div className="w-12 h-px bg-white/20 mb-3" />

                                    <span className="text-sm font-medium tracking-wide text-white/60 uppercase">
                                        {member.role}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
