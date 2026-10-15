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
          elementId="pdf-catalog" 
          filename="OSWAL_Master_Catalog.pdf" 
          label="Download PDF" 
          className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg shadow-sm print:hidden transition-colors flex items-center gap-2 font-bold text-[11px] uppercase tracking-wide"
        />
      </div>

      {/* Screen View (Card Grid) */}
      <div id="catalog-screen-container" className="mx-auto max-w-[1100px] px-6 py-10 bg-white">
        
        {/* ── Cover Header ── */}
        <div className="catalog-header text-center mb-10 pb-8 border-b-2 border-gray-200">
          <p className="text-[11px] font-bold tracking-[0.35em] text-[#7AC142] uppercase mb-2">Industrial Safety Eyewear Since 1983</p>
          <h1 className="text-[52px] font-black tracking-tighter text-gray-900 leading-none">OSWAL</h1>
          <p className="text-sm font-bold tracking-[0.5em] text-gray-400 uppercase mt-1 mb-4">INDUSTRIES</p>
          <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Complete range of CLI Approved &amp; IS 5983 / 1980 certified safety eyewear for industrial, construction, and manufacturing sectors.
          </p>
          <div className="flex justify-center gap-3 mt-5 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#7AC142]/10 text-[#7AC142] px-3 py-1.5 border border-[#7AC142]/30">✓ CLI Approved</span>
            <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-700 px-3 py-1.5 border border-gray-200">✓ IS 5983 / 1980</span>
            <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-700 px-3 py-1.5 border border-gray-200">✓ Since 1983</span>
            <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-700 px-3 py-1.5 border border-gray-200">oswaloptical@yahoo.co.in · +91 9535354312</span>
          </div>
        </div>

        {/* ── Product Grid (Screen) ── */}
        <div className="flex flex-wrap -mx-4">
          {catalogProducts.map((p, index) => {
            const serialNumber = String(index + 1).padStart(2, '0');
            const certs = p.datasheet?.certifications ?? ['CLI Approved'];

            return (
              <div key={p.id} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 mb-10">
                <div className="catalog-card flex flex-col group relative bg-white h-full border border-gray-100 hover:border-gray-300 p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                  
                  {/* Image Area */}
                  <div className="relative flex items-center justify-center overflow-hidden mb-4 bg-[#f8f9fa] rounded-lg" style={{ height: '220px' }}>
                    {/* Subtle Serial Number */}
                    <div className="absolute top-2 left-3 text-gray-300 text-2xl font-black opacity-50 select-none z-10">
                      {serialNumber}
                    </div>
                    
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.prodname}
                        className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-105"
                        style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }}
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
                      <p className="text-[11px] text-gray-500 font-medium leading-snug mb-3 line-clamp-2">{p.subtitle}</p>
                    )}
                    
                    <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                      {certs.slice(0, 2).map((cert, ci) => (
                        <span key={ci} className="text-[9px] font-bold text-gray-600 border border-gray-200 bg-gray-50 px-2 py-0.5 rounded uppercase tracking-wider">
                          {cert}
                        </span>
                      ))}
                    </div>

                    <div className="no-print mt-auto border-t border-gray-100 pt-3">
                      <AddToCartButton id={p.id} prodname={p.prodname} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Footer ── */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500 font-medium gap-2">
          <span>OSWAL Industries — Davanagere, Karnataka, India</span>
          <span>oswaloptical@yahoo.co.in — +91 9535354312</span>
        </div>
      </div>

      {/* PDF View (Identical Visual Design Language Adapted for A4 Printability) */}
      <div style={{ position: 'absolute', top: '-99999px', left: '-99999px' }}>
        <div id="pdf-catalog" style={{ width: '920px', backgroundColor: '#ffffff', color: '#111827', padding: '36px 40px', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
          
          {/* Header matching online catalogue identity */}
          <div style={{ textAlign: 'center', marginBottom: '28px', borderBottom: '2px solid #e5e7eb', paddingBottom: '22px' }}>
            <div style={{ height: '4px', backgroundColor: '#7AC142', width: '100%', marginBottom: '16px' }}></div>
            <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '3px', color: '#7AC142', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Industrial Safety Eyewear Since 1983</p>
            <h1 style={{ fontSize: '46px', fontWeight: '900', letterSpacing: '-1.5px', color: '#111827', margin: '0', lineHeight: '1' }}>OSWAL</h1>
            <p style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '6px', color: '#9ca3af', textTransform: 'uppercase', margin: '4px 0 10px 0' }}>INDUSTRIES</p>
            <p style={{ fontSize: '12px', color: '#6b7280', maxWidth: '600px', margin: '0 auto 14px auto', lineHeight: '1.5' }}>
              Complete range of CLI Approved &amp; IS 5983 / 1980 certified safety eyewear for industrial, construction, and manufacturing sectors.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '9px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', backgroundColor: '#f0f9e8', color: '#7AC142', padding: '4px 10px', border: '1px solid rgba(122,193,66,0.3)', borderRadius: '3px' }}>✓ CLI Approved</span>
              <span style={{ fontSize: '9px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', backgroundColor: '#f3f4f6', color: '#374151', padding: '4px 10px', border: '1px solid #e5e7eb', borderRadius: '3px' }}>✓ IS 5983 / 1980</span>
              <span style={{ fontSize: '9px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', backgroundColor: '#f3f4f6', color: '#374151', padding: '4px 10px', border: '1px solid #e5e7eb', borderRadius: '3px' }}>✓ Since 1983</span>
              <span style={{ fontSize: '9px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', backgroundColor: '#f3f4f6', color: '#374151', padding: '4px 10px', border: '1px solid #e5e7eb', borderRadius: '3px' }}>oswaloptical@yahoo.co.in · +91 9535354312</span>
            </div>
          </div>

          {/* Product Grid matching 3-column printable card layout with same styling, borders and colors */}
          <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -10px' }}>
            {catalogProducts.map((p, index) => {
              const serialNumber = String(index + 1).padStart(2, '0');
              const certs = p.datasheet?.certifications ?? ['CLI Approved'];

              return (
                <div key={p.id} style={{ width: '33.333%', padding: '0 10px', marginBottom: '20px', boxSizing: 'border-box', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                  <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '14px', backgroundColor: '#ffffff', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                    
                    {/* Image Area */}
                    <div style={{ width: '100%', height: '180px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', overflow: 'hidden' }}>
                      <span style={{ position: 'absolute', top: '8px', left: '10px', fontSize: '20px', fontWeight: '900', color: '#d1d5db', lineHeight: '1' }}>
                        {serialNumber}
                      </span>
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.prodname}
                          style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }}
                        />
                      ) : (
                        <span style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '1px', color: '#d1d5db', textTransform: 'uppercase' }}>Image Coming Soon</span>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <p style={{ fontSize: '9px', fontWeight: '900', letterSpacing: '1.5px', color: '#7AC142', textTransform: 'uppercase', margin: '0 0 4px 0' }}>{p.category}</p>
                      <h2 style={{ fontSize: '13px', fontWeight: '900', textTransform: 'uppercase', color: '#111827', margin: '0 0 4px 0', lineHeight: '1.25' }}>{p.prodname}</h2>
                      {p.subtitle && (
                        <p style={{ fontSize: '10px', color: '#6b7280', margin: '0 0 8px 0', lineHeight: '1.3' }}>{p.subtitle}</p>
                      )}
                      
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: 'auto', paddingTop: '6px' }}>
                        {certs.slice(0, 2).map((cert, ci) => (
                          <span key={ci} style={{ fontSize: '8px', fontWeight: '800', color: '#4b5563', border: '1px solid #e5e7eb', backgroundColor: '#f9fafb', padding: '2px 6px', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer matching web */}
          <div style={{ marginTop: '24px', borderTop: '1px solid #e5e7eb', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#6b7280', fontWeight: '500' }}>
            <span>OSWAL Industries — Davanagere, Karnataka, India</span>
            <span>oswaloptical@yahoo.co.in — +91 9535354312</span>
          </div>

        </div>
      </div>
    </div>
  );
}
