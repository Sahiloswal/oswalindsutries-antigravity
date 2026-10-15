'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import productsData from '../../products.json';

// Ordered as per OSWAL product catalogue
const SIDEBAR_CATEGORIES = [
  'Welding Helmets',
  'Welding Goggles',
  'Smelter/Furnace Safety',
  'Safety Goggles',
  'Chemical Splash Goggles',
  'Spectacle Frames',
  'Laser Protection',
  'Accessories',
];

// IDs of individual OSWAL Boss variants — shown grouped under /oswal-boss
const BOSS_IDS = ['13', '14', '15', '17'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const uniqueIndustries = useMemo(() => {
    const inds = new Set<string>();
    productsData.forEach((p: any) => {
      if (p.datasheet?.industries) {
        p.datasheet.industries.forEach((i: string) => inds.add(i));
      }
    });
    return Array.from(inds).filter(i => !i.includes('—')).sort();
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.filter((p: any) => {
      if (p.isSubProduct) return false;
      if (BOSS_IDS.includes(p.id)) return false;
      if (activeCategory !== 'All' && p.category !== activeCategory) return false;
      if (activeIndustry !== 'All') {
        if (!p.datasheet?.industries?.includes(activeIndustry)) return false;
      }
      if (searchQuery.trim() !== '') {
        const keywords = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
        const matchesAllKeywords = keywords.every(kw => {
          return (
            p.prodname?.toLowerCase().includes(kw) ||
            p.category?.toLowerCase().includes(kw) ||
            p.description?.toLowerCase().includes(kw) ||
            p.shade?.toLowerCase()?.includes(kw) ||
            p.datasheet?.industries?.some((i: string) => i.toLowerCase().includes(kw))
          );
        });
        if (!matchesAllKeywords) return false;
      }
      return true;
    });
  }, [activeCategory, activeIndustry, searchQuery]);

  const showBossCard = useMemo(() => {
    if (activeCategory !== 'All' && activeCategory !== 'Spectacle Frames') return false;
    if (searchQuery.trim() !== '') {
      const keywords = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
      const bossKeywords = 'oswal boss spectacle frames clear grey acetate';
      const matchesAllKeywords = keywords.every(kw => bossKeywords.includes(kw));
      if (!matchesAllKeywords) return false;
    }
    if (activeIndustry !== 'All') {
      const bossRef = productsData.find(p => p.id === '13');
      if (!bossRef?.datasheet?.industries?.includes(activeIndustry)) return false;
    }
    return true;
  }, [activeCategory, activeIndustry, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    SIDEBAR_CATEGORIES.forEach(cat => {
      counts[cat] = productsData.filter((p: any) => !p.isSubProduct && !BOSS_IDS.includes(p.id) && p.category === cat).length;
    });
    counts['Spectacle Frames'] = (counts['Spectacle Frames'] || 0) + 1;
    return counts;
  }, []);

  const totalVisible = filteredProducts.length + (showBossCard ? 1 : 0);

  return (
    <div className="w-full bg-white min-h-screen">

      {/* ─── Page Banner ─── */}
      <div className="w-full bg-slate-900 text-white py-10 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.25em] mb-1">OSWAL Industries · Since 1983</p>
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">Product Catalogue</h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            CLI Approved · IS&nbsp;5983&nbsp;/ 1980 Certified · Supplied to BEML, BHEL, Tata Steel, JSW Steel and heavy industries across India.
          </p>
        </div>
      </div>

      {/* ─── Main Layout ─── */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">

        {/* ─── Sidebar ─── */}
        <aside className="w-full md:w-[260px] flex-shrink-0 md:sticky md:top-[72px] md:h-[calc(100vh-72px)] md:overflow-y-auto bg-white border-r border-slate-200">
          <div className="py-5 px-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-3 px-2">Category</p>
            <button
              onClick={() => { setActiveCategory('All'); setActiveIndustry('All'); }}
              className={`w-full text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors mb-0.5 ${
                activeCategory === 'All'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              All Products
            </button>
            <div className="my-2 border-t border-slate-100" />
            {SIDEBAR_CATEGORIES.map(cat => {
              const count = categoryCounts[cat] || 0;
              if (count === 0) return null;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors text-left mb-0.5 ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  onClick={() => { setActiveCategory(cat); setActiveIndustry('All'); }}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-6 mb-3 px-2">Industry</p>
            <select
              value={activeIndustry}
              onChange={e => { setActiveIndustry(e.target.value); setActiveCategory('All'); }}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold uppercase p-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 cursor-pointer"
            >
              <option value="All">All Industries</option>
              {uniqueIndustries.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
        </aside>

        {/* ─── Product Grid ─── */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 border-b border-slate-200 gap-3 bg-slate-50">
            <div className="relative w-full sm:max-w-sm">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                className="block w-full pl-9 pr-3 py-2 border border-slate-300 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Search products, categories…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <p className="text-xs text-slate-500 font-medium whitespace-nowrap">
              <span className="font-bold text-slate-900">{totalVisible}</span> products
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-slate-200">

            {/* OSWAL Boss Grouped Card */}
            {showBossCard && (
              <Link href="/oswal-boss" className="group flex flex-col bg-white hover:bg-slate-50 transition-colors">
                <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden bg-white p-5 border-b border-slate-100">
                  <img
                    src="/products/oswal-boss-clear-economy/boss design .jpeg"
                    alt="OSWAL Boss"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-600 text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5">4 Variants</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-10 overflow-hidden transition-all duration-200 flex items-center justify-center bg-slate-900/90">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Select Options →</span>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1">Spectacle Frames</p>
                  <h2 className="text-xs font-bold text-slate-900 leading-snug uppercase">OSWAL Boss Collection</h2>
                  <span className="inline-block mt-1.5 text-[9px] font-bold uppercase bg-slate-100 text-slate-600 px-2 py-0.5">Clear · Grey</span>
                </div>
              </Link>
            )}

            {/* Standard Products */}
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group flex flex-col bg-white hover:bg-slate-50 transition-colors"
              >
                <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden bg-white p-5 border-b border-slate-100">
                  {(product as any).image ? (
                    <img
                      src={(product as any).image}
                      alt={product.prodname}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-200">
                      <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-300">No Image</span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-9 overflow-hidden transition-all duration-200 flex items-center justify-center bg-slate-900/90">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Details →</span>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1">{product.category}</p>
                  <h2 className="text-xs font-bold text-slate-900 leading-snug uppercase">{product.prodname}</h2>
                  {(product as any).shade && (
                    <span className="inline-block mt-1.5 text-[9px] font-bold uppercase bg-slate-100 text-slate-600 px-2 py-0.5">
                      Shade {(product as any).shade}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {totalVisible === 0 && (
            <div className="text-center py-20 text-slate-400">
              <svg className="w-10 h-10 mx-auto mb-3 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs font-bold uppercase tracking-widest">No products match your filter</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
