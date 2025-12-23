export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  category: string;
  readTime: string;
  content: string; // HTML or Markdown content
}

export const posts: Post[] = [
  {
    slug: "cat6-vs-fiber-warehouse",
    title: "Cat6a vs. Fiber: What Does Your Warehouse Actually Need?",
    excerpt: "Planning a new distribution center? Choosing the right cabling backbone is critical for supporting automation, cameras, and reliable WiFi.",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-03-15",
    author: {
      name: "Josh Schulze",
      image: "/josh.jpeg",
      role: "Director of Operations"
    },
    category: "Structured Cabling",
    readTime: "5 min read",
    content: `
      <p class="lead text-xl text-slate-600 mb-8">When outfitting a warehouse or distribution center, the debate between Copper (Cat6a) and Fiber Optic cabling is one of the first technical hurdles you'll face. The decision impacts not just your budget, but the long-term viability of your network.</p>
      
      <h2>The Distance Factor</h2>
      <p>The most critical limitation of copper cabling is distance. Cat6a is certified up to 100 meters (328 feet). In a 500,000 sq ft facility, a single IDF (Intermediate Distribution Frame) simply cannot reach every camera and access point.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl not-prose">
        <h4 class="text-blue-900 font-bold text-lg mb-2">Pro Tip: The 100-Meter Rule</h4>
        <p class="text-blue-800 text-sm">Always account for the vertical run up to the ceiling and down to the rack. A straight line on a floor plan might look like 250ft, but the actual cable path could easily exceed 328ft.</p>
      </div>

      <p>Fiber optics, on the other hand, can transmit data over kilometers without signal loss. For large footprint facilities, a fiber backbone connecting distributed IDFs is not just a luxury—it's a necessity.</p>

      <h2>Interference and Noise</h2>
      <p>Industrial environments are noisy. Heavy machinery, conveyor motors, and high-voltage power lines create Electromagnetic Interference (EMI). Fiber is immune to EMI, making it the safer choice for runs that pass near heavy equipment.</p>

      <h2>The Verdict</h2>
      <p>For most modern warehouses, we recommend a hybrid approach: <strong>Fiber for the backbone</strong> (connecting your server room to field cabinets) and <strong>Cat6a for the "last 100 feet"</strong> (connecting individual cameras and WAPs).</p>
    `
  },
  {
    slug: "future-of-corporate-av",
    title: "The Death of the HDMI Cable: The Future of Corporate A/V",
    excerpt: "Wireless presentation and AVoIP are rapidly replacing traditional matrix switchers. Here is how to future-proof your conference rooms.",
    coverImage: "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-02-28",
    author: {
      name: "Bo Barron",
      image: "/bo.jpeg",
      role: "Managing Director"
    },
    category: "Audio & Video",
    readTime: "4 min read",
    content: `
      <p class="text-lg">We have all been there: The meeting starts in 2 minutes, and the HDMI dongle is missing. Or bent. Or just doesn't work.</p>
      
      <h2>Enter Wireless Presentation</h2>
      <p>Devices like the Crestron AirMedia and Barco ClickShare have matured significantly. They now offer stable, low-latency screen sharing without installing apps or hunting for dongles. For standard huddle rooms, this should be the default.</p>

      <h2>AV over IP (AVoIP)</h2>
      <p>For larger spaces, the days of massive, expensive HDMI matrix switchers are numbered. AVoIP allows us to route video and audio over standard network cables. This means your video signals are just data packets on your network, allowing for infinite scalability.</p>
    `
  },
  {
    slug: "top-security-trends-2025",
    title: "3 Physical Security Trends to Watch in 2025",
    excerpt: "From AI-powered analytics to mobile credentials, physical security is becoming smarter and more integrated.",
    coverImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-10",
    author: {
      name: "Zack Spelz",
      image: "/zack.jpeg",
      role: "Dir. Business Development"
    },
    category: "Security",
    readTime: "3 min read",
    content: `
      <p class="text-xl text-slate-600 mb-8 leading-relaxed">Security is no longer just about recording video; it's about <span class="text-blue-600 font-bold">actionable intelligence</span>. Here are the trends we are seeing in our recent installs:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-12 not-prose">
        
        <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
           <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Trend 01</span>
           </div>
           <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Goodbye Keycards, Hello Mobile</h3>
           <p class="text-slate-600 text-sm leading-relaxed">Employees lose badges. They rarely lose their phones. Mobile credentials (using NFC or Bluetooth) are safer, easier to manage, and preferred by users.</p>
        </div>

        <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
           <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Trend 02</span>
           </div>
           <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Analytics at the Edge</h3>
           <p class="text-slate-600 text-sm leading-relaxed">Cameras are getting smarter. Instead of sending terabytes of footage to a server, modern cameras from Axis and Hanwha detect "loitering" or "line crossing" directly on the device.</p>
        </div>

        <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group md:col-span-2">
           <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Trend 03</span>
           </div>
           <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Unified Platforms</h3>
           <p class="text-slate-600 text-sm leading-relaxed">Siloed systems are dead. The new standard is a "single pane of glass" where Access Control, Video, and Intercoms all live in one dashboard (like Genetec or Verkada). This reduces response time during critical incidents.</p>
        </div>

      </div>
      <p>As you plan your security upgrades for the coming year, keep these shifts in mind. The goal is no longer just "security"—it's operational efficiency.</p>
    `
  }
];