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

export default function TechnicalLibraryPage() {
  return (
    <div className="w-full bg-white">

      {/* ─── Hero ─── */}
      <div className="w-full bg-gray-900 px-8 xl:px-20 py-16">
        <p className="text-[#7AC142] text-sm font-bold uppercase tracking-[0.3em] mb-3">OSWAL Industries · Since 1983</p>
        <h1 className="text-5xl xl:text-6xl font-black text-white uppercase tracking-tight leading-none mb-4">
          Technical <span className="text-[#7AC142]">Library</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Technical articles, safety standards, industry applications, and product knowledge from four decades of manufacturing industrial safety eyewear.
        </p>
      </div>

      {/* ─── Articles ─── */}
      <div className="w-full px-8 xl:px-20 py-16">
        <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">Published Articles</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/library/${article.slug}`}
              className="group border-2 border-gray-100 p-8 hover:border-[#7AC142] transition-all duration-300 bg-white hover:shadow-lg"
            >
              <span className="text-xs font-black uppercase tracking-widest text-[#7AC142] mb-3 block">{article.category}</span>
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight leading-snug mb-4 group-hover:text-[#7AC142] transition-colors">
                {article.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">{article.description}</p>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span>{article.readTime}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>{article.date}</span>
                <span className="ml-auto text-[#7AC142] group-hover:translate-x-1 transition-transform">Read Article →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-16 border-t border-gray-100 pt-12">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Coming Soon</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'Welding Shade Selection Guide (DIN 2–14)',
              'How to Choose Industrial Safety Goggles',
              'Steel Plant Eye Protection Guide',
              'Safety Glasses vs Safety Goggles',
              'Toughened Glass vs Polycarbonate Lenses',
              'Understanding CLI Approval & BIS Certification',
            ].map((title) => (
              <div key={title} className="border border-gray-100 p-6 bg-gray-50 opacity-60">
                <p className="text-base font-bold text-gray-700 uppercase">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
