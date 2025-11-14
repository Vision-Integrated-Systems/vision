import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      <Header />

      <main className="grow pt-20">
        <section className="bg-slate-900 py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              End-to-end solutions for modern business environments.
            </p>
          </div>
        </section>

        <ContentSection
          id="av"
          title="Audio & Video"
          bgColor="white"
          reverse={true}
          customVisual={
            <div className="h-64 bg-linear-to-br from-blue-900 to-slate-900 rounded-xl flex items-center justify-center shadow-lg">
              <div className="text-white opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-32 h-32"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
            </div>
          }
        >
          <h3 className="text-xl font-semibold mb-3">Custom A/V Solutions</h3>
          <p className="mb-4">
            Vision Integrated Systems is a premier provider of high-quality
            commercial audio, video, and visual presentation solutions. We
            tailor every installation to the unique requirements of your space,
            budget, and application.
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Conference Rooms & Huddle Spaces</li>
            <li>Digital Signage & Video Walls</li>
            <li>Sound Masking & Background Audio</li>
            <li>Control Systems (Crestron, Extron, etc.)</li>
          </ul>
        </ContentSection>

        <ContentSection
          id="cabling"
          title="Structured Cabling"
          bgColor="slate"
          customVisual={
            <div className="h-64 bg-linear-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center shadow-lg">
              <div className="text-white opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-32 h-32"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
              </div>
            </div>
          }
        >
          <h3 className="text-xl font-semibold mb-3">
            The Backbone of Your Network
          </h3>
          <p className="mb-4">
            Reliable connectivity starts with professional cabling. We design,
            procure, and install structured cabling systems that meet today's
            demands and tomorrow's growth.
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Cat5e, Cat6, Cat6A Copper Cabling</li>
            <li>Fiber Optic Installation & Splicing</li>
            <li>Server Room & Rack Cleanups</li>
            <li>Certified Installations (Panduit, Belden, CommScope)</li>
          </ul>
        </ContentSection>

        <ContentSection
          id="security"
          title="Security"
          bgColor="white"
          reverse={true}
          customVisual={
            <div className="h-64 bg-linear-to-br from-blue-800 to-blue-950 rounded-xl flex items-center justify-center shadow-lg">
              <div className="text-white opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-32 h-32"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
            </div>
          }
        >
          <h3 className="text-xl font-semibold mb-3">Protecting Your Assets</h3>
          <p className="mb-4">
            Vision’s world-class integrated access control and surveillance
            systems deliver peace of mind. We provide solutions that are
            unsurpassed in simplicity, flexibility, and reliability.
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>IP Video Surveillance</li>
            <li>Access Control Systems</li>
            <li>Intrusion Detection</li>
            <li>Integrated Building Management</li>
          </ul>
        </ContentSection>
      </main>

      <Footer />
    </div>
  );
}
