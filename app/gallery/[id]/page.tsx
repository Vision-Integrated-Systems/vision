import { projects } from "@/app/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import ContentSection from "@/components/ContentSection";

// Generate static params for all known projects (good for SEO/Performance)
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/gallery"
            className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Gallery
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-bold uppercase tracking-wider mb-6">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>

            {/* Project Meta Grid */}
            <div className="flex flex-wrap gap-8 md:gap-16 border-t border-white/10 pt-8 mt-8">
              <div>
                <span className="block text-slate-400 text-sm uppercase tracking-wider mb-1">
                  Client
                </span>
                <span className="text-white font-medium text-lg">
                  {project.client}
                </span>
              </div>
              <div>
                <span className="block text-slate-400 text-sm uppercase tracking-wider mb-1">
                  Duration
                </span>
                <span className="text-white font-medium text-lg">
                  {project.duration}
                </span>
              </div>
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="block text-slate-400 text-sm uppercase tracking-wider mb-1">
                    {stat.label}
                  </span>
                  <span className="text-white font-medium text-lg">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <ContentSection
        id="challenge"
        title="The Challenge"
        bgColor="white"
        centered={false}
      >
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          {project.challenge}
        </p>
      </ContentSection>

      {/* The Solution - Darker background for contrast */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              The Solution
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-12">
              {project.solution}
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                Key Technology Deployed
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gearList.map((item, i) => (
                  <div key={i} className="flex items-center text-slate-600">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to upgrade your space?
          </h2>
          <Link
            href="/contact-us"
            className="inline-block px-8 py-4 bg-slate-900 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
