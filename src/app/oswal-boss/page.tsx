'use client';
import { useState } from 'react';
import Link from 'next/link';

// All OSWAL Boss variants — two families: CLEAR and GREY
const BOSS_FAMILIES = [
  {
    id: 'clear',
    label: 'CLEAR',
    tagline: 'For indoor & general industrial use',
    accent: '#7AC142',
    bg: 'bg-white',
    borderActive: 'border-[#7AC142]',
    description: 'The OSWAL Boss frame with clear lenses — three tiers to suit every deployment scale and budget. Same CLI-approved frame, different lens grades.',
    image: '/products/0 power.png',
    variants: [
      {
        tier: 'Economy',
        label: 'Economy White Glass',
        id: '3',
        tag: 'MOST POPULAR',
        tagColor: 'bg-[#7AC142]',
        lensType: 'Economy Clear Glass',
        lensDetail: 'Standard clear glass — affordable, certified, high-volume deployments',
        icon: '●',
        level: 1,
      },
      {
        tier: 'Zero Power',
        label: '0 Power Glass',
        id: '13',
        tag: 'RECOMMENDED',
        tagColor: 'bg-blue-600',
        lensType: 'Zero Power Optical Glass',
        lensDetail: 'Optically neutral — no magnification or distortion, Class 1 quality',
        icon: '●●',
        level: 2,
      },
      {
        tier: 'Toughened',
        label: 'Toughened 0 Power Glass',
        id: '14',
        tag: 'PREMIUM',
        tagColor: 'bg-gray-800',
        lensType: 'Toughened Zero Power Safety Glass',
        lensDetail: 'Thermally toughened — superior scratch & impact resistance, highest grade',
        icon: '●●●',
        level: 3,
      },
    ],
  },
  {
    id: 'grey',
    label: 'GREY',
    tagline: 'For outdoor & high-luminance environments',
    accent: '#555',
    bg: 'bg-gray-50',
    borderActive: 'border-gray-600',
    description: 'The OSWAL Boss frame with grey tinted lenses — reduces glare and eye strain in bright or outdoor industrial environments. Three lens tiers available.',
    image: '/products/grey economy photo.png',
    variants: [
      {
        tier: 'Economy',
        label: 'Economy Grey Glass',
        id: '17',
        tag: 'MOST POPULAR',
        tagColor: 'bg-[#7AC142]',
        lensType: 'Economy Grey Tinted Glass',
        lensDetail: 'Standard grey tint — cost-effective glare reduction, CLI certified',
        icon: '◆',
        level: 1,
      },
      {
        tier: 'Zero Power',
        label: '0 Power Grey Glass',
        id: '15',
        tag: 'RECOMMENDED',
        tagColor: 'bg-blue-600',
        lensType: 'Zero Power Grey Optical Glass',
        lensDetail: 'Optically neutral grey — no distortion, superior glare reduction, Class 1',
        icon: '◆◆',
        level: 2,
      },
      {
        tier: 'Toughened Grey',
        label: 'Toughened Grey Glass',
        id: '15',
        tag: 'PREMIUM',
        tagColor: 'bg-gray-800',
        lensType: 'Toughened Grey Safety Glass',
        lensDetail: 'Thermally toughened grey — maximum durability for demanding outdoor work',
        icon: '◆◆◆',
        level: 3,
      },
    ],
  },
];

