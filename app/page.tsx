import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import TeamSection from "@/components/sections/team-section";
import FAQSection from "@/components/sections/faq-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
