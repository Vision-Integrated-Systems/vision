import ContentSection from "@/components/ContentSection";
import type { Metadata } from "next";
import {
  ShieldCheckIcon,
  LightBulbIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

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
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        {/* Abstract BG element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Vision Integrated Systems
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Over 30 years of excellence in integrated systems.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <ContentSection
        id="our-story"
        title="Our Story"
        bgColor="white"
        // Using customVisual to render image WITHOUT the blue offset border
        customVisual={
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            {/* Switched to standard img for compatibility with ContentSection's existing style, 
                 or could use next/image if you prefer optimization */}
            <img
              src="/vision-team.jpg"
              alt="The Vision Integrated Systems team"
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
            />
            {/* Glass Sheen Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        }
      >
        <div className="prose prose-lg text-slate-600">
          <p className="mb-6">
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
        </div>
      </ContentSection>

      {/* Mission Statement */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 uppercase tracking-widest opacity-80">
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto relative">
            {/* Quote Icon - Added z-0 to ensure it stays behind text */}
            <svg
              className="absolute -top-10 -left-10 w-24 h-24 text-slate-200 opacity-50 z-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21L14.017 18C14.017 16.0547 14.432 15.1431 15.2618 15.2652C14.7351 14.9439 14.2882 14.5098 13.9723 13.993C13.6565 13.4762 13.5042 12.8797 13.5284 12.2743C13.5284 9.17578 16.2736 7.42578 19.3366 7.42578L19.8988 7.42578L19.8988 10.4258L19.5085 10.4258C18.4239 10.4258 17.6596 10.9701 17.6596 12.0586C17.6596 12.5938 18.0699 12.9224 18.6655 12.9224H19.9238V21H14.017ZM7.01736 21L7.01736 18C7.01736 16.0547 7.43231 15.1431 8.26214 15.2652C7.73543 14.9439 7.28851 14.5098 6.97268 13.993C6.65684 13.4762 6.50456 12.8797 6.52873 12.2743C6.52873 9.17578 9.27391 7.42578 12.3369 7.42578L12.8991 7.42578L12.8991 10.4258L12.5088 10.4258C11.4243 10.4258 10.6599 10.9701 10.6599 12.0586C10.6599 12.5938 11.0702 12.9224 11.6658 12.9224H12.9242V21H7.01736Z" />
            </svg>
            {/* Text - Added relative and z-10 to ensure it sits ON TOP of the SVG */}
            <p className="relative z-10 text-3xl md:text-4xl text-slate-800 font-serif italic leading-relaxed">
              "To deliver the security of an ironclad product, backed by the
              responsiveness and expertise your success demands."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
              What Drives Us
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.name}
                className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
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
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              The dedicated team driving innovation and quality at Vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl group-hover:border-blue-500 transition-colors duration-300">
                    <Image
                      src={leader.imageSrc}
                      alt={`Portrait of ${leader.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
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
    </>
  );
}
