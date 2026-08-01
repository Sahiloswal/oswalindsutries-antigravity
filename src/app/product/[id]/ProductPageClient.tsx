'use client';

import { useState } from 'react';
import Link from 'next/link';
import LeadGenerationGate from '../../../components/LeadGenerationGate';

export default function ProductPageClient({ product }: { product: any }) {
  const gallery: string[] = product.gallery && product.gallery.length > 0
    ? product.gallery
    : product.image ? [product.image] : [];

  const [activeImage, setActiveImage] = useState(gallery[0] ?? null);
  const [selectedShade, setSelectedShade] = useState(
    product.shades ? product.shades[0] : null
  );

  const datasheetUrl = product.hasShadeSelector && selectedShade
    ? `/product/welding-din-${selectedShade}/datasheet`
    : `/product/${product.id}/datasheet`;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-12">

        {/* Top Controls: Back Button & Breadcrumb */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-[#7AC142] transition-colors font-semibold text-[13px] uppercase tracking-wider"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Products
          </button>
          
          <nav className="text-[11px] text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <Link href="/" className="hover:text-[#7AC142] transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/?cat=${encodeURIComponent(product.category)}`} className="hover:text-[#7AC142] transition-colors">{product.category}</Link>
            <span>/</span>
            <span className="text-gray-600">{product.prodname}</span>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* ── LEFT: Image Block ── */}
          <div className="w-full lg:w-[60%] flex-shrink-0">
            {/* Main Large Image */}
            <div className="w-full bg-white flex items-center justify-center"
              style={{ minHeight: '600px' }}>
              {activeImage ? (
                <img
                  src={activeImage}
                  alt={product.prodname}
                  className="w-full h-auto max-h-[700px] object-contain mix-blend-multiply p-4 transition-all duration-300"
                  style={{ filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.15))' }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-200 gap-3 py-24">
                  <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Image Coming Soon</span>
                </div>
              )}
            </div>

            {/* Thumbnails — only shown if gallery has multiple images */}
            {gallery.length > 1 && (
              <div className="flex gap-3 mt-4 flex-wrap">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`w-[88px] h-[72px] border-2 flex items-center justify-center bg-white overflow-hidden transition-all duration-200 ${
                      activeImage === img
                        ? 'border-[#7AC142] shadow-md'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${i + 1}`}
                      className="max-h-[64px] max-w-full object-contain mix-blend-multiply p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: Product Info ── */}
          <div className="w-full lg:w-[40%]">
            {/* Category tag */}
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7AC142] mb-3">
              {product.category}
            </div>

            {/* Product Name */}
            <h1 className="text-[26px] md:text-[30px] text-gray-800 font-light uppercase tracking-wide leading-tight mb-5">
              {product.prodname}
            </h1>

            {/* Certifications badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(product.datasheet?.certifications ?? ['CLI Approved', 'IS 5983 / 1980']).map((cert: string, i: number) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-widest border border-gray-800 text-gray-700 px-3 py-1">
                  {cert}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Usage statement */}
            {product.datasheet?.usage && (
              <p className="text-[13px] text-gray-500 leading-relaxed italic border-l-4 border-[#7AC142] pl-4 mb-6">
                {product.datasheet.usage}
              </p>
            )}

            {/* Key features — top 5 */}
            {product.datasheet?.keyFeatures && product.datasheet.keyFeatures.length > 0 && (
              <div className="mb-6">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.datasheet.keyFeatures.slice(0, 5).map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#7AC142]/10 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-[#7AC142]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Shade Selector — German / Athermal */}
            {product.hasShadeSelector && (
              <div className="mb-6">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Select Shade / DIN
                </label>
                <div className="flex gap-2 flex-wrap">
                  {product.shades?.map((shade: string) => (
                    <button
                      key={shade}
                      onClick={() => setSelectedShade(shade)}
                      className={`px-4 py-2 text-[12px] font-bold border-2 transition-all duration-200 ${
                        selectedShade === shade
                          ? 'bg-[#7AC142] border-[#7AC142] text-white'
                          : 'border-gray-300 text-gray-600 hover:border-[#7AC142]'
                      }`}
                    >
                      DIN {shade}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="h-px bg-gray-100 my-6" />

            {/* CTA Row */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* PDF Datasheet via Lead Gate */}
              <div className="w-full md:w-auto">
                <LeadGenerationGate 
                  fileUrl={datasheetUrl} 
                  fileName={`${product.prodname} Datasheet.pdf`} 
                />
              </div>

              {/* Enquire */}
              <a
                href={`mailto:oswaloptical@yahoo.co.in?subject=Quote Request: ${encodeURIComponent(product.prodname)}`}
                className="bg-[#7AC142] text-white font-bold px-8 py-2.5 uppercase text-[12px] tracking-widest hover:bg-gray-800 transition-colors duration-200"
              >
                Enquire Now
              </a>
            </div>

            {/* Spec quick facts */}
            {(product.datasheet?.glassThickness || product.datasheet?.weight || product.datasheet?.frameMaterial) && (
              <div className="mt-6 grid grid-cols-3 gap-3">
                {product.datasheet?.glassThickness && (
                  <div className="bg-gray-50 border border-gray-100 p-3 text-center">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Thickness</div>
                    <div className="text-[12px] font-bold text-gray-700">{product.datasheet.glassThickness}</div>
                  </div>
                )}
                {product.datasheet?.weight && (
                  <div className="bg-gray-50 border border-gray-100 p-3 text-center">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Weight</div>
                    <div className="text-[12px] font-bold text-gray-700">{product.datasheet.weight}</div>
                  </div>
                )}
                {product.datasheet?.opticalClass && (
                  <div className="bg-gray-50 border border-gray-100 p-3 text-center">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Optical</div>
                    <div className="text-[12px] font-bold text-gray-700">{product.datasheet.opticalClass}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ── Industries Section ── */}
        {product.datasheet?.industries && product.datasheet.industries.length > 0 && (
          <div className="mt-16 border-t border-gray-100 pt-12">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Industries Served</h3>
            <div className="flex flex-wrap gap-2">
              {product.datasheet.industries.map((ind: string, i: number) => (
                <span key={i} className="text-[11px] font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── Related Products Placeholder ── */}
        <div className="mt-16 border-t border-gray-100 pt-8 text-center">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Related Products</h3>
        </div>
      </div>
    </div>
  );
}
