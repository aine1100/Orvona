import Navbar from "@/components/layout/navbar";
import ContactHero from "@/components/sections/contact-hero";
import ContactInfo from "@/components/sections/contact-info";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import LoadingScreen from "@/components/ui/loading-screen";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen bg-[#141414]">
            <LoadingScreen />
            <Navbar />
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <Footer />
            <ScrollToTop />
        </main>
    );
}