export default function OswalBossPage() {
  const [activeFamily, setActiveFamily] = useState<'clear' | 'grey'>('clear');
  const [selectedVariant, setSelectedVariant] = useState(0);

  const family = BOSS_FAMILIES.find(f => f.id === activeFamily)!;
  const variant = family.variants[selectedVariant];

  return (
    <div className="w-full bg-white">

      {/* ─── Hero Banner ─── */}
      <div className="w-full bg-gray-900 px-8 xl:px-20 py-12">
        <p className="text-[#7AC142] text-sm font-bold uppercase tracking-[0.3em] mb-2">
          <Link href="/products" className="hover:underline">← Products</Link> · Spectacle Frames
        </p>
        <h1 className="text-5xl xl:text-6xl font-black text-white uppercase tracking-tight leading-none">
          OSWAL <span className="text-[#7AC142]">BOSS</span>
        </h1>
        <p className="text-gray-400 text-lg mt-3 max-w-2xl">
          Premium Cellulose Acetate safety spectacle frame — CLI Approved &amp; IS 5983 / 1980 certified. Available in Clear and Grey lens families, with three lens tiers per family.
        </p>
        <div className="flex gap-3 mt-5 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-widest bg-[#7AC142]/20 text-[#7AC142] px-3 py-1.5">✓ CLI Approved</span>
          <span className="text-xs font-bold uppercase tracking-widest bg-white/10 text-gray-300 px-3 py-1.5">✓ IS 5983 / 1980</span>
          <span className="text-xs font-bold uppercase tracking-widest bg-white/10 text-gray-300 px-3 py-1.5">✓ Cellulose Acetate Frame</span>
          <span className="text-xs font-bold uppercase tracking-widest bg-white/10 text-gray-300 px-3 py-1.5">✓ Since 1983</span>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <div className="w-full px-8 xl:px-20 py-12">

        {/* ─── Family Selector (Clear / Grey) ─── */}
        <div className="mb-10">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Step 1 — Choose Lens Colour</p>
          <div className="flex gap-4">
            {BOSS_FAMILIES.map((f) => (
              <button
                key={f.id}
                onClick={() => { setActiveFamily(f.id as 'clear' | 'grey'); setSelectedVariant(0); }}
                className={`flex-1 max-w-xs border-2 p-6 text-left transition-all duration-200 ${
                  activeFamily === f.id
                    ? 'border-[#7AC142] bg-[#7AC142]/5 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-400'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  {/* Colour swatch */}
                  <div className={`w-8 h-8 rounded-full border-2 border-gray-300 ${f.id === 'clear' ? 'bg-white' : 'bg-gray-500'}`} />
                  <span className={`text-xl font-black uppercase tracking-tight ${activeFamily === f.id ? 'text-[#7AC142]' : 'text-gray-800'}`}>
                    {f.label}
                  </span>
                  {activeFamily === f.id && (
                    <span className="ml-auto text-xs font-bold bg-[#7AC142] text-white px-2 py-0.5 uppercase tracking-wide">Selected</span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{f.tagline}</p>
              </button>
            ))}
          </div>
        </div>

        {/* ─── Variant Selector ─── */}
        <div className="mb-10">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Step 2 — Choose Lens Grade</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {family.variants.map((v, i) => (
              <button
                key={i}
                onClick={() => setSelectedVariant(i)}
                className={`relative border-2 p-6 text-left transition-all duration-200 ${
                  selectedVariant === i
                    ? 'border-[#7AC142] bg-[#7AC142]/5 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                {/* Tag badge */}
                <span className={`absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider text-white px-2 py-0.5 ${v.tagColor}`}>
                  {v.tag}
                </span>

                {/* Tier indicator dots */}
                <div className="flex gap-1 mb-3">
                  {[1,2,3].map(n => (
                    <div key={n} className={`w-3 h-3 rounded-full ${n <= v.level ? 'bg-[#7AC142]' : 'bg-gray-200'}`} />
                  ))}
                </div>

                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{v.tier}</p>
                <h3 className={`text-base font-black uppercase tracking-tight mb-3 ${selectedVariant === i ? 'text-[#7AC142]' : 'text-gray-800'}`}>
                  {v.label}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.lensDetail}</p>
              </button>
            ))}
          </div>
        </div>

        {/* ─── Selected Variant Detail Card ─── */}
        <div className="border-2 border-[#7AC142] bg-white overflow-hidden">
          <div className="bg-[#7AC142] px-8 py-4 flex items-center justify-between">
            <div>
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Selected Configuration</span>
              <h2 className="text-white text-2xl font-black uppercase tracking-tight">
                OSWAL BOSS — {family.label} / {variant.tier}
              </h2>
            </div>
            <Link
              href={`/product/${variant.id}`}
              className="bg-white text-[#7AC142] font-black uppercase tracking-widest text-sm px-8 py-3 hover:bg-gray-900 hover:text-white transition-colors whitespace-nowrap"
            >
              View Full Datasheet →
            </Link>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Product image */}
            <div className="md:w-[300px] flex-shrink-0 flex items-center justify-center p-10 bg-gray-50 border-r border-gray-100">
              <img
                src={family.image}
                alt={`OSWAL Boss ${family.label}`}
                className="w-full max-w-[220px] object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0.3'; }}
              />
            </div>

            {/* Specs summary */}
            <div className="flex-1 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Frame</p>
                  <p className="text-base font-bold text-gray-800">Cellulose Acetate</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Lens Type</p>
                  <p className="text-base font-bold text-gray-800">{variant.lensType}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Lens Colour</p>
                  <p className="text-base font-bold text-gray-800">{family.label}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Glass Thickness</p>
                  <p className="text-base font-bold text-gray-800">3 mm (±0.2 mm)</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Certification</p>
                  <p className="text-base font-bold text-[#7AC142]">CLI Approved · IS 5983 / 1980</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Modifications</p>
                  <p className="text-base font-bold text-gray-800">Thread / Elastic (on order)</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex gap-3 flex-wrap">
                <Link
                  href={`/product/${variant.id}`}
                  className="bg-[#7AC142] text-white font-black uppercase tracking-widest text-sm px-8 py-3 hover:bg-gray-900 transition-colors"
                >
                  Full Datasheet & Specifications →
                </Link>
                <a
                  href="mailto:oswaloptical@yahoo.co.in"
                  className="border-2 border-gray-800 text-gray-800 font-black uppercase tracking-widest text-sm px-8 py-3 hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Quick comparison table ─── */}
        <div className="mt-12">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-5">All {family.label} Variants at a Glance</p>
          <div className="border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Variant</th>
                  <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Lens Material</th>
                  <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Best For</th>
                  <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Grade</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {family.variants.map((v, i) => (
                  <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 font-bold text-gray-800">{v.label}</td>
                    <td className="px-6 py-4 text-gray-600">{v.lensType}</td>
                    <td className="px-6 py-4 text-gray-500">{v.lensDetail.split('—')[0].trim()}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {[1,2,3].map(n => (
                          <div key={n} className={`w-2.5 h-2.5 rounded-full ${n <= v.level ? 'bg-[#7AC142]' : 'bg-gray-200'}`} />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/product/${v.id}`}
                        className="text-[#7AC142] font-bold text-xs uppercase tracking-widest hover:underline"
                      >
                        Datasheet →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
