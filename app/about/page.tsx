import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      <Header />

      <main className="grow pt-20">
        {/* Page Title Header */}
        <section className="bg-slate-900 py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Vision
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Over 30 years of excellence in integrated systems.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <ContentSection
          id="our-story"
          title="Our Story"
          bgColor="white"
          imageSrc="https://vision-texas.com/wp-content/uploads/2021/07/master_photo_a-TSS-770-T-B-S-LB_KIT_Front_Available_v2.png"
          imageAlt="Vision Integrated Systems Technology"
        >
          <p className="mb-4">
            Vision Integrated Systems is an industry leader in Audio, Video,
            Cabling, and Security Solutions. Our commitment to quality, service,
            and client satisfaction has made us a trusted partner for businesses
            across Texas.
          </p>
          <p>
            We provide complete end-to-end solutions for commercial AV,
            structured cabling, and security projects. With thousands of
            integrations completed, our focus remains steadfast on the customer
            experience—providing quality solutions that work simply and
            reliably.
          </p>
        </ContentSection>

        {/* Mission Statement */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Our Mission
            </h2>
            <p className="text-2xl text-slate-700 italic max-w-4xl mx-auto leading-relaxed">
              "To deliver the security of an ironclad product, backed by the
              responsiveness and expertise your success demands."
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
