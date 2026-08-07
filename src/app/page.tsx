import Link from 'next/link';
import type { Metadata } from 'next';
import productsData from '../products.json';

export const metadata: Metadata = {
  title: 'OSWAL Industries | Safety Goggles, Welding Goggles & Industrial Eye Protection Manufacturer India',
  description: 'OSWAL Industries is a leading manufacturer of safety goggles, welding goggles, industrial goggles, furnace face shields, and chemical splash goggles in India since 1983. IS 5983 & CE certified PPE eyewear.',
  keywords: [
    'safety goggles manufacturer india', 'welding goggles', 'industrial safety goggles', 'oswal industries',
    'oswal safety goggles', 'industrial goggles india', 'furnace goggles', 'chemical splash goggles',
    'IS 5983 safety goggles', 'PPE eyewear india', 'medical goggles', 'laser safety goggles',
    'eye protection equipment', 'safety eyewear manufacturer davanagere', 'polycarbonate safety goggles'
  ],
};

export default function Home() {
  // Select top featured products for the homepage
  const featuredIds = ['welding-din-5', '3', '8', 'athermal-welding-goggles'];
  const featuredProducts = featuredIds
    .map(id => productsData.find(p => p.id === id))
    .filter(Boolean) as any[];

  return (
    <div className="bg-white min-h-screen">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative w-full h-[600px] bg-gray-900 overflow-hidden flex items-center justify-center text-center">
        {/* Abstract Industrial Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
          {/* We'll use a CSS pattern here for an industrial feel */}
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        </div>
        
        <div className="relative z-10 w-full px-8 xl:px-16 mx-auto flex flex-col items-center">
          <div className="inline-block border border-gray-600 bg-gray-800/50 backdrop-blur-sm text-gray-300 text-sm font-bold uppercase tracking-[0.3em] px-6 py-2 rounded mb-8">
            Protecting Vision Since 1983
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-tight mb-6">
            Safety Goggles &amp; <br/> <span className="text-[#7AC142]">Welding Protection</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-[800px] mb-12 leading-relaxed font-light">
            India's trusted manufacturer of industrial safety goggles, welding goggles, furnace face shields and chemical splash goggles since 1983. IS 5983 &amp; CE certified. CLI Approved.
          </p>
          <div className="flex gap-6">
            <Link href="/products" className="bg-[#7AC142] text-white font-bold uppercase tracking-widest text-base px-10 py-5 rounded hover:bg-white hover:text-[#7AC142] transition-colors shadow-lg">
              Explore Catalog
            </Link>
            <a href="#inquiry" className="border-2 border-white text-white font-bold uppercase tracking-widest text-base px-10 py-5 rounded hover:bg-white hover:text-gray-900 transition-colors">
              Request Quote
            </a>
          </div>
        </div>
      </section>

      {/* ─── CATEGORY HIGHLIGHTS ─── */}
      <section className="py-24 w-full px-8 xl:px-16 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Our Expertise</h2>
          <div className="w-24 h-1.5 bg-[#7AC142] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Welding Goggles", icon: "🔥", desc: "DIN 4–12 shade welding goggles for MIG, TIG, arc & gas welding. IS 5983 certified.", link: "/products?cat=Welding Goggles" },
            { name: "Furnace & Smelter", icon: "🏭", desc: "Extreme heat & IR protection safety goggles for foundries, steel plants & smelters.", link: "/products?cat=Smelter/Furnace Safety" },
            { name: "Chemical Splash", icon: "🧪", desc: "Industrial safety goggles with complete seal against acids, alkalis & hazardous liquids.", link: "/products?cat=Chemical Splash Goggles" },
            { name: "Safety Goggles", icon: "👓", desc: "Polycarbonate industrial safety goggles for general eye protection. CLI & IS certified.", link: "/products?cat=Safety Goggles" },
          ].map((cat, i) => (
            <Link href={cat.link} key={i} className="group bg-gray-50 border border-gray-100 p-10 rounded hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-8 grayscale group-hover:grayscale-0 transition-all">{cat.icon}</div>
              <h3 className="text-xl font-bold uppercase text-gray-800 mb-4 group-hover:text-[#7AC142] transition-colors">{cat.name}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-28 w-full px-8 xl:px-16 mx-auto bg-[#f8f9fa]">
        <div className="w-full">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Featured Products</h2>
              <div className="w-24 h-1.5 bg-[#7AC142] mt-6"></div>
            </div>
            <Link href="/products" className="hidden md:inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-[#7AC142] transition-colors">
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredProducts.map((p) => (
              <Link href={`/product/${p.id}`} key={p.id} className="bg-white border border-gray-100 p-8 rounded group hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="h-[240px] flex items-center justify-center mb-8 overflow-hidden">
                  {p.image ? (
                    <img src={p.image} alt={p.prodname} className="max-h-[200px] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="text-gray-300">No Image</div>
                  )}
                </div>
                <div className="mt-auto">
                  <div className="text-sm font-bold text-[#7AC142] uppercase tracking-widest mb-3">{p.category}</div>
                  <h3 className="text-xl font-semibold text-gray-800 leading-snug group-hover:text-[#7AC142] transition-colors line-clamp-2">
                    {p.prodname}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEO KEYWORD SECTION (visible content for Google) ─── */}
      <section className="py-20 w-full px-8 xl:px-16 mx-auto bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-6">Safety Goggles &amp; Industrial Eye Protection Manufacturer in India</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            <strong>OSWAL Industries</strong> is one of India's foremost manufacturers of certified <strong>safety goggles</strong>, <strong>welding goggles</strong>, and <strong>industrial eye protection equipment</strong>. Established in 1983, our range of IS 5983 and CE certified safety eyewear is trusted across steel plants, chemical facilities, pharmaceutical labs, railways, and construction sites throughout India.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              ['Safety Goggles', '/products?cat=Safety Goggles'],
              ['Welding Goggles', '/products?cat=Welding Goggles'],
              ['Industrial Goggles', '/products?cat=Safety Goggles'],
              ['Medical Goggles', '/products?cat=Safety Goggles'],
              ['Furnace Goggles', '/products?cat=Smelter/Furnace Safety'],
              ['Chemical Splash Goggles', '/products?cat=Chemical Splash Goggles'],
              ['Laser Safety Goggles', '/products?cat=Laser Protection'],
              ['Prescription Safety Goggles', '/products?cat=Spectacle Frames'],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-semibold text-[#7AC142] hover:text-gray-800 transition-colors border border-gray-200 px-4 py-3 rounded hover:border-[#7AC142] text-center"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INQUIRY / CONTACT SECTION ─── */}
      <section id="inquiry" className="py-28 w-full px-8 xl:px-16 mx-auto">
        <div className="bg-gray-900 rounded-xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-16 md:p-24 flex flex-col justify-center bg-[#7AC142] text-white">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-8">Need a Bulk Quote?</h2>
            <p className="text-white/90 text-lg leading-relaxed mb-12 font-medium">
              We supply top-tier safety eyewear to heavy industries across India. Contact us for bulk pricing, custom modifications, or tender requirements.
            </p>
            <div className="space-y-8 text-lg font-bold tracking-wide">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/20 flex items-center justify-center rounded"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div>
                +91 9535354312
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/20 flex items-center justify-center rounded"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
                oswaloptical@yahoo.co.in
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-16 md:p-24 bg-white">
            <form action="mailto:oswaloptical@yahoo.co.in" method="POST" encType="text/plain" className="space-y-8">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Company Name</label>
                <input type="text" name="company" className="w-full border-b-2 border-gray-200 py-4 text-lg focus:outline-none focus:border-[#7AC142] transition-colors bg-transparent text-gray-800" required />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Your Name</label>
                  <input type="text" name="name" className="w-full border-b-2 border-gray-200 py-4 text-lg focus:outline-none focus:border-[#7AC142] transition-colors bg-transparent text-gray-800" required />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Phone No.</label>
                  <input type="text" name="phone" className="w-full border-b-2 border-gray-200 py-4 text-lg focus:outline-none focus:border-[#7AC142] transition-colors bg-transparent text-gray-800" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Product Requirements / Message</label>
                <textarea name="message" rows={4} className="w-full border-b-2 border-gray-200 py-4 text-lg focus:outline-none focus:border-[#7AC142] transition-colors bg-transparent text-gray-800 resize-none" required></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-900 text-white font-bold uppercase tracking-widest text-base py-5 rounded mt-6 hover:bg-[#7AC142] transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
