import Link from 'next/link';

const ARTICLES = [
  {
    slug: 'is-5983-explained',
    title: 'IS 5983 / 1980 — The Complete Guide to India\'s Industrial Eye Protection Standard',
    category: 'Standards & Certifications',
    readTime: '8 min read',
    date: 'July 2025',
    description: 'Everything procurement officers, safety engineers, and industrial buyers need to know about IS 5983 / 1980 — the Bureau of Indian Standards specification for industrial safety goggles.',
  },
  {
    slug: 'furnace-smelter-eye-protection',
    title: 'Furnace & Smelter Eye Protection — Complete Industrial Guide',
    category: 'Industry Applications',
    readTime: '10 min read',
    date: 'July 2025',
    description: 'How to select the right eye protection for furnace observation, smelting operations, and high-temperature industrial environments. Covers hazards, standards, and recommended products.',
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
    <div className="w-full bg-white font-sans">

      {/* ── Hero - Industrial Corporate Style ── */}
      <div className="w-full bg-[#111] text-white border-b-4 border-[#7AC142]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-20 py-20 md:py-32">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-[#7AC142]"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">Technical Resources</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
            Knowledge Center
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
            Authoritative documentation, safety standards, and technical application guides engineered for procurement officers and industrial safety professionals.
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-gray-800">
            <div>
              <p className="text-3xl font-light text-white">{ARTICLES.length}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Technical Guides</p>
            </div>
            <div>
              <p className="text-3xl font-light text-white">{EXTERNAL_RESOURCES.length}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Safety References</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Published Articles - Sharp & Technical ── */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-20 py-20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-200 pb-6 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Featured Publications</h2>
              <p className="text-gray-500 mt-2">In-depth technical guides for industrial eye protection.</p>
            </div>
            <Link href="#coming-soon" className="text-sm font-bold uppercase tracking-widest text-[#7AC142] hover:text-gray-900 transition-colors">
              View Upcoming Topics &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/library/${article.slug}`}
                className="group flex flex-col"
              >
                {/* Image Placeholder / Graphic Header */}
                <div className="w-full h-48 bg-gray-100 border border-gray-200 relative overflow-hidden mb-6 flex items-center justify-center group-hover:border-gray-400 transition-colors">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <span className="text-gray-300 font-mono text-sm tracking-widest uppercase">Document Ref: {article.slug.substring(0,8)}</span>
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#7AC142] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    {article.category}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    {article.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-[#7AC142] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {article.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-900">
                  Read Documentation
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── External Resources - Enterprise Grid ── */}
      <div className="w-full bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-20 py-20">
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Authoritative References</h2>
            <p className="text-gray-500 mt-2 max-w-2xl">Official regulatory bodies, standards associations, and research institutions governing industrial occupational safety.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200 bg-white">
            {EXTERNAL_RESOURCES.map((res, index) => (
              <a
                key={res.url}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-r border-b border-gray-200 p-8 hover:bg-gray-50 transition-colors flex flex-col h-full relative"
              >
                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#7AC142] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#7AC142] mb-4 block">
                  {res.category}
                </span>
                
                <h3 className="font-bold text-gray-900 text-lg mb-3 pr-6">
                  {res.name}
                  <svg className="w-4 h-4 text-gray-300 absolute top-8 right-8 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                  {res.desc}
                </p>
                
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-gray-900 transition-colors">{res.domain}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Coming Soon - Data Table Style ── */}
      <div id="coming-soon" className="w-full bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-20 py-20">
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Upcoming Publications</h2>
            <p className="text-gray-500 mt-2">Documentation currently in review by our technical team.</p>
          </div>

          <div className="border border-gray-200">
            {COMING_SOON.map((title, i) => (
              <div key={title} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 ${i !== COMING_SOON.length - 1 ? 'border-b border-gray-200' : ''} hover:bg-gray-50`}>
                <div className="flex items-center gap-4">
                  <span className="text-gray-300 font-mono text-sm">{(i + 1).toString().padStart(2, '0')}</span>
                  <span className="font-medium text-gray-800">{title}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2 sm:mt-0 bg-gray-100 px-3 py-1 self-start sm:self-auto">
                  In Draft
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
