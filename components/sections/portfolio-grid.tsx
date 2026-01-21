"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioCategories } from "@/data/portfolio-data";

// Category Card Component
function CategoryCard({ category }: { category: typeof portfolioCategories[0] }) {
  return (
    <Link href={`/portfolio/${category.slug}`}>
      <div
        data-cursor="drag"
        className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-none"
      >
        {/* Category Cover Image */}
        <Image
          src={category.coverImage}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/70" />

        {/* Arrow Icon */}
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
          <ArrowUpRight className="w-5 h-5 text-white transition-colors duration-500 group-hover:text-black" />
        </div>

        {/* Category Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <h3 className="text-xl md:text-2xl font-medium mb-2 transition-transform duration-500 group-hover:translate-x-2">
            {category.title}
          </h3>
          {/* <p className="text-sm text-white/70 mb-2 line-clamp-2">
            {category.description}
          </p>
          <p className="text-xs text-primary font-medium">
            {category.projects.length} Projects
          </p> */}
        </div>
      </div>
    </Link>
  );
}

// Main Portfolio Grid Section - Shows Category Cards
export default function PortfolioGrid() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#202020] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-4">
            Explore Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-medium">
            Project Categories
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
}
