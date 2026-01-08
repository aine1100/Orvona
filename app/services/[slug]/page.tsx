"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/data/services-data";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ServiceHero from "@/components/sections/service-detail/service-hero";
import ServiceContent from "@/components/sections/service-detail/service-content";
import ServiceGallery from "@/components/sections/service-detail/service-gallery";
import ServiceFeaturesFAQ from "@/components/sections/service-detail/service-features-faq";
import ServiceNavigation from "@/components/sections/service-detail/service-navigation";
import LoadingScreen from "@/components/ui/loading-screen";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { notFound } from "next/navigation";

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const currentIndex = servicesData.findIndex(s => s.slug === slug);
    const service = servicesData[currentIndex];

    if (!service) {
        return notFound();
    }

    const prevService = servicesData[currentIndex === 0 ? servicesData.length - 1 : currentIndex - 1];
    const nextService = servicesData[currentIndex === servicesData.length - 1 ? 0 : currentIndex + 1];

    return (
        <main className="relative min-h-screen bg-[#141414]">
            <LoadingScreen />
            <Navbar />

            <ServiceHero
                title={service.title}
                image={service.heroImage}
            />

            <ServiceContent
                letter={service.letter}
                description={service.fullDescription}
                quote={service.quote}
            />

            <ServiceGallery images={service.gallery} />

            <ServiceFeaturesFAQ
                features={service.features}
                faqs={service.faqs}
            />

            <ServiceNavigation
                prev={{ title: prevService.title, slug: prevService.slug }}
                next={{ title: nextService.title, slug: nextService.slug }}
            />

            <Footer />
            <ScrollToTop />
        </main>
    );
}
