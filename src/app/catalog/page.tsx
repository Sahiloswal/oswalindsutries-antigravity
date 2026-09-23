import productsData from '../../products.json';
import PrintButton from '../../components/PrintButton';

const GREEN = '#7AC142';
const DARK  = '#111827';

const greenBg: React.CSSProperties = { backgroundColor: GREEN, WebkitPrintColorAdjust: 'exact' as any, printColorAdjust: 'exact' as any };
const darkBg:  React.CSSProperties = { backgroundColor: DARK,  WebkitPrintColorAdjust: 'exact' as any, printColorAdjust: 'exact' as any };

// Group products by category
function groupByCategory(products: typeof productsData) {
  const map = new Map<string, typeof productsData>();
  for (const p of products) {
    if (!(p as any).isSubProduct) {
      const cat = p.category || 'General';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(p);
    }
  }
  return map;
}

export default function CatalogPage() {
  const products = productsData.filter(p => !(p as any).isSubProduct);
  const grouped  = groupByCategory(products);

  return (
    <>
      <style>{`
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        @media print {
          @page { size: A4 landscape; margin: 0.6cm 0.8cm; }
          body  { margin: 0 !important; }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; break-before: page; }
          .avoid-break { page-break-inside: avoid; break-inside: avoid; }
        }
      `}</style>

      <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: DARK }}>

        {/* ── Toolbar (screen only) ── */}
        <div className="no-print" style={{
          position: 'sticky', top: '0', zIndex: 50, backgroundColor: '#f9fafb',
          borderBottom: '1px solid #e5e7eb', padding: '12px 24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div>
            <p style={{ fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: DARK }}>OSWAL Master Catalog</p>
            <p style={{ fontSize: '11px', color: '#6b7280', marginTop: '2px' }}>{products.length} products across {grouped.size} categories</p>
          </div>
          <PrintButton
            label="Download PDF Catalog"
            className="no-print flex items-center gap-2 text-white font-bold text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-none"
            elementId={undefined}
          />
        </div>

        <div id="catalog-document" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0' }}>

          {/* ══════════════════════════════════════
              COVER PAGE
          ══════════════════════════════════════ */}
          <div className="avoid-break" style={{
            minHeight: '90vh', display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between', padding: '60px 80px',
            background: 'white', position: 'relative', overflow: 'hidden',
            pageBreakAfter: 'always'
          }}>
            {/* Top accent */}
            <div style={{ ...greenBg, height: '6px', width: '100%', position: 'absolute', top: 0, left: 0 }} />

            {/* Left dark sidebar */}
            <div style={{ ...darkBg, width: '8px', position: 'absolute', top: 0, bottom: 0, left: 0 }} />

            {/* Background watermark */}
            <div style={{
              position: 'absolute', right: '-40px', top: '50%', transform: 'translateY(-50%)',
              fontSize: '320px', fontWeight: 900, color: '#f3f4f6', lineHeight: 1,
              letterSpacing: '-0.05em', userSelect: 'none', pointerEvents: 'none', zIndex: 0
            }}>O</div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Year badge */}
              <div style={{
                display: 'inline-block', ...greenBg, color: 'white',
                fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em',
                padding: '4px 14px', textTransform: 'uppercase', marginBottom: '40px'
              }}>
                EST. 1983
              </div>

              {/* Brand Name */}
              <div style={{ marginBottom: '8px' }}>
                <div style={{ fontSize: '90px', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, color: DARK }}>OSWAL</div>
                <div style={{ fontSize: '28px', fontWeight: 300, letterSpacing: '0.5em', color: '#6b7280', textTransform: 'uppercase', marginTop: '-4px' }}>INDUSTRIES</div>
              </div>

              {/* Divider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '28px 0' }}>
                <div style={{ ...greenBg, height: '3px', width: '60px' }} />
                <div style={{ height: '3px', width: '20px', backgroundColor: '#d1d5db' }} />
                <div style={{ height: '3px', width: '8px', backgroundColor: '#e5e7eb' }} />
              </div>

              <div style={{ fontSize: '13px', color: '#374151', lineHeight: 1.7, maxWidth: '440px', fontWeight: 500 }}>
                India's trusted manufacturer of Industrial Safety Eyewear since 1983.
                Supplying certified protection to construction, manufacturing,
                pharma, chemical and laser industries across India and globally.
              </div>
            </div>

            {/* Cert badges row */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', position: 'relative', zIndex: 1, marginTop: '48px' }}>
              {['✓ CLI Approved','✓ IS 5983 / 1980','✓ CE Marked','✓ BIS Certified','✓ 40+ Years'].map((b, i) => (
                <div key={i} style={{
                  border: `1px solid ${i === 0 ? GREEN : '#d1d5db'}`,
                  color: i === 0 ? GREEN : '#4b5563',
                  backgroundColor: i === 0 ? '#f0f9e8' : '#f9fafb',
                  fontSize: '10px', fontWeight: 700, padding: '5px 14px',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  WebkitPrintColorAdjust: 'exact' as any, printColorAdjust: 'exact' as any
                }}>
                  {b}
                </div>
              ))}
            </div>

            {/* Cover footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '48px', paddingTop: '20px', borderTop: '1px solid #e5e7eb', position: 'relative', zIndex: 1 }}>
              <div>
                <div style={{ fontSize: '11px', color: '#9ca3af', letterSpacing: '0.05em' }}>Davanagere, Karnataka, India</div>
                <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>oswaloptical@yahoo.co.in  ·  +91 9535354312</div>
              </div>
              <div style={{ fontSize: '22px', fontWeight: 900, color: '#e5e7eb', letterSpacing: '-0.02em' }}>PRODUCT CATALOG</div>
            </div>
          </div>

          {/* ══════════════════════════════════════
              PRODUCT PAGES — one category per section
          ══════════════════════════════════════ */}
          {Array.from(grouped.entries()).map(([category, catProducts], catIdx) => (
            <div key={category} className={catIdx > 0 ? 'page-break' : ''}>

              {/* Category Header */}
              <div className="avoid-break" style={{ display: 'flex', alignItems: 'stretch', marginBottom: '28px', marginTop: catIdx === 0 ? '48px' : '0' }}>
                <div style={{ ...darkBg, color: 'white', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ ...greenBg, width: '4px', height: '100%', minHeight: '36px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '9px', color: '#9ca3af', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2px' }}>Category</div>
                    <div style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'white' }}>{category}</div>
                  </div>
                </div>
                <div style={{ flex: 1, backgroundColor: '#f9fafb', display: 'flex', alignItems: 'center', paddingLeft: '20px', WebkitPrintColorAdjust: 'exact' as any, printColorAdjust: 'exact' as any }}>
                  <span style={{ fontSize: '11px', color: '#6b7280', fontWeight: 500 }}>{catProducts.length} product{catProducts.length > 1 ? 's' : ''}</span>
                </div>
              </div>

              {/* Product Grid — 4 per row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
                {catProducts.map((p, idx) => {
                  const certs = (p as any).datasheet?.certifications ?? ['CLI Approved'];
                  const serial = String(idx + 1).padStart(2, '0');
                  return (
                    <div key={p.id} className="avoid-break" style={{
                      border: '1px solid #e5e7eb', backgroundColor: 'white',
                      display: 'flex', flexDirection: 'column',
                      WebkitPrintColorAdjust: 'exact' as any, printColorAdjust: 'exact' as any
                    }}>
                      {/* Top green stripe */}
                      <div style={{ ...greenBg, height: '3px', width: '100%' }} />

                      {/* Image area */}
                      <div style={{
                        backgroundColor: '#fafafa', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', height: '180px', position: 'relative',
                        borderBottom: '1px solid #f3f4f6',
                        WebkitPrintColorAdjust: 'exact' as any, printColorAdjust: 'exact' as any
                      }}>
                        {/* Serial number watermark */}
                        <div style={{
                          position: 'absolute', top: '6px', left: '8px',
                          fontSize: '28px', fontWeight: 900, color: '#e5e7eb',
                          lineHeight: 1, userSelect: 'none'
                        }}>{serial}</div>

                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.prodname}
                            style={{ maxHeight: '158px', maxWidth: '90%', objectFit: 'contain', mixBlendMode: 'multiply' }}
                          />
                        ) : (
                          <div style={{ fontSize: '10px', fontWeight: 700, color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', padding: '8px' }}>
                            Image Coming Soon
                          </div>
                        )}
                      </div>

                      {/* Info block */}
                      <div style={{ padding: '12px 14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {/* Category label */}
                        <div style={{ fontSize: '8px', fontWeight: 800, color: GREEN, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '4px' }}>
                          {p.category}
                        </div>

                        {/* Product name */}
                        <div style={{ fontSize: '13px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.01em', color: DARK, lineHeight: 1.2, marginBottom: '4px' }}>
                          {p.prodname}
                        </div>

                        {/* Subtitle */}
                        {(p as any).subtitle && (
                          <div style={{ fontSize: '10px', color: '#6b7280', lineHeight: 1.4, marginBottom: '8px' }}>
                            {(p as any).subtitle}
                          </div>
                        )}

                        {/* Spacer */}
                        <div style={{ flex: 1 }} />

                        {/* Certification tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '8px' }}>
                          {certs.slice(0, 2).map((cert: string, ci: number) => (
                            <span key={ci} style={{
                              fontSize: '8px', fontWeight: 700, color: '#374151',
                              border: '1px solid #d1d5db', padding: '2px 6px',
                              textTransform: 'uppercase', letterSpacing: '0.08em',
                              backgroundColor: '#f9fafb',
                              WebkitPrintColorAdjust: 'exact' as any, printColorAdjust: 'exact' as any
                            }}>{cert}</span>
                          ))}
                        </div>

                        {/* Bottom divider + code */}
                        <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '8px', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            {p.id.replace(/-/g, ' ').toUpperCase()}
                          </span>
                          <div style={{ width: '20px', height: '2px', backgroundColor: GREEN, WebkitPrintColorAdjust: 'exact' as any, printColorAdjust: 'exact' as any }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* ══════════════════════════════════════
              BACK COVER
          ══════════════════════════════════════ */}
          <div className="page-break avoid-break" style={{
            padding: '60px 80px', backgroundColor: DARK,
            minHeight: '60vh', display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between', position: 'relative',
            WebkitPrintColorAdjust: 'exact' as any, printColorAdjust: 'exact' as any
          }}>
            <div style={{ ...greenBg, height: '6px', width: '100%', position: 'absolute', top: 0, left: 0 }} />

            <div>
              <div style={{ fontSize: '48px', fontWeight: 900, color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>OSWAL</div>
              <div style={{ fontSize: '14px', fontWeight: 300, color: GREEN, letterSpacing: '0.5em', textTransform: 'uppercase', marginTop: '4px' }}>INDUSTRIES</div>
              <div style={{ height: '3px', width: '48px', backgroundColor: GREEN, marginTop: '20px', WebkitPrintColorAdjust: 'exact' as any, printColorAdjust: 'exact' as any }} />
              <div style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.8, marginTop: '20px', maxWidth: '380px' }}>
                For enquiries, bulk orders, OEM partnerships,<br/>
                or custom specification products, reach us at:
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
              {[
                { label: 'EMAIL', value: 'oswaloptical@yahoo.co.in' },
                { label: 'PHONE', value: '+91 9535354312' },
                { label: 'ADDRESS', value: 'Davanagere, Karnataka, India — 577 001' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div style={{ fontSize: '9px', color: GREEN, fontWeight: 800, letterSpacing: '0.2em', marginBottom: '6px' }}>{label}</div>
                  <div style={{ fontSize: '12px', color: 'white', fontWeight: 500, lineHeight: 1.5 }}>{value}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #374151', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', color: '#4b5563' }}>© {new Date().getFullYear()} OSWAL Industries. All rights reserved.</span>
              <span style={{ fontSize: '10px', color: '#4b5563' }}>www.oswalindustries.in</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
