import ContentSection from "@/components/ContentSection";
import type { Metadata } from "next";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Services | Vision Integrated Systems",
  description:
    "Explore our professional services: commercial audio/video, structured cabling (Cat6, Fiber), and integrated security & access control systems.",
};

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        {/* Abstract BG element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            End-to-end solutions for modern business environments.
          </p>
        </div>
      </section>

      {/* Audio & Video */}
      <ContentSection
        id="av"
        title="Audio & Video"
        bgColor="white"
        reverse={true}
        customVisual={
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-slate-100">
            <img
              src="/conference-room.jpg"
              alt="Modern conference room with video conferencing"
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        }
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Custom A/V Solutions
        </h3>
        <p className="mb-6 text-lg text-slate-600 leading-relaxed">
          Vision Integrated Systems is a premier provider of high-quality
          commercial audio, video, and visual presentation solutions. We tailor
          every installation to the unique requirements of your space, budget,
          and application.
        </p>
        <ul className="space-y-4">
          {[
            "Conference Rooms & Huddle Spaces",
            "Digital Signage & Video Walls",
            "Sound Masking & Background Audio",
            "Control Systems (Crestron, Extron, etc.)",
          ].map((item, i) => (
            <li key={i} className="flex items-start">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 shrink-0 mr-3 mt-0.5" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </ContentSection>

      {/* Structured Cabling */}
      <ContentSection
        id="cabling"
        title="Structured Cabling"
        bgColor="slate"
        customVisual={
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-slate-200/50">
            <img
              src="/cabling.jpg"
              alt="Cleanly wired network server rack"
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        }
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          The Backbone of Your Network
        </h3>
        <p className="mb-6 text-lg text-slate-600 leading-relaxed">
          Reliable connectivity starts with professional cabling. We design,
          procure, and install structured cabling systems that meet today's
          demands and tomorrow's growth.
        </p>
        <ul className="space-y-4">
          {[
            "Cat5e, Cat6, Cat6A Copper Cabling",
            "Fiber Optic Installation & Splicing",
            "Server Room & Rack Cleanups",
            "Certified Installations (Panduit, Belden, CommScope)",
          ].map((item, i) => (
            <li key={i} className="flex items-start">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 shrink-0 mr-3 mt-0.5" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </ContentSection>

      {/* Security */}
      <ContentSection
        id="security"
        title="Security"
        bgColor="white"
        reverse={true}
        customVisual={
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-slate-100">
            <img
              src="/cameras.jpg"
              alt="High-definition security camera"
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        }
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Protecting Your Assets
        </h3>
        <p className="mb-6 text-lg text-slate-600 leading-relaxed">
          Vision’s world-class integrated access control and surveillance
          systems deliver peace of mind. We provide solutions that are
          unsurpassed in simplicity, flexibility, and reliability.
        </p>
        <ul className="space-y-4">
          {[
            "IP Video Surveillance",
            "Access Control Systems",
            "Intrusion Detection",
            "Integrated Building Management",
          ].map((item, i) => (
            <li key={i} className="flex items-start">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 shrink-0 mr-3 mt-0.5" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
