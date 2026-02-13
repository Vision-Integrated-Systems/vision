import ContentSection from "@/components/ContentSection";
import StatsSection from "@/components/StatsSection";
import TrustedManufacturers from "@/components/TrustedManufacturers";
import CtaSection from "@/components/CtaSection";
import type { Metadata } from "next";
import {
  ShieldCheckIcon,
  LightBulbIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Vision Integrated Systems",
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
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-950 py-32 lg:py-48 text-center text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-wide backdrop-blur-md">
            Since 1994
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            About <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-white">
              Vision Integrated Systems
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Building the infrastructure that powers modern business.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Our Story */}
      <ContentSection
        id="our-story"
        title="Our Story"
        bgColor="white"
        customVisual={
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-slate-100">
            <Image
              src="/vision-team.jpg"
              alt="The Vision Integrated Systems team"
              width={1200}
              height={800}
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              priority
            />
            {/* Glass Sheen Effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        }
      >
        <div className="prose prose-lg text-slate-600 leading-relaxed">
          <p className="mb-6 font-medium text-slate-900 text-xl">
            At Vision Integrated Systems, we believe technology should simplify
            operations — not complicate them.
          </p>
          <p className="mb-6">
            Anyone can sell cameras, access control, cabling, or AV equipment.
            But when systems don’t talk to each other, when workflows break
            down, or when users avoid the technology altogether, the problem
            isn’t the hardware — it’s the integration.{" "}
            <strong>That’s where Vision comes in.</strong>
          </p>
          <p>
            We start by understanding how you work, what matters most, and where
            technology can remove friction instead of adding it. From access
            control and video surveillance to structured cabling and audiovisual
            systems, we design solutions that are custom-built around your
            environment, your people, and your goals. The result isn’t just
            installed technology — it’s technology that works for you.
          </p>
        </div>
      </ContentSection>

      {/* Mission Statement - High Impact */}
      <section className="py-24 relative overflow-hidden bg-blue-900 text-white">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 to-slate-900 z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light z-0" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-sm font-bold text-blue-300 mb-8 uppercase tracking-[0.2em]">
            Our Mission
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-3xl md:text-5xl font-serif leading-tight text-transparent bg-clip-text bg-linear-to-b from-white to-blue-200">
              &quot;To engineer integrated systems that remove friction and
              simplify operations—delivering technology that truly works for
              your people.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">
              Our DNA
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Core Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              The principles that guide every decision we make and every cable
              we pull.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.name}
                className="group p-10 bg-white rounded-2xl border border-slate-200/60 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 mb-8 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {value.name}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-dot-pattern opacity-5 mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-900/10 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              The dedicated team driving innovation and quality at Vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1"
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl group-hover:border-blue-500 transition-colors duration-300">
                    <Image
                      src={leader.imageSrc}
                      alt={`Head shot of ${leader.name}`}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {leader.name}
                </h3>
                <p className="text-blue-400 font-medium mb-4 text-sm uppercase tracking-wider">
                  {leader.title}
                </p>
                <p className="text-slate-400 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedManufacturers />

      <CtaSection />
    </>
  );
}
