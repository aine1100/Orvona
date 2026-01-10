"use client";

import { Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/cn";
import Link from "next/link";
import Image from "next/image";

// Social links data
const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
];

// Navigation links data
const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Team", href: "/team" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
];



export default function Footer() {
    return (
        <footer className="relative text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-black/80 bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/hero-bg.png")' }}
            >
                <div className="absolute inset-0 bg-black/80" />
            </div>

            {/* Diagonal Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
                }} />
            </div>

            <div className="relative max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">

                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 py-16 lg:py-20 border-b border-white/10">

                    {/* Left: Brand & Social */}
                    <div>
                        {/* Logo */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative w-36 h-36 ">
                                <Image 
                                    src="/klogo.png" 
                                    alt="K&C Design Logo" 
                                    fill 
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted text-sm leading-relaxed mb-8 max-w-md">
                            Integrated architecture and engineering solutions delivering functional, efficient, and timeless spaces.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-black transition-all duration-300"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Center: Services */}
                    

                    {/* Right: Contact & Navigation */}
                    <div className="lg:text-right flex flex-col justify-between">
                        <div>
                            <h3 className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-8">
                                GET IN TOUCH
                            </h3>

                            <div className="space-y-3 text-sm text-muted">
                                <p>0665 Broadway st, 10234 NY, USA</p>
                                <p>+1 123 567 8910</p>
                                <p>design@kcdesign.com</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-muted hover:text-primary transition-colors uppercase tracking-widest text-[10px] font-bold"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Copyright */}
                    <p className="text-xs text-muted">
                        Copyright 2026 by <span className="text-primary">K&C DESIGN</span>
                    </p>

                </div>

            </div>
        </footer>
    );
}
