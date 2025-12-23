import ContentSection from "@/components/ContentSection";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  AcademicCapIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Careers | Vision Integrated Systems",
  description:
    "Join our team. Explore career opportunities at Vision Integrated Systems and help us build the future of AV, cabling, and security solutions.",
};

export default function Careers() {
  const jobPostings = [
    {
      title: "Lead A/V Technician",
      location: "Magnolia, TX",
      type: "Full-Time",
      tags: ["Crestron", "Biamp", "Commercial"],
      description:
        "We are seeking an experienced Lead A/V Technician to manage commercial installations, from structured cabling to final commissioning of Crestron and Biamp systems.",
    },
    {
      title: "Security Installation Technician",
      location: "Magnolia, TX",
      type: "Full-Time",
      tags: ["Axis", "Access Control", "IP Video"],
      description:
        "Responsible for the installation and service of IP video surveillance and access control systems. Experience with Axis or similar platforms preferred.",
    },
  ];

  const processSteps = [
    {
      icon: BriefcaseIcon,
      title: "Application",
      desc: "Submit your resume online.",
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: "Interview",
      desc: "Meet the team & discuss skills.",
    },
    {
      icon: UserGroupIcon,
      title: "Culture Fit",
      desc: "Ensure our values align.",
    },
    { icon: CheckBadgeIcon, title: "Offer", desc: "Welcome to Vision!" },
  ];

  const testimonials = [
    {
      quote:
        "Vision treats us like family. They invest in our training and always ensure we have the right tools for the job. It's refreshing to work for a company that values quality over speed.",
      author: "Mike R.",
      role: "Senior A/V Technician",
      years: "5 years at Vision",
    },
    {
      quote:
        "I love the variety of projects. One day I'm at a corporate HQ, the next I'm helping secure a warehouse. It never gets boring, and the team always has my back.",
      author: "Sarah L.",
      role: "Security Systems Specialist",
      years: "3 years at Vision",
    },
  ];

  const faqs = [
    {
      question: "Do I need to provide my own tools?",
      answer:
        "Vision provides all major power tools, ladders, and specialty testing equipment. Technicians are expected to have a basic professional set of hand tools.",
      icon: WrenchScrewdriverIcon,
    },
    {
      question: "What is the travel requirement?",
      answer:
        "Most of our work is within the Greater Houston area. Occasional overnight travel may be required for special large-scale projects, but it is not the norm.",
      icon: TruckIcon,
    },
    {
      question: "Do you offer training and certifications?",
      answer:
        "Yes! We heavily invest in our team. We sponsor certifications for Crestron, Biamp, OSHA, and other key manufacturer training to help you advance your career.",
      icon: AcademicCapIcon,
    },
  ];

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
            Build the Future <br />
            <span className="text-blue-500">With Us</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We're looking for talented individuals who value quality, integrity,
            and innovation.
          </p>
        </div>
      </section>

      <ContentSection
        id="why-vision"
        title="Why Work at Vision?"
        bgColor="white"
      >
        <p className="mb-6 text-lg">
          At Vision Integrated Systems, we're more than just a company—we're a
          team. We value quality, service, and reliability above all else. We've
          built our reputation on 30+ years of excellence and are looking for
          individuals who share our commitment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Competitive salary and benefits",
            "Professional growth & certification",
            "Collaborative team environment",
            "Industry-leading technology partners",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              {item}
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Employee Spotlights - NEW */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Heard from the Team
            </h2>
            <p className="text-slate-600">
              Real stories from the people who make it happen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 text-slate-100">
                  <svg
                    className="w-16 h-16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21L14.017 18C14.017 16.0547 14.432 15.1431 15.2618 15.2652C14.7351 14.9439 14.2882 14.5098 13.9723 13.993C13.6565 13.4762 13.5042 12.8797 13.5284 12.2743C13.5284 9.17578 16.2736 7.42578 19.3366 7.42578L19.8988 7.42578L19.8988 10.4258L19.5085 10.4258C18.4239 10.4258 17.6596 10.9701 17.6596 12.0586C17.6596 12.5938 18.0699 12.9224 18.6655 12.9224H19.9238V21H14.017ZM7.01736 21L7.01736 18C7.01736 16.0547 7.43231 15.1431 8.26214 15.2652C7.73543 14.9439 7.28851 14.5098 6.97268 13.993C6.65684 13.4762 6.50456 12.8797 6.52873 12.2743C6.52873 9.17578 9.27391 7.42578 12.3369 7.42578L12.8991 7.42578L12.8991 10.4258L12.5088 10.4258C11.4243 10.4258 10.6599 10.9701 10.6599 12.0586C10.6599 12.5938 11.0702 12.9224 11.6658 12.9224H12.9242V21H7.01736Z" />
                  </svg>
                </div>
                <p className="text-lg text-slate-700 italic mb-6 relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.author}</h4>
                    <p className="text-sm text-slate-500">
                      {t.role} &bull; {t.years}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-slate-600">
              Simple, transparent, and respectful of your time.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-slate-100 text-slate-600">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
                {/* Connector Line (except last item) */}
                {idx !== processSteps.length - 1 && (
                  <div className="hidden md:block absolute w-full h-0.5 bg-slate-100 top-8 left-1/2 -z-10 transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Common Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4"
              >
                <div className="shrink-0 mt-1">
                  <faq.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 relative inline-block">
              Current Openings
              <span className="block h-1 w-full bg-blue-600 mt-2 rounded-full opacity-20"></span>
            </h2>
          </div>

          {jobPostings.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {jobPostings.map((job) => (
                <div
                  key={job.title}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex gap-4 text-sm text-slate-500 mb-4 font-medium">
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {job.type}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-6 md:mb-0">
                        {job.description}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <Link
                        href={`/careers/apply?job=${encodeURIComponent(
                          job.title
                        )}`}
                        className="w-full md:w-auto text-center px-8 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-slate-900/10"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center max-w-xl mx-auto bg-slate-50 p-12 rounded-2xl border border-dashed border-slate-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                No Openings At This Time
              </h3>
              <p className="text-slate-600 mb-6">
                We are always looking for talent. Send us a general application.
              </p>
              <Link
                href="/careers/apply?job=General+Inquiry"
                className="text-blue-600 font-semibold hover:underline"
              >
                Submit General Application &rarr;
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
