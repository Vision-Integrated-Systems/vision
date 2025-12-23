"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { projects } from "@/app/lib/projects";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
      <section className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        {/* Abstract BG element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Project{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Gallery
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            See the quality and scope of our work.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={galleryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group hover:shadow-2xl transition-all duration-500"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <Link
                  href={`/gallery/${project.id}`}
                  className="block relative overflow-hidden h-64"
                >
                  <div className="absolute inset-0 bg-slate-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium">
                      View Case Study <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>

                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </Link>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    <Link href={`/gallery/${project.id}`}>{project.title}</Link>
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
