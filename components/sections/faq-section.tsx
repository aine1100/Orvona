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
    question: "What services does K&C Design provide?",
    answer:
      "We offer integrated architecture and engineering services, including architectural design, civil and structural engineering, MEP, fire protection, interior design, and landscape architecture—all coordinated under one roof.",
  },
  {
    id: 2,
    question: "What types of projects do you work on?",
    answer:
      "We work on a wide range of projects, including commercial, residential, mixed-use, renovations, tenant improvements, and expansions.",
  },
  {
    id: 3,
    question: "How does the design process work?",
    answer:
      "Our process begins with understanding your goals and project requirements. We then move through concept design, detailed drawings, permitting support, and coordination through construction to ensure a smooth and efficient project delivery.",
  },
  {
    id: 4,
    question: "Do you handle permitting and code compliance?",
    answer:
      "Yes. All of our designs are prepared to meet local and state codes, and we assist with permitting and agency coordination to help avoid delays.",
  },
  {
    id: 5,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on size and complexity. Smaller projects may take a few months, while larger or multi-discipline projects may take 6–12 months. We provide a clear schedule early in the process.",
  },
  {
    id: 6,
    question: "Will I receive 3D visuals of my project?",
    answer:
      "Yes. Depending on project scope, we can provide 3D renderings and visualizations to help you better understand the design before construction begins.",
  },
  {
    id: 7,
    question: "Do you work with clients outside of Georgia?",
    answer:
      "Yes. While we are based in Georgia, we serve clients across multiple states and coordinate with local jurisdictions as required.",
  },
  {
    id: 8,
    question: "Will you coordinate with contractors and consultants?",
    answer:
      "Absolutely. We collaborate closely with contractors, owners, and other stakeholders to ensure accurate documentation and efficient construction.",
  },
  {
    id: 9,
    question: "Can you handle renovations and existing buildings?",
    answer:
      "Yes. We have extensive experience with renovations, expansions, and tenant improvements for existing structures.",
  },
  {
    id: 10,
    question: "How do I get started?",
    answer:
      "Simply contact us through our website or give us a call. We'll schedule an initial consultation to discuss your project goals and next steps.",
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
