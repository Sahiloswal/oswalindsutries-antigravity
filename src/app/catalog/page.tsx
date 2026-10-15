import productsData from '../../products.json';
import PrintButton from '../../components/PrintButton';
import AddToCartButton from '../../components/AddToCartButton';
import './print.css';

// Canonical Category Order for B2B Catalog
const CATEGORY_ORDER = [
  'Welding Helmets',
  'Welding Goggles',
  'Smelter/Furnace Safety',
  'Safety Goggles',
  'Chemical Splash Goggles',
  'Chemical & Dust Protection',
  'Spectacle Frames',
  'Laser Protection',
  'Accessories',
];

export default function CatalogPage() {
  const catalogProducts = productsData.filter(p => !p.isSubProduct);

  // Group products by canonical category
  const groupedProducts: { category: string; products: typeof catalogProducts }[] = [];
  
  CATEGORY_ORDER.forEach(cat => {
    const prods = catalogProducts.filter(p => p.category === cat);
    if (prods.length > 0) {
      groupedProducts.push({ category: cat, products: prods });
    }
  });

  // Any categories not in the predefined list
  const otherProds = catalogProducts.filter(p => !CATEGORY_ORDER.includes(p.category));
  if (otherProds.length > 0) {
    groupedProducts.push({ category: 'Other Industrial Safety', products: otherProds });
  }

  return (
    <div className="bg-[#f8f9fa] text-gray-900 min-h-screen font-sans">

      {/* ── Fixed Action Bar ── */}
      <div className="no-print w-full bg-white border-b border-gray-200 py-3.5 px-6 sticky top-[70px] md:top-[90px] z-30 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#7AC142]"></span>
          <div>
            <h1 className="text-sm md:text-base font-black uppercase text-gray-900 tracking-tight leading-none">OSWAL Master Industrial Catalogue</h1>
            <p className="text-[11px] text-gray-500 mt-0.5">{catalogProducts.length} Certified Products across {groupedProducts.length} Industrial Categories</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <PrintButton 
            elementId="pdf-catalog" 
            filename="OSWAL_Master_Catalog.pdf" 
            label="Download PDF Catalogue" 
            className="bg-gray-900 hover:bg-[#7AC142] text-white px-5 py-2.5 rounded-md shadow-sm print:hidden transition-all flex items-center gap-2 font-bold text-xs uppercase tracking-wider"
          />
        </div>
      </div>

      {/* ── Screen Container ── */}
      <div id="catalog-screen-container" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        
        {/* ── Compact Commercial Cover Banner ── */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-100 pb-6">
            <div>
              <p className="text-[11px] font-black tracking-[0.25em] text-[#7AC142] uppercase mb-1">Industrial Safety Eyewear Since 1983</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight leading-none">OSWAL INDUSTRIES</h2>
              <p className="text-xs text-gray-500 mt-2 max-w-xl leading-relaxed">
                Complete range of CLI Approved &amp; IS 5983 / 1980 certified safety eyewear engineered for high heat, chemical, impact, and optical hazards.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-wider">
              <span className="bg-[#7AC142]/10 text-[#7AC142] border border-[#7AC142]/30 px-3 py-1.5 rounded">CLI Approved</span>
              <span className="bg-gray-100 text-gray-700 border border-gray-200 px-3 py-1.5 rounded">IS 5983 / 1980</span>
              <span className="bg-gray-100 text-gray-700 border border-gray-200 px-3 py-1.5 rounded">ISO 9001:2015</span>
              <span className="bg-gray-100 text-gray-700 border border-gray-200 px-3 py-1.5 rounded">Davanagere, Karnataka</span>
            </div>
          </div>

          {/* Quick Category Anchor Navigation */}
          <div className="no-print pt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1 flex-shrink-0">Jump To:</span>
            {groupedProducts.map((group, idx) => (
              <a
                key={group.category}
                href={`#cat-${idx}`}
                className="text-[11px] font-bold text-gray-700 hover:text-[#7AC142] bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1 rounded-full whitespace-nowrap transition-colors flex-shrink-0"
              >
                {group.category} ({group.products.length})
              </a>
            ))}
          </div>
        </div>

        {/* ── Category Sections with Strict Equal-Height B2B Spec Grid ── */}
        <div className="space-y-12">
          {groupedProducts.map((group, groupIdx) => (
            <section key={group.category} id={`cat-${groupIdx}`} className="scroll-mt-28">
              
              {/* Category Header Bar */}
              <div className="flex items-center justify-between border-b-2 border-gray-900 pb-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="bg-gray-900 text-white text-xs font-black px-2.5 py-1 rounded">
                    {String(groupIdx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900">
                    {group.category}
                  </h3>
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  {group.products.length} {group.products.length === 1 ? 'Product' : 'Products'}
                </span>
              </div>

              {/* Strict Uniform CSS Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.products.map((p, pIdx) => {
                  const certs = p.datasheet?.certifications ?? ['CLI Approved'];
                  const modelCode = `OS-${p.id.toUpperCase().slice(0, 8)}`;

                  return (
                    <div 
                      key={p.id}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#7AC142] hover:shadow-lg transition-all duration-200 flex flex-col h-full group"
                    >
                      {/* Top Spec Ribbon */}
                      <div className="flex justify-between items-center px-4 py-2 bg-gray-50 border-b border-gray-100 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        <span className="font-mono text-gray-700">{modelCode}</span>
                        {p.shade ? (
                          <span className="text-[#7AC142] font-black">Shade {p.shade}</span>
                        ) : (
                          <span className="text-gray-400">Class 1 Optics</span>
                        )}
                      </div>

                      {/* Image Area - Fixed 220px with Clean Inner Framing */}
                      <div className="relative h-[220px] w-full bg-white p-5 flex items-center justify-center overflow-hidden border-b border-gray-100">
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.prodname}
                            className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="text-gray-300 text-xs font-bold uppercase tracking-widest text-center">
                            Image Pending
                          </div>
                        )}
                      </div>

                      {/* Body Info - Flexbox with Equal Spacing */}
                      <div className="p-4 flex flex-col flex-1">
                        <h4 className="text-[14px] font-black uppercase tracking-tight text-gray-900 leading-snug line-clamp-2 mb-1.5 group-hover:text-[#7AC142] transition-colors">
                          {p.prodname}
                        </h4>

                        {p.subtitle ? (
                          <p className="text-[11px] text-gray-500 line-clamp-2 mb-3 leading-relaxed">
                            {p.subtitle}
                          </p>
                        ) : (
                          <p className="text-[11px] text-gray-400 italic mb-3">
                            Certified standard industrial specification
                          </p>
                        )}

                        {/* Specs & Compliance Pills */}
                        <div className="mt-auto pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 mb-3">
                          {certs.slice(0, 2).map((cert, ci) => (
                            <span 
                              key={ci} 
                              className="text-[9px] font-bold text-gray-700 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded uppercase tracking-wider"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>

                        {/* Order Button */}
                        <div className="no-print">
                          <AddToCartButton id={p.id} prodname={p.prodname} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </section>
          ))}
        </div>

        {/* ── Document Footer ── */}
        <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} OSWAL Industries — Davanagere, Karnataka, India.</p>
          <p className="font-semibold text-gray-700">oswaloptical@yahoo.co.in · +91 9535354312 · GST: 29AAFPO7702C1ZT</p>
        </div>

      </div>

      {/* ── PDF Generation View (Synchronized Category B2B Grid Structured for A4) ── */}
      <div style={{ position: 'absolute', top: '-99999px', left: '-99999px' }}>
        <div id="pdf-catalog" style={{ width: '920px', backgroundColor: '#ffffff', color: '#111827', padding: '36px 40px', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px', borderBottom: '2px solid #e5e7eb', paddingBottom: '20px' }}>
            <div style={{ height: '4px', backgroundColor: '#7AC142', width: '100%', marginBottom: '14px' }}></div>
            <p style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '3px', color: '#7AC142', textTransform: 'uppercase', margin: '0 0 4px 0' }}>Industrial Safety Eyewear Since 1983</p>
            <h1 style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-1.5px', color: '#111827', margin: '0', lineHeight: '1' }}>OSWAL INDUSTRIES</h1>
            <p style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '5px', color: '#9ca3af', textTransform: 'uppercase', margin: '4px 0 10px 0' }}>Official Product Catalogue</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '9px', fontWeight: '800', textTransform: 'uppercase', backgroundColor: '#f0f9e8', color: '#7AC142', padding: '4px 10px', border: '1px solid rgba(122,193,66,0.3)', borderRadius: '3px' }}>✓ CLI Approved</span>
              <span style={{ fontSize: '9px', fontWeight: '800', textTransform: 'uppercase', backgroundColor: '#f3f4f6', color: '#374151', padding: '4px 10px', border: '1px solid #e5e7eb', borderRadius: '3px' }}>✓ IS 5983 / 1980</span>
              <span style={{ fontSize: '9px', fontWeight: '800', textTransform: 'uppercase', backgroundColor: '#f3f4f6', color: '#374151', padding: '4px 10px', border: '1px solid #e5e7eb', borderRadius: '3px' }}>oswaloptical@yahoo.co.in · +91 9535354312</span>
            </div>
          </div>

          {/* Grouped Products for PDF */}
          {groupedProducts.map((group, groupIdx) => (
            <div key={group.category} style={{ marginBottom: '28px', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #111827', paddingBottom: '6px', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '900', textTransform: 'uppercase', margin: '0', color: '#111827' }}>
                  {String(groupIdx + 1).padStart(2, '0')}. {group.category}
                </h3>
                <span style={{ fontSize: '10px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase' }}>
                  {group.products.length} Items
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -8px' }}>
                {group.products.map((p) => {
                  const certs = p.datasheet?.certifications ?? ['CLI Approved'];
                  const modelCode = `OS-${p.id.toUpperCase().slice(0, 8)}`;

                  return (
                    <div key={p.id} style={{ width: '33.333%', padding: '0 8px', marginBottom: '16px', boxSizing: 'border-box', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                      <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '12px', backgroundColor: '#ffffff', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontWeight: '700', color: '#6b7280', marginBottom: '8px', borderBottom: '1px solid #f3f4f6', paddingBottom: '4px' }}>
                          <span style={{ fontFamily: 'monospace' }}>{modelCode}</span>
                          <span style={{ color: '#7AC142' }}>{p.shade ? `DIN ${p.shade}` : 'Class 1'}</span>
                        </div>

                        <div style={{ width: '100%', height: '150px', backgroundColor: '#f8f9fa', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', overflow: 'hidden' }}>
                          {p.image ? (
                            <img src={p.image} alt={p.prodname} style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }} />
                          ) : (
                            <span style={{ fontSize: '9px', color: '#9ca3af' }}>Photo Pending</span>
                          )}
                        </div>

                        <h4 style={{ fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', color: '#111827', margin: '0 0 4px 0', lineHeight: '1.25' }}>
                          {p.prodname}
                        </h4>

                        {p.subtitle && (
                          <p style={{ fontSize: '10px', color: '#6b7280', margin: '0 0 8px 0', lineHeight: '1.3' }}>
                            {p.subtitle}
                          </p>
                        )}

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: 'auto', paddingTop: '6px' }}>
                          {certs.slice(0, 2).map((cert, ci) => (
                            <span key={ci} style={{ fontSize: '8px', fontWeight: '800', color: '#4b5563', border: '1px solid #e5e7eb', backgroundColor: '#f9fafb', padding: '2px 5px', borderRadius: '3px', textTransform: 'uppercase' }}>
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* PDF Footer */}
          <div style={{ marginTop: '20px', borderTop: '1px solid #e5e7eb', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#6b7280' }}>
            <span>OSWAL Industries — Davanagere, Karnataka, India</span>
            <span>oswaloptical@yahoo.co.in — +91 9535354312</span>
          </div>

        </div>
      </div>

    </div>
  );
}

