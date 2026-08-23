import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* ─── HERO SECTION (Corporate / White Theme) ─── */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-6 md:px-8 xl:px-16 mx-auto bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 text-left">
            <div className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#7AC142]"></span>
              Since 1983
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-[1.1] mb-6">
              Engineering <br />
              <span className="text-[#7AC142] relative">
                Industrial Safety
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#7AC142]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-gray-500 text-base md:text-xl max-w-[600px] mb-8 leading-relaxed font-medium">
              We are India's leading manufacturer of high-performance Polycarbonate and Cobalt Blue Glass safety eyewear. CLI Approved &amp; IS 5983 Certified protection for the harshest environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/products" className="bg-gray-900 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-[#7AC142] transition-colors shadow-lg text-center flex items-center justify-center gap-2 group">
                Master Catalog
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </Link>
              <a href="#inquiry" className="bg-white border-2 border-gray-200 text-gray-900 font-bold uppercase tracking-widest text-sm px-8 py-4 rounded hover:border-gray-900 hover:bg-gray-50 transition-colors text-center">
                Contact Sales
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-end relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7AC142]/20 to-transparent rounded-full blur-3xl opacity-50 scale-150"></div>
            <img src="/products/oswal-boss-clear-economy/boss design .jpeg" alt="OSWAL Boss Safety Goggle" className="relative z-10 w-full max-w-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out rounded-2xl" />
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATION & TRUST RIBBON ─── */}
      <section className="w-full bg-gray-900 text-white py-6 px-6 md:px-8 border-y border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-80">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-[#7AC142]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span className="font-bold tracking-wider text-sm uppercase">CLI Approved</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-[#7AC142]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span className="font-bold tracking-wider text-sm uppercase">IS 5983 / 1980</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-[#7AC142]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span className="font-bold tracking-wider text-sm uppercase">ISO 9001:2015</span>
          </div>
          <div className="flex items-center gap-3 hidden md:flex">
            <svg className="w-8 h-8 text-[#7AC142]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span className="font-bold tracking-wider text-sm uppercase">CE Certified</span>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE (Showcase) ─── */}
      <section className="py-20 md:py-32 w-full px-6 md:px-8 xl:px-16 mx-auto bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-bold text-[#7AC142] uppercase tracking-[0.3em] mb-4">Domain Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">Industries We Serve</h3>
            <p className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Our safety eyewear is engineered specifically to withstand the unique hazards of heavy industry, providing uncompromising protection where it matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Industry 1: Steel & Foundry */}
            <div className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all p-8 md:p-12 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-gray-900 group-hover:text-[#7AC142] transition-colors">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h4 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-4 relative z-10">Steel &amp; Foundries</h4>
              <p className="text-gray-500 font-medium mb-8 relative z-10 max-w-md">
                Industry-leading Furnace Observation Glasses and Cobalt Blue lenses designed to protect against intense heat and Infrared (IR) radiation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <Link href="/products?cat=Furnace Goggles" className="bg-white border border-gray-200 text-gray-900 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:border-[#7AC142] hover:text-[#7AC142] transition-colors text-center shadow-sm">
                  Furnace Series →
                </Link>
                <Link href="/products?cat=Welding Goggles" className="bg-white border border-gray-200 text-gray-900 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:border-[#7AC142] hover:text-[#7AC142] transition-colors text-center shadow-sm">
                  Welding Series →
                </Link>
              </div>
            </div>

            {/* Industry 2: Chemical & Pharma */}
            <div className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all p-8 md:p-12 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-gray-900 group-hover:text-[#7AC142] transition-colors">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              </div>
              <h4 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-4 relative z-10">Chemical &amp; Pharma</h4>
              <p className="text-gray-500 font-medium mb-8 relative z-10 max-w-md">
                Full-seal Chemical Splash Goggles and indirect ventilation systems preventing hazardous liquids from reaching the eyes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <Link href="/products?cat=Chemical Splash Goggles" className="bg-white border border-gray-200 text-gray-900 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:border-[#7AC142] hover:text-[#7AC142] transition-colors text-center shadow-sm">
                  Splash Goggles →
                </Link>
                <Link href="/products?cat=Face Shields" className="bg-white border border-gray-200 text-gray-900 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:border-[#7AC142] hover:text-[#7AC142] transition-colors text-center shadow-sm">
                  Face Shields →
                </Link>
              </div>
            </div>

            {/* Industry 3: Construction */}
            <div className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all p-8 md:p-12 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-gray-900 group-hover:text-[#7AC142] transition-colors">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h4 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-4 relative z-10">Heavy Construction</h4>
              <p className="text-gray-500 font-medium mb-8 relative z-10 max-w-md">
                High-impact Polycarbonate models. Anti-scratch and anti-fog features ensuring clear vision in dusty environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <Link href="/products?cat=Safety Goggles" className="bg-white border border-gray-200 text-gray-900 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:border-[#7AC142] hover:text-[#7AC142] transition-colors text-center shadow-sm">
                  Safety Goggles →
                </Link>
              </div>
            </div>

            {/* Industry 4: Medical / Labs */}
            <div className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all p-8 md:p-12 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-gray-900 group-hover:text-[#7AC142] transition-colors">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              </div>
              <h4 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-4 relative z-10">Medical &amp; Laboratories</h4>
              <p className="text-gray-500 font-medium mb-8 relative z-10 max-w-md">
                Over-The-Spectacle (OTG) and lightweight clear polycarbonate goggles providing wide-vision protection for professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <Link href="/products?cat=Spectacle Frames" className="bg-white border border-gray-200 text-gray-900 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:border-[#7AC142] hover:text-[#7AC142] transition-colors text-center shadow-sm">
                  Spectacles &amp; OTG →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUICK WIZARD / FIND YOUR EYEWEAR ─── */}
      <section className="py-16 md:py-24 w-full px-6 md:px-8 xl:px-16 mx-auto bg-gray-900 text-white border-y border-gray-800 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#7AC142] opacity-[0.07] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">Not sure what you need?</h3>
          <p className="text-gray-400 text-lg mb-12">Select your primary hazard to instantly browse the recommended safety eyewear.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/products?cat=Furnace Goggles" className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-[#7AC142] hover:bg-gray-800/80 transition-all flex flex-col items-center gap-4 group">
              <span className="text-3xl">🔥</span>
              <span className="font-bold uppercase text-xs tracking-widest group-hover:text-[#7AC142]">Intense Heat / IR</span>
            </Link>
            <Link href="/products?cat=Welding Goggles" className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-[#7AC142] hover:bg-gray-800/80 transition-all flex flex-col items-center gap-4 group">
              <span className="text-3xl">⚡</span>
              <span className="font-bold uppercase text-xs tracking-widest group-hover:text-[#7AC142]">Welding Sparks</span>
            </Link>
            <Link href="/products?cat=Chemical Splash Goggles" className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-[#7AC142] hover:bg-gray-800/80 transition-all flex flex-col items-center gap-4 group">
              <span className="text-3xl">🧪</span>
              <span className="font-bold uppercase text-xs tracking-widest group-hover:text-[#7AC142]">Chemical Splash</span>
            </Link>
            <Link href="/products?cat=Safety Goggles" className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-[#7AC142] hover:bg-gray-800/80 transition-all flex flex-col items-center gap-4 group">
              <span className="text-3xl">🔨</span>
              <span className="font-bold uppercase text-xs tracking-widest group-hover:text-[#7AC142]">Dust / Impact</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── YOUTUBE VIDEO SECTION ─── */}
      <section className="py-16 md:py-24 w-full px-6 md:px-8 xl:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-[#7AC142] uppercase tracking-[0.3em] mb-4">See Us In Action</h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">OSWAL Safety Eyewear</h3>
            <p className="mt-4 text-gray-500 text-base md:text-lg max-w-xl mx-auto">Watch our product demonstrations and industrial applications.</p>
          </div>
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-900" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=OSWAL+Industries"
              title="OSWAL Industries Safety Goggles"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            {/* Placeholder shown when no video URL is set */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gray-900 z-10 pointer-events-none" id="yt-placeholder">
              <svg className="w-20 h-20 text-[#7AC142] mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              <p className="text-xl font-bold uppercase tracking-widest">Video Coming Soon</p>
              <p className="text-gray-400 text-sm mt-2">Upload your YouTube video URL to display here</p>
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Subscribe to our channel for product demonstrations and safety guides.
          </p>
        </div>
      </section>

      {/* ─── INQUIRY / CONTACT SECTION ─── */}
      <section id="inquiry" className="py-20 md:py-32 w-full px-4 sm:px-6 md:px-8 xl:px-16 mx-auto bg-[#f8f9fa]">
        <div className="bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-xl border border-gray-100 max-w-7xl mx-auto">
          <div className="lg:w-1/2 p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 md:mb-8 leading-tight">Need a Bulk Quote?</h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 md:mb-12 font-medium">
                We supply top-tier safety eyewear to heavy industries across India. Contact us for bulk pricing, custom modifications, or tender requirements.
              </p>
              <div className="space-y-6 text-base md:text-lg font-bold tracking-wide">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full"><svg className="w-5 h-5 text-[#7AC142]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div>
                  +91 9535354312
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full"><svg className="w-5 h-5 text-[#7AC142]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
                  oswaloptical@yahoo.co.in
                </div>
                <div className="flex items-start gap-6 pt-4 border-t border-gray-800">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full flex-shrink-0 mt-1"><svg className="w-5 h-5 text-[#7AC142]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
                  <div className="leading-relaxed text-gray-400 font-medium">
                    <span className="text-white block font-bold mb-1">OSWAL Industries</span>
                    Davanagere, Karnataka<br/>
                    India
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-8 sm:p-12 md:p-16 lg:p-24 bg-white relative">
            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Send an Inquiry</h3>
            <form action="mailto:oswaloptical@yahoo.co.in" method="POST" encType="text/plain" className="space-y-6 md:space-y-8">
              <div>
                <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 md:mb-3">Company Name</label>
                <input type="text" name="company" className="w-full border-b-2 border-gray-200 py-3 text-base md:text-lg focus:outline-none focus:border-[#7AC142] transition-colors bg-transparent text-gray-900 font-medium" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 md:mb-3">Your Name</label>
                  <input type="text" name="name" className="w-full border-b-2 border-gray-200 py-3 text-base md:text-lg focus:outline-none focus:border-[#7AC142] transition-colors bg-transparent text-gray-900 font-medium" required />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 md:mb-3">Phone No.</label>
                  <input type="text" name="phone" className="w-full border-b-2 border-gray-200 py-3 text-base md:text-lg focus:outline-none focus:border-[#7AC142] transition-colors bg-transparent text-gray-900 font-medium" required />
                </div>
              </div>
              <div>
                <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 md:mb-3">Product Requirements</label>
                <textarea name="message" rows={3} className="w-full border-b-2 border-gray-200 py-3 text-base md:text-lg focus:outline-none focus:border-[#7AC142] transition-colors bg-transparent text-gray-900 font-medium resize-none" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#7AC142] text-white font-bold uppercase tracking-widest text-sm md:text-base py-4 md:py-5 rounded hover:bg-gray-900 transition-colors shadow-lg">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
