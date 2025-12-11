"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.2, 0.65, 0.3, 0.9] as const 
      },
    },
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.png"
          className="w-full h-full object-cover opacity-50"
          src="https://58rt0phzp49wzguc.public.blob.vercel-storage.com/digital-space.mp4"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      <motion.div
        className="relative z-10 text-center text-white px-4 container mx-auto mt-[-40px]"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >

        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-xl max-w-4xl mx-auto leading-tight"
          variants={itemVariants}
        >
          One Vision for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
            Integrated Solutions
          </span>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          variants={itemVariants}
        >
          Transforming spaces with seamless audio-video, security, and structured cabling solutions.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-5"
          variants={itemVariants}
        >
          <Link
            href="/services"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300"
          >
            Explore Services
          </Link>
          <Link
            href="/contact-us"
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDownIcon className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}