import Link from 'next/link';

const ARTICLES = [
  {
    slug: 'furnace-smelter-eye-protection',
    title: 'Furnace & Smelter Eye Protection — Complete Industrial Guide',
    category: 'Industry Applications',
    readTime: '10 min read',
    date: 'July 2025',
    description: 'How to select the right eye protection for furnace observation, smelting operations, and high-temperature industrial environments. Covers hazards, standards, and recommended products.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
  },
  {
    slug: 'is-5983-explained',
    title: 'IS 5983 / 1980 — The Complete Guide to India\'s Industrial Eye Protection Standard',
    category: 'Standards & Certifications',
    readTime: '8 min read',
    date: 'July 2025',
    description: 'Everything procurement officers, safety engineers, and industrial buyers need to know about IS 5983 / 1980 — the Bureau of Indian Standards specification for industrial safety goggles.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
  },
];

const EXTERNAL_RESOURCES = [
  {
    name: 'Bureau of Indian Standards (BIS)',
    desc: 'Official IS 5983 standards and certification authority for industrial safety eyewear in India.',
    url: 'https://www.bis.gov.in',
    domain: 'bis.gov.in',
    category: 'Government Standard',
  },
  {
    name: 'DGFASLI — Factory Safety Directorate',
    desc: 'Directorate General Factory Advice Service & Labour Institutes — India\'s workplace safety regulations.',
    url: 'https://dgfasli.gov.in',
    domain: 'dgfasli.gov.in',
    category: 'Regulatory Body',
  },
  {
    name: 'OSHA Eye & Face Protection',
    desc: 'U.S. Occupational Safety & Health Administration standards for industrial eye and face protection.',
    url: 'https://www.osha.gov/eye-face-protection',
    domain: 'osha.gov',
    category: 'International Standard',
  },
  {
    name: 'NIOSH — Workplace Eye Safety',
    desc: 'National Institute for Occupational Safety & Health — research and recommendations on eye protection.',
    url: 'https://www.cdc.gov/niosh',
    domain: 'cdc.gov/niosh',
    category: 'Research & Guidelines',
  },
  {
    name: 'NSC — National Safety Council',
    desc: 'Eye safety statistics, training resources, and best practices for industrial workplaces.',
    url: 'https://www.nsc.org',
    domain: 'nsc.org',
    category: 'Safety Council',
  },
  {
    name: 'ISEA — Eye & Face Protection Standards',
    desc: 'International Safety Equipment Association — standards development for PPE including eye protection.',
    url: 'https://safetyequipment.org',
    domain: 'safetyequipment.org',
    category: 'Industry Association',
  },
];

const COMING_SOON = [
  'Welding Shade Selection Guide (DIN 2–14)',
  'How to Choose Industrial Safety Goggles',
  'Steel Plant Eye Protection: Complete Guide',
  'Safety Glasses vs Safety Goggles: Differences Explained',
  'Toughened Glass vs Polycarbonate Lenses',
  'Understanding CLI Approval & BIS Certification',
  'Chemical Splash Goggles: Selection Criteria',
  'Construction Site Eye Hazards & Protection',
];

