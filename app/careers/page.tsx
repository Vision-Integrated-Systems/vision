import ContentSection from "@/components/ContentSection";
import type { Metadata } from "next";
import Link from "next/link";

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
      description:
        "We are seeking an experienced Lead A/V Technician to manage commercial installations, from structured cabling to final commissioning of Crestron and Biamp systems.",
    },
    {
      title: "Security & Access Control Installation Technician",
      location: "Magnolia, TX",
      type: "Full-Time",
      description:
        "Responsible for the installation and service of IP video surveillance and access control systems. Experience with Axis or similar platforms preferred.",
    },
  ];

  return (
    <>
      <section className="bg-slate-900 py-20 text-center text-white">
        <div className="container mx-auto px-4 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're looking for talented individuals to help us deliver
            excellence.
          </p>
        </div>
      </section>

      <ContentSection
        id="why-vision"
        title="Why Work at Vision?"
        bgColor="white"
      >
        <p className="mb-4">
          At Vision Integrated Systems, we're more than just a company—we're a
          team. We value quality, service, and reliability above all else.
          We've built our reputation on 30+ years of excellence and are looking
          for individuals who share our commitment.
        </p>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          <li>Competitive salary and benefits</li>
          <li>Opportunities for professional growth and certification</li>
          <li>A collaborative and supportive team environment</li>
          <li>Work with industry-leading technology and partners</li>
        </ul>
      </ContentSection>

      <section id="openings" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 relative">
              Current Openings
              <span className="block h-1 w-20 bg-blue-600 mt-2 rounded-full mx-auto"></span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              If you're passionate about technology and customer service, we'd
              love to hear from you.
            </p>
          </div>

          {jobPostings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {jobPostings.map((job) => (
                <div
                  key={job.title}
                  className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-slate-600 mb-4">
                    <span>{job.location}</span>
                    <span>&bull;</span>
                    <span>{job.type}</span>
                  </div>
                  <p className="text-slate-700 mb-6">{job.description}</p>
                  <Link
                    href={`/contact-us?subject=Application for ${encodeURIComponent(
                      job.title,
                    )}`}
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center max-w-xl mx-auto bg-white p-10 rounded-lg shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                No Openings At This Time
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We are not actively hiring for any positions right now, but
                we're always interested in hearing from talented individuals.
                Feel free to{" "}
                <Link
                  href="/contact-us"
                  className="text-blue-600 font-medium hover:underline"
                >
                  send us your resume
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}