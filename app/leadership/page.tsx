import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Leadership Team | Vision Integrated Systems",
  description:
    "Meet the experienced leadership team driving innovation and quality at Vision Integrated Systems.",
};

export default function Leadership() {
  const leaders = [
    {
      name: "Bo Barron",
      title: "Managing Director",
      bio: "Leading Vision Integrated Systems with a focus on strateth and customer satisfaction.",
      imageSrc: "/bo.jpeg",
    },
    {
      name: "Zack Spelz",
      title: "Director of Business Development",
      bio: "Ensuring operational excellence and efficient project delivery across all sectors.",
      imageSrc: "/zack.jpeg",
    },
    {
      name: "Josh Schulze",
      title: "Director of Operations",
      bio: "Overseeing technical standards and driving innovation in AV and security solutions.",
      imageSrc: "/josh.jpeg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      <Header />

      <main className="grow pt-20">
        <section className="bg-slate-900 py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Leadership
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The team driving innovation and quality at Vision.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {leaders.map((leader, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-8"
                >
                  {/* Circular Image Area */}
                  <div className="relative h-40 w-40 mb-6">
                    <Image
                      src={leader.imageSrc}
                      alt={`Portrait of ${leader.name}`}
                      width={160}
                      height={160}
                      className="rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900">
                      {leader.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {leader.title}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
