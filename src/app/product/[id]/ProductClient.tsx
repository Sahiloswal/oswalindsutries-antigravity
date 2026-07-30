'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProductClient({ product }: { product: any }) {
  const [selectedShade, setSelectedShade] = useState(
    product.shades ? product.shades[0] : null
  );

  const datasheetUrl = product.hasShadeSelector && selectedShade
    ? `/product/welding-din-${selectedShade}/datasheet`
    : `/product/${product.id}/datasheet`;

  return (
    <div className="flex flex-col gap-6">
      {product.hasShadeSelector && (
        <div className="mb-2">
          <label className="block text-sm font-bold text-gray-700 mb-2">Select Shade:</label>
          <select 
            value={selectedShade} 
            onChange={(e) => setSelectedShade(e.target.value)}
            className="w-full max-w-[200px] border border-gray-300 p-2 text-sm focus:outline-none focus:border-[#7AC142]"
          >
            {product.shades?.map((shade: string) => (
              <option key={shade} value={shade}>DIN {shade}</option>
            ))}
          </select>
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-bold text-[15px] text-gray-800 mb-3">Data Sheet</h3>
        <Link href={datasheetUrl} target="_blank" className="inline-block text-[#7AC142] hover:opacity-80 transition-opacity">
          <div className="flex flex-col items-center w-12">
            <svg className="w-10 h-10 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.93c-2.95-.49-5.11-1.57-6.29-2.93.97-1.07 2.4-1.89 4.12-2.31L8.5 10c-.57-1.63-1.09-3.23-1.09-4.81 0-.96.22-1.67.62-2.02.39-.33.91-.42 1.41-.21.5.21.91.73 1.09 1.48.24.96.11 2.22-.38 3.59.83.69 1.83 1.43 2.94 2.19 1.34-.33 2.8-.52 4.3-.52h.38c.67.05 1.15.53 1.15 1.12 0 .58-.45 1.09-1.22 1.39-1.34.52-3.14.77-5.06.77-.38 0-.75-.02-1.11-.04l-.86 1.8c-.28.58-.6 1.18-.95 1.77 1.71.49 3.09 1.14 4.02 1.88.54.43.91.89 1.02 1.35.1.41-.03.74-.29.95-.25.19-.61.27-1.03.22-1.12-.13-2.32-.97-3.41-2.22zM9 11.23c.31.84.6 1.63.85 2.37-1.42.34-2.58 1.01-3.32 1.84 1.1-.98 2.38-1.52 4.16-1.92-1.12-.76-2.09-1.54-2.82-2.29h1.13zm1.18 5.48c.18-.32.35-.64.5-.95l.77-1.6c.92.05 1.82.02 2.65-.08-1.56 1.02-3.08 1.89-3.92 2.63zm3.76-7.85c-.17-.7-.34-.94-.52-.94-.15 0-.25.15-.25.43 0 1.25.37 2.47.78 3.65.65.26 1.35.48 2.05.65-.18-1.09-.76-2.52-2.06-3.79z" />
            </svg>
            <span className="text-[10px] font-bold bg-[#7AC142] text-white px-2 py-0.5 rounded-sm w-full text-center tracking-wider">PDF</span>
          </div>
        </Link>
      </div>

      <div>
        <a
          href={`mailto:oswaloptical@yahoo.co.in?subject=Quote Request: ${encodeURIComponent(product.prodname)}`}
          className="inline-block bg-[#7AC142] text-white font-bold px-10 py-3 uppercase text-[13px] hover:bg-gray-800 transition-colors tracking-widest"
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
}
