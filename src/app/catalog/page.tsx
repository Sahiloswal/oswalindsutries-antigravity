import productsData from '../../products.json';
import PrintButton from '../../components/PrintButton';
import AddToCartButton from '../../components/AddToCartButton';
import './print.css';

export default function CatalogPage() {
  const catalogProducts = productsData.filter(p => !p.isSubProduct);

  return (
    <div className="bg-white text-black min-h-screen font-sans">

      {/* Toolbar */}
      <div className="no-print w-full bg-gray-100 border-b border-gray-200 py-3 px-6 sticky top-[70px] md:top-[90px] z-30 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-base font-black uppercase text-gray-800 tracking-tight">OSWAL Master Catalog</h1>
          <p className="text-[11px] text-gray-500">{catalogProducts.length} products — Print or save as PDF</p>
        </div>
        <PrintButton 
          elementId="catalog-container" 
          filename="OSWAL_Master_Catalog.pdf" 
          label="Download PDF" 
          className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg shadow-sm print:hidden transition-colors flex items-center gap-2 font-bold text-[11px] uppercase tracking-wide"
        />
      </div>

      <div id="catalog-container" className="mx-auto max-w-[1100px] px-6 py-10 print:px-[1cm] print:py-[1cm] print:max-w-none bg-white">

        {/* ── Cover Header ── */}
        <div className="catalog-header text-center mb-10 pb-8 border-b-2 border-gray-200">
          <p className="text-[11px] font-bold tracking-[0.35em] text-[#7AC142] uppercase mb-2">Industrial Safety Eyewear Since 1983</p>
          <h1 className="text-[56px] font-black tracking-tighter text-gray-900 leading-none">OSWAL</h1>
          <p className="text-sm font-bold tracking-[0.5em] text-gray-400 uppercase mt-1 mb-4">INDUSTRIES</p>
          <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Complete range of CLI Approved &amp; IS 5983 / 1980 certified safety eyewear for industrial, construction, and manufacturing sectors.
          </p>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#7AC142]/10 text-[#7AC142] px-3 py-1.5 border border-[#7AC142]/30">✓ CLI Approved</span>
            <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-600 px-3 py-1.5 border border-gray-200">✓ IS 5983 / 1980</span>
            <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-600 px-3 py-1.5 border border-gray-200">✓ Since 1983</span>
            <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-600 px-3 py-1.5 border border-gray-200">oswaloptical@yahoo.co.in · +91 9535354312</span>
          </div>
        </div>

        {/* ── Product Grid ── */}
        <div id="catalog-content" className="catalog-grid grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 print:grid-cols-4 print:gap-x-6 print:gap-y-10">
          {catalogProducts.map((p, index) => {
            const serialNumber = String(index + 1).padStart(2, '0');
            const certs = p.datasheet?.certifications ?? ['CLI Approved'];

            return (
              <div
                key={p.id}
                className="catalog-card flex flex-col group relative bg-white"
              >
                {/* Image Area - Clean White Background */}
                <div className="relative flex items-center justify-center overflow-hidden mb-4" style={{ height: '220px' }}>
                  {/* Subtle Serial Number */}
                  <div className="absolute top-0 left-0 text-gray-300 text-3xl font-black opacity-40 select-none z-10 transition-opacity group-hover:opacity-100 group-hover:text-[#7AC142]">
                    {serialNumber}
                  </div>
                  
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.prodname}
                      className="object-contain w-full h-full p-2 transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="text-gray-300 text-[10px] font-bold uppercase tracking-widest text-center px-4">Image Coming Soon</div>
                  )}
                </div>

                {/* Typography & Info */}
                <div className="flex flex-col flex-1">
                  <p className="text-[10px] font-black tracking-[0.2em] text-[#7AC142] uppercase mb-1.5">{p.category}</p>
                  <h2 className="text-[14px] font-black uppercase tracking-tight text-gray-900 leading-snug mb-1.5">{p.prodname}</h2>
                  {p.subtitle && (
                    <p className="text-[11px] text-gray-500 font-medium leading-snug mb-3">{p.subtitle}</p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {certs.slice(0, 2).map((cert, ci) => (
                      <span key={ci} className="text-[9px] font-bold text-gray-600 border-b border-gray-300 pb-0.5 uppercase tracking-wider">
                        {cert}
                      </span>
                    ))}
                  </div>

                  <div className="no-print mt-auto border-t border-gray-100 pt-3">
                    <AddToCartButton id={p.id} prodname={p.prodname} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Footer ── */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-400 font-medium">
          <span>OSWAL Industries — Davanagere, Karnataka, India</span>
          <span>oswaloptical@yahoo.co.in — +91 9535354312</span>
        </div>

      </div>
    </div>
  );
}
