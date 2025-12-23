"use client";

import { useActionState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  BuildingOffice2Icon,
  PhoneIcon,
  EnvelopeIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { handleContactSubmit, type FormState } from "../lib/actions";
import { SubmitButton } from "@/components/SubmitButton";

function ContactForm() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");
  const defaultMessage = subject ? `Regarding: ${subject}\n\n` : "";

  const initialState: FormState = null;
  const [state, formAction] = useActionState(handleContactSubmit, initialState);

  // Simple FAQ Data
  const faqs = [
    {
      q: "What areas do you serve?",
      a: "We primarily serve the Greater Houston area and surrounding regions in Texas, but we travel for larger corporate projects.",
    },
    {
      q: "Do you offer free estimates?",
      a: "Yes! For most standard commercial projects, we provide complimentary site surveys and estimates.",
    },
    {
      q: "What brands do you work with?",
      a: "We are certified partners with industry leaders like Crestron, Biamp, Axis, Shure, and many others.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to start your project? Let's build something great together.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative">
        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            {/* LEFT COLUMN: Contact Info & Smart Routing */}
            <div className="lg:w-1/3 space-y-8">
              {/* Main Contact Card */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center relative z-10">
                  <BuildingOffice2Icon className="w-6 h-6 mr-3 text-blue-600" />
                  Headquarters
                </h3>

                <div className="space-y-6 relative z-10">
                  <p className="text-slate-600 leading-relaxed pl-9 border-l-2 border-blue-100">
                    32311 Tamina Rd
                    <br />
                    Suite A<br />
                    Magnolia, TX 77354
                  </p>

                  <div className="space-y-4">
                    <a
                      href="tel:8325351991"
                      className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors group/link"
                    >
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-4 group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                        <PhoneIcon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-slate-700">
                        832.535.1991
                      </span>
                    </a>

                    <a
                      href="mailto:info@vision-texas.com"
                      className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors group/link"
                    >
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-4 group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                        <EnvelopeIcon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-slate-700">
                        info@vision-texas.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Smart Route: Support */}
              <Link
                href="/service-ticket"
                className="block bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 text-blue-400">
                    <WrenchScrewdriverIcon className="w-6 h-6 mr-2" />
                    <span className="font-bold uppercase tracking-wider text-sm">
                      Existing Client?
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Need Technical Support?
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Submit a ticket directly to our technicians for faster
                    service.
                  </p>
                  <span className="text-white font-semibold flex items-center text-sm group-hover:underline">
                    Open Service Ticket &rarr;
                  </span>
                </div>
              </Link>

              {/* Smart Route: Careers */}
              <Link
                href="/careers"
                className="block bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:border-blue-200 transition-colors group flex items-center justify-between"
              >
                <div className="flex items-center">
                  <UserGroupIcon className="w-5 h-5 text-slate-400 mr-3 group-hover:text-blue-600 transition-colors" />
                  <span className="font-medium text-slate-700">
                    Join our Team
                  </span>
                </div>
                <ChevronDownIcon className="w-4 h-4 text-slate-400 -rotate-90" />
              </Link>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:w-2/3">
              <form
                action={formAction}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-100"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Send us a Message
                  </h3>
                  <p className="text-slate-500 mt-2">
                    Tell us about your project or inquiry.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-semibold text-slate-700 ml-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Jane"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-semibold text-slate-700 ml-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-slate-700 ml-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-slate-700 ml-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="mb-8 space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-slate-700 ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                    required
                    defaultValue={defaultMessage}
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <SubmitButton
                    text="Send Message"
                    className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300"
                  />
                  <p className="text-xs text-slate-400 hidden sm:block">
                    We usually respond within 24 hours.
                  </p>
                </div>

                {state?.status === "success" && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {state.message}
                  </div>
                )}
                {state?.status === "error" && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {state.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* New Feature: FAQ Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactUs() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <ContactForm />
    </Suspense>
  );
}
