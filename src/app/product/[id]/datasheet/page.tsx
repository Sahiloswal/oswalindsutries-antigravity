import productsData from '../../../../products.json';
import { notFound } from 'next/navigation';
import PrintButton from '../../../../components/PrintButton';
import './print.css';

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

  return (
    <div className="bg-white text-black min-h-screen p-10 print:p-0 print:m-0 font-sans mx-auto max-w-[850px] shadow-2xl print:shadow-none my-8 print:my-0">

      {/* ── OSWAL Header ── */}
      <div className="mb-6">
        {/* Green accent bar at top — OSWAL brand signature */}
        <div className="h-[5px] w-full bg-[#7AC142] mb-5" />

        <div className="flex justify-between items-start">
          {/* Brand block */}
          <div>
            <div className="flex items-end gap-2 mb-0.5">
              <span className="text-[38px] font-black tracking-tighter leading-none text-gray-900">OSWAL</span>
              <span className="text-[13px] font-bold tracking-[0.25em] text-[#7AC142] uppercase mb-1.5">Industries</span>
            </div>
            <p className="text-[9px] font-bold tracking-[0.18em] text-gray-400 uppercase">
              Safety Eyewear Manufacturer · Since 1983 · Davanagere, Karnataka
            </p>
          </div>

          {/* Right: TECHNICAL DATA SHEET badge */}
          <div className="text-right">
            <div className="inline-block border-2 border-[#7AC142] px-4 py-1.5">
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#7AC142]">Technical</p>
              <p className="text-[15px] font-black uppercase tracking-widest text-gray-900 leading-tight">Data Sheet</p>
            </div>
          </div>
        </div>

        {/* Thin divider */}
        <div className="mt-4 border-b border-gray-200" />
      </div>

      {/* ── Top Section: Image + Tables ── */}
      <div className="flex gap-6 mb-6">
        {/* Image */}
        <div className="w-[50%] flex items-center justify-center border border-gray-100 p-4 min-h-[280px] bg-gray-50/40">
          {(product as any).image ? (
            <img src={(product as any).image} alt={product.prodname} className="w-full h-auto object-contain max-h-[260px] mix-blend-multiply" />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-300 gap-2">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Product Image</span>
            </div>
          )}
        </div>

        {/* Right Tables */}
        <div className="w-[50%] flex flex-col gap-4">
          <div className="flex gap-3">
            {/* INDUSTRY */}
            <table className="w-1/2 text-[11px] border border-gray-200">
              <thead>
                <tr className="bg-[#7AC142]">
                  <th className="text-left font-bold py-1.5 px-2 text-white tracking-wide">INDUSTRY</th>
                </tr>
              </thead>
              <tbody>
                {ds?.industries ? (
                  ds.industries.map((ind: string, idx: number) => (
                    <tr key={idx}><td className="py-1 px-2 border-b border-gray-100 text-gray-600">{ind}</td></tr>
                  ))
                ) : (
                  <tr><td className="py-1 px-2 text-gray-400">—</td></tr>
                )}
              </tbody>
            </table>

            {/* IDEAL APPLICATIONS */}
            <table className="w-1/2 text-[11px] border border-gray-200">
              <thead>
                <tr className="bg-[#7AC142]">
                  <th className="text-left font-bold py-1.5 px-2 text-white tracking-wide">APPLICATIONS</th>
                </tr>
              </thead>
              <tbody>
                {ds?.applications ? (
                  ds.applications.map((app: string, idx: number) => (
                    <tr key={idx}><td className="py-1 px-2 border-b border-gray-100 text-gray-600">{app}</td></tr>
                  ))
                ) : (
                  <tr><td className="py-1 px-2 text-gray-400">—</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {/* KEY FEATURES icons */}
          {ds?.highlights && (
            <div>
              <div className="bg-[#7AC142] font-bold py-1.5 px-2 text-[11px] text-white tracking-wide mb-0">SPECIAL FEATURES</div>
              <div className="flex justify-around border border-gray-200 border-t-0 p-3">
                {ds.highlights.slice(0, 5).map((hl: string, idx: number) => (
                  <div key={idx} className="flex flex-col items-center max-w-[50px]">
                    <div className="w-8 h-8 rounded-full bg-[#7AC142] flex items-center justify-center text-white mb-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-[7px] font-bold uppercase text-gray-500 text-center leading-tight">{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Product Name Ribbon ── */}
      <div className="flex items-center mb-4">
        <div className="bg-gray-900 text-white py-1.5 px-6 relative flex items-center h-[34px]">
          <h2 className="font-black text-[15px] z-10 relative whitespace-nowrap uppercase tracking-widest">{product.prodname}</h2>
          <div className="absolute right-[-14px] top-0 bottom-0 w-8 bg-gray-900 skew-x-[30deg]" />
        </div>
        <div className="ml-8 w-2 h-[34px] bg-[#7AC142] skew-x-[30deg]" />
        <div className="ml-2 w-1.5 h-[34px] bg-gray-300 skew-x-[30deg]" />
      </div>

      <p className="font-bold text-[12px] mb-4 uppercase tracking-widest text-gray-600 border-b border-gray-100 pb-2">
        Standard / Certifications: <span className="text-gray-900">{ds?.certifications ? ds.certifications.join('  ·  ') : ''}</span>
      </p>

      {/* ── COMPONENT TABLE ── */}
      <table className="w-full text-[12px] border border-gray-200 mb-5">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="text-left font-bold py-1.5 px-3 border-r border-gray-700 w-1/4">COMPONENT</th>
            <th className="text-left font-bold py-1.5 px-3 border-r border-gray-700 w-1/4">MATERIAL</th>
            <th className="text-left font-bold py-1.5 px-3 w-1/2">ADVANTAGE</th>
          </tr>
        </thead>
        <tbody>
          {ds?.components?.map((c: any, idx: number) => (
            <tr key={idx} className={`border-t border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <td className="py-1.5 px-3 border-r border-gray-100 font-semibold text-gray-800">{c.name}</td>
              <td className="py-1.5 px-3 border-r border-gray-100 text-gray-600">{c.material}</td>
              <td className="py-1.5 px-3 text-gray-600">{c.advantage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── LENS OPTIONS TABLE ── */}
      <table className="w-full text-[12px] border border-gray-200 mb-6">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="text-left font-bold py-1.5 px-3 border-r border-gray-700 w-[30%]">LENS / GLASS OPTIONS</th>
            <th className="text-left font-bold py-1.5 px-3 border-r border-gray-700 w-[15%]">OPTICAL CLASS</th>
            <th className="text-left font-bold py-1.5 px-3 border-r border-gray-700 w-[20%]">IMPACT RESISTANCE</th>
            <th className="text-left font-bold py-1.5 px-3 border-r border-gray-700 w-[15%]">THICKNESS</th>
            <th className="text-left font-bold py-1.5 px-3 w-[20%]">WEIGHT</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-100">
            <td className="py-1.5 px-3 border-r border-gray-100 text-gray-600">{ds?.lensOptions ?? '—'}</td>
            <td className="py-1.5 px-3 border-r border-gray-100 text-gray-600">{ds?.opticalClass ?? '—'}</td>
            <td className="py-1.5 px-3 border-r border-gray-100 text-gray-600">{ds?.impactResistance ?? '—'}</td>
            <td className="py-1.5 px-3 border-r border-gray-100 text-gray-600">{ds?.glassThickness ?? '—'}</td>
            <td className="py-1.5 px-3 text-gray-600">{ds?.weight ?? '—'}</td>
          </tr>
          {ds?.frameMaterial && (
            <tr className="border-t border-gray-100 bg-gray-50">
              <td className="py-1.5 px-3 border-r border-gray-100 text-gray-700 font-semibold">Frame Material</td>
              <td className="py-1.5 px-3 text-gray-600" colSpan={4}>{ds.frameMaterial}</td>
            </tr>
          )}
          {ds?.modifications && (
            <tr className="border-t border-gray-100">
              <td className="py-1.5 px-3 border-r border-gray-100 text-gray-700 font-semibold">Modifications</td>
              <td className="py-1.5 px-3 text-gray-600" colSpan={4}>{ds.modifications}</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ── 2-Column Bottom ── */}
      <div className="flex gap-5 mb-10">
        <div className="w-1/2">
          <table className="w-full text-[12px] border border-gray-200 h-full">
            <thead>
              <tr className="bg-gray-900 text-white"><th className="text-left font-bold py-1.5 px-3">KEY FEATURES</th></tr>
            </thead>
            <tbody>
              {ds?.usage && (
                <tr className="border-t border-gray-100">
                  <td className="py-2.5 px-3 text-gray-500 italic text-[11px] bg-gray-50 border-b border-gray-100">{ds.usage}</td>
                </tr>
              )}
              {ds?.keyFeatures ? (
                ds.keyFeatures.map((feat: string, idx: number) => (
                  <tr key={idx} className={`border-t border-gray-100 ${idx % 2 === 0 ? '' : 'bg-gray-50'}`}>
                    <td className="py-2 px-3 text-gray-700 flex items-start gap-2">
                      <span className="text-[#7AC142] font-black mt-0.5">›</span>{feat}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-t border-gray-100"><td className="py-2.5 px-3 text-gray-600">{product.description}</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="w-1/2 flex flex-col gap-4">
          <table className="w-full text-[12px] border border-gray-200">
            <thead>
              <tr className="bg-gray-900 text-white"><th className="text-left font-bold py-1.5 px-3">STORAGE</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100"><td className="py-2 px-3 text-gray-600">{ds?.storage ?? '—'}</td></tr>
            </tbody>
          </table>

          <div className="flex gap-4 flex-1">
            <table className="w-[60%] text-[12px] border border-gray-200">
              <thead>
                <tr className="bg-gray-900 text-white"><th className="text-left font-bold py-1.5 px-3">CLEANING</th></tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="py-2 px-3 text-gray-600 align-top">{ds?.cleaning ?? '—'}</td></tr>
              </tbody>
            </table>
            <table className="w-[40%] text-[12px] border border-gray-200">
              <thead>
                <tr className="bg-gray-900 text-white"><th className="text-left font-bold py-1.5 px-3">PACKING</th></tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="py-2 px-3 text-gray-600 align-top">{ds?.packaging ?? ds?.packing ?? '—'}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t-[4px] border-[#7AC142] pt-4 flex justify-between items-end">
        <div>
          <div className="flex items-end gap-1.5 mb-1">
            <span className="font-black text-[20px] text-gray-900 tracking-tight">OSWAL</span>
            <span className="font-bold text-[10px] text-[#7AC142] tracking-[0.2em] uppercase mb-0.5">Industries</span>
          </div>
          <p className="text-[9px] text-gray-400 tracking-wide">Davanagere, Karnataka, India — Since 1983</p>
        </div>

        <div className="text-right text-[10px] text-gray-500 flex flex-col gap-0.5">
          <p>E-mail: oswaloptical@yahoo.co.in</p>
          <p>Website: www.oswalindustries.com</p>
          <p>Tel: +91 9535354312</p>
        </div>
      </div>

      {/* Print Button (hidden when printing) */}
      <PrintButton />
    </div>
  );
}
