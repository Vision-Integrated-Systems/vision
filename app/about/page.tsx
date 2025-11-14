import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheckIcon,
  LightBulbIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "About Vision Integrated Systems",
  description:
    "Learn about Vision's 30+ years of excellence in providing audio, video, cabling, and security solutions as a trusted partner for businesses across Texas.",
};

export default function About() {
  const leaders = [
    {
      name: "Bo Barron",
      title: "Managing Director",
      bio: "Leading Vision Integrated Systems with a focus on strategy and customer satisfaction.",
      imageSrc: "/bo.jpeg",
    },
    {
      name: "Zack Spelz",
      title: "Director of Business Development",
      bio: "Ensuring operational excellence and efficient project delivery across all sectors.",
      imageSrc: "/zack.jpeg",
    },
    {
      name: "Josh Schulze",
      title: "Director of Operations",
      bio: "Overseeing technical standards and driving innovation in AV and security solutions.",
      imageSrc: "/josh.jpeg",
    },
  ];

const values = [
    {
      name: "Integrity",
      description:
        "We build trust through honest communication and unwavering commitment to our clients.",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
    },
    {
      name: "Innovation",
      description:
        "We constantly explore new technologies to deliver cutting-edge, reliable solutions.",
      icon: <LightBulbIcon className="w-8 h-8" />,
    },
    {
      name: "Collaboration",
      description:
        "We work as a unified team with our clients and partners to achieve shared goals.",
      icon: <UsersIcon className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      <Header />

      <main className="grow pt-20">
        <section className="bg-slate-900 py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Vision
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Over 30 years of excellence in integrated systems.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <ContentSection
          id="our-story"
          title="Our Story"
          bgColor="white"
          imageSrc="/vision-team.jpg"
          imageAlt="The Vision Integrated Systems team"
        >
          <p className="mb-4">
            Vision Integrated Systems is an industry leader in Audio, Video,
            Cabling, and Security Solutions. Our commitment to quality, service,
            and client satisfaction has made us a trusted partner for businesses
            across Texas.
          </p>
          <p>
            We provide complete end-to-end solutions for commercial AV,
            structured cabling, and security projects. With thousands of
            integrations completed, our focus remains steadfast on the customer
            experience—providing quality solutions that work simply and
            reliably.
          </p>
        </ContentSection>

        {/* Mission Statement */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Our Mission
            </h2>
            <p className="text-2xl text-slate-700 italic max-w-4xl mx-auto leading-relaxed">
              "To deliver the security of an ironclad product, backed by the
              responsiveness and expertise your success demands."
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 relative inline-block">
                Our Core Values
                <span className="block h-1 w-20 bg-blue-600 mt-2 rounded-full mx-auto"></span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {values.map((value) => (
                <div
                  key={value.name}
                  className="text-center p-6 bg-slate-50 rounded-lg border border-slate-100"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">
                    {value.name}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 relative inline-block">
                Our Leadership
                <span className="block h-1 w-20 bg-blue-600 mt-2 rounded-full mx-auto"></span>
              </h2>
              <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                The team driving innovation and quality at Vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {leaders.map((leader, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-8"
                >
                  <div className="relative h-40 w-40 mb-6">
                    <Image
                      src={leader.imageSrc}
                      alt={`Portrait of ${leader.name}`}
                      width={160}
                      height={160}
                      className="rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900">
                      {leader.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {leader.title}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}