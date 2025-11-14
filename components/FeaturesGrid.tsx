"use client";

import { motion } from "framer-motion";

export default function FeaturesGrid() {
 const features = [
    {
      title: "Concept & Idea",
      desc: "Audio Video. Structured Cabling. Security.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
        />
      ),
    },
    {
      title: "Custom A/V",
      desc: "Simple. Reliable. Flexible.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
        />
      ),
    },
    {
      title: "Fast Support",
      desc: "Dependable. On time. On call.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.5,
    },
  };

  return (
    <section className="py-16 bg-white relative z-20 container mx-auto px-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white shadow-xl rounded-lg p-8 border border-slate-100"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className={`text-center p-4 group ${
              idx === 1
                ? "border-t md:border-t-0 md:border-l md:border-r border-slate-100"
                : ""
            }`}
            variants={itemVariants}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                {feature.icon}
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-600">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}