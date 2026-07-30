import Link from 'next/link';

export default function FurnaceArticle() {
  return (
    <div className="w-full bg-white">

      {/* ─── Hero ─── */}
      <div className="w-full bg-gray-900 px-8 xl:px-20 py-14">
        <div className="flex items-center gap-3 text-lg text-gray-400 font-bold uppercase tracking-widest mb-4">
          <Link href="/library" className="text-[#7AC142] hover:underline">Technical Library</Link>
          <span>/</span>
          <span>Industry Applications</span>
        </div>
        <h1 className="text-4xl xl:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-4">
          Furnace & Smelter <span className="text-[#7AC142]">Eye Protection</span>
        </h1>
        <p className="text-gray-400 text-2xl max-w-4xl leading-relaxed">
          Complete industrial guide — how to select the right safety goggles for furnace observation, smelting operations, metal pouring, and high-temperature industrial environments.
        </p>
        <div className="flex items-center gap-4 mt-5 text-xs font-bold uppercase tracking-widest text-gray-500">
          <span>10 min read</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full" />
          <span>Last updated: July 2025</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full" />
          <span>By OSWAL Industries Technical Team</span>
        </div>
      </div>

      {/* ─── Content ─── */}
      <article className="w-full px-8 xl:px-20 py-14">
        <div className="max-w-4xl">

          {/* ─── Introduction ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">The Furnace Environment — Why Standard Goggles Are Not Enough</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Furnace and smelter environments are among the most demanding workplaces for eye protection. Workers face a combination of hazards that no standard clear safety goggle can handle:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Extreme infrared (IR) radiation — furnaces operating at 1,200°C to 1,800°C emit intense IR that can cause thermal cataracts and retinal burns',
                'Visible light glare — the radiant heat from molten metal produces blinding brightness that causes immediate vision fatigue',
                'Ultraviolet (UV) radiation — especially from electric arc furnaces and induction furnaces',
                'Molten metal splash — liquid steel, iron, aluminium, or slag can eject from furnaces during charging, tapping, or pouring',
                'Flying particles — slag, scale, and refractory fragments from furnace lining',
                'Radiant heat — prolonged exposure to heat radiation can degrade standard plastic lenses and frames',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xl text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <p className="text-lg font-bold text-red-700 uppercase tracking-widest mb-2">⚠ Critical Safety Information</p>
              <p className="text-xl text-gray-800 leading-relaxed">
                <strong>Using clear or low-shade goggles for furnace observation is dangerous.</strong> Infrared radiation damage is cumulative and irreversible. Workers may not feel pain during exposure, but IR radiation progressively damages the lens of the eye, leading to &ldquo;glassblower&rsquo;s cataract&rdquo; — a permanent condition. Always use the correct DIN shade for the furnace temperature.
              </p>
            </div>
          </section>

          {/* ─── Shade Selection ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">Shade Selection Guide for Furnace Work</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The correct filter shade depends on the <strong>furnace temperature</strong> and the <strong>type of observation</strong>. Higher temperatures emit more IR radiation and require darker shades.
            </p>

            <div className="border border-gray-200 overflow-hidden mb-6">
              <table className="w-full text-lg">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Application</th>
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Temperature Range</th>
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Recommended DIN Shade</th>
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">OSWAL Product</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['General furnace proximity work', 'Below 900°C', 'DIN 2–3', 'Welding Goggles DIN 2/3'],
                    ['Furnace observation — low temp', '900°C – 1,100°C', 'DIN 3–4', 'Welding Goggles DIN 3/4'],
                    ['Furnace observation — medium temp', '1,100°C – 1,300°C', 'DIN 4–5', 'Welding Goggles DIN 5'],
                    ['Steel furnace tapping & pouring', '1,300°C – 1,500°C', 'DIN 5–6', 'Furnace Observation Goggles'],
                    ['Peephole observation (BOF/EAF)', '1,500°C – 1,800°C', 'DIN 6–8', 'Peephole Glass'],
                    ['Electric arc furnace observation', '1,600°C+', 'DIN 8–14', 'Cobalt Blue / Speciality Filters'],
                  ].map(([app, temp, shade, product], i) => (
                    <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-6 py-4 font-medium text-gray-800">{app}</td>
                      <td className="px-6 py-4 text-gray-600">{temp}</td>
                      <td className="px-6 py-4 font-bold text-[#7AC142]">{shade}</td>
                      <td className="px-6 py-4 text-gray-600">{product}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#7AC142]/5 border-l-4 border-[#7AC142] p-6">
              <p className="text-lg font-bold text-[#7AC142] uppercase tracking-widest mb-2">Rule of Thumb</p>
              <p className="text-xl text-gray-800 leading-relaxed">
                If you can see the furnace interior clearly and comfortably through the filter, the shade is correct. If it&rsquo;s too bright and you squint, go one shade darker. If it&rsquo;s too dark and you can&rsquo;t see the melt, go one shade lighter. When in doubt, always choose the darker shade — your eyes cannot be replaced.
              </p>
            </div>
          </section>

          {/* ─── Types of Furnaces ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">Eye Protection by Furnace Type</h2>

            <div className="space-y-6">
              {[
                {
                  furnace: 'Blast Furnace',
                  hazards: 'IR radiation, molten iron splash, slag ejecta, extreme radiant heat',
                  protection: 'DIN 5–6 welding goggles for general proximity work. DIN 6–8 for peephole observation. Side-shield goggles mandatory. Face shield recommended for tapping.',
                  industries: 'Steel (SAIL, Tata Steel, JSW, Vizag Steel)',
                },
                {
                  furnace: 'Electric Arc Furnace (EAF)',
                  hazards: 'Intense UV + IR radiation, electric arc flash, molten metal splash, noise',
                  protection: 'DIN 8–14 welding goggles (shade depends on arc intensity). Must block both UV and IR. Cobalt blue filters may be required for specific observations.',
                  industries: 'Steel recycling, speciality steels, alloy manufacturing',
                },
                {
                  furnace: 'Induction Furnace',
                  hazards: 'IR radiation, molten metal splash during pouring, fumes',
                  protection: 'DIN 4–6 depending on metal temperature. Sealed goggles for proximity work. Chemical splash goggles if flux fumes are present.',
                  industries: 'Foundries, casting, non-ferrous metal smelting',
                },
                {
                  furnace: 'Rotary Kiln / Cement Kiln',
                  hazards: 'IR radiation through peepholes, clinker dust, extreme heat',
                  protection: 'DIN 3–5 for kiln observation. Dust-sealed goggles for clinker area. Peephole glass for direct kiln interior viewing.',
                  industries: 'Cement (UltraTech, ACC, Ambuja, Shree Cement)',
                },
                {
                  furnace: 'Glass Melting Furnace',
                  hazards: 'IR + UV radiation, intense visible glare, radiant heat, glass splash',
                  protection: 'DIN 4–6 for general observation. Cobalt blue filters for specific glass colour inspection. Side-shield goggles mandatory.',
                  industries: 'Glass manufacturing (Saint-Gobain, Asahi)',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 p-6">
                  <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-3">{item.furnace}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                    <div>
                      <p className="font-bold text-red-600 uppercase tracking-widest text-xs mb-1">Hazards</p>
                      <p className="text-gray-600 leading-relaxed">{item.hazards}</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#7AC142] uppercase tracking-widest text-xs mb-1">Required Protection</p>
                      <p className="text-gray-600 leading-relaxed">{item.protection}</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-500 uppercase tracking-widest text-xs mb-1">Typical Industries</p>
                      <p className="text-gray-600 leading-relaxed">{item.industries}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Lens Materials ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">Lens Materials for Furnace Work</h2>

            <div className="border border-gray-200 overflow-hidden">
              <table className="w-full text-lg">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Material</th>
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Pros</th>
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Cons</th>
                    <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-xs">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Toughened Filter Glass', 'Best IR blocking, scratch resistant, optically clear, heat resistant', 'Heavier than polycarbonate, can shatter on extreme impact', 'Furnace observation, peephole viewing, welding'],
                    ['Polycarbonate (tinted)', 'Lightweight, impact resistant, shatter-proof', 'Lower heat resistance, can warp near furnaces, scratches easily', 'General proximity work, NOT for direct furnace viewing'],
                    ['Cobalt Blue Glass', 'Allows observation of molten metal colour through high-temp glare', 'Speciality lens, limited availability', 'EAF observation, glass furnace inspection, colour-critical work'],
                    ['Gold-Coated Glass', 'Reflects IR radiation, reduces heat load on eyes', 'Expensive, fragile coating', 'Extended high-temperature observation, blast furnace peepholes'],
                  ].map(([material, pros, cons, best], i) => (
                    <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-6 py-4 font-bold text-gray-800">{material}</td>
                      <td className="px-6 py-4 text-gray-600">{pros}</td>
                      <td className="px-6 py-4 text-gray-600">{cons}</td>
                      <td className="px-6 py-4 text-gray-600">{best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── Common Mistakes ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">Common Mistakes in Furnace Eye Protection</h2>
            <div className="space-y-4">
              {[
                {
                  mistake: 'Using sunglasses instead of certified filter goggles',
                  why: 'Sunglasses block visible light but NOT infrared radiation. Workers feel comfortable because glare is reduced, but IR continues to damage the eye lens, causing cataracts over months.',
                },
                {
                  mistake: 'Using a single shade for all furnace operations',
                  why: 'Different operations (proximity work vs peephole observation vs tapping) require different shades. A DIN 3 shade is dangerous for peephole observation of a 1,500°C furnace.',
                },
                {
                  mistake: 'Not replacing scratched or chipped filter lenses',
                  why: 'Scratches on filter glass reduce its IR-blocking capability. A scratched DIN 5 lens may only provide DIN 3 protection. Replace filter lenses immediately when damaged.',
                },
                {
                  mistake: 'Using polycarbonate goggles for direct furnace viewing',
                  why: 'Polycarbonate softens at 150°C and warps at higher temperatures. For direct furnace observation, only toughened filter glass should be used.',
                },
                {
                  mistake: 'Removing goggles for "quick looks" at the furnace',
                  why: 'IR exposure is cumulative. Even brief unprotected exposure contributes to long-term damage. Many furnace cataracts develop in workers who "only looked for a second" hundreds of times.',
                },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-red-400 bg-red-50/50 p-5">
                  <p className="text-lg font-bold text-red-700 mb-1">✗ {item.mistake}</p>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── FAQ ─── */}
          <section className="mb-14">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-6 border-l-4 border-[#7AC142] pl-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How often should furnace goggles be replaced?',
                  a: 'Filter glass lenses should be inspected monthly. Replace immediately if scratched, chipped, or if the filter tint has faded. Frames should be replaced every 12–18 months or when they no longer seal properly against the face. In high-temperature environments, inspect weekly.',
                },
                {
                  q: 'Can I use welding goggles for furnace observation?',
                  a: 'Yes — welding goggles with the correct DIN shade are suitable for furnace observation. DIN shade requirements for furnaces are typically DIN 3–8, which falls within the welding shade range. OSWAL welding goggles (DIN 2–14) are widely used for furnace work across Indian steel plants.',
                },
                {
                  q: 'What is a peephole glass?',
                  a: 'A peephole glass is a thick, high-shade filter glass disc (typically DIN 6–10) that is installed in the peephole port of a furnace. It allows operators to observe the furnace interior without opening the peephole door. OSWAL manufactures peephole glasses in standard industrial sizes.',
                },
                {
                  q: 'Do furnace workers also need face shields?',
                  a: 'Yes — during tapping, pouring, and charging operations where molten metal splash is possible, a full face shield should be worn OVER the filter goggles. OSWAL offers face shields and helmet-mounted shield attachments for this purpose.',
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
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 border-l-4 border-[#7AC142] pl-4">OSWAL Products for Furnace & Smelter Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Welding Goggles — DIN 5', id: 'welding-din-5', desc: 'Standard furnace observation shade for steel industry' },
                { name: 'Welding Goggles — DIN 2/3/4', id: 'welding-din-2', desc: 'Low shade for proximity work and low-temp furnaces' },
                { name: 'Cobalt Blue Goggles', id: '8', desc: 'For EAF observation and colour-critical furnace inspection' },
                { name: 'Peephole Glass', id: '9', desc: 'High-shade filter disc for BOF and EAF peephole ports' },
                { name: 'Face Shield', id: '24', desc: 'Splash protection over goggles during tapping and pouring' },
                { name: 'Flip-Up Face Shield', id: '30', desc: 'Quick flip-up mechanism for intermittent furnace observation' },
                { name: 'Cup Type Safety Goggles', id: '18', desc: 'Sealed side protection for general furnace area work' },
                { name: 'Helmet Attachment Shield', id: '25', desc: 'Mounts to hard hat for hands-free furnace protection' },
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
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-3">Need Furnace-Grade Eye Protection?</h2>
            <p className="text-base text-gray-400 leading-relaxed mb-6 max-w-xl">
              OSWAL Industries supplies furnace observation goggles, peephole glasses, and face shields to steel plants, foundries, and smelters across India. All products are CLI Approved and IS 5983 / 1980 certified.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:oswaloptical@yahoo.co.in"
                className="bg-[#7AC142] text-white font-bold uppercase tracking-widest text-lg px-8 py-4 hover:bg-white hover:text-gray-900 transition-colors"
              >
                Request a Quote
              </a>
              <a
                href="https://wa.me/919535354312?text=Hi%2C%20I%20need%20furnace%20observation%20goggles%20for%20our%20plant.%20Please%20share%20options%20and%20pricing."
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
