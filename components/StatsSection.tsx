"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Years in Business", value: "30+" },
  { label: "Projects Completed", value: "1k+" },
  { label: "Certified Technicians", value: "100%" },
  { label: "Texas Clients", value: "500+" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-white mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
