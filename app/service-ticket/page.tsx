import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import {
  BuildingOffice2Icon,
  PhoneIcon,
  EnvelopeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Service Ticket | Vision Integrated Systems",
  description:
    "Submit a service request for your AV, cabling, or security systems. Our team is here to help.",
};

export default function ServiceTicket() {
  // TODO: Just like the contact form, this form needs a Next.js Server Action
  // to handle the submission process.
  const handleSubmit = async (formData: FormData) => {
    "use server";
    console.log("Form submitted (service ticket)");
    console.log({
      company: formData.get("companyName"),
      name: formData.get("contactName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      <Header />

      <main className="grow pt-20">
        <section className="bg-slate-900 py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Submit a Service Ticket
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Need support? Fill out the form below, and we'll get back to you.
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <form
                action={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg border border-slate-100"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <WrenchScrewdriverIcon className="w-6 h-6 mr-3 text-blue-600" />
                  Service Request Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your Company Inc."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Contact Name
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Describe the Issue
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Please provide details about the problem, including any error messages, affected rooms, or equipment."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}