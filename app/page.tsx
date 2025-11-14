import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import TrustedManufacturers from "@/components/TrustedManufacturers";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
     <>
      <Hero />
      <FeaturesGrid />
      <TrustedManufacturers />
    </>
  );
}
