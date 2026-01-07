"use client";

import { Instagram, Facebook, Mountain } from "lucide-react";
import { cn } from "@/lib/cn";

// Social links data
const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
];

// Navigation links data
const footerLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
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
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 md:w-10 md:h-10 border border-primary/50 flex items-center justify-center p-1 group-hover:border-primary transition-colors">
                                <Mountain className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                            </div>
                            <span className="text-2xl font-medium tracking-wide">ORNAVA</span>
                        </div>

                        {/* Description */}
                        <p className="text-muted text-sm leading-relaxed mb-8 max-w-md">
                            Ornava designs timeless, functional spaces with aesthetic clarity and material harmony.
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
                            {/* X/Twitter Icon */}
                            <a
                                href="#"
                                aria-label="X (Twitter)"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-black transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="lg:text-right">
                        <h3 className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-8">
                            GET IN TOUCH
                        </h3>

                        <div className="space-y-3 text-sm text-muted">
                            <p>0665 Broadway st, 10234 NY, USA</p>
                            <p>+1 123 567 8910</p>
                            <p>design@ornava.com</p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-muted hover:text-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Copyright */}
                    <p className="text-xs text-muted">
                        Copyright 2026 by <span className="text-primary">Ornava</span>
                    </p>

                </div>

            </div>
        </footer>
    );
}
