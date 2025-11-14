"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => pathname === path;
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;
  const headerBgClass = isTransparent
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100";
  const textColorClass = isTransparent ? "text-white/90" : "text-slate-600";
  const hoverColorClass = isTransparent
    ? "hover:text-white"
    : "hover:text-blue-700";
  const logoSrc = isTransparent ? "/vision-logo-white.png" : "/vision-logo.png";
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${headerBgClass}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={
              "flex justify-between items-center transition-all duration-300 h-20"
            }
          >
            {/* Logo */}
            <div className="shrink-0 cursor-pointer">
              <Link href="/">
                <Image
                  src={logoSrc}
                  alt="Vision Integrated Systems"
                  width={200}
                  height={54}
                  className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              className={`hidden lg:flex space-x-8 items-center font-medium text-sm uppercase tracking-wide transition-colors duration-300 ${textColorClass}`}
            >
              <Link
                href="/"
                className={`transition-colors ${
                  isActive("/") ? "text-blue-600 font-bold" : hoverColorClass
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`transition-colors ${
                  isActive("/about")
                    ? "text-blue-600 font-bold"
                    : hoverColorClass
                }`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`transition-colors ${
                  isActive("/services")
                    ? "text-blue-600 font-bold"
                    : hoverColorClass
                }`}
              >
                Services
              </Link>
              <Link
                href="/contact-us"
                className={`transition-colors ${
                  isActive("/contact-us")
                    ? "text-blue-600 font-bold"
                    : hoverColorClass
                }`}
              >
                Contact Us
              </Link>

              <Link
                href="/service-ticket"
                className={`px-5 py-2 border-2 transition-all duration-300 rounded-sm ${
                  isTransparent
                    ? "border-white text-white hover:bg-white hover:text-slate-900"
                    : "border-slate-800 hover:bg-slate-800 hover:text-white"
                }`}
              >
                Service Ticket
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors duration-300 ${textColorClass}`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-20 flex flex-col bg-white/95 backdrop-blur-md">
          <nav className="flex flex-col items-center justify-center flex-1 space-y-6 px-6">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`text-3xl font-bold transition-colors ${
                isActive("/") ? "text-blue-600" : "text-slate-700"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`text-3xl font-bold transition-colors ${
                isActive("/about") ? "text-blue-600" : "text-slate-700"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={closeMobileMenu}
              className={`text-3xl font-bold transition-colors ${
                isActive("/services") ? "text-blue-600" : "text-slate-700"
              }`}
            >
              Services
            </Link>
            <Link
              href="/contact-us"
              onClick={closeMobileMenu}
              className={`text-3xl font-bold transition-colors ${
                isActive("/contact-us") ? "text-blue-600" : "text-slate-700"
              }`}
            >
              Contact Us
            </Link>

            <Link
              href="/service-ticket"
              onClick={closeMobileMenu}
              className="px-8 py-3 text-lg border-2 border-slate-800 text-slate-800 font-semibold rounded-sm w-full text-center"
            >
              Service Ticket
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
