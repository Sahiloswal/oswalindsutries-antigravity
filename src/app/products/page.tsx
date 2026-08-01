'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import productsData from '../../products.json';

// Ordered exactly as OSWAL 2026 catalog
const SIDEBAR_CATEGORIES = [
  'Welding Goggles',
  'Smelter/Furnace Safety',
  'Safety Goggles',
  'Chemical Splash Goggles',
  'Spectacle Frames',
  'Laser Protection',
  'Accessories',
];

// IDs of individual OSWAL Boss variants — grouped into the /oswal-boss page
const BOSS_IDS = ['13', '14', '15', '17'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique industries dynamically
  const uniqueIndustries = useMemo(() => {
    const inds = new Set<string>();
    productsData.forEach((p: any) => {
      if (p.datasheet?.industries) {
        p.datasheet.industries.forEach((i: string) => inds.add(i));
      }
    });
    // Filter out long/weird ones if any, and sort
    return Array.from(inds).filter(i => !i.includes('—')).sort();
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.filter((p: any) => {
      // Hide subproducts and individual Boss frames
      if (p.isSubProduct) return false;
      if (BOSS_IDS.includes(p.id)) return false;

      // Category filter
      if (activeCategory !== 'All' && p.category !== activeCategory) return false;
      
      // Industry filter
      if (activeIndustry !== 'All') {
        if (!p.datasheet?.industries?.includes(activeIndustry)) return false;
      }

      // Search filter
      if (searchQuery.trim() !== '') {
        const keywords = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
        const matchesAllKeywords = keywords.every(kw => {
          const inName = p.prodname?.toLowerCase().includes(kw);
          const inCat = p.category?.toLowerCase().includes(kw);
          const inDesc = p.description?.toLowerCase().includes(kw);
          const inShade = p.shade?.toLowerCase() === kw || p.shade?.toLowerCase().includes(kw);
          const inInds = p.datasheet?.industries?.some((i: string) => i.toLowerCase().includes(kw));
          return inName || inCat || inDesc || inShade || inInds;
        });
        if (!matchesAllKeywords) return false;
      }

      return true;
    });
  }, [activeCategory, activeIndustry, searchQuery]);

  // Check if we should show the Boss Card
  const showBossCard = useMemo(() => {
    if (activeCategory !== 'All' && activeCategory !== 'Spectacle Frames') return false;
    
    // Check if search keywords match "Boss" details
    if (searchQuery.trim() !== '') {
      const keywords = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
      const bossKeywords = 'oswal boss spectacle frames clear grey acetate';
      const matchesAllKeywords = keywords.every(kw => bossKeywords.includes(kw));
      if (!matchesAllKeywords) return false;
    }

    // Check industry filter for Boss
    if (activeIndustry !== 'All') {
      const bossData = productsData.find(p => p.id === '13'); // Use one of the Boss frames as reference
      if (!bossData?.datasheet?.industries?.includes(activeIndustry)) return false;
    }

    return true;
  }, [activeCategory, activeIndustry, searchQuery]);

  // Calculate dynamic counts for Categories
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    SIDEBAR_CATEGORIES.forEach(cat => {
      counts[cat] = productsData.filter((p: any) => !p.isSubProduct && p.category === cat).length;
    });
    // Add +1 for Spectacle Frames if Boss is included
    counts['Spectacle Frames'] = (counts['Spectacle Frames'] || 0) + 1;
    return counts;
  }, []);

  return (
    <div className="w-full bg-white">

      {/* ─── Page Hero Banner ─── */}
      <div className="w-full bg-gray-900 py-10 px-8 xl:px-20">
        <div className="max-w-full">
          <p className="text-[#7AC142] text-sm font-bold uppercase tracking-[0.3em] mb-2">OSWAL Industries · Since 1983</p>
          <h1 className="text-4xl xl:text-5xl font-black text-white uppercase tracking-tight">Product Catalog</h1>
          <p className="text-gray-400 text-base mt-3 max-w-xl">CLI Approved · IS 5983 / 1980 Certified · Trusted by BHEL, SAIL, Tata Steel & 100+ Industries</p>
        </div>
      </div>

      {/* ─── Main Layout ─── */}
      <div className="flex flex-col md:flex-row gap-0 items-start">

        {/* ─── Left Sidebar ─── */}
        <aside className="w-full md:w-[280px] flex-shrink-0 md:sticky md:top-[88px] md:h-[calc(100vh-88px)] md:overflow-y-auto bg-white border-r border-gray-200">
          <div className="py-6 px-4">
            
            {/* Category Filter */}
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 px-2">Filter by Category</p>
            <button
              onClick={() => { setActiveCategory('All'); setActiveIndustry('All'); }}
              className={`w-full text-left px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors mb-1 rounded ${
                activeCategory === 'All'
                  ? 'bg-[#7AC142] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-[#7AC142]'
              }`}
            >
              All Products
            </button>
            <div className="my-3 border-t border-gray-100" />
            {SIDEBAR_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              if (count === 0) return null; // Remove empty categories
              
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors text-left mb-0.5 rounded ${
                    isActive
                      ? 'bg-[#7AC142] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-[#7AC142]'
                  }`}
                  onClick={() => { setActiveCategory(cat); setActiveIndustry('All'); }}
                >
                  <span>{cat}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}

            {/* Industry Filter */}
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-8 mb-4 px-2">Filter by Industry</p>
            <select 
              value={activeIndustry}
              onChange={(e) => { setActiveIndustry(e.target.value); setActiveCategory('All'); }}
              className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-bold uppercase rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#7AC142] focus:border-transparent cursor-pointer"
            >
              <option value="All">All Industries</option>
              {uniqueIndustries.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
            <p className="text-[10px] text-gray-400 mt-2 px-2">Select an industry to see recommended safety eyewear for your specific applications.</p>
          </div>
        </aside>

        {/* ─── Right Content ─── */}
        <div className="flex-1 min-w-0 bg-[#fafafa]">

          {/* Toolbar & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center px-8 py-5 bg-white border-b border-gray-200 gap-4">
            
            {/* Search Bar */}
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#7AC142] focus:border-[#7AC142] sm:text-sm font-medium transition-colors"
                placeholder="Search products, categories, or keywords (e.g., 'welding')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <p className="text-sm text-gray-600 font-medium whitespace-nowrap">
              Showing <strong className="text-gray-900">{filteredProducts.length + (showBossCard ? 1 : 0)}</strong> products
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-200 p-px">
            
            {/* ─── Boss Grouped Card ─── */}
            {showBossCard && (
              <Link
                href={`/oswal-boss`}
                className="group flex flex-col bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden bg-white p-6">
                  <img
                    src="/products/13/Oswal%20boss%20white.png"
                    alt="OSWAL Boss"
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-400 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#7AC142] text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-sm">4 Variants</span>
                  </div>
                  <div className="absolute inset-0 bg-[#7AC142]/0 group-hover:bg-[#7AC142]/5 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                    <span className="bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-2">Select Options →</span>
                  </div>
                </div>
                <div className="px-5 py-4 border-t border-gray-100">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#7AC142] mb-1">
                    Spectacle Frames
                  </p>
                  <h2 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-[#7AC142] transition-colors line-clamp-2 uppercase">
                    OSWAL Boss Collection
                  </h2>
                  <span className="inline-block mt-2 text-[10px] font-bold uppercase bg-gray-800 text-white px-2 py-0.5">
                    White & Grey 
                  </span>
                </div>
              </Link>
            )}

            {/* ─── Standard Products ─── */}
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group flex flex-col bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden bg-white p-6">
                  {(product as any).image ? (
                    <img
                      src={(product as any).image}
                      alt={product.prodname}
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-400 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-200">
                      <svg className="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">Image Coming Soon</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#7AC142]/0 group-hover:bg-[#7AC142]/5 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                    <span className="bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-2">View Details →</span>
                  </div>
                </div>
                <div className="px-5 py-4 border-t border-gray-100">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#7AC142] mb-1">
                    {product.category}
                  </p>
                  <h2 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-[#7AC142] transition-colors line-clamp-2 uppercase">
                    {product.prodname}
                  </h2>
                  {(product as any).shade && (
                    <span className="inline-block mt-2 text-[10px] font-bold uppercase bg-[#7AC142] text-white px-2 py-0.5">
                      Shade {(product as any).shade}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {(filteredProducts.length === 0 && !showBossCard) && (
            <div className="text-center py-24 text-gray-400 text-sm">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              No products match your search or filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
