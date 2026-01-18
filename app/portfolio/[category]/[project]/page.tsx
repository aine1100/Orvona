"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { getCategoryBySlug, getProjectBySlug, portfolioCategories } from "@/data/portfolio-data";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import LoadingScreen from "@/components/ui/loading-screen";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";

export default function ProjectPage() {
    const params = useParams();
    const categorySlug = params.category as string;
    const projectSlug = params.project as string;

    const category = getCategoryBySlug(categorySlug);
    if (!category) {
        return notFound();
    }

    const currentProjectIndex = category.projects.findIndex(p => p.slug === projectSlug);
    const project = category.projects[currentProjectIndex];

    if (!project) {
        return notFound();
    }

    // Get prev/next projects for navigation
    const prevProject = category.projects[currentProjectIndex === 0 ? category.projects.length - 1 : currentProjectIndex - 1];
    const nextProject = category.projects[currentProjectIndex === category.projects.length - 1 ? 0 : currentProjectIndex + 1];

    return (
        <main className="relative min-h-screen bg-[#141414]">
            <LoadingScreen />
            <Navbar />

            {/* Hero Section - Same style as category page */}
            <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        priority
                        quality={100}
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[0.2em] text-white uppercase">
                        {project.title}
                    </h1>
                </div>
            </section>

            {/* Image Gallery Grid - Same style as category page */}
            <section className="py-12 bg-[#141414]">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.images.map((image, idx) => (
                            <div
                                key={idx}
                                className="relative w-full aspect-[4/3] overflow-hidden group"
                                data-cursor="drag"
                            >
                                <Image
                                    src={image}
                                    alt={`${project.title} - Image ${idx + 1}`}
                                    fill
                                    quality={90}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover w-full transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Subtle overlay on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Navigation - Same style as category page */}
            <section className="bg-[#1A1A1A] border-y border-white/5 text-white">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                    <div className="flex items-center">

                        {/* Prev */}
                        <Link
                            href={`/portfolio/${categorySlug}/${prevProject.slug}`}
                            className="flex-1 py-12 md:py-16 hover:bg-black/20 transition-colors duration-500 group border-r border-white/5"
                        >
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-[11px] uppercase tracking-[0.3em] text-white/30 group-hover:text-primary transition-colors">Previous</span>
                                <span className="text-lg md:text-xl font-medium">{prevProject.title}</span>
                            </div>
                        </Link>

                        {/* Back to Category */}
                        <Link
                            href={`/portfolio/${categorySlug}`}
                            className="px-10 py-12 md:py-16 hover:bg-black/20 transition-colors duration-500 group border-r border-white/5"
                        >
                            <LayoutGrid className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                        </Link>

                        {/* Next */}
                        <Link
                            href={`/portfolio/${categorySlug}/${nextProject.slug}`}
                            className="flex-1 py-12 md:py-16 hover:bg-black/20 transition-colors duration-500 group"
                        >
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-[11px] uppercase tracking-[0.3em] text-white/30 group-hover:text-primary transition-colors">Next</span>
                                <span className="text-lg md:text-xl font-medium">{nextProject.title}</span>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </main>
    );
}
