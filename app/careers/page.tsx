// app/careers/page.tsx
import ContentSection from "@/components/ContentSection";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  BriefcaseIcon, 
  ChatBubbleBottomCenterTextIcon, 
  UserGroupIcon, 
  CheckBadgeIcon 
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
    { icon: BriefcaseIcon, title: "Application", desc: "Submit your resume online." },
    { icon: ChatBubbleBottomCenterTextIcon, title: "Interview", desc: "Meet the team & discuss skills." },
    { icon: UserGroupIcon, title: "Culture Fit", desc: "Ensure our values align." },
    { icon: CheckBadgeIcon, title: "Offer", desc: "Welcome to Vision!" },
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
            Build the Future <br/><span className="text-blue-500">With Us</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We're looking for talented individuals who value quality, integrity, and innovation.
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
          team. We value quality, service, and reliability above all else.
          We've built our reputation on 30+ years of excellence and are looking
          for individuals who share our commitment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {[
             "Competitive salary and benefits",
             "Professional growth & certification",
             "Collaborative team environment",
             "Industry-leading technology partners"
           ].map((item, i) => (
             <div key={i} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
               <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
               {item}
             </div>
           ))}
        </div>
      </ContentSection>

      {/* Hiring Process Section - NEW */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Hiring Process</h2>
            <p className="text-slate-600">Simple, transparent, and respectful of your time.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border border-slate-100 text-blue-600">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
                {/* Connector Line (except last item) */}
                {idx !== processSteps.length - 1 && (
                  <div className="hidden md:block absolute w-full h-0.5 bg-slate-200 top-8 left-1/2 -z-10 transform translate-x-1/2"></div>
                )}
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
                         {job.tags.map(tag => (
                           <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md">
                             {tag}
                           </span>
                         ))}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex gap-4 text-sm text-slate-500 mb-4 font-medium">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {job.type}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-6 md:mb-0">{job.description}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Link
                        href={`/careers/apply?job=${encodeURIComponent(job.title)}`}
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