export default function TechnicalLibraryPage() {
  return (
    <div className="w-full bg-white font-sans overflow-hidden">

      {/* ── Hero - Edge to Edge Geometric ── */}
      <div className="relative w-full bg-[#0a0a0a] text-white border-b-4 border-[#7AC142]">
        {/* Geometric Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 0L40 10L40 30L20 40L0 30L0 10Z" fill="none" stroke="#7AC142" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-pattern)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 xl:px-24 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[2px] bg-[#7AC142]"></span>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#7AC142]">Technical Resources</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter mb-8 max-w-5xl uppercase leading-none">
            Knowledge <br/> Center.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl leading-relaxed mb-16 font-light">
            Authoritative documentation, safety standards, and technical application guides engineered for procurement officers and industrial safety professionals.
          </p>

          <div className="flex flex-wrap gap-x-16 gap-y-8 pt-10 border-t border-gray-800/60 max-w-5xl">
            <div>
              <p className="text-4xl font-light text-white">{ARTICLES.length}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">Technical Guides</p>
            </div>
            <div>
              <p className="text-4xl font-light text-white">{EXTERNAL_RESOURCES.length}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">Safety References</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Published Articles - Full Width Split Layout ── */}
      <div className="w-full bg-white relative">
        {/* Subtle dot pattern background to separate text from whitespace */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        <div className="relative z-10 w-full px-6 md:px-12 xl:px-24 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase">Featured Publications</h2>
              <div className="h-1 w-24 bg-[#7AC142] mt-6"></div>
            </div>
            <Link href="#coming-soon" className="text-sm font-bold uppercase tracking-[0.2em] text-[#7AC142] hover:text-gray-900 transition-colors flex items-center gap-2">
              View Upcoming Topics 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

          <div className="flex flex-col gap-16">
            {ARTICLES.map((article, idx) => (
              <div key={article.slug} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white border border-gray-200 shadow-2xl shadow-gray-200/50 group overflow-hidden`}>
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[500px] overflow-hidden bg-gray-900">
                  <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-[#7AC142] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 shadow-lg">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                  
                  <div className="flex items-center gap-4 mb-6 text-xs font-mono text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-4">
                    <span>{article.date}</span>
                    <span className="w-1.5 h-1.5 bg-[#7AC142] rotate-45"></span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-6 uppercase tracking-tight group-hover:text-[#7AC142] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-10">
                    {article.description}
                  </p>

                  <Link href={`/library/${article.slug}`} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white bg-gray-900 px-8 py-4 w-fit hover:bg-[#7AC142] transition-colors">
                    Read Documentation
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── External Resources - Industrial Grid ── */}
      <div className="relative w-full bg-gray-50 border-t border-gray-200">
        {/* Slanted background geometry */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-64 -right-64 w-[1000px] h-[1000px] bg-white opacity-50 transform rotate-45"></div>
          <div className="absolute -bottom-64 -left-64 w-[800px] h-[800px] bg-gray-100 opacity-50 transform rotate-45"></div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 xl:px-24 py-24">
          
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase">Authoritative References</h2>
            <div className="h-1 w-24 bg-blue-600 mt-6 mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">Official regulatory bodies, standards associations, and research institutions governing industrial occupational safety globally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXTERNAL_RESOURCES.map((res, index) => (
              <a
                key={res.url}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-200 p-10 hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-gray-200/20 flex flex-col h-full relative overflow-hidden"
              >
                {/* Top border accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-900 group-hover:bg-blue-600 transition-colors"></div>
                
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 block">
                  {res.category}
                </span>
                
                <h3 className="font-black text-gray-900 text-2xl mb-4 pr-8 uppercase tracking-tight leading-snug">
                  {res.name}
                  <svg className="w-5 h-5 text-gray-300 absolute top-10 right-10 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </h3>
                
                <p className="text-base text-gray-600 leading-relaxed flex-1 mb-8">
                  {res.desc}
                </p>
                
                <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                  <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  </div>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-500 group-hover:text-blue-600 transition-colors">{res.domain}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Coming Soon - Technical Matrix ── */}
      <div id="coming-soon" className="w-full bg-[#111] text-white border-t border-gray-800 relative">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 w-full px-6 md:px-12 xl:px-24 py-24">
          
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Upcoming Documentation</h2>
            <div className="h-1 w-24 bg-gray-600 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800 border border-gray-800">
            {COMING_SOON.map((title, i) => (
              <div key={title} className="bg-[#111] p-8 hover:bg-[#1a1a1a] transition-colors group">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-600 font-mono text-lg font-bold">{(i + 1).toString().padStart(2, '0')}</span>
                  <span className="w-2 h-2 bg-gray-800 group-hover:bg-[#7AC142] transition-colors rounded-full"></span>
                </div>
                <h4 className="font-bold text-gray-300 text-lg leading-snug group-hover:text-white transition-colors">
                  {title}
                </h4>
                <div className="mt-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 border border-gray-800 px-3 py-1.5">
                    Status: Draft
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
