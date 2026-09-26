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
        <div className="flex flex-wrap -mx-4">
          {catalogProducts.map((p, index) => {
            const serialNumber = String(index + 1).padStart(2, '0');
            const certs = p.datasheet?.certifications ?? ['CLI Approved'];

            return (
              <div key={p.id} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 mb-10">
                <div className="catalog-card flex flex-col group relative bg-white h-full border border-transparent hover:border-gray-200 p-3 transition-colors">
                  
                  {/* Image Area */}
                  <div className="relative flex items-center justify-center overflow-hidden mb-4 bg-[#f8f9fa] rounded" style={{ height: '220px' }}>
                    {/* Subtle Serial Number */}
                    <div className="absolute top-2 left-3 text-gray-300 text-2xl font-black opacity-40 select-none z-10">
                      {serialNumber}
                    </div>
                    
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.prodname}
                        className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-110"
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
                      <p className="text-[11px] text-gray-500 font-medium leading-snug mb-3">{p.subtitle}</p>
                    )}
                    
                    <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                      {certs.slice(0, 2).map((cert, ci) => (
                        <span key={ci} className="text-[9px] font-bold text-gray-600 border border-gray-200 bg-gray-50 px-1.5 py-0.5 uppercase tracking-wider">
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
        <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-400 font-medium">
          <span>OSWAL Industries — Davanagere, Karnataka, India</span>
          <span>oswaloptical@yahoo.co.in — +91 9535354312</span>
        </div>
      </div>

      {/* PDF View (Hidden Tabular Format) */}
      <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
        <div id="pdf-catalog" style={{ width: '1000px', backgroundColor: 'white', padding: '40px', fontFamily: 'sans-serif' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '30px', borderBottom: '2px solid #333', paddingBottom: '20px' }}>
            <h1 style={{ fontSize: '42px', fontWeight: '900', margin: '0', color: '#111', textTransform: 'uppercase' }}>OSWAL INDUSTRIES</h1>
            <p style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '4px', color: '#7AC142', textTransform: 'uppercase', marginTop: '8px' }}>Product Catalog</p>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9f9f9', borderBottom: '2px solid #ccc' }}>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', borderRight: '1px solid #ddd' }}>#</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', borderRight: '1px solid #ddd', width: '120px' }}>Image</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', borderRight: '1px solid #ddd' }}>Product</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px' }}>Certifications</th>
              </tr>
            </thead>
            <tbody>
              {catalogProducts.map((p, index) => {
                const serialNumber = String(index + 1).padStart(2, '0');
                const certs = p.datasheet?.certifications ?? ['CLI Approved'];
                
                return (
                  <tr key={p.id} style={{ borderBottom: '1px solid #eee', pageBreakInside: 'avoid' }}>
                    <td style={{ padding: '15px', textAlign: 'center', fontSize: '14px', fontWeight: 'bold', color: '#999', borderRight: '1px solid #eee' }}>
                      {serialNumber}
                    </td>
                    <td style={{ padding: '15px', textAlign: 'center', borderRight: '1px solid #eee' }}>
                      {p.image ? (
                        <div style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                          <img src={p.image} alt={p.prodname} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        </div>
                      ) : (
                        <span style={{ fontSize: '10px', color: '#ccc' }}>No Image</span>
                      )}
                    </td>
                    <td style={{ padding: '15px', verticalAlign: 'top', borderRight: '1px solid #eee' }}>
                      <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#7AC142', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>{p.category}</div>
                      <div style={{ fontSize: '16px', fontWeight: '900', color: '#111', textTransform: 'uppercase', marginBottom: '6px' }}>{p.prodname}</div>
                      {p.subtitle && <div style={{ fontSize: '12px', color: '#666' }}>{p.subtitle}</div>}
                    </td>
                    <td style={{ padding: '15px', verticalAlign: 'top' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {certs.map((cert, ci) => (
                          <span key={ci} style={{ fontSize: '10px', fontWeight: 'bold', color: '#555', backgroundColor: '#f5f5f5', border: '1px solid #ddd', padding: '4px 8px', display: 'inline-block', textAlign: 'center', textTransform: 'uppercase' }}>
                            {cert}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div style={{ marginTop: '40px', borderTop: '1px solid #ddd', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#888' }}>
            <span>OSWAL Industries — Davanagere, Karnataka, India</span>
            <span>oswaloptical@yahoo.co.in — +91 9535354312</span>
          </div>

        </div>
      </div>
    </div>
  );
}
