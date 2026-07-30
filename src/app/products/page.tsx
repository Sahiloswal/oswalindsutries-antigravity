'use client';
import { useState } from 'react';
import Link from 'next/link';
import productsData from '../../products.json';

// Ordered exactly as OSWAL 2026 catalog
const SIDEBAR_CATEGORIES = [
  { name: 'Welding Goggles', sub: [] },
  { name: 'Smelter/Furnace Safety', sub: [] },
  { name: 'Safety Goggles', sub: [] },
  { name: 'Chemical Splash Goggles', sub: [] },
  { name: 'Spectacle Frames', sub: [] },
  { name: 'Laser Protection', sub: [] },
  { name: 'Accessories', sub: [] },
];

// IDs of individual OSWAL Boss variants — grouped into the /oswal-boss page
const BOSS_IDS = ['13', '14', '15', '17'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = productsData.filter((p: any) => {
    if (p.isSubProduct) return false;
    if (BOSS_IDS.includes(p.id)) return false; // hidden — shown via grouped Boss card
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  // Show the OSWAL Boss grouped card when viewing Spectacle Frames or All
  const showBossCard = activeCategory === 'All' || activeCategory === 'Spectacle Frames';


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
        <aside className="w-full md:w-[260px] flex-shrink-0 md:sticky md:top-[88px] md:h-[calc(100vh-88px)] md:overflow-y-auto bg-white border-r border-gray-200">
          <div className="py-6 px-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 px-2">Filter by Category</p>

            {/* All Products */}
            <button
              onClick={() => setActiveCategory('All')}
              className={`w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors mb-1 rounded ${
                activeCategory === 'All'
                  ? 'bg-[#7AC142] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-[#7AC142]'
              }`}
            >
              All Products
            </button>

            <div className="my-3 border-t border-gray-100" />

            {SIDEBAR_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.name;
              const count = productsData.filter((p: any) => !p.isSubProduct && p.category === cat.name).length;

              return (
                <button
                  key={cat.name}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors text-left mb-0.5 rounded ${
                    isActive
                      ? 'bg-[#7AC142] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-[#7AC142]'
                  }`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  <span>{cat.name}</span>
                  {count > 0 && (
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* ─── Right Content ─── */}
        <div className="flex-1 min-w-0 bg-[#fafafa]">

          {/* Toolbar */}
          <div className="flex justify-between items-center px-8 py-5 bg-white border-b border-gray-200">
            <p className="text-sm text-gray-600 font-medium">
              Showing <strong className="text-gray-900">{filteredProducts.length}</strong> products
              {activeCategory !== 'All' && (
                <> in <span className="text-[#7AC142] font-bold">{activeCategory}</span></>
              )}
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 hidden md:block">OSWAL Industries Catalog 2025–26</p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-200 p-px">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group flex flex-col bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                {/* Image */}
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

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#7AC142]/0 group-hover:bg-[#7AC142]/5 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                    <span className="bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-2">View Details →</span>
                  </div>
                </div>

                {/* Product Info */}
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-24 text-gray-400 text-sm">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              No products found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
