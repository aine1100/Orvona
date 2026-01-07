"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Mountain, Menu, X } from "lucide-react";

const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 md:py-8 bg-[#202020] transition-all duration-300">
                {/* Logo */}
                <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
                    <div className="w-8 h-8 md:w-10 md:h-10 border border-primary/50 flex items-center justify-center p-1 group-hover:border-primary transition-colors">
                        <Mountain className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-base md:text-lg font-semibold tracking-[0.2em] md:tracking-[0.3em] text-white">ORNAVA</span>
                </div>

                {/* Desktop Menu Links */}
                <div className="hidden md:flex items-center gap-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative px-6 py-2 text-[12px] font-medium tracking-[0.2em] transition-colors group flex items-center justify-center",
                                    isActive ? "text-primary" : "text-white/60 hover:text-white"
                                )}
                            >
                                <span className="absolute inset-x-0 m-auto w-0 h-0 bg-white/5 rounded-full transition-all duration-300 group-hover:w-24 group-hover:h-24 -z-[1]" />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2 z-[70]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-50 bg-[#202020] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "text-xl font-bold tracking-[0.3em] transition-colors",
                                isActive ? "text-primary" : "text-white/60 hover:text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
