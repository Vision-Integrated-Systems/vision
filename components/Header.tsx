import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/">
              <Image
                src="/vision-logo.png"
                alt="Vision Integrated Systems"
                width={200}
                height={54}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center font-medium text-sm text-slate-600 uppercase tracking-wide">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <Link href="#Audio" className="hover:text-blue-700 transition-colors">Audio Video</Link>
            <Link href="#Cabling" className="hover:text-blue-700 transition-colors">Structured Cabling</Link>
            <Link href="#Security" className="hover:text-blue-700 transition-colors">Security</Link>
            <Link href="#About" className="hover:text-blue-700 transition-colors">About</Link>
            <Link href="/contact-us" className="hover:text-blue-700 transition-colors">Contact Us</Link>
            
            <Link 
              href="/service-ticket" 
              className="px-5 py-2 border-2 border-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300 rounded-sm"
            >
              Service Ticket
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="p-2 text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}