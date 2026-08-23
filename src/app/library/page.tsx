import Link from 'next/link';

const ARTICLES = [
  {
    slug: 'is-5983-explained',
    title: 'IS 5983 / 1980 — The Complete Guide to India\'s Industrial Eye Protection Standard',
    category: 'Standards & Certifications',
    categoryColor: 'bg-blue-50 text-blue-700 border-blue-200',
    readTime: '8 min read',
    date: 'July 2025',
    description: 'Everything procurement officers, safety engineers, and industrial buyers need to know about IS 5983 / 1980 — the Bureau of Indian Standards specification for industrial safety goggles.',
    icon: '📋',
  },
  {
    slug: 'furnace-smelter-eye-protection',
    title: 'Furnace & Smelter Eye Protection — Complete Industrial Guide',
    category: 'Industry Applications',
    categoryColor: 'bg-orange-50 text-orange-700 border-orange-200',
    readTime: '10 min read',
    date: 'July 2025',
    description: 'How to select the right eye protection for furnace observation, smelting operations, and high-temperature industrial environments. Covers hazards, standards, and recommended products.',
    icon: '🔥',
  },
];

const EXTERNAL_RESOURCES = [
  {
    name: 'Bureau of Indian Standards (BIS)',
    desc: 'Official IS 5983 standards and certification authority for industrial safety eyewear in India.',
    url: 'https://www.bis.gov.in',
    domain: 'bis.gov.in',
    badge: 'Government',
    badgeColor: 'bg-blue-100 text-blue-800',
  },
  {
    name: 'DGFASLI — Factory Safety Directorate',
    desc: 'Directorate General Factory Advice Service & Labour Institutes — India\'s workplace safety regulations.',
    url: 'https://dgfasli.gov.in',
    domain: 'dgfasli.gov.in',
    badge: 'Government',
    badgeColor: 'bg-blue-100 text-blue-800',
  },
  {
    name: 'OSHA Eye & Face Protection',
    desc: 'U.S. Occupational Safety & Health Administration standards for industrial eye and face protection.',
    url: 'https://www.osha.gov/eye-face-protection',
    domain: 'osha.gov',
    badge: 'International',
    badgeColor: 'bg-green-100 text-green-800',
  },
  {
    name: 'NIOSH — Workplace Eye Safety',
    desc: 'National Institute for Occupational Safety & Health — research and recommendations on eye protection.',
    url: 'https://www.cdc.gov/niosh',
    domain: 'cdc.gov/niosh',
    badge: 'Research',
    badgeColor: 'bg-purple-100 text-purple-800',
  },
  {
    name: 'NSC — National Safety Council',
    desc: 'Eye safety statistics, training resources, and best practices for industrial workplaces.',
    url: 'https://www.nsc.org',
    domain: 'nsc.org',
    badge: 'International',
    badgeColor: 'bg-green-100 text-green-800',
  },
  {
    name: 'ISEA — Eye & Face Protection Standards',
    desc: 'International Safety Equipment Association — standards development for PPE including eye protection.',
    url: 'https://safetyequipment.org',
    domain: 'safetyequipment.org',
    badge: 'Standards',
    badgeColor: 'bg-yellow-100 text-yellow-800',
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
    <div className="w-full bg-white">

      {/* ── Hero ── */}
      <div className="w-full bg-gray-900 px-6 md:px-8 xl:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#7AC142]/10 border border-[#7AC142]/30 text-[#7AC142] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7AC142]"></span>
            OSWAL Industries — Since 1983
          </div>
          <h1 className="text-4xl sm:text-5xl xl:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Technical <span className="text-[#7AC142]">Library</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Technical articles, safety standards, industry applications, and product knowledge from four decades of manufacturing industrial safety eyewear.
          </p>
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#7AC142]"></span>{ARTICLES.length} Published Articles</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>{COMING_SOON.length} Coming Soon</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>{EXTERNAL_RESOURCES.length} External Resources</span>
          </div>
        </div>
      </div>

      {/* ── Published Articles ── */}
      <div className="w-full px-6 md:px-8 xl:px-20 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-8 bg-[#7AC142] rounded-full"></div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">Published Articles</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/library/${article.slug}`}
                className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#7AC142] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Top accent bar */}
                <div className="h-1.5 w-full bg-gray-100 group-hover:bg-[#7AC142] transition-colors duration-300"></div>
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${article.categoryColor}`}>
                      {article.category}
                    </span>
                    <span className="text-4xl">{article.icon}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight leading-snug mb-4 group-hover:text-[#7AC142] transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-8 flex-1 text-base">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                      <span>{article.readTime}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>{article.date}</span>
                    </div>
                    <span className="flex items-center gap-2 text-sm font-bold text-[#7AC142] group-hover:gap-3 transition-all duration-300">
                      Read Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── External Resources ── */}
      <div className="w-full px-6 md:px-8 xl:px-20 py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">External Resources</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900 mb-4">
            Authoritative Safety References
          </h2>
          <p className="text-gray-500 max-w-2xl mb-12 text-base leading-relaxed">
            Curated links to official standards bodies, government safety agencies, and research institutions that form the foundation of industrial eye protection globally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXTERNAL_RESOURCES.map((res) => (
              <a
                key={res.url}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${res.badgeColor}`}>
                    {res.badge}
                  </span>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </div>
                <h3 className="font-black text-gray-900 text-base mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                  {res.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{res.desc}</p>
                <span className="text-xs text-gray-400 font-mono">{res.domain}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Coming Soon ── */}
      <div className="w-full px-6 md:px-8 xl:px-20 py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-8 bg-gray-300 rounded-full"></div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">Coming Soon</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMING_SOON.map((title) => (
              <div key={title} className="bg-gray-50 border border-dashed border-gray-200 rounded-xl p-6 opacity-70">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                </div>
                <p className="text-sm font-bold text-gray-600 uppercase leading-snug">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
