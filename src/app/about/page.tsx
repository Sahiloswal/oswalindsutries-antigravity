import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About OSWAL Industries — Safety Eyewear Manufacturer',
  description: 'Manufacturer of industrial safety eyewear since 1983. Trusted by industries across India for quality and reliability.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1000px] mx-auto py-12">
        <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight mb-8">
          About OSWAL Industries
        </h1>
        
        <div className="w-16 h-1.5 bg-[#7AC142] mb-10"></div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wider">Company Introduction</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            OSWAL Industries is a trusted manufacturer of industrial safety eyewear and furnace protection equipment. Since 1983, we have been dedicated to producing high-quality safety solutions that meet the demanding requirements of various sectors.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            With decades of experience in safety solutions, our products are specifically engineered to withstand extreme conditions, making them ideal for steel plants, heavy engineering industries, foundries, and high-temperature work environments. We pride ourselves on delivering safety gear that workers can rely on, day in and day out.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-wider">Our Key Strengths</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 border-t-4 border-[#7AC142]">
              <div className="text-[#7AC142] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wide">Experience</h3>
              <p className="text-sm text-gray-600">Over four decades of manufacturing expertise in industrial safety.</p>
            </div>
            
            <div className="bg-gray-50 p-6 border-t-4 border-[#7AC142]">
              <div className="text-[#7AC142] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wide">Industrial Reliability</h3>
              <p className="text-sm text-gray-600">Products designed for heavy industrial environments and extreme conditions.</p>
            </div>
            
            <div className="bg-gray-50 p-6 border-t-4 border-[#7AC142]">
              <div className="text-[#7AC142] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wide">Quality Manufacturing</h3>
              <p className="text-sm text-gray-600">Precision production with strict quality standards to ensure compliance.</p>
            </div>
            
            <div className="bg-gray-50 p-6 border-t-4 border-[#7AC142]">
              <div className="text-[#7AC142] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wide">Trusted Supply</h3>
              <p className="text-sm text-gray-600">Serving leading companies and industries across India with reliable supply.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-white p-12 text-center rounded-sm">
          <h2 className="text-3xl font-black uppercase mb-6">Trusted By Leading Industries</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Since 1983, our safety eyewear has been relied upon by India's top manufacturing and engineering firms, including:
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-gray-300 font-bold tracking-wider mb-10 max-w-4xl mx-auto">
            <span className="bg-gray-800 px-4 py-2 rounded-sm border border-gray-700">BEML</span>
            <span className="bg-gray-800 px-4 py-2 rounded-sm border border-gray-700">BHEL</span>
            <span className="bg-gray-800 px-4 py-2 rounded-sm border border-gray-700">RAILWAYS</span>
            <span className="bg-gray-800 px-4 py-2 rounded-sm border border-gray-700">GODREJ</span>
            <span className="bg-gray-800 px-4 py-2 rounded-sm border border-gray-700">JSW STEEL</span>
            <span className="bg-gray-800 px-4 py-2 rounded-sm border border-gray-700">TATA STEEL</span>
            <span className="bg-gray-800 px-4 py-2 rounded-sm border border-gray-700">RHI MAGNESITA</span>
            <span className="bg-gray-800 px-4 py-2 rounded-sm border border-gray-700">SMIORE</span>
            <span className="bg-gray-800 px-4 py-2 rounded-sm border border-gray-700">ANDHRA SUGARS</span>
            <span className="bg-gray-800 px-4 py-2 rounded-sm border border-gray-700">MAHINDRA CIE</span>
            <span className="bg-gray-800 px-4 py-2 rounded-sm border border-gray-700">HONDA SCOOTERS</span>
          </div>
          <Link href="/#contact" className="inline-block bg-[#7AC142] text-white font-bold uppercase tracking-wider px-8 py-3 hover:bg-white hover:text-gray-900 transition-colors">
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
