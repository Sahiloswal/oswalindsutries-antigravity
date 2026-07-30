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

  return (
    <div className="bg-white text-black min-h-screen p-10 print:p-0 print:m-0 font-sans mx-auto max-w-[850px] shadow-2xl print:shadow-none my-8 print:my-0">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-[32px] font-black italic tracking-tighter leading-none text-red-700">OSWAL<span className="text-gray-800"></span><span className="text-red-600 ml-1 text-2xl tracking-normal align-top"></span></h1>
          <p className="text-[10px] font-bold tracking-[0.2em] text-gray-800 uppercase mt-1">L I F E  I S  P R E C I O U S</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[85px] h-[85px] bg-gray-100 flex items-center justify-center border border-gray-400 mb-2">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M12 4v16m8-8H4M5 5h14v14H5z" /></svg>
          </div>
          <span className="text-[11px] text-gray-800 font-semibold">Scan Here For More Info</span>
        </div>
      </div>

      {/* Top Section */}
      <div className="flex gap-6 mb-6">
        {/* Image */}
        <div className="w-[55%] flex items-center justify-center border border-gray-100 p-4 min-h-[300px] bg-gray-50/50">
          {(product as any).image ? (
            <img src={(product as any).image} alt={product.prodname} className="w-full h-auto object-contain max-h-[280px] mix-blend-multiply" />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-300 gap-2">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Product Image</span>
            </div>
          )}
        </div>
        
        {/* Right Tables */}
        <div className="w-[45%] flex flex-col gap-5">
          {/* INDUSTRY & APPLICATIONS Row */}
          <div className="flex gap-4">
            {/* INDUSTRY */}
            <table className="w-1/2 text-[12px] border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left font-bold py-1.5 px-3 border-b border-gray-300 text-gray-800">INDUSTRY</th>
                </tr>
              </thead>
              <tbody>
                {(product as any).datasheet?.industries ? (
                  (product as any).datasheet.industries.map((ind: string, idx: number) => (
                    <tr key={idx}><td className="py-1 px-3 border-b border-gray-300 text-gray-700">{ind}</td></tr>
                  ))
                ) : (
                  <tr><td className="py-1 px-3 border-b border-gray-300 text-gray-700"></td></tr>
                )}
              </tbody>
            </table>

            {/* IDEAL APPLICATIONS */}
            <table className="w-1/2 text-[12px] border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left font-bold py-1.5 px-3 border-b border-gray-300 text-gray-800">IDEAL APPLICATIONS</th>
                </tr>
              </thead>
              <tbody>
                {(product as any).datasheet?.applications ? (
                  (product as any).datasheet.applications.map((app: string, idx: number) => (
                    <tr key={idx}><td className="py-1 px-3 border-b border-gray-300 text-gray-700">{app}</td></tr>
                  ))
                ) : (
                  <tr><td className="py-1 px-3 border-b border-gray-300 text-gray-700"></td></tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* SPECIAL FEATURES */}
          <div>
            <div className="bg-gray-200 font-bold py-1.5 px-3 text-[12px] border border-gray-300 border-b-0 text-gray-800 tracking-wide">SPECIAL FEATURES</div>
            <div className="flex justify-between border border-gray-300 p-2 pt-3">
              {(product as any).datasheet?.highlights ? (
                (product as any).datasheet.highlights.slice(0, 5).map((hl: string, idx: number) => (
                  <div key={idx} className="flex flex-col items-center max-w-[50px]">
                    <div className="w-8 h-8 rounded-full bg-[#114b79] flex items-center justify-center text-white mb-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                    <span className="text-[7px] font-bold uppercase text-gray-600 text-center leading-tight">{hl.replace(' ', '\n')}</span>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center">
                  <span className="text-[7px] font-bold uppercase text-gray-600 text-center leading-tight"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Ribbon Title */}
      <div className="flex items-center mb-4">
        <div className="bg-[#7AC142] text-white py-1.5 px-6 min-w-[50%] relative flex items-center h-[34px]">
          <h2 className="font-bold text-[16px] z-10 relative whitespace-nowrap">{product.id} - {product.prodname}</h2>
          <div className="absolute right-[-14px] top-0 bottom-0 w-8 bg-[#7AC142] skew-x-[30deg]"></div>
        </div>
        <div className="ml-8 w-2 h-[34px] bg-red-600 skew-x-[30deg]"></div>
        <div className="ml-2 w-1.5 h-[34px] bg-gray-900 skew-x-[30deg]"></div>
      </div>

      <p className="font-bold text-[13px] mb-4 uppercase tracking-wide text-gray-900">
        STANDARD : {(product as any).datasheet?.certifications ? (product as any).datasheet.certifications.join(', ') : ''}
      </p>

      {/* COMPONENT TABLE */}
      <table className="w-full text-[12px] border border-gray-300 mb-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left font-bold py-1.5 px-3 border-r border-gray-300 w-1/4">COMPONENT</th>
            <th className="text-left font-bold py-1.5 px-3 border-r border-gray-300 w-1/4">MATERIAL</th>
            <th className="text-left font-bold py-1.5 px-3 w-1/2">ADVANTAGE</th>
          </tr>
        </thead>
        <tbody>
          {(product as any).datasheet?.components?.map((c: any, idx: number) => (
            <tr key={idx} className="border-t border-gray-300">
              <td className="py-1.5 px-3 border-r border-gray-300 font-semibold text-gray-700">{c.name}</td>
              <td className="py-1.5 px-3 border-r border-gray-300 text-gray-700">{c.material}</td>
              <td className="py-1.5 px-3 text-gray-700">{c.advantage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* LENS OPTIONS TABLE */}
      <table className="w-full text-[12px] border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left font-bold py-1.5 px-3 border-r border-gray-300 w-[30%]">LENS / GLASS OPTIONS</th>
            <th className="text-left font-bold py-1.5 px-3 border-r border-gray-300 w-[15%]">OPTICAL CLASS</th>
            <th className="text-left font-bold py-1.5 px-3 border-r border-gray-300 w-[20%]">IMPACT RESISTANCE</th>
            <th className="text-left font-bold py-1.5 px-3 border-r border-gray-300 w-[15%]">GLASS THICKNESS</th>
            <th className="text-left font-bold py-1.5 px-3 w-[20%]">WEIGHT</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="py-1.5 px-3 border-r border-gray-300 text-gray-700">{(product as any).datasheet?.lensOptions ?? ''}</td>
            <td className="py-1.5 px-3 border-r border-gray-300 text-gray-700">{(product as any).datasheet?.opticalClass ?? ''}</td>
            <td className="py-1.5 px-3 border-r border-gray-300 text-gray-700">{(product as any).datasheet?.impactResistance ?? ''}</td>
            <td className="py-1.5 px-3 border-r border-gray-300 text-gray-700">{(product as any).datasheet?.glassThickness ?? ''}</td>
            <td className="py-1.5 px-3 text-gray-700">{(product as any).datasheet?.weight ?? ''}</td>
          </tr>
          {(product as any).datasheet?.frameMaterial && (
            <tr className="border-t border-gray-300">
              <td className="py-1.5 px-3 border-r border-gray-300 text-gray-700 font-semibold" colSpan={1}>Frame Material</td>
              <td className="py-1.5 px-3 text-gray-700" colSpan={4}>{(product as any).datasheet.frameMaterial} — Chemical & sweat resistant, dimensionally stable</td>
            </tr>
          )}
          {(product as any).datasheet?.modifications && (
            <tr className="border-t border-gray-300">
              <td className="py-1.5 px-3 border-r border-gray-300 text-gray-700 font-semibold" colSpan={1}>Modification</td>
              <td className="py-1.5 px-3 text-gray-700" colSpan={4}>{(product as any).datasheet.modifications}</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* 2 Column Bottom */}
      <div className="flex gap-5 mb-10">
        <div className="w-1/2">
           <table className="w-full text-[12px] border border-gray-300 h-full">
             <thead>
               <tr className="bg-gray-200"><th className="text-left font-bold py-1.5 px-3">FEATURES</th></tr>
             </thead>
              <tbody>
                {(product as any).datasheet?.usage && (
                  <tr className="border-t border-gray-300"><td className="py-2.5 px-3 text-gray-700 italic text-[11px] bg-gray-50">{(product as any).datasheet.usage}</td></tr>
                )}
                {(product as any).datasheet?.keyFeatures ? (
                 (product as any).datasheet.keyFeatures.map((feat: string, idx: number) => (
                   <tr key={idx} className="border-t border-gray-300"><td className="py-2.5 px-3 text-gray-700">{feat}</td></tr>
                 ))
                ) : (
                 <tr className="border-t border-gray-300"><td className="py-2.5 px-3 text-gray-700">{product.description}</td></tr>
                )}
              </tbody>
           </table>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
           <table className="w-full text-[12px] border border-gray-300">
             <thead>
               <tr className="bg-gray-200"><th className="text-left font-bold py-1.5 px-3">APPLICATION</th></tr>
             </thead>
             <tbody>
               {(product as any).datasheet?.applications ? (
                 (product as any).datasheet.applications.map((app: string, idx: number) => (
                   <tr key={idx} className="border-t border-gray-300"><td className="py-2 px-3 text-gray-700">{app}</td></tr>
                 ))
               ) : (
                 <tr className="border-t border-gray-300"><td className="py-2 px-3 text-gray-700"></td></tr>
               )}
             </tbody>
           </table>
           
           <table className="w-full text-[12px] border border-gray-300">
             <thead>
               <tr className="bg-gray-200"><th className="text-left font-bold py-1.5 px-3">STORAGE</th></tr>
             </thead>
             <tbody>
               <tr className="border-t border-gray-300"><td className="py-1.5 px-3 text-gray-700">{(product as any).datasheet?.storage ?? ''}</td></tr>
             </tbody>
           </table>

           <div className="flex gap-5 h-full">
             <table className="w-[60%] text-[12px] border border-gray-300 h-full">
               <thead>
                 <tr className="bg-gray-200"><th className="text-left font-bold py-1.5 px-3">CLEANING</th></tr>
               </thead>
               <tbody>
                 <tr className="border-t border-gray-300"><td className="py-2 px-3 text-gray-700 align-top">{(product as any).datasheet?.cleaning ?? ''}</td></tr>
               </tbody>
             </table>
              <table className="w-[40%] text-[12px] border border-gray-300 h-full">
                <thead>
                  <tr className="bg-gray-200"><th className="text-left font-bold py-1.5 px-3">PACKING</th></tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300"><td className="py-2 px-3 text-gray-700 align-top">{(product as any).datasheet?.packaging ?? (product as any).datasheet?.packing ?? ''}</td></tr>
                </tbody>
              </table>
           </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 border-t-[6px] border-red-600 pt-3 flex justify-between items-end pb-4">
        <div>
          <h3 className="font-bold text-[16px] text-gray-900 mb-2">OSWAL</h3>
          <div className="text-[10px] text-gray-600 flex flex-col gap-1">
            {/* You can add address here if needed */}
          </div>
        </div>
        
        <div className="flex gap-16 text-[10px] text-gray-600">
          <div className="flex flex-col gap-1">
            <p>E-mail : oswaloptical@yahoo.co.in</p>
            <p>Website : www.oswalindustries.com</p>
          </div>
          <div className="flex flex-col gap-1">
            <p>Tel. : +91 9535354312</p>
          </div>
        </div>
      </div>

      {/* Print Trigger (Hidden in print) */}
      <PrintButton />
    </div>
  );
}
