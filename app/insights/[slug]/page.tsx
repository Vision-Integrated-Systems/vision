import { posts } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Article Header */}
      <div className="bg-slate-900 pt-32 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Image
            src={post.coverImage}
            alt="Background"
            fill
            className="object-cover blur-3xl scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/80 to-slate-900"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <Link
            href="/insights"
            className="inline-flex items-center text-blue-300 hover:text-white mb-8 text-sm font-bold uppercase tracking-widest transition-colors duration-300 group"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          <div className="flex flex-wrap gap-4 items-center justify-center text-sm text-slate-300 mb-8">
            <span className="px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 uppercase tracking-wider text-xs font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              {post.category}
            </span>
            <span className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-slate-400" /> {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-500"></span>
            <span className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-slate-400" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-10 tracking-tight text-white drop-shadow-sm">
            {post.title}
          </h1>

          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full pr-6 pl-2 py-2">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-slate-500/50">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-white font-bold leading-none mb-1">
                {post.author.name}
              </p>
              <p className="text-blue-300 text-xs font-medium uppercase tracking-wide">
                {post.author.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 max-w-3xl mx-auto border border-slate-100">
          {/* PREMIUM EDITORIAL TYPOGRAPHY STYLES 
               These classes transform standard HTML into a magazine-quality layout.
            */}
          <div
            className="prose prose-lg md:prose-xl prose-slate max-w-none 
                
                // Headings
                prose-headings:font-extrabold prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:text-blue-900
                
                // Paragraphs & Text
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-8
                prose-strong:text-indigo-600 prose-strong:font-bold
                
                // Links
                prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline 
                prose-a:border-b-2 prose-a:border-blue-100 hover:prose-a:border-blue-600 hover:prose-a:text-blue-700 prose-a:transition-all
                
                // Blockquotes
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 
                prose-blockquote:bg-slate-50 prose-blockquote:py-6 prose-blockquote:px-8 
                prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-slate-800 prose-blockquote:font-medium prose-blockquote:shadow-inner
                
                // Lists
                prose-li:marker:text-blue-500 prose-li:text-slate-600
                
                // Images
                prose-img:rounded-2xl prose-img:shadow-xl prose-img:border prose-img:border-slate-100 prose-img:my-12
                
                // Code
                prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Social Share / Tags Divider */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
            <p className="text-slate-400 text-sm font-medium italic">
              Posted in{" "}
              <span className="text-blue-600 not-italic ml-1">
                {post.category}
              </span>
            </p>
            {/* Placeholder for social icons if desired */}
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              <div className="h-2 w-2 rounded-full bg-blue-200"></div>
            </div>
          </div>
        </div>
      </article>

      {/* Related / CTA */}
      <div className="max-w-3xl mx-auto mt-20 px-4 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Abstract BG Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Have questions about {post.category}?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">
              Our team of certified engineers is ready to help you design the
              perfect solution for your space.
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-slate-50 hover:scale-105 transition-all duration-300"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
