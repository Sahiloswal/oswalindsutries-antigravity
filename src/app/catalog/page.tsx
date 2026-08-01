import productsData from '../../products.json';
import PrintButton from '../../components/PrintButton';
import './print.css';

export default function CatalogPage() {
  const catalogProducts = productsData.filter(p => !p.isSubProduct);

  // Group by category
  const categories = Array.from(new Set(catalogProducts.map(p => p.category)));

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* Toolbar (hidden during print) */}
      <div className="no-print w-full bg-gray-100 border-b border-gray-200 py-3 px-6 sticky top-[70px] md:top-[90px] z-30 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-base font-black uppercase text-gray-800 tracking-tight">OSWAL Master Catalog</h1>
          <p className="text-[11px] text-gray-500">Print or save as PDF — A4 format</p>
        </div>
        <PrintButton />
      </div>

      <div className="mx-auto max-w-[850px] p-10 print:p-[1.5cm] print:max-w-none">

        {/* ─── Cover ─── */}
        <div className="page-break flex flex-col items-center justify-center text-center min-h-[80vh] print:min-h-screen">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#7AC142] uppercase mb-4">Industrial Safety Eyewear Since 1983</p>
          <h1 className="text-[64px] font-black tracking-tighter text-gray-900 leading-none">OSWAL</h1>
          <p className="text-base font-bold tracking-[0.5em] text-gray-500 uppercase mt-3 mb-8">INDUSTRIES</p>
          <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-8"></div>
          <h2 className="text-2xl font-black uppercase tracking-widest text-gray-800 mb-3">Product Catalog 2026</h2>
          <p className="text-sm text-gray-500 max-w-md leading-relaxed">
            Complete range of CLI Approved &amp; IS 5983 / 1980 certified safety eyewear for industrial, construction, and manufacturing sectors.
          </p>

          <div className="mt-16 grid grid-cols-3 gap-6 text-center w-full max-w-sm mx-auto">
            <div className="border border-gray-100 p-4">
              <p className="text-2xl font-black text-gray-900">{catalogProducts.length}+</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-1">Products</p>
            </div>
            <div className="border border-gray-100 p-4">
              <p className="text-2xl font-black text-gray-900">{categories.length}</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-1">Categories</p>
            </div>
            <div className="border border-gray-100 p-4">
              <p className="text-2xl font-black text-gray-900">40+</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-1">Years</p>
            </div>
          </div>

          <div className="mt-12 text-[11px] text-gray-400">
            <p className="font-semibold">oswaloptical@yahoo.co.in &nbsp;·&nbsp; +91 9535354312</p>
            <p>Davanagere, Karnataka, India</p>
          </div>
        </div>

        {/* ─── One page per category ─── */}
        {categories.map((cat, catIdx) => {
          const products = catalogProducts.filter(p => p.category === cat);
          const isLastCat = catIdx === categories.length - 1;
          return (
            <div key={cat} className={`${!isLastCat ? 'page-break' : ''} py-10 print:py-0 print:min-h-screen flex flex-col`}>
              
              {/* Category Header */}
              <div className="border-b-2 border-gray-900 pb-3 mb-8 flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-black tracking-[0.3em] text-[#7AC142] uppercase mb-1">OSWAL Industries</p>
                  <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900">{cat}</h2>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{products.length} Products</span>
              </div>

              {/* Product Grid — 2 columns */}
              <div className="grid grid-cols-2 gap-6 flex-1">
                {products.map((p) => (
                  <div key={p.id} className="border border-gray-200 p-5 flex gap-4 items-start">
                    {/* Small image */}
                    <div className="w-[80px] h-[80px] flex-shrink-0 flex items-center justify-center bg-gray-50 border border-gray-100">
                      {p.image ? (
                        <img src={p.image} alt={p.prodname} className="w-full h-full object-contain mix-blend-multiply p-1" />
                      ) : (
                        <div className="text-gray-200 text-[9px] text-center font-bold uppercase">No Image</div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-black text-gray-900 leading-tight mb-1">{p.prodname}</h3>
                      {p.subtitle && (
                        <p className="text-[10px] font-semibold text-[#7AC142] mb-1">{p.subtitle}</p>
                      )}
                      <p className="text-[11px] text-gray-500 leading-snug line-clamp-3">{p.description}</p>
                      {/* Certifications */}
                      <div className="flex gap-1 mt-2 flex-wrap">
                        {(p.datasheet?.certifications ?? ['CLI Approved', 'IS 5983']).slice(0, 2).map((cert, ci) => (
                          <span key={ci} className="text-[8px] font-bold border border-gray-400 text-gray-600 px-1.5 py-0.5 uppercase tracking-wide">{cert}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Page footer */}
              <div className="border-t border-gray-100 pt-3 mt-8 flex justify-between text-[9px] text-gray-400 font-medium">
                <span>OSWAL Industries · Davanagere, Karnataka · oswaloptical@yahoo.co.in</span>
                <span>Page {catIdx + 2}</span>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
