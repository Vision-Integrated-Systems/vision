import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import TrustedManufacturers from "@/components/TrustedManufacturers";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      <Header />

      <main className="grow">
        <Hero />
        <FeaturesGrid />
        <TrustedManufacturers />
      </main>

      <Footer />
    </div>
  );
}
