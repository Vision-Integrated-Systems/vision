import Image from "next/image";
import Link from "next/link"; // <-- Import Link

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Image
              src="/vision-logo-white.png"
              alt="Vision Logo"
              width={150}
              height={40}
              className="mb-4 h-10 w-auto object-contain"
            />
            <p className="text-sm text-slate-400 mt-4 pr-4">
              Leading provider of audio-video, structured cabling, and security
              solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/"
                className="hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-blue-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/careers"
                className="hover:text-blue-400 transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact-us"
                className="hover:text-blue-400 transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Address</h4>
            <p className="text-sm leading-relaxed">
              32311 Tamina Rd
              <br />
              Suite A<br />
              Magnolia, TX 77354
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Get In Touch
            </h4>
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href="mailto:info@vision-texas.com"
                className="hover:text-blue-400 transition-colors"
              >
                info@vision-texas.com
              </a>
              <a
                href="tel:8325351991"
                className="text-lg font-bold text-blue-400"
              >
                832.535.1991
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} VIS Houston, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}