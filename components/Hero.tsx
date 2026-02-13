"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDownIcon, SparklesIcon } from "@heroicons/react/24/outline";

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
        ease: [0.2, 0.65, 0.3, 0.9] as const,
      },
    },
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 1. Dynamic Ambient Background */}
      {/* Noise Texture for Premium Matte Feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay z-0 pointer-events-none"></div>
      {/* Subtle Tech Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none z-0"></div>

      {/* 2. Animated Glowing Orbs (Replaces Video) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen"
        ></motion.div>
      </div>

      <motion.div
        className="relative z-10 text-center text-white px-4 container mx-auto flex flex-col items-center mt-10"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 3. Floating Top Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-bold tracking-widest uppercase backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <SparklesIcon className="w-4 h-4 text-blue-400 animate-pulse" />
            <span>Next-Generation Integration</span>
          </div>
        </motion.div>

        {/* 4. Enhanced Typography */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 drop-shadow-2xl max-w-5xl mx-auto leading-[1.1]"
          variants={itemVariants}
        >
          One Vision for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-300 to-white">
            Integrated Solutions
          </span>
        </motion.h1>

        {/* Updated Copy from earlier */}
        <motion.p
          className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          variants={itemVariants}
        >
          We don’t force solutions into spaces. We engineer systems that fit.{" "}
          <br className="hidden md:block" />
          <span className="font-medium text-blue-400">
            Reliable. Scalable. Secure. Easy to use.
          </span>
        </motion.p>

        {/* 5. Premium Interactive Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto"
          variants={itemVariants}
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-blue-600 border border-transparent rounded-full hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-blue-400/30 z-0"></div>
          </Link>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-white/5 border border-white/20 rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      {/* 6. Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
            Scroll
          </span>
          <ChevronDownIcon className="w-5 h-5 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
