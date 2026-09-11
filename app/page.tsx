// Path: app/page.tsx
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import StatsSection from "@/components/sections/stats-section";
import EkskulSection from "@/components/sections/ekskul-section";
import InfoGridSection from "@/components/sections/info-grid-section";
import CtaSection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <EkskulSection />
      <InfoGridSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
