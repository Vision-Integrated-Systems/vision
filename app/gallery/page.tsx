"use client"; 

import { motion } from "framer-motion";

export default function Gallery() {
  const projects = [
    {
      title: "Corporate Boardroom",
      category: "Audio & Video",
      imageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "Complete A/V integration for a modern corporate boardroom, featuring video conferencing, in-ceiling speakers, and Crestron touch-panel control.",
    },
    {
      title: "University Lecture Hall",
      category: "Audio & Video",
      imageSrc:
        "https://images.unsplash.com/photo-1543269865-0a740d43b91c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "Dual-projector setup with lecture capture and voice-lift microphone system for a 200-seat university hall.",
    },
    {
      title: "New Office Campus Build-out",
      category: "Structured Cabling",
      imageSrc:
        "https://images.unsplash.com/photo-1631160312543-f61b1c6d35b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "Installed over 1,500 Cat6A drops, 24-strand fiber backbone, and built out three IDF closets for a new corporate campus.",
    },
    {
      title: "Warehouse Security",
      category: "Security",
      imageSrc:
        "https://images.unsplash.com/photo-1534999818448-9B0c346066b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "Campus-wide IP surveillance system with over 50 Axis cameras and a centralized access control system for all entry points.",
    },
    {
      title: "Restaurant Sound System",
      category: "Audio & Video",
      imageSrc:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "Multi-zone audio system for a high-end restaurant, providing distinct volume and source control for the bar, dining room, and patio.",
    },
    {
      title: "Data Center Cleanup",
      category: "Structured Cabling",
      imageSrc:
        "https://images.unsplash.com/photo-1520087617565-c782b4ea7362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "Re-terminated and organized main server room cabling, improving airflow, reliability, and serviceability for the client's IT team.",
    },
  ];

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <>
      <section className="bg-slate-900 py-20 text-center text-white">
        <div className="container mx-auto px-4 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Project Gallery
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See the quality and scope of our work.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={galleryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
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