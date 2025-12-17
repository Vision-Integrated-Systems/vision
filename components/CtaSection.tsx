"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Upgrade Your Infrastructure?
        </motion.h2>
        <motion.p 
          className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Whether you need a simple conference room update or a campus-wide fiber optic backbone, our team is ready to design your solution.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/contact-us"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-slate-50 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Get a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}