import productsData from '../../../../products.json';
import { notFound } from 'next/navigation';
import PrintButton from '../../../../components/PrintButton';

export function generateStaticParams() {
  return productsData.map((p) => ({
    id: p.id,
  }));
}

export default async function DatasheetPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const ds = (product as any).datasheet;

  // Inline style objects — these CANNOT be stripped by any browser print engine
  const GREEN = '#7AC142';
  const DARK  = '#111827'; // gray-900

  const greenBg:  React.CSSProperties = { backgroundColor: GREEN,  WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' };
  const darkBg:   React.CSSProperties = { backgroundColor: DARK,   WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' };
  const grayBg50: React.CSSProperties = { backgroundColor: '#f9fafb', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' };

  return (
    <>
      {/* Force color-adjust globally via a style tag */}
      <style>{`
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        @media print {
          @page { size: A4 portrait; margin: 0.8cm 1cm; }
          body { margin: 0 !important; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="bg-white text-black min-h-screen p-10 font-sans mx-auto max-w-[850px] shadow-2xl my-8"
           style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>

        {/* ── OSWAL Header ── */}
        <div className="mb-6">
          {/* Green accent bar */}
          <div style={{ ...greenBg, height: '5px', width: '100%', marginBottom: '20px' }} />

          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-end gap-2 mb-0.5">
                <span className="text-[38px] font-black tracking-tighter leading-none" style={{ color: DARK }}>OSWAL</span>
                <span className="text-[13px] font-bold tracking-[0.25em] uppercase mb-1.5" style={{ color: GREEN }}>Industries</span>
              </div>
              <p className="text-[9px] font-bold tracking-[0.18em] uppercase" style={{ color: '#9ca3af' }}>
                Safety Eyewear Manufacturer · Since 1983 · Davanagere, Karnataka
              </p>
            </div>

            <div className="text-right">
              <div className="inline-block px-4 py-1.5" style={{ border: `2px solid ${GREEN}` }}>
                <p className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: GREEN }}>Technical</p>
                <p className="text-[15px] font-black uppercase tracking-widest leading-tight" style={{ color: DARK }}>Data Sheet</p>
              </div>
            </div>
          </div>

          <div className="mt-4" style={{ borderBottom: '1px solid #e5e7eb' }} />
        </div>

        {/* ── Top Section: Image + Tables ── */}
        <div className="flex gap-6 mb-6">
          {/* Image */}
          <div className="w-[50%] flex items-center justify-center p-4" style={{ border: '1px solid #f3f4f6', minHeight: '280px', backgroundColor: '#fafafa' }}>
            {(product as any).image ? (
              <img src={(product as any).image} alt={product.prodname} className="w-full h-auto object-contain" style={{ maxHeight: '260px', mixBlendMode: 'multiply' }} />
            ) : (
              <div className="flex flex-col items-center justify-center gap-2" style={{ color: '#d1d5db' }}>
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#9ca3af' }}>Product Image</span>
              </div>
            )}
          </div>

          {/* Right Tables */}
          <div className="w-[50%] flex flex-col gap-4">
            <div className="flex gap-3">
              {/* INDUSTRY */}
              <table className="w-1/2 text-[11px]" style={{ border: '1px solid #e5e7eb', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={greenBg}>
                    <th className="text-left font-bold py-1.5 px-2 tracking-wide" style={{ color: 'white' }}>INDUSTRY</th>
                  </tr>
                </thead>
                <tbody>
                  {ds?.industries ? (
                    ds.industries.map((ind: string, idx: number) => (
                      <tr key={idx}><td className="py-1 px-2" style={{ borderBottom: '1px solid #f3f4f6', color: '#4b5563' }}>{ind}</td></tr>
                    ))
                  ) : (
                    <tr><td className="py-1 px-2" style={{ color: '#9ca3af' }}>—</td></tr>
                  )}
                </tbody>
              </table>

              {/* APPLICATIONS */}
              <table className="w-1/2 text-[11px]" style={{ border: '1px solid #e5e7eb', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={greenBg}>
                    <th className="text-left font-bold py-1.5 px-2 tracking-wide" style={{ color: 'white' }}>APPLICATIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {ds?.applications ? (
                    ds.applications.map((app: string, idx: number) => (
                      <tr key={idx}><td className="py-1 px-2" style={{ borderBottom: '1px solid #f3f4f6', color: '#4b5563' }}>{app}</td></tr>
                    ))
                  ) : (
                    <tr><td className="py-1 px-2" style={{ color: '#9ca3af' }}>—</td></tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* SPECIAL FEATURES */}
            {ds?.highlights && (
              <div>
                <div className="font-bold py-1.5 px-2 text-[11px] tracking-wide" style={{ ...greenBg, color: 'white' }}>SPECIAL FEATURES</div>
                <div className="flex justify-around p-3" style={{ border: '1px solid #e5e7eb', borderTop: 'none' }}>
                  {ds.highlights.slice(0, 5).map((hl: string, idx: number) => (
                    <div key={idx} className="flex flex-col items-center" style={{ maxWidth: '50px' }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" style={{ ...greenBg, color: 'white' }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-[7px] font-bold uppercase text-center leading-tight" style={{ color: '#6b7280' }}>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Product Name Ribbon ── */}
        <div className="flex items-center mb-4">
          <div className="relative flex items-center px-6" style={{ backgroundColor: DARK, height: '34px', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' } as any}>
            <h2 className="font-black text-[15px] relative whitespace-nowrap uppercase tracking-widest" style={{ color: 'white', zIndex: 10 }}>{product.prodname}</h2>
            <div className="absolute right-0 top-0 bottom-0 w-8" style={{ backgroundColor: DARK, transform: 'skewX(30deg)', right: '-14px', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' } as any} />
          </div>
          <div className="ml-8 w-2" style={{ height: '34px', backgroundColor: GREEN, transform: 'skewX(30deg)', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' } as any} />
          <div className="ml-2 w-1.5" style={{ height: '34px', backgroundColor: '#d1d5db', transform: 'skewX(30deg)', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' } as any} />
        </div>

        <p className="font-bold text-[12px] mb-4 uppercase tracking-widest pb-2" style={{ color: '#4b5563', borderBottom: '1px solid #f3f4f6' }}>
          Standard / Certifications: <span style={{ color: DARK }}>{ds?.certifications ? ds.certifications.join('  ·  ') : ''}</span>
        </p>

        {/* ── COMPONENT TABLE ── */}
        <table className="w-full text-[12px] mb-5" style={{ border: '1px solid #e5e7eb', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={darkBg}>
              <th className="text-left font-bold py-1.5 px-3 w-1/4" style={{ color: 'white', borderRight: '1px solid #374151' }}>COMPONENT</th>
              <th className="text-left font-bold py-1.5 px-3 w-1/4" style={{ color: 'white', borderRight: '1px solid #374151' }}>MATERIAL</th>
              <th className="text-left font-bold py-1.5 px-3 w-1/2" style={{ color: 'white' }}>ADVANTAGE</th>
            </tr>
          </thead>
          <tbody>
            {ds?.components?.map((c: any, idx: number) => (
              <tr key={idx} style={{ borderTop: '1px solid #f3f4f6', ...(idx % 2 !== 0 ? grayBg50 : {}) }}>
                <td className="py-1.5 px-3 font-semibold" style={{ borderRight: '1px solid #f3f4f6', color: '#1f2937' }}>{c.name}</td>
                <td className="py-1.5 px-3" style={{ borderRight: '1px solid #f3f4f6', color: '#4b5563' }}>{c.material}</td>
                <td className="py-1.5 px-3" style={{ color: '#4b5563' }}>{c.advantage}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── LENS OPTIONS TABLE ── */}
        <table className="w-full text-[12px] mb-6" style={{ border: '1px solid #e5e7eb', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={darkBg}>
              <th className="text-left font-bold py-1.5 px-3 w-[30%]" style={{ color: 'white', borderRight: '1px solid #374151' }}>LENS / GLASS OPTIONS</th>
              <th className="text-left font-bold py-1.5 px-3 w-[15%]" style={{ color: 'white', borderRight: '1px solid #374151' }}>OPTICAL CLASS</th>
              <th className="text-left font-bold py-1.5 px-3 w-[20%]" style={{ color: 'white', borderRight: '1px solid #374151' }}>IMPACT RESISTANCE</th>
              <th className="text-left font-bold py-1.5 px-3 w-[15%]" style={{ color: 'white', borderRight: '1px solid #374151' }}>THICKNESS</th>
              <th className="text-left font-bold py-1.5 px-3 w-[20%]" style={{ color: 'white' }}>WEIGHT</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderTop: '1px solid #f3f4f6' }}>
              <td className="py-1.5 px-3" style={{ borderRight: '1px solid #f3f4f6', color: '#4b5563' }}>{ds?.lensOptions ?? '—'}</td>
              <td className="py-1.5 px-3" style={{ borderRight: '1px solid #f3f4f6', color: '#4b5563' }}>{ds?.opticalClass ?? '—'}</td>
              <td className="py-1.5 px-3" style={{ borderRight: '1px solid #f3f4f6', color: '#4b5563' }}>{ds?.impactResistance ?? '—'}</td>
              <td className="py-1.5 px-3" style={{ borderRight: '1px solid #f3f4f6', color: '#4b5563' }}>{ds?.glassThickness ?? '—'}</td>
              <td className="py-1.5 px-3" style={{ color: '#4b5563' }}>{ds?.weight ?? '—'}</td>
            </tr>
            {ds?.frameMaterial && (
              <tr style={{ borderTop: '1px solid #f3f4f6', ...grayBg50 }}>
                <td className="py-1.5 px-3 font-semibold" style={{ borderRight: '1px solid #f3f4f6', color: '#374151' }}>Frame Material</td>
                <td className="py-1.5 px-3" colSpan={4} style={{ color: '#4b5563' }}>{ds.frameMaterial}</td>
              </tr>
            )}
            {ds?.modifications && (
              <tr style={{ borderTop: '1px solid #f3f4f6' }}>
                <td className="py-1.5 px-3 font-semibold" style={{ borderRight: '1px solid #f3f4f6', color: '#374151' }}>Modifications</td>
                <td className="py-1.5 px-3" colSpan={4} style={{ color: '#4b5563' }}>{ds.modifications}</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* ── 2-Column Bottom ── */}
        <div className="flex gap-5 mb-10">
          <div className="w-1/2">
            <table className="w-full text-[12px] h-full" style={{ border: '1px solid #e5e7eb', borderCollapse: 'collapse', pageBreakInside: 'avoid' }}>
              <thead>
                <tr style={darkBg}><th className="text-left font-bold py-1.5 px-3" style={{ color: 'white' }}>KEY FEATURES</th></tr>
              </thead>
              <tbody>
                {ds?.usage && (
                  <tr style={{ borderTop: '1px solid #f3f4f6' }}>
                    <td className="py-2.5 px-3 italic text-[11px]" style={{ color: '#6b7280', ...grayBg50, borderBottom: '1px solid #f3f4f6' }}>{ds.usage}</td>
                  </tr>
                )}
                {ds?.keyFeatures ? (
                  ds.keyFeatures.map((feat: string, idx: number) => (
                    <tr key={idx} style={{ borderTop: '1px solid #f3f4f6', ...(idx % 2 !== 0 ? grayBg50 : {}) }}>
                      <td className="py-2 px-3 flex items-start gap-2" style={{ color: '#374151' }}>
                        <span className="font-black mt-0.5" style={{ color: GREEN }}>›</span>{feat}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr style={{ borderTop: '1px solid #f3f4f6' }}><td className="py-2.5 px-3" style={{ color: '#4b5563' }}>{product.description}</td></tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="w-1/2 flex flex-col gap-4">
            <table className="w-full text-[12px]" style={{ border: '1px solid #e5e7eb', borderCollapse: 'collapse', pageBreakInside: 'avoid' }}>
              <thead>
                <tr style={darkBg}><th className="text-left font-bold py-1.5 px-3" style={{ color: 'white' }}>STORAGE</th></tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: '1px solid #f3f4f6' }}><td className="py-2 px-3" style={{ color: '#4b5563' }}>{ds?.storage ?? '—'}</td></tr>
              </tbody>
            </table>

            <div className="flex gap-4 flex-1" style={{ pageBreakInside: 'avoid' }}>
              <table className="text-[12px]" style={{ width: '60%', border: '1px solid #e5e7eb', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={darkBg}><th className="text-left font-bold py-1.5 px-3" style={{ color: 'white' }}>CLEANING</th></tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: '1px solid #f3f4f6' }}><td className="py-2 px-3 align-top" style={{ color: '#4b5563' }}>{ds?.cleaning ?? '—'}</td></tr>
                </tbody>
              </table>
              <table className="text-[12px]" style={{ width: '40%', border: '1px solid #e5e7eb', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={darkBg}><th className="text-left font-bold py-1.5 px-3" style={{ color: 'white' }}>PACKING</th></tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: '1px solid #f3f4f6' }}><td className="py-2 px-3 align-top" style={{ color: '#4b5563' }}>{ds?.packaging ?? ds?.packing ?? '—'}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="flex justify-between items-end pt-4" style={{ borderTop: `4px solid ${GREEN}` }}>
          <div>
            <div className="flex items-end gap-1.5 mb-1">
              <span className="font-black text-[20px] tracking-tight" style={{ color: DARK }}>OSWAL</span>
              <span className="font-bold text-[10px] tracking-[0.2em] uppercase mb-0.5" style={{ color: GREEN }}>Industries</span>
            </div>
            <p className="text-[9px] tracking-wide" style={{ color: '#9ca3af' }}>Davanagere, Karnataka, India — Since 1983</p>
          </div>

          <div className="text-right text-[10px] flex flex-col gap-0.5" style={{ color: '#6b7280' }}>
            <p>E-mail: oswaloptical@yahoo.co.in</p>
            <p>Website: www.oswalindustries.com</p>
            <p>Tel: +91 9535354312</p>
          </div>
        </div>

        {/* Print Button */}
        <PrintButton />
      </div>
    </>
  );
}
