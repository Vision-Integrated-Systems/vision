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
        {/* CTA Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 relative max-w-2xl mx-auto">
              Comprehensive Solutions for Your Business
              <span className="block h-1 w-20 bg-blue-600 mt-2 rounded-full mx-auto"></span>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              From complex audio/video integrations in boardrooms to
              comprehensive security and structured cabling for your entire
              campus, we provide reliable, end-to-end solutions. Explore our
              services to see how we can help.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/services"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Our Services
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 bg-white text-slate-700 font-semibold rounded-md border border-slate-300 hover:bg-slate-100 transition-colors duration-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </section>
        <FeaturesGrid />
        <TrustedManufacturers />
      </main>

      <Footer />
    </div>
  );
}
