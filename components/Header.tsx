"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "h-20" : "h-24"
          }`}
        >
          {/* Logo */}
          <div className="shrink-0 cursor-pointer">
            <Link href="/">
              <Image
                src={isScrolled ? "/vision-logo.png" : "/vision-logo-white.png"}
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
            className={`hidden lg:flex space-x-8 items-center font-medium text-sm uppercase tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-slate-600" : "text-white/90"
            }`}
          >
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-blue-600 font-bold"
                  : isScrolled
                  ? "hover:text-blue-700"
                  : "hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-blue-600 font-bold"
                  : isScrolled
                  ? "hover:text-blue-700"
                  : "hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/leadership"
              className={`transition-colors ${
                isActive("/leadership")
                  ? "text-blue-600 font-bold"
                  : isScrolled
                  ? "hover:text-blue-700"
                  : "hover:text-white"
              }`}
            >
              Leadership
            </Link>
            <Link
              href="/services"
              className={`transition-colors ${
                isActive("/services")
                  ? "text-blue-600 font-bold"
                  : isScrolled
                  ? "hover:text-blue-700"
                  : "hover:text-white"
              }`}
            >
              Services
            </Link>
            <Link
              href="/contact-us"
              className={`transition-colors ${
                isActive("/contact-us")
                  ? "text-blue-600 font-bold"
                  : isScrolled
                  ? "hover:text-blue-700"
                  : "hover:text-white"
              }`}
            >
              Contact Us
            </Link>

            <Link
              href="/service-ticket"
              className={`px-5 py-2 border-2 transition-all duration-300 rounded-sm ${
                isScrolled
                  ? "border-slate-800 hover:bg-slate-800 hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-slate-900"
              }`}
            >
              Service Ticket
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? "text-slate-600" : "text-white"
              }`}
            >
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
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
