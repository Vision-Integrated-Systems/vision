import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[800px] flex items-center justify-center overflow-hidden bg-black">
      {/* Video Overlay */}
      <div className="absolute inset-0 z-0 opacity-60">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="/videos/digital-space.mp4"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-lg max-w-3xl mx-auto">
          One Vision for Integrated Solutions
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          From complex audio/video integrations in boardrooms to
          comprehensive security and structured cabling for your entire
          campus, we provide reliable, end-to-end solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/services"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Our Services
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 bg-white/90 text-slate-900 font-semibold rounded-md border border-transparent hover:bg-white transition-colors duration-300"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}