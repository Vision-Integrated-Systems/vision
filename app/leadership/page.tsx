import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Leadership() {
  const leaders = [
    {
      name: "Bo Barron",
      title: "Managing Director",
      bio: "Leading Vision Integrated Systems with a focus on strateth and customer satisfaction.",
    },
    {
      name: "Zack Spelz",
      title: "Director of Business Development",
      bio: "Ensuring operational excellence and efficient project delivery across all sectors.",
    },
    {
      name: "Josh Schulze",
      title: "Director of Operations",
      bio: "Overseeing technical standards and driving innovation in AV and security solutions.",
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
                  className="bg-slate-50 rounded-xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Placeholder Image Area */}
                  <div className="h-64 bg-slate-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-20 h-20 text-slate-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <div className="p-6">
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
