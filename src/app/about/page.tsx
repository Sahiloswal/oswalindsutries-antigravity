import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About OSWAL Industries — Safety Eyewear Manufacturer Since 1983',
  description: 'Manufacturer of industrial safety eyewear since 1983. CLI Approved and IS 5983 certified. Supplied to BEML, BHEL, Tata Steel, JSW Steel and heavy industries across India.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ─── Banner ─── */}
      <div className="w-full bg-slate-900 text-white py-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.25em] mb-1">Since 1983</p>
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">About OSWAL Industries</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">

        {/* Company Overview */}
        <section className="mb-14">
          <div className="w-8 h-0.5 bg-amber-500 mb-6"></div>
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-wide mb-5">Company Overview</h2>
          <p className="text-base text-slate-600 leading-relaxed mb-4">
            OSWAL Industries is a manufacturer of industrial safety eyewear and furnace protection equipment based in Davanagere, Karnataka. Since 1983, we have produced safety eyewear that meets the requirements of steel plants, foundries, chemical manufacturers, construction sites, and heavy engineering facilities across India.
          </p>
          <p className="text-base text-slate-600 leading-relaxed">
            Our products include polycarbonate safety goggles, cobalt blue glass furnace goggles, welding helmets, chemical splash goggles, spectacle frames, and laser protection eyewear. All applicable products carry CLI Approval and comply with IS&nbsp;5983&nbsp;/ 1980 certification requirements.
          </p>
        </section>

        {/* Key Strengths */}
        <section className="mb-14">
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-wide mb-6">Key Strengths</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Experience',
                body: 'Over four decades of manufacturing industrial safety eyewear. Established in 1983 in Davanagere, Karnataka.',
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Certified Products',
                body: 'Products carry CLI Approval and IS 5983 / 1980 certification as issued by the Bureau of Indian Standards.',
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: 'Specialised Range',
                body: 'Dedicated product lines for furnace and smelting applications, welding, chemical splash, general industrial, and laser hazards.',
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zm9.75-9.75A2.25 2.25 0 0115.75 3.75H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zm0 9.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                ),
              },
              {
                title: 'Industrial Supply',
                body: 'Supplying to steel plants, foundries, railways, defence, pharmaceutical manufacturers, and construction firms across India.',
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
              },
            ].map(item => (
              <div key={item.title} className="border border-slate-200 p-6 flex gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Section */}
        <section className="bg-slate-900 text-white p-8 md:p-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Clients We Supply To</h2>
          <p className="text-slate-400 mb-8 max-w-2xl leading-relaxed text-sm">
            OSWAL Industries safety eyewear has been supplied to engineering and industrial organisations including:
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['BEML', 'BHEL', 'Indian Railways', 'Godrej', 'JSW Steel', 'Tata Steel', 'RHI Magnesita', 'SMIORE', 'Andhra Sugars', 'Mahindra CIE', 'Honda Scooters', 'HAL', 'VIZAG Steel', 'Kirloskar'].map(name => (
              <span key={name} className="bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold tracking-wider px-3 py-1.5">
                {name}
              </span>
            ))}
          </div>
          <Link
            href="/#inquiry"
            className="inline-block bg-amber-600 text-white font-bold uppercase tracking-widest text-xs px-6 py-3 hover:bg-amber-700 transition-colors"
          >
            Request a Quotation →
          </Link>
        </section>

        {/* Contact CTA */}
        <div className="mt-10 border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Contact</p>
            <a href="tel:+919535354312" className="text-base font-bold text-slate-900 hover:text-amber-600 transition-colors">+91 95353 54312</a>
            <span className="mx-3 text-slate-300">·</span>
            <a href="mailto:oswaloptical@yahoo.co.in" className="text-sm text-slate-600 hover:text-amber-600 transition-colors">oswaloptical@yahoo.co.in</a>
          </div>
          <Link href="/products" className="border border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs px-5 py-2.5 hover:bg-slate-900 hover:text-white transition-colors">
            View All Products →
          </Link>
        </div>
      </div>
    </div>
  );
}
