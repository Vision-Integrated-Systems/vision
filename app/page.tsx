import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      <Header />

      <main className="flex-grow">
        <Hero />
        <FeaturesGrid />

        {/* About Section */}
        <ContentSection 
          id="About" 
          title="About Us" 
          bgColor="slate"
          imageSrc="https://vision-texas.com/wp-content/uploads/2021/07/master_photo_a-TSS-770-T-B-S-LB_KIT_Front_Available_v2.png"
          imageAlt="Touch panel interface"
        >
          <p>
            Vision Integrated Systems is an industry leader in Audio, Video, Cabling, and Security Solutions; 
            our commitment to quality, service and client satisfaction has made us a leader in the field. 
            We provide complete end-to-end solutions for commercial AV, structured cabling, and security projects. 
            With thousands of integrations today, our focus is on the customer experience – providing quality.
          </p>
        </ContentSection>

        {/* Audio Video Section */}
        <ContentSection 
          id="Audio" 
          title="Audio Video" 
          bgColor="white"
          reverse={true} // Image on the right (or left in reverse flex)
          customVisual={
            <div className="h-64 bg-gradient-to-br from-blue-900 to-slate-900 rounded-xl flex items-center justify-center shadow-lg">
               <div className="text-white opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
               </div>
            </div>
          }
        >
          <p>
            Vision Integrated Systems is a premier provider of high-quality commercial audio, video and visual 
            presentation solutions, with over 30 years of experience in the industry. Our goal is to provide 
            customized AV solutions that are tailored to the unique requirements of your space, budget and application.
          </p>
        </ContentSection>

        {/* Structured Cabling Section */}
        <ContentSection 
          id="Cabling" 
          title="Structured Cabling" 
          bgColor="slate"
          customVisual={
            <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center shadow-lg">
               <div className="text-white opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
               </div>
            </div>
          }
        >
          <p>
            Structured cabling provides a reliable solution to your network installation. 
            We can design, procure, and install your structured cabling system dependent on your needs. 
            We have built relationships with some of the industry’s leading manufacturers which include 
            Belden, CommScope, Windy City, Panduit, and many more.
          </p>
        </ContentSection>

        {/* Security Section */}
        <ContentSection 
          id="Security" 
          title="Security" 
          bgColor="white"
          reverse={true}
          customVisual={
            <div className="h-64 bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl flex items-center justify-center shadow-lg">
               <div className="text-white opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
               </div>
            </div>
          }
        >
          <p>
            Vision’s world class integrated access control systems deliver the security of an ironclad product, 
            backed by the responsiveness and expertise your success demands. With our full warranty and service support, 
            Vision is committed to your peace of mind with solutions that are unsurpassed in simplicity, flexibility, and reliability.
          </p>
        </ContentSection>

        {/* Partner Logos */}
        <section className="py-16 border-t border-slate-100 bg-slate-50">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-slate-400 uppercase tracking-widest font-semibold mb-10">Trusted Manufacturers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex justify-center"><img src="https://vision-texas.com/wp-content/uploads/2021/08/crestron_logo.jpg" alt="Crestron" className="h-12 object-contain" /></div>
                <div className="flex justify-center"><img src="https://vision-texas.com/wp-content/uploads/2021/08/biamp_logo.jpg" alt="Biamp" className="h-12 object-contain" /></div>
                <div className="flex justify-center"><img src="https://vision-texas.com/wp-content/uploads/2021/08/c4_logo.jpg" alt="Control4" className="h-12 object-contain" /></div>
                <div className="flex justify-center"><img src="https://vision-texas.com/wp-content/uploads/2021/08/b_elden_logo.png" alt="Belden" className="h-12 object-contain" /></div>
                <div className="flex justify-center"><img src="https://vision-texas.com/wp-content/uploads/2021/08/a_xis_logo.png" alt="Axis" className="h-12 object-contain" /></div>
                <div className="flex justify-center"><img src="https://vision-texas.com/wp-content/uploads/2021/08/e_xtron_logo.png" alt="Extron" className="h-12 object-contain" /></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}