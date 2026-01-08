"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import SectionHeader from "../ui/section-header";

// 1. Define the data type
type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

// 2. Create the data array (Mapping source)
const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What does your design package include?",
    answer:
      "Our comprehensive design package includes initial consultations, concept development, 3D visualizations, detailed floor plans, material specifications, and project management support throughout the construction phase.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical residential project takes 3-6 months from initial concept to final design delivery. Larger commercial projects may take 6-12 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: 3,
    question: "Will I receive 3D visuals of the project?",
    answer:
      "Absolutely! We provide photorealistic 3D renderings at multiple stages of the design process. This allows you to visualize the final result and make informed decisions before construction begins.",
  },
];

// 3. Create the sub-component (Modulation)
function FAQAccordionItem({ item, isOpen, onToggle }: { 
  item: FAQItem; 
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start gap-4 text-left group transition-colors hover:text-primary"
      >
        <span className="text-primary font-medium text-sm mt-1 flex-shrink-0">
          {item.id}.
        </span>
        <span className="flex-1 text-lg md:text-xl text-white group-hover:text-primary transition-colors">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 mt-1",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pb-6 pl-8 pr-12">
          <p className="text-muted leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

// 4. Main Section Component
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#202020] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        
        {/* Header */}
          <SectionHeader title="FAQ." letter="F" />
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: FAQ List */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-12 leading-tight">
              FREQUENTLY ASKED<br />QUESTIONS
            </h2>
            
            {/* FAQ Items (Mapping) */}
            <div className="space-y-0">
              {faqItems.map((item, index) => (
                <FAQAccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/3] lg:aspect-square rounded-md overflow-hidden">
            <Image
              src="/hero-bg.png"
              alt="Architectural visualization"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}
