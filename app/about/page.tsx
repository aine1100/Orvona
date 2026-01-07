import Navbar from "@/components/layout/navbar";
import AboutHero from "@/components/sections/about-hero";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import AboutSection from "@/components/sections/about-section";
import FounderSection from "@/components/sections/founder-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import TeamSection from "@/components/sections/team-section";
import LoadingScreen from "@/components/ui/loading-screen";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <Navbar />
      <AboutHero />
      <AboutSection/>
      <FounderSection />
      <TestimonialsSection/>
      <TeamSection/>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
