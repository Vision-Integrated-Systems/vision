import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      {/* --- Header / Navigation --- */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer">
              <Link href="/">
                <Image
                  src="/vision-logo.png"
                  alt="Vision Integrated Systems"
                  width={200}
                  height={54}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center font-medium text-sm text-slate-600 uppercase tracking-wide">
              <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
              <Link href="#Audio" className="hover:text-blue-700 transition-colors">Audio Video</Link>
              <Link href="#Cabling" className="hover:text-blue-700 transition-colors">Structured Cabling</Link>
              <Link href="#Security" className="hover:text-blue-700 transition-colors">Security</Link>
              <Link href="#About" className="hover:text-blue-700 transition-colors">About</Link>
              <Link href="/contact-us" className="hover:text-blue-700 transition-colors">Contact Us</Link>
              
              <Link 
                href="/service-ticket" 
                className="px-5 py-2 border-2 border-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300 rounded-sm"
              >
                Service Ticket
              </Link>
            </nav>

            {/* Mobile Menu Button (Placeholder) */}
            <div className="lg:hidden">
              <button className="p-2 text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* --- Hero Section with Video Background --- */}
        <section className="relative h-[600px] lg:h-[800px] flex items-center justify-center overflow-hidden bg-black">
          {/* Video Overlay */}
          <div className="absolute inset-0 z-0 opacity-60">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src="https://vision-texas.com/wp-content/uploads/2021/07/Future-12917.mp4"
            />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-lg">
              One Vision for <br />
              <span className="text-blue-400">Integrated Solutions</span>
            </h1>
            <div className="mt-8 flex justify-center">
               {/* Animated GIF from original site */}
               <img 
                 src="https://vision-texas.com/wp-content/uploads/2021/12/Vision_Logo_Ani_300.gif" 
                 alt="Vision Animated Logo"
                 width={300}
                 height={80}
                 className="max-w-full h-auto"
               />
            </div>
          </div>
        </section>

        {/* --- Feature Highlights (Grid) --- */}
        <section className="py-16 bg-white relative z-20 -mt-8 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white shadow-xl rounded-lg p-8 border border-slate-100">
            {/* Feature 1 */}
            <div className="text-center p-4 group">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Concept & Idea</h3>
              <p className="text-slate-600">Audio Video. Structured Cabling. Security.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-4 group border-t md:border-t-0 md:border-l md:border-r border-slate-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Custom A/V</h3>
              <p className="text-slate-600">Simple. Reliable. Flexible.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-4 group">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Support</h3>
              <p className="text-slate-600">Dependable. On time. On call.</p>
            </div>
          </div>
        </section>

        {/* --- About Us Section --- */}
        <section id="About" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 relative">
                  About Us
                  <span className="block h-1 w-20 bg-blue-600 mt-2 rounded-full"></span>
                </h2>
                <div className="text-lg text-slate-700 leading-relaxed">
                  <p>
                    Vision Integrated Systems is an industry leader in Audio, Video, Cabling, and Security Solutions; 
                    our commitment to quality, service and client satisfaction has made us a leader in the field. 
                    We provide complete end-to-end solutions for commercial AV, structured cabling, and security projects. 
                    With thousands of integrations today, our focus is on the customer experience – providing quality.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://vision-texas.com/wp-content/uploads/2021/07/master_photo_a-TSS-770-T-B-S-LB_KIT_Front_Available_v2.png" 
                    alt="Touch panel interface"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Audio Video Section --- */}
        <section id="Audio" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 relative">
                  Audio Video
                  <span className="block h-1 w-20 bg-blue-600 mt-2 rounded-full"></span>
                </h2>
                <div className="text-lg text-slate-700 leading-relaxed">
                  <p>
                    Vision Integrated Systems is a premier provider of high-quality commercial audio, video and visual 
                    presentation solutions, with over 30 years of experience in the industry. Our goal is to provide 
                    customized AV solutions that are tailored to the unique requirements of your space, budget and application.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 h-64 bg-gradient-to-br from-blue-900 to-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                 <div className="text-white opacity-20">
                    {/* Placeholder for AV Image if user wants to add one later */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Structured Cabling Section --- */}
        <section id="Cabling" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 relative">
                  Structured Cabling
                  <span className="block h-1 w-20 bg-blue-600 mt-2 rounded-full"></span>
                </h2>
                <div className="text-lg text-slate-700 leading-relaxed">
                  <p>
                    Structured cabling provides a reliable solution to your network installation. 
                    We can design, procure, and install your structured cabling system dependent on your needs. 
                    We have built relationships with some of the industry’s leading manufacturers which include 
                    Belden, CommScope, Windy City, Panduit, and many more.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 h-64 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                 <div className="text-white opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Security Section --- */}
        <section id="Security" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 relative">
                  Security
                  <span className="block h-1 w-20 bg-blue-600 mt-2 rounded-full"></span>
                </h2>
                <div className="text-lg text-slate-700 leading-relaxed">
                  <p>
                    Vision’s world class integrated access control systems deliver the security of an ironclad product, 
                    backed by the responsiveness and expertise your success demands. With our full warranty and service support, 
                    Vision is committed to your peace of mind with solutions that are unsurpassed in simplicity, flexibility, and reliability.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 h-64 bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl flex items-center justify-center shadow-lg">
                 <div className="text-white opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Partner Logos --- */}
        <section className="py-16 border-t border-slate-100 bg-slate-50">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-slate-400 uppercase tracking-widest font-semibold mb-10">Trusted Manufacturers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Using a few representative logos from your list */}
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

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo Column */}
            <div>
              <Image
                src="/vision-logo.png" 
                alt="Vision Logo" 
                width={150} 
                height={40} 
                className="brightness-0 invert mb-4" // Makes the logo white
              />
            </div>

            {/* Address */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Address</h4>
              <p className="text-sm leading-relaxed">
                32311 Tamina Rd<br />
                Suite A<br />
                Magnolia, TX 77354
              </p>
            </div>

            {/* Email */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">E-Mail</h4>
              <p className="text-sm">
                <a href="mailto:info@vision-texas.com" className="hover:text-blue-400 transition-colors">info@vision-texas.com</a>
              </p>
            </div>

            {/* Phone */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Call Us</h4>
              <p className="text-sm text-2xl font-bold text-blue-400">
                <a href="tel:8325351991">832.535.1991</a>
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} VIS Houston, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}