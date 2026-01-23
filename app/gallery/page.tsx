"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { projects } from "@/app/lib/projects";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export default function Gallery() {
  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative bg-slate-950 py-32 lg:py-48 text-center text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-wide backdrop-blur-md">
            Proven Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Project{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-white">
              Gallery
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            See the quality and scope of our work across industries.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={galleryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                variants={itemVariants}
              >
                <Link
                  href={`/gallery/${project.id}`}
                  className="block relative overflow-hidden h-72"
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Case Study <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>

                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm border border-slate-200/50">
                      {project.category}
                    </span>
                  </div>
                </Link>

                <div className="p-8 flex flex-col flex-1 relative">
                  {/* Card Decoration */}
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <ArrowRightIcon className="w-12 h-12 text-slate-900" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 pr-8">
                    <Link href={`/gallery/${project.id}`}>{project.title}</Link>
                  </h3>
                  <div className="w-12 h-1 bg-blue-100 mb-4 rounded-full group-hover:bg-blue-600 transition-colors duration-500"></div>
                  <p className="text-slate-600 leading-relaxed flex-1 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-sm text-slate-400 font-medium">
                    <span>{project.client}</span>
                    <span className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read More <ArrowRightIcon className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <CtaSection />
    </>
  );
}
