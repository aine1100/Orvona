import Navbar from "@/components/layout/navbar";
import ServicesHero from "@/components/sections/services-hero";
import ServicesGrid from "@/components/sections/services-grid";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import LoadingScreen from "@/components/ui/loading-screen";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
