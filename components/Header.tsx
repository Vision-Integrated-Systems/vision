"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine styles based on state
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;
  
  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 border-b ${
          isTransparent
            ? "bg-transparent border-transparent py-4"
            : "bg-white/90 backdrop-blur-md border-slate-200/50 py-2 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="shrink-0 relative z-50">
              <Image
                src={isTransparent ? "/vision-logo-white.png" : "/vision-logo.png"}
                alt="Vision Integrated Systems"
                width={180}
                height={50}
                className="h-10 w-auto object-contain transition-all"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-1 items-center">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact-us" },
              ].map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isTransparent 
                        ? "text-white/90 hover:text-white" 
                        : "text-slate-600 hover:text-blue-600"
                    } ${isActive ? (isTransparent ? "text-white" : "text-blue-600") : ""}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isTransparent ? "bg-white" : "bg-blue-600"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}

              <div className="pl-4">
                 <Link
                  href="/service-ticket"
                  className={`px-5 py-2.5 rounded text-sm font-semibold transition-all duration-300 border ${
                    isTransparent
                      ? "border-white text-white hover:bg-white hover:text-slate-900"
                      : "bg-slate-900 text-white border-slate-900 hover:bg-blue-600 hover:border-blue-600"
                  }`}
                >
                  Service Ticket
                </Link>
              </div>
            </nav>

            {/* Mobile Toggle (Simplified for brevity) */}
            <div className="lg:hidden z-50">
               <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 ${isTransparent ? 'text-white' : 'text-slate-900'}`}
              >
                <span className="sr-only">Open menu</span>
                {/* Icon logic here */}
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
       {/* Mobile Menu Content Omitted for brevity - keep existing logic */}
    </>
  );
}