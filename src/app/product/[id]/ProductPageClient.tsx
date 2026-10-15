'use client';

import { useState } from 'react';
import Link from 'next/link';

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

  // Certifications: fallback to standard defaults
  const certs: string[] = product.datasheet?.certifications ?? ['CLI Approved', 'IS 5983 / 1980'];

  return (
    <div className="bg-white min-h-screen">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Product',
            name: product.prodname,
            image: gallery,
            description: product.description || `OSWAL ${product.prodname} - ${product.category}`,
            brand: { '@type': 'Brand', name: 'OSWAL Industries' },
            category: product.category,
            manufacturer: { '@type': 'Organization', name: 'OSWAL Industries' },
          }),
        }}
      />

      {/* ─── Breadcrumb Bar ─── */}
      <div className="w-full bg-slate-50 border-b border-slate-200 px-6 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-400 font-medium uppercase tracking-wider">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-amber-600 transition-colors">Products</Link>
          <span>/</span>
          <Link href={`/products?cat=${encodeURIComponent(product.category)}`} className="hover:text-amber-600 transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-slate-600 truncate max-w-[200px]">{product.prodname}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Image Gallery ── */}
          <div className="w-full lg:w-[55%] flex-shrink-0">
            <div
              className="w-full bg-slate-50 border border-slate-200 flex items-center justify-center"
              style={{ minHeight: '420px', maxHeight: '560px' }}
            >
              {activeImage ? (
                <img
                  src={activeImage}
                  alt={product.prodname}
                  className="w-full h-full object-contain mix-blend-multiply p-8"
                  style={{ maxHeight: '560px' }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-200 gap-3 py-24">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Image not available</span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="flex gap-2 mt-3 flex-wrap">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`w-[72px] h-[60px] border-2 flex items-center justify-center bg-white overflow-hidden transition-all ${
                      activeImage === img
                        ? 'border-amber-500'
                        : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${i + 1}`}
                      className="max-h-full max-w-full object-contain mix-blend-multiply p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: Product Info ── */}
          <div className="w-full lg:w-[45%]">
            {/* Category */}
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-2">
              {product.category}
            </p>

            {/* Product Name */}
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight mb-4">
              {product.prodname}
            </h1>

            {/* Certification Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {certs.map((cert: string, i: number) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-widest border border-slate-300 text-slate-600 px-3 py-1 bg-slate-50">
                  {cert}
                </span>
              ))}
            </div>

            {/* Description */}
            {product.description && (
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{product.description}</p>
            )}

            {/* Usage */}
            {product.datasheet?.usage && (
              <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-amber-500 pl-4 mb-5 italic">
                {product.datasheet.usage}
              </p>
            )}

            {/* Key Features */}
            {product.datasheet?.keyFeatures && product.datasheet.keyFeatures.length > 0 && (
              <div className="mb-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Key Features</p>
                <ul className="space-y-2">
                  {product.datasheet.keyFeatures.slice(0, 6).map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="flex-shrink-0 w-1 h-1 rounded-full bg-amber-500 mt-2"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Shade Selector */}
            {product.hasShadeSelector && (
              <div className="mb-5">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Select Shade / DIN
                </label>
                <div className="flex gap-2 flex-wrap">
                  {product.shades?.map((shade: string) => (
                    <button
                      key={shade}
                      onClick={() => setSelectedShade(shade)}
                      className={`px-4 py-2 text-xs font-bold border-2 transition-all ${
                        selectedShade === shade
                          ? 'bg-slate-900 border-slate-900 text-white'
                          : 'border-slate-300 text-slate-600 hover:border-slate-500'
                      }`}
                    >
                      DIN {shade}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Spec Quick Facts */}
            {(product.datasheet?.glassThickness || product.datasheet?.weight || product.datasheet?.opticalClass || product.datasheet?.frameMaterial) && (
              <div className="mb-5 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {product.datasheet?.frameMaterial && (
                  <div className="border border-slate-200 bg-slate-50 p-3 text-center">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Frame</div>
                    <div className="text-xs font-bold text-slate-700">{product.datasheet.frameMaterial}</div>
                  </div>
                )}
                {product.datasheet?.glassThickness && (
                  <div className="border border-slate-200 bg-slate-50 p-3 text-center">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Lens Thickness</div>
                    <div className="text-xs font-bold text-slate-700">{product.datasheet.glassThickness}</div>
                  </div>
                )}
                {product.datasheet?.weight && (
                  <div className="border border-slate-200 bg-slate-50 p-3 text-center">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Weight</div>
                    <div className="text-xs font-bold text-slate-700">{product.datasheet.weight}</div>
                  </div>
                )}
                {product.datasheet?.opticalClass && (
                  <div className="border border-slate-200 bg-slate-50 p-3 text-center">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Optical Class</div>
                    <div className="text-xs font-bold text-slate-700">{product.datasheet.opticalClass}</div>
                  </div>
                )}
              </div>
            )}

            <div className="h-px bg-slate-200 my-5" />

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href={datasheetUrl}
                target="_blank"
                className="flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-bold px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Datasheet
              </Link>
              <a
                href={`mailto:oswaloptical@yahoo.co.in?subject=Quote Request: ${encodeURIComponent(product.prodname)}`}
                className="bg-amber-600 text-white font-bold px-8 py-2.5 text-xs uppercase tracking-widest hover:bg-amber-700 transition-colors"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>

        {/* ─── Industries Served ─── */}
        {product.datasheet?.industries && product.datasheet.industries.length > 0 && (
          <div className="mt-12 border-t border-slate-100 pt-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Industries Served</p>
            <div className="flex flex-wrap gap-2">
              {product.datasheet.industries.map((ind: string, i: number) => (
                <span key={i} className="text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ─── Back to Catalogue ─── */}
        <div className="mt-10 pt-8 border-t border-slate-100">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Product Catalogue
          </Link>
        </div>
      </div>
    </div>
  );
}
