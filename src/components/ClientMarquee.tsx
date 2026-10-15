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
    <div className="w-full bg-slate-50 border-t border-b border-slate-200 print:hidden">
      {/* Header label */}
      <div className="w-full px-6 md:px-8 pt-4 pb-2 flex items-center gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap flex-shrink-0">Supplied to</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Scrolling strip */}
      <div className="overflow-hidden pb-4">
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
    <div className="mx-5 flex-shrink-0 flex items-center justify-center bg-white border border-slate-200"
         style={{ width: '140px', height: '64px', padding: '10px' }}>
      {!imgError ? (
        <img
          src={`/brands/${brand.file}`}
          alt={brand.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
            filter: 'grayscale(1) opacity(0.65)',
          }}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase text-center leading-tight">
          {brand.name}
        </span>
      )}
    </div>
  );
}
