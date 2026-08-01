import productsData from '../../products.json';
import PrintButton from '../../components/PrintButton';
import './print.css';

export default function CatalogPage() {
  // Filter out subproducts to keep the catalog clean
  const catalogProducts = productsData.filter(p => !p.isSubProduct);

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* ─── Toolbar (Hidden during print) ─── */}
      <div className="no-print w-full bg-gray-100 border-b border-gray-200 py-4 px-6 sticky top-[70px] md:top-[90px] z-30 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-lg font-black uppercase text-gray-800 tracking-tight">OSWAL Master Catalog</h1>
          <p className="text-xs text-gray-500 font-medium">Ready to print or save as PDF (A4 Format)</p>
        </div>
        <PrintButton />
      </div>

      <div className="mx-auto max-w-[850px] p-10 print:p-0 print:m-0 print:max-w-none">
        
        {/* ─── Cover Page ─── */}
        <div className="page-break flex flex-col justify-between min-h-[90vh] print:min-h-screen py-16 border-b-2 border-gray-200">
          <div className="text-center mt-20">
            <h1 className="text-[54px] font-black tracking-tighter text-gray-900 leading-none">OSWAL</h1>
            <p className="text-xl font-bold tracking-[0.4em] text-[#7AC142] uppercase mt-2">INDUSTRIES</p>
            <div className="w-24 h-1 bg-gray-900 mx-auto my-8"></div>
            <h2 className="text-2xl font-black uppercase tracking-widest text-gray-800">Master Product Catalog</h2>
            <p className="text-gray-500 text-sm tracking-wider uppercase mt-2">Industrial safety eyewear &amp; protection systems</p>
          </div>

          <div className="text-center bg-gray-50 p-8 border border-gray-100">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7AC142] mb-3">Certified &amp; Approved</p>
            <p className="text-sm font-bold text-gray-800">CLI Approved · IS 5983 / 1980 Certified</p>
            <p className="text-xs text-gray-500 mt-2">Trusted by India's leading steel, manufacturing, &amp; power sectors since 1983</p>
          </div>

          <div className="text-center text-xs text-gray-400 font-medium">
            <p>© {new Date().getFullYear()} OSWAL Industries, Davanagere. All rights reserved.</p>
            <p className="mt-1">Contact: oswaloptical@yahoo.co.in | +91 9535354312</p>
          </div>
        </div>

        {/* ─── Product Pages ─── */}
        {catalogProducts.map((product, index) => {
          const isLast = index === catalogProducts.length - 1;
          return (
            <div key={product.id} className={`${!isLast ? 'page-break' : ''} py-10 print:py-0 print:min-h-screen flex flex-col justify-between`}>
              
              {/* Product Header */}
              <div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-4 mb-6">
                  <div>
                    <span className="text-[9px] font-black tracking-widest text-[#7AC142] uppercase">{product.category}</span>
                    <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mt-1 leading-tight">{product.prodname}</h2>
                    <p className="text-xs text-gray-500 font-semibold uppercase mt-0.5">{product.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[18px] font-black italic tracking-tighter text-red-700">OSWAL</span>
                    <p className="text-[7px] font-bold tracking-[0.2em] text-gray-500 uppercase mt-0.5">SINCE 1983</p>
                  </div>
                </div>

                {/* Main Content Split */}
                <div className="flex gap-8 mb-6">
                  
                  {/* Left: Product Image */}
                  <div className="w-[50%] aspect-square flex items-center justify-center border border-gray-100 p-4 bg-gray-50/50">
                    {product.image ? (
                      <img src={product.image} alt={product.prodname} className="max-h-[220px] object-contain mix-blend-multiply" />
                    ) : (
                      <div className="text-gray-300 text-xs font-semibold uppercase tracking-wider">Image Coming Soon</div>
                    )}
                  </div>

                  {/* Right: Applications & Specifications */}
                  <div className="w-[50%] flex flex-col gap-4 text-xs">
                    {/* Industries */}
                    {product.datasheet?.industries && (
                      <table className="w-full border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100"><th className="text-left font-bold py-1.5 px-3 border-b border-gray-300 text-gray-700">RECOMMENDED INDUSTRIES</th></tr>
                        </thead>
                        <tbody>
                          {product.datasheet.industries.slice(0, 4).map((ind, idx) => (
                            <tr key={idx}><td className="py-1 px-3 border-b border-gray-300 text-gray-600">{ind}</td></tr>
                          ))}
                        </tbody>
                      </table>
                    )}

                    {/* Applications */}
                    {product.datasheet?.applications && (
                      <table className="w-full border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100"><th className="text-left font-bold py-1.5 px-3 border-b border-gray-300 text-gray-700">IDEAL APPLICATIONS</th></tr>
                        </thead>
                        <tbody>
                          {product.datasheet.applications.slice(0, 4).map((app, idx) => (
                            <tr key={idx}><td className="py-1 px-3 border-b border-gray-300 text-gray-600">{app}</td></tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>

                {/* Description & Key Features */}
                <div className="mb-6">
                  <h3 className="text-[10px] font-black tracking-wider text-gray-400 uppercase mb-2">Description</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{product.description}</p>
                  
                  {product.datasheet?.keyFeatures && (
                    <>
                      <h3 className="text-[10px] font-black tracking-wider text-gray-400 uppercase mb-2">Key Features</h3>
                      <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-gray-600 list-disc pl-4">
                        {product.datasheet.keyFeatures.slice(0, 6).map((feat, idx) => (
                          <li key={idx}>{feat}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Tech Specs Table */}
                <table className="w-full border border-gray-300 text-xs mt-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th colSpan={4} className="text-left font-bold py-1.5 px-3 border-b border-gray-300 text-gray-700">TECHNICAL SPECIFICATIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-1.5 px-3 font-bold bg-gray-50 text-gray-700 w-[20%]">FRAME MATERIAL</td>
                      <td className="py-1.5 px-3 text-gray-600 w-[30%]">{product.datasheet?.frameMaterial || 'Cellulose Acetate'}</td>
                      <td className="py-1.5 px-3 font-bold bg-gray-50 text-gray-700 w-[20%]">LENS OPTIONS</td>
                      <td className="py-1.5 px-3 text-gray-600 w-[30%]">{product.datasheet?.lensOptions || 'Toughened Glass'}</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-1.5 px-3 font-bold bg-gray-50 text-gray-700">THICKNESS</td>
                      <td className="py-1.5 px-3 text-gray-600">{product.datasheet?.glassThickness || '3 mm'}</td>
                      <td className="py-1.5 px-3 font-bold bg-gray-50 text-gray-700">WEIGHT</td>
                      <td className="py-1.5 px-3 text-gray-600">{product.datasheet?.weight || 'Approx. 35 g'}</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-1.5 px-3 font-bold bg-gray-50 text-gray-700">OPTICAL CLASS</td>
                      <td className="py-1.5 px-3 text-gray-600">{product.datasheet?.opticalClass || 'Class 1'}</td>
                      <td className="py-1.5 px-3 font-bold bg-gray-50 text-gray-700">CERTIFICATIONS</td>
                      <td className="py-1.5 px-3 text-[#7AC142] font-semibold">{product.datasheet?.certifications?.join(' · ') || 'CLI Approved · IS 5983 / 1980'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Page Footer */}
              <div className="border-t border-gray-100 pt-4 mt-8 flex justify-between items-center text-[10px] text-gray-400 font-medium">
                <span>OSWAL Industries, Davanagere · Product Catalog 2026</span>
                <span>Page {index + 2} of {catalogProducts.length + 1}</span>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}
