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
          <p className="text-[11px] text-gray-500">{catalogProducts.length} products — Tabular View</p>
        </div>
        <PrintButton 
          elementId="catalog-container" 
          filename="OSWAL_Master_Catalog.pdf" 
          label="Download PDF" 
          className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg shadow-sm print:hidden transition-colors flex items-center gap-2 font-bold text-[11px] uppercase tracking-wide"
        />
      </div>

      <div id="catalog-container" className="mx-auto max-w-[1200px] px-4 py-8 bg-white print:px-0 print:py-0 print:max-w-none">
        
        {/* Cover Header */}
        <div className="text-center mb-8 border-b-2 border-gray-800 pb-6">
          <h1 className="text-[40px] font-black tracking-tighter text-gray-900 leading-none">OSWAL INDUSTRIES</h1>
          <p className="text-sm font-bold tracking-[0.3em] text-[#7AC142] uppercase mt-2 mb-2">Industrial Safety Eyewear Master Catalog</p>
          <div className="text-[11px] text-gray-600 font-medium">CLI Approved • IS 5983 / 1980 • Since 1983</div>
        </div>

        {/* Tabular Grid */}
        <div className="w-full">
          <table className="w-full border-collapse border border-gray-300 text-sm" style={{ tableLayout: 'fixed' }}>
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="border border-gray-300 p-3 text-center font-bold w-[100px] uppercase text-[11px] tracking-wider">Image</th>
                <th className="border border-gray-300 p-3 text-left font-bold w-[25%] uppercase text-[11px] tracking-wider">Product Info</th>
                <th className="border border-gray-300 p-3 text-left font-bold uppercase text-[11px] tracking-wider">Technical Specifications</th>
                <th className="border border-gray-300 p-3 text-center font-bold w-[120px] uppercase text-[11px] tracking-wider">Certifications</th>
              </tr>
            </thead>
            <tbody>
              {catalogProducts.map((p, index) => {
                const serialNumber = String(index + 1).padStart(2, '0');
                const certs = p.datasheet?.certifications ?? ['CLI Approved'];
                
                return (
                  <tr key={p.id} className="bg-white" style={{ pageBreakInside: 'avoid' }}>
                    <td className="border border-gray-300 p-4 align-top text-center">
                      <div className="w-[70px] h-[70px] mx-auto flex items-center justify-center mb-2">
                        {p.image ? (
                          <img src={p.image} alt={p.prodname} className="max-w-full max-h-full object-contain" />
                        ) : (
                          <span className="text-[9px] text-gray-300 uppercase">No Img</span>
                        )}
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono font-bold">#{serialNumber}</div>
                    </td>
                    
                    <td className="border border-gray-300 p-4 align-top">
                      <div className="text-[10px] font-bold text-[#7AC142] tracking-widest uppercase mb-1">{p.category}</div>
                      <div className="font-black text-gray-900 uppercase text-sm mb-1">{p.prodname}</div>
                      {p.subtitle && <div className="text-[11px] text-gray-600 font-medium mb-3">{p.subtitle}</div>}
                      <div className="no-print mt-2">
                        <AddToCartButton id={p.id} prodname={p.prodname} />
                      </div>
                    </td>
                    
                    <td className="border border-gray-300 p-4 align-top">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 border-b border-gray-100 pb-1">Features</div>
                          <ul className="list-disc pl-4 text-[11px] text-gray-700 space-y-1">
                            {(p.datasheet?.keyFeatures || []).slice(0, 4).map((f: string, i: number) => (
                              <li key={i} className="leading-snug">{f}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-[11px] text-gray-700">
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 border-b border-gray-100 pb-1">Details</div>
                          <table className="w-full text-[10px]">
                            <tbody>
                              {p.datasheet?.frameMaterial && (
                                <tr><td className="py-0.5 font-bold text-gray-500 w-1/3">Frame:</td><td className="py-0.5">{p.datasheet.frameMaterial}</td></tr>
                              )}
                              {p.datasheet?.glassThickness && (
                                <tr><td className="py-0.5 font-bold text-gray-500">Thickness:</td><td className="py-0.5">{p.datasheet.glassThickness}</td></tr>
                              )}
                              {p.datasheet?.weight && (
                                <tr><td className="py-0.5 font-bold text-gray-500">Weight:</td><td className="py-0.5">{p.datasheet.weight}</td></tr>
                              )}
                              {p.datasheet?.filter && (
                                <tr><td className="py-0.5 font-bold text-gray-500">Filter:</td><td className="py-0.5">{p.datasheet.filter}</td></tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                    
                    <td className="border border-gray-300 p-4 align-top">
                      <div className="flex flex-col gap-2">
                        {certs.slice(0, 3).map((cert, ci) => (
                          <div key={ci} className="text-[9px] font-bold text-gray-600 border border-gray-200 bg-gray-50 px-2 py-1 uppercase tracking-wider text-center w-full">
                            {cert}
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-gray-800 flex justify-between items-center text-[10px] text-gray-500 font-medium">
          <span>OSWAL Industries — Davanagere, Karnataka, India</span>
          <span>oswaloptical@yahoo.co.in — +91 9535354312</span>
        </div>

      </div>
    </div>
  );
}
