import Link from 'next/link';

export default function IS5983Article() {
  return (
    <div className="w-full bg-white">

      {/* ─── Hero ─── */}
      <div className="w-full bg-gray-900 px-8 xl:px-20 py-14">
        <div className="flex items-center gap-3 text-lg text-gray-400 font-bold uppercase tracking-widest mb-4">
          <Link href="/library" className="text-[#7AC142] hover:underline">Technical Library</Link>
          <span>/</span>
          <span>Standards & Certifications</span>
        </div>
        <h1 className="text-4xl xl:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-4">
          IS 5983 / 1980 — <span className="text-[#7AC142]">Complete Guide</span>
        </h1>
        <p className="text-gray-400 text-2xl max-w-4xl leading-relaxed">
          India's Bureau of Indian Standards specification for industrial safety goggles. Everything procurement officers, safety engineers, and industrial buyers need to know.
        </p>
        <div className="flex items-center gap-4 mt-5 text-xs font-bold uppercase tracking-widest text-gray-500">
          <span>8 min read</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full" />
          <span>Last updated: July 2025</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full" />
          <span>By OSWAL Industries Technical Team</span>
        </div>
      </div>

      {/* ─── Content ─── */}
      <article className="w-full px-8 xl:px-20 py-14">
        <div className="max-w-4xl">

          {/* ─── What is IS 5983 ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">What is IS 5983?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              <strong>IS 5983 : 1980</strong> is the Indian Standard specification published by the <strong>Bureau of Indian Standards (BIS)</strong> that covers the requirements for <em>industrial safety goggles</em>. It was first published in 1980 and remains the primary national standard governing the design, materials, optical quality, and testing of safety goggles used across Indian industries.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              The full title is: <strong>&ldquo;IS 5983 : 1980 — Specification for Industrial Safety Goggles&rdquo;</strong>.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Any safety goggle supplied to Indian public sector undertakings (PSUs), railways, defence establishments, mining operations, or government tenders <strong>must comply with IS 5983 / 1980</strong>. This is a mandatory procurement requirement in most central and state government purchase orders.
            </p>
          </section>

          {/* ─── Why It Exists ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">Why Does IS 5983 Exist?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Industrial environments expose workers to a wide range of eye hazards — flying particles from grinding, molten metal splash from welding, harmful radiation from furnaces, chemical splashes, and dust. Without a standardised specification, there would be no guarantee that a &ldquo;safety goggle&rdquo; actually provides meaningful protection.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              IS 5983 ensures that every certified safety goggle meets minimum requirements for:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                'Impact resistance — lenses must withstand a steel ball drop test without shattering',
                'Optical quality — lenses must not distort vision or cause eye strain over prolonged use',
                'Material safety — frame materials must be non-toxic, non-flammable, and skin-safe',
                'UV and IR filtration — filter lenses must block harmful radiation within specified shade ranges',
                'Durability — goggles must maintain their protective properties under normal industrial conditions',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xl text-gray-700">
                  <span className="w-2 h-2 bg-[#7AC142] rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ─── Key Requirements ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">Key Requirements of IS 5983</h2>
            
            <div className="border border-gray-200 overflow-hidden mb-6">
              <table className="w-full text-lg">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Requirement</th>
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Frame Material', 'Cellulose Acetate, Vulcanised Fibre, or approved thermoplastic — non-flammable, skin-safe, chemical resistant'],
                    ['Lens Material', 'Toughened safety glass or optical-grade polycarbonate — minimum 3 mm thickness'],
                    ['Impact Test', 'Must survive a 22 mm diameter, 44 g steel ball dropped from 1.3 m height without cracking or fragmenting'],
                    ['Optical Quality', 'Class 1 optical quality — no visible distortion, prismatic deviation within ±0.12 prism dioptre'],
                    ['Filter Shades', 'DIN 2 through DIN 14 for welding applications — shade number must be permanently marked on the lens'],
                    ['UV Protection', '100% UV filtration required for all filter lenses'],
                    ['Ventilation', 'Indirect ventilation required for chemical splash goggles — direct ventilation permitted for dust/impact goggles'],
                    ['Marking', 'Every goggle must be permanently marked with the manufacturer name, IS 5983 reference, and shade number (for filters)'],
                    ['Weight', 'Complete goggle assembly should not exceed 120 g for wearer comfort during extended use'],
                  ].map(([req, spec], i) => (
                    <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-6 py-4 font-bold text-gray-800 whitespace-nowrap">{req}</td>
                      <td className="px-6 py-4 text-gray-600">{spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── Industries ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">Industries Where IS 5983 Is Mandatory</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Steel Plants (SAIL, Tata Steel, JSW, Vizag Steel)',
                'Indian Railways',
                'BHEL & Power Generation',
                'Mining (Coal India, SCCL)',
                'Defence & Ordnance Factories',
                'Oil & Gas (ONGC, IOCL, BPCL)',
                'Cement Plants',
                'Automotive Manufacturing',
                'Chemical & Pharmaceutical',
                'Construction & Infrastructure',
                'Shipbuilding & Docks',
                'Foundries & Forging',
              ].map((industry) => (
                <div key={industry} className="border border-gray-100 px-4 py-3 bg-gray-50 text-lg font-medium text-gray-700">
                  {industry}
                </div>
              ))}
            </div>
          </section>

          {/* ─── CLI Approval ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">What is CLI Approval?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              <strong>CLI</strong> stands for the <strong>Central Labour Institute</strong>, a division of the Directorate General Factory Advice Service & Labour Institutes (DGFASLI) under the Ministry of Labour & Employment, Government of India.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              CLI Approval means the goggle has been independently tested and certified by this government body to meet the requirements of IS 5983. It is the gold standard for Indian industrial safety goggles.
            </p>
            <div className="bg-[#7AC142]/5 border-l-4 border-[#7AC142] p-6 mt-6">
              <p className="text-lg font-bold text-[#7AC142] uppercase tracking-widest mb-2">Important for Procurement</p>
              <p className="text-xl text-gray-800 leading-relaxed">
                Most government and PSU tenders explicitly require <strong>&ldquo;CLI Approved, IS 5983 / 1980 compliant&rdquo;</strong> safety goggles. Products without CLI approval will be rejected at the tender evaluation stage. All OSWAL Industries safety goggles carry CLI Approval.
              </p>
            </div>
          </section>

          {/* ─── IS 5983 vs International Standards ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">IS 5983 vs International Standards</h2>
            <div className="border border-gray-200 overflow-hidden">
              <table className="w-full text-lg">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Standard</th>
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Region</th>
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Scope</th>
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Equivalent To IS 5983?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['IS 5983 : 1980', 'India', 'Industrial safety goggles', '—'],
                    ['EN 166 : 2001', 'Europe', 'Personal eye protection — specifications', 'Yes — broader scope but similar impact & optical requirements'],
                    ['ANSI Z87.1', 'USA', 'Occupational eye & face protection', 'Yes — generally more stringent impact testing'],
                    ['AS/NZS 1337.1', 'Australia / NZ', 'Eye protectors for industrial applications', 'Yes — comparable scope'],
                    ['IS 14352', 'India', 'Safety spectacles (not goggles)', 'No — IS 14352 covers spectacles, IS 5983 covers goggles'],
                  ].map(([std, region, scope, equiv], i) => (
                    <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-6 py-4 font-bold text-gray-800">{std}</td>
                      <td className="px-6 py-4 text-gray-600">{region}</td>
                      <td className="px-6 py-4 text-gray-600">{scope}</td>
                      <td className="px-6 py-4 text-gray-600">{equiv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── FAQ ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-6 border-l-4 border-[#7AC142] pl-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Is IS 5983 mandatory for all industries in India?',
                  a: 'IS 5983 compliance is mandatory for all government tenders, PSU procurement, railways, mining, and defence. Private industries are strongly recommended to use IS 5983 compliant goggles as per the Factories Act, 1948 and state factory rules.',
                },
                {
                  q: 'What is the difference between IS 5983 and IS 14352?',
                  a: 'IS 5983 covers safety goggles (wrap-around, sealed eye protection). IS 14352 covers safety spectacles (open-frame, temple-style). Both serve different hazard levels — goggles provide sealed protection, spectacles provide basic impact protection.',
                },
                {
                  q: 'How do I verify if a goggle is genuinely IS 5983 certified?',
                  a: 'Check for: (1) CLI Approval certificate — ask the manufacturer to produce it, (2) IS 5983 marking permanently embossed or printed on the frame, (3) BIS licence number on the packaging. OSWAL Industries provides all certification documentation on request.',
                },
                {
                  q: 'Does IS 5983 cover welding goggles?',
                  a: 'Yes. IS 5983 specifies filter shade requirements from DIN 2 through DIN 14 for welding goggles. The shade number must be permanently marked on the filter lens.',
                },
                {
                  q: 'Can IS 5983 goggles be used in chemical environments?',
                  a: 'Yes, provided the goggle has indirect ventilation (sealed vents that prevent liquid splash ingress). IS 5983 specifies ventilation requirements for chemical splash protection.',
                },
              ].map((faq, i) => (
                <div key={i} className="border border-gray-100 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Related OSWAL Products ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">OSWAL Products Compliant with IS 5983</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              All OSWAL Industries safety goggles are <strong>CLI Approved and IS 5983 / 1980 certified</strong>. Our range includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Welding Goggles (DIN 2–14)', id: 'welding-din-5', desc: 'Complete shade range for all welding applications' },
                { name: 'Cup Type Safety Goggles', id: '18', desc: 'Classic industrial eye protection for general use' },
                { name: 'Chemical Splash Goggles', id: '20', desc: 'Sealed, indirect-ventilated splash protection' },
                { name: 'OSWAL Boss Spectacle Frame', id: '13', desc: 'Premium acetate safety spectacle with toughened glass' },
                { name: 'Furnace Observation Goggles', id: '8', desc: 'High-shade filters for furnace and smelter work' },
                { name: 'Supravision Safety Goggles', id: '11', desc: 'Panoramic one-piece lens, EN 166 + IS 5983 certified' },
              ].map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group border border-gray-200 p-5 hover:border-[#7AC142] transition-colors flex items-center gap-4"
                >
                  <div className="w-2 h-2 bg-[#7AC142] rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-lg font-bold text-gray-800 group-hover:text-[#7AC142] transition-colors">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.desc}</p>
                  </div>
                  <span className="ml-auto text-xs font-bold text-[#7AC142] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ─── CTA ─── */}
          <section className="bg-gray-900 p-10">
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-3">Need IS 5983 Compliant Safety Goggles?</h2>
            <p className="text-base text-gray-400 leading-relaxed mb-6 max-w-xl">
              OSWAL Industries has been manufacturing CLI-approved, IS 5983 / 1980 certified safety eyewear since 1983. Contact us for bulk pricing, tender supply, or custom requirements.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:oswaloptical@yahoo.co.in"
                className="bg-[#7AC142] text-white font-bold uppercase tracking-widest text-lg px-8 py-4 hover:bg-white hover:text-gray-900 transition-colors"
              >
                Request a Quote
              </a>
              <a
                href="https://wa.me/919535354312?text=Hi%2C%20I%20need%20IS%205983%20compliant%20safety%20goggles.%20Please%20share%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-bold uppercase tracking-widest text-lg px-8 py-4 hover:bg-[#25D366] hover:border-[#25D366] transition-colors"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
}
