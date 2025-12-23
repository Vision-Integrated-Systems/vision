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
      <section className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
        {/* Abstract BG element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 pt-10 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            End-to-end solutions for modern business environments.{" "}
          </p>
        </div>
      </section>

      <ContentSection
        id="av"
        title="Audio & Video"
        bgColor="white"
        reverse={true}
        imageSrc="/conference-room.jpg"
        imageAlt="Modern conference room with video conferencing"
      >
        <h3 className="text-xl font-semibold mb-3">Custom A/V Solutions</h3>
        <p className="mb-4">
          Vision Integrated Systems is a premier provider of high-quality
          commercial audio, video, and visual presentation solutions. We tailor
          every installation to the unique requirements of your space, budget,
          and application.
        </p>
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
            <span>Conference Rooms & Huddle Spaces</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
            <span>Digital Signage & Video Walls</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
            <span>Sound Masking & Background Audio</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
            <span>Control Systems (Crestron, Extron, etc.)</span>
          </li>
        </ul>
      </ContentSection>

      <ContentSection
        id="cabling"
        title="Structured Cabling"
        bgColor="slate"
        imageSrc="/cabling.jpg"
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
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
            <span>Cat5e, Cat6, Cat6A Copper Cabling</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
            <span>Fiber Optic Installation & Splicing</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
            <span>Server Room & Rack Cleanups</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
            <span>Certified Installations (Panduit, Belden, CommScope)</span>
          </li>
        </ul>
      </ContentSection>

      <ContentSection
        id="security"
        title="Security"
        bgColor="white"
        reverse={true}
        imageSrc="/cameras.jpg"
        imageAlt="High-definition security camera"
      >
        <h3 className="text-xl font-semibold mb-3">Protecting Your Assets</h3>
        <p className="mb-4">
          Vision’s world-class integrated access control and surveillance
          systems deliver peace of mind. We provide solutions that are
          unsurpassed in simplicity, flexibility, and reliability.
        </p>
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
            <span>IP Video Surveillance</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
            <span>Access Control Systems</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
            <span>Intrusion Detection</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mr-3" />
            <span>Integrated Building Management</span>
          </li>
        </ul>
      </ContentSection>
    </>
  );
}
