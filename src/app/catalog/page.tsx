import productsData from '../../products.json';
import PrintButton from '../../components/PrintButton';
import './print.css';

export default function CatalogPage() {
  const catalogProducts = productsData.filter(p => !p.isSubProduct);

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* Toolbar */}
      <div className="no-print w-full bg-gray-100 border-b border-gray-200 py-3 px-6 sticky top-[70px] md:top-[90px] z-30 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-base font-black uppercase text-gray-800 tracking-tight">OSWAL Master Catalog</h1>
          <p className="text-[11px] text-gray-500">Print or save as PDF — one product per page</p>
        </div>
        <PrintButton />
      </div>

      <div className="mx-auto max-w-[850px] p-10 print:p-[1cm] print:max-w-none">

        {/* ─── Cover Page ─── */}
        <div className="page-break flex flex-col items-center justify-center text-center min-h-[80vh] print:min-h-screen">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#7AC142] uppercase mb-4">Industrial Safety Eyewear Since 1983</p>
          <h1 className="text-[72px] font-black tracking-tighter text-gray-900 leading-none">OSWAL</h1>
          <p className="text-base font-bold tracking-[0.5em] text-gray-500 uppercase mt-3 mb-8">INDUSTRIES</p>
          <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-8"></div>
          <h2 className="text-2xl font-black uppercase tracking-widest text-gray-800 mb-3">Product Catalog 2026</h2>
          <p className="text-sm text-gray-500 max-w-md leading-relaxed">
            Complete range of CLI Approved &amp; IS 5983 / 1980 certified safety eyewear for industrial, construction, and manufacturing sectors.
          </p>
          <div className="mt-12 text-[11px] text-gray-400">
            <p className="font-semibold">oswaloptical@yahoo.co.in &nbsp;·&nbsp; +91 9535354312</p>
            <p>Davanagere, Karnataka, India</p>
          </div>
        </div>

        {/* ─── One Page Per Product ─── */}
        {catalogProducts.map((p, index) => {
          const isLast = index === catalogProducts.length - 1;
          const certs = p.datasheet?.certifications ?? ['CLI Approved', 'IS 5983 / 1980'];

          return (
            <div
              key={p.id}
              className={`${!isLast ? 'page-break' : ''} flex flex-col min-h-[80vh] print:min-h-screen py-10 print:py-0`}
            >
              {/* Page Header */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-6">
                <div>
                  <p className="text-[9px] font-black tracking-[0.3em] text-[#7AC142] uppercase">{p.category}</p>
                  <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 leading-tight">{p.prodname}</h2>
                  {p.subtitle && <p className="text-[11px] text-gray-500 font-semibold mt-0.5">{p.subtitle}</p>}
                </div>
                <span className="text-[14px] font-black italic tracking-tighter text-red-700 flex-shrink-0">OSWAL</span>
              </div>

              {/* BIG Product Image */}
              <div className="flex-1 flex items-center justify-center bg-gray-50 border border-gray-100 mb-6" style={{ minHeight: '420px' }}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.prodname}
                    className="object-contain mix-blend-multiply"
                    style={{ maxHeight: '400px', maxWidth: '100%', padding: '32px' }}
                  />
                ) : (
                  <div className="text-gray-300 text-sm font-bold uppercase tracking-widest">Image Coming Soon</div>
                )}
              </div>

              {/* Brief info row at the bottom */}
              <div className="flex items-start justify-between gap-8">
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{p.description}</p>

                {/* Cert badges */}
                <div className="flex flex-col gap-1.5 flex-shrink-0">
                  {certs.map((cert, ci) => (
                    <span key={ci} className="text-[9px] font-black border border-gray-700 text-gray-700 px-2 py-1 uppercase tracking-widest text-center">{cert}</span>
                  ))}
                </div>
              </div>

              {/* Page footer */}
              <div className="border-t border-gray-100 pt-3 mt-6 flex justify-between text-[9px] text-gray-400 font-medium">
                <span>OSWAL Industries · Davanagere, Karnataka · oswaloptical@yahoo.co.in · +91 9535354312</span>
                <span>Page {index + 2}</span>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
