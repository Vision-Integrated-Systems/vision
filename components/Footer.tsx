import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div>
            <Image
              src="/vision-logo-white.png" 
              alt="Vision Logo" 
              width={150} 
              height={40} 
              className="mb-4 h-10 w-auto object-contain" 
            />
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Address</h4>
            <p className="text-sm leading-relaxed">
              32311 Tamina Rd<br />
              Suite A<br />
              Magnolia, TX 77354
            </p>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">E-Mail</h4>
            <p className="text-sm">
              <a href="mailto:info@vision-texas.com" className="hover:text-blue-400 transition-colors">info@vision-texas.com</a>
            </p>
          </div>

          {/* Phone */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Call Us</h4>
            <p className="text-sm text-2xl font-bold text-blue-400">
              <a href="tel:8325351991">832.535.1991</a>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} VIS Houston, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}