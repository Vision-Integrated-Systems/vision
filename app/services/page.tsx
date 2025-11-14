import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Vision Integrated Systems",
  description:
    "Explore our professional services: commercial audio/video, structured cabling (Cat6, Fiber), and integrated security & access control systems.",
};

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      <Header />

      <main className="grow pt-20">
        <section className="bg-slate-900 py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              End-to-end solutions for modern business environments.
            </p>
          </div>
        </section>

        <ContentSection
          id="av"
          title="Audio & Video"
          bgColor="white"
          reverse={true}
          imageSrc="https://placehold.co/600x450/3b82f6/ffffff?text=Modern+Conference+Room"
          imageAlt="Modern conference room with video conferencing"
        >
          <h3 className="text-xl font-semibold mb-3">Custom A/V Solutions</h3>
          <p className="mb-4">
            Vision Integrated Systems is a premier provider of high-quality
            commercial audio, video, and visual presentation solutions. We
            tailor every installation to the unique requirements of your space,
            budget, and application.
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Conference Rooms & Huddle Spaces</li>
            <li>Digital Signage & Video Walls</li>
            <li>Sound Masking & Background Audio</li>
            <li>Control Systems (Crestron, Extron, etc.)</li>
          </ul>
        </ContentSection>

        <ContentSection
          id="cabling"
          title="Structured Cabling"
          bgColor="slate"
          imageSrc="https://placehold.co/600x450/64748b/ffffff?text=Network+Server+Rack"
          imageAlt="Cleanly wired network server rack"
        >
          <h3 className="text-xl font-semibold mb-3">
            The Backbone of Your Network
          </h3>
          <p className="mb-4">
            Reliable connectivity starts with professional cabling. We design,
            procure, and install structured cabling systems that meet today's
            demands and tomorrow's growth.
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Cat5e, Cat6, Cat6A Copper Cabling</li>
            <li>Fiber Optic Installation & Splicing</li>
            <li>Server Room & Rack Cleanups</li>
            <li>Certified Installations (Panduit, Belden, CommScope)</li>
          </ul>
        </ContentSection>

        <ContentSection
          id="security"
          title="Security"
          bgColor="white"
          reverse={true}
          imageSrc="https://placehold.co/600x450/3b82f6/ffffff?text=Security+Camera"
          imageAlt="High-definition security camera"
        >
          <h3 className="text-xl font-semibold mb-3">Protecting Your Assets</h3>
          <p className="mb-4">
            Vision’s world-class integrated access control and surveillance
            systems deliver peace of mind. We provide solutions that are
            unsurpassed in simplicity, flexibility, and reliability.
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>IP Video Surveillance</li>
            <li>Access Control Systems</li>
            <li>Intrusion Detection</li>
            <li>Integrated Building Management</li>
          </ul>
        </ContentSection>
      </main>

      <Footer />
    </div>
  );
}
