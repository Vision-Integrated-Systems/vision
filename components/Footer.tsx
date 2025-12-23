import Image from "next/image";
import Link from "next/link";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900 relative overflow-hidden">
      {/* Visual Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: CTA & Logo */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-12 mb-12 border-b border-slate-800/50 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/vision-logo-white.png"
                alt="Vision Integrated Systems"
                width={200}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 max-w-md text-lg font-light">
              Delivering reliable, end-to-end technology solutions for the
              modern enterprise.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="/contact-us"
              className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
            >
              Get a Quote
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/service-ticket"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-full hover:bg-slate-700 transition-all border border-slate-700"
            >
              Support
            </Link>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a href="tel:8325351991" className="flex items-start group">
                <PhoneIcon className="w-6 h-6 mr-3 text-blue-500 shrink-0 group-hover:text-white transition-colors" />
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">
                    Call Us 24/7
                  </span>
                  <span className="text-white text-lg font-medium group-hover:text-blue-400 transition-colors">
                    832.535.1991
                  </span>
                </div>
              </a>

              <a
                href="mailto:info@vision-texas.com"
                className="flex items-start group"
              >
                <EnvelopeIcon className="w-6 h-6 mr-3 text-blue-500 shrink-0 group-hover:text-white transition-colors" />
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">
                    Email Us
                  </span>
                  <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
                    info@vision-texas.com
                  </span>
                </div>
              </a>

              <div className="flex items-start">
                <MapPinIcon className="w-6 h-6 mr-3 text-blue-500 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">
                    Visit HQ
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    32311 Tamina Rd, Suite A<br />
                    Magnolia, TX 77354
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
            <nav className="flex flex-col space-y-3">
              {[
                ["About Vision", "/about"],
                ["Our Services", "/services"],
                ["Project Gallery", "/gallery"],
                ["Insights Blog", "/insights"], // Added Insights
                ["Careers", "/careers"],
                ["Contact", "/contact-us"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Services & Solutions */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Solutions</h4>
            <nav className="flex flex-col space-y-3">
              {/* Updated list to include Solution Finder link */}
              {[
                { label: "Solution Finder", href: "/get-started" }, // New Tool Link
                { label: "Audio & Video", href: "/services" },
                { label: "Structured Cabling", href: "/services" },
                { label: "Security & Access", href: "/services" },
                { label: "Fiber Optics", href: "/services" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Connect</h4>
            <p className="text-slate-400 text-sm mb-6">
              Follow us for project updates and company news.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: "linkedin",
                  href: "https://www.linkedin.com/company/vishouston/",
                },
                {
                  icon: "facebook",
                  href: "https://www.facebook.com/profile.php?id=61571604035898",
                },
                {
                  icon: "instagram",
                  href: "https://www.instagram.com/vis_houston",
                },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon === "linkedin" && (
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {social.icon === "facebook" && (
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.641c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>
            © {new Date().getFullYear()} VIS Houston, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-blue-400 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
