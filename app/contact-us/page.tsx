import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      <Header />

      <main className="grow pt-20">
        <section className="bg-slate-900 py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to start your project? Get in touch with our team.
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Info */}
              <div className="lg:w-1/3 space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Our Office
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    32311 Tamina Rd
                    <br />
                    Suite A<br />
                    Magnolia, TX 77354
                  </p>
                  <div className="space-y-2">
                    <p className="flex items-center text-slate-700">
                      <span className="font-semibold w-20">Phone:</span>
                      <a
                        href="tel:8325351991"
                        className="text-blue-600 hover:underline"
                      >
                        832.535.1991
                      </a>
                    </p>
                    <p className="flex items-center text-slate-700">
                      <span className="font-semibold w-20">Email:</span>
                      <a
                        href="mailto:info@vision-texas.com"
                        className="text-blue-600 hover:underline"
                      >
                        info@vision-texas.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-2/3">
                <form className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Send us a Message
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="Doe"
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
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
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
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
