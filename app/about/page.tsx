import Navbar from "@/components/layout/navbar";
import AboutHero from "@/components/sections/about-hero";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import FounderSection from "@/components/sections/founder-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import TeamSection from "@/components/sections/team-section";
import LoadingScreen from "@/components/ui/loading-screen";
import AboutDetailed from "@/components/sections/about-detailed";
import AboutInfoGrid from "@/components/sections/about-info-grid";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <Navbar />
      <AboutHero />
      <AboutDetailed/>
      <AboutInfoGrid />
      <FounderSection />
      <TestimonialsSection/>
      <TeamSection/>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
