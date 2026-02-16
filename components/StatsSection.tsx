"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Years of Combined Experience", value: "30+" },
  { label: "Projects Completed", value: "1k+" },
  { label: "Certified Technicians", value: "100%" },
  { label: "Texas Clients", value: "100+" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden z-20">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>

      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-1/2 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Glowing Top & Bottom Borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Floating Glassmorphism Container */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group/container">
          {/* Subtle container hover sheen */}
          <div className="absolute inset-0 bg-linear-to-tr from-blue-500/5 via-transparent to-transparent opacity-0 group-hover/container:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 text-center md:divide-x divide-slate-700/50">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="p-4 group cursor-default"
              >
                {/* Number with Hover Gradient & Scale */}
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-4 group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-500 transform group-hover:scale-110 inline-block drop-shadow-lg">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] group-hover:text-blue-200 transition-colors duration-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
