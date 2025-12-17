import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import TrustedManufacturers from "@/components/TrustedManufacturers";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
     <>
      <Hero />
      <StatsSection />
      <FeaturesGrid />
      <Testimonials />
      <TrustedManufacturers />
      <CtaSection />
    </>
  );
}