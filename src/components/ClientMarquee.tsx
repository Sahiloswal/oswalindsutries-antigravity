'use client';
import { useState } from 'react';

export default function ClientMarquee() {
  const trustedBrands = [
    { name: "BEML", file: "beml.png" },
    { name: "BHEL", file: "bhel.png" },
    { name: "SAIL", file: "sail.png" },
    { name: "VIZAG STEEL", file: "vizag steel.png" },
    { name: "SMIORE", file: "smiore.png" },
    { name: "CIE", file: "cie.png" },
    { name: "HERO", file: "hero.png" },
    { name: "INDIAN RAILWAYS", file: "indian railways.png" },
    { name: "KIRLOSKAR", file: "kirloskar.png" },
    { name: "AMAZON", file: "amazon.png" },
    { name: "TATA STEEL", file: "tata steel.png" },
    { name: "GODREJ", file: "godrej.webp" },
    { name: "JINDAL STEEL", file: "jindal steel.webp" },
    { name: "JSW STEEL", file: "jsw steel.png" },
    { name: "HAL", file: "hal.png" },
    { name: "RHI MAGNESITA", file: "rhi magnesita.png" },
  ];

  return (
    <div className="w-full bg-white border-t border-b border-gray-200 print:hidden">
      {/* Header label */}
      <div className="w-full px-8 xl:px-16 pt-5 pb-3 flex items-center gap-6">
        <span className="text-xs font-black uppercase tracking-[0.25em] text-gray-400 whitespace-nowrap flex-shrink-0">Trusted By</span>
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs font-bold uppercase tracking-widest text-[#7AC142] whitespace-nowrap flex-shrink-0">100+ Leading Industries</span>
      </div>

      {/* Scrolling strip */}
      <div className="overflow-hidden pb-5">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {trustedBrands.map((brand, i) => (
            <BrandLogo key={i} brand={brand} />
          ))}
          {trustedBrands.map((brand, i) => (
            <BrandLogo key={`dup-${i}`} brand={brand} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}

function BrandLogo({ brand }: { brand: { name: string; file: string } }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="mx-6 flex-shrink-0 flex items-center justify-center bg-white border border-gray-100 rounded-lg shadow-sm"
         style={{ width: '160px', height: '80px', padding: '10px' }}>
      {!imgError ? (
        <img
          src={`/brands/${brand.file}`}
          alt={brand.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-sm font-black tracking-widest text-gray-700 uppercase text-center leading-tight">
          {brand.name}
        </span>
      )}
    </div>
  );
}
