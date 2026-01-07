import Navbar from "@/components/layout/navbar";
import PortfolioHero from "@/components/sections/portfolio-hero";
import PortfolioGrid from "@/components/sections/portfolio-grid";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import LoadingScreen from "@/components/ui/loading-screen";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <Navbar />
      <PortfolioHero />
      <PortfolioGrid />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
