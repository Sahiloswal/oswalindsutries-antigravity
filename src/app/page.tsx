'use client';

import { useState } from 'react';
import Link from 'next/link';
import productsData from '../products.json';

// ── Inline contact form using the same Web3Forms key already in use ──
function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '9f53ad2d-a82d-421b-b426-fcca8454c1e9');
    formData.append('subject', 'New Inquiry from OSWAL Industries Website');
    formData.append('from_name', 'OSWAL Industries Website');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg('Submission failed. Please try again or email us directly.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please email oswaloptical@yahoo.co.in directly.');
    }
  };

  const inputClass =
    'w-full border border-slate-300 bg-white text-slate-900 text-sm font-medium px-4 py-3 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors';
  const labelClass = 'block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-16">
        <div className="w-14 h-14 rounded-full bg-green-50 border-2 border-green-600 flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">Inquiry Received</h3>
        <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
          Thank you. Our sales team will respond to your inquiry within 1 business day.
        </p>
        <a href="mailto:oswaloptical@yahoo.co.in" className="mt-6 text-xs font-bold text-amber-600 hover:text-amber-700 uppercase tracking-widest">
          Or email us directly →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>Company Name</label>
        <input type="text" name="company" required className={inputClass} placeholder="Your company name" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Your Name</label>
          <input type="text" name="name" required className={inputClass} placeholder="Full name" />
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input type="tel" name="phone" required className={inputClass} placeholder="+91" />
        </div>
      </div>
      <div>
        <label className={labelClass}>Product / Requirements</label>
        <textarea
          name="message"
          rows={3}
          required
          className={`${inputClass} resize-none`}
          placeholder="Describe the products, quantities, or applications you need"
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600 font-medium border border-red-200 bg-red-50 px-4 py-2">
          {errorMsg}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-amber-600 text-white font-bold uppercase tracking-widest text-sm py-4 hover:bg-amber-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
      </button>
    </form>
  );
}

// ── Hazard categories with clean SVG icons (no emojis) ──
const HAZARD_CATEGORIES = [
  {
    label: 'Intense Heat & IR',
    href: '/products?cat=Furnace Goggles',
    sublabel: 'Furnace & Smelter',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    label: 'Arc & Sparks',
    href: '/products?cat=Welding Goggles',
    sublabel: 'Welding & Cutting',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: 'Chemical Splash',
    href: '/products?cat=Chemical Splash Goggles',
    sublabel: 'Sealed Eye Protection',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-7.3-7.104c.251.023.501.05.75.082M4.5 19.5h15" />
      </svg>
    ),
  },
  {
    label: 'Impact & Dust',
    href: '/products?cat=Safety Goggles',
    sublabel: 'Polycarbonate Protection',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

// ── Pull up to 4 featured products from existing data ──
const FEATURED_IDS = ['welding-din-5', 'furnace-face-shield', 'chemical-splash-goggle', 'oswal-boss-toughened-glass'];

export default function Home() {
  const featuredProducts = FEATURED_IDS
    .map(id => productsData.find((p: any) => p.id === id))
    .filter(Boolean) as any[];

  // Fallback: if the specific IDs aren't found, grab first 4 non-subproducts
  const displayProducts = featuredProducts.length >= 2
    ? featuredProducts
    : (productsData as any[]).filter(p => !p.isSubProduct).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">

      {/* ─── HERO ─── */}
      <section className="w-full bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left: Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-0.5 bg-amber-500"></div>
              <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.25em]">Manufacturer · Since 1983</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6">
              Industrial Safety<br />
              <span className="text-amber-500">Eyewear</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              OSWAL Industries manufactures CLI Approved and IS&nbsp;5983&nbsp;/ 1980 certified safety eyewear for steel plants, foundries, chemical plants, construction, and heavy engineering industries across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/products"
                className="bg-amber-600 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-amber-700 transition-colors text-center"
              >
                View Products
              </Link>
              <a
                href="#inquiry"
                className="border border-slate-500 text-slate-200 font-bold uppercase tracking-widest text-sm px-8 py-4 hover:border-white hover:text-white transition-colors text-center"
              >
                Bulk Quotation
              </a>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative bg-slate-800 border border-slate-700 w-full max-w-[420px] aspect-square flex items-center justify-center p-8">
              <img
                src="/products/oswal-boss-clear-economy/boss design .jpeg"
                alt="OSWAL Safety Eyewear"
                className="w-full h-full object-contain"
                style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.4))' }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-sm px-4 py-3 border-l-2 border-amber-500">
                <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-0.5">OSWAL Boss Series</p>
                <p className="text-sm font-semibold text-white">CLI Approved · IS 5983 / 1980</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATION STRIP ─── */}
      <section className="w-full bg-amber-600 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8 text-sm font-bold uppercase tracking-widest">
          <span>CLI Approved</span>
          <span className="hidden md:block text-amber-400">|</span>
          <span>IS 5983 / 1980 Certified</span>
          <span className="hidden md:block text-amber-400">|</span>
          <span>ISO 9001 : 2015</span>
          <span className="hidden md:block text-amber-400">|</span>
          <span>Manufactured in India</span>
        </div>
      </section>

      {/* ─── PROTECTION BY HAZARD ─── */}
      <section className="py-16 md:py-24 w-full bg-white px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-amber-600 text-xs font-bold uppercase tracking-[0.25em] mb-2">Protection By Hazard</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Find The Right Eyewear</h2>
            <p className="mt-3 text-slate-500 max-w-xl text-base leading-relaxed">
              Select your primary workplace hazard to browse the recommended safety eyewear for your application.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HAZARD_CATEGORIES.map(cat => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group border border-slate-200 bg-white p-6 hover:border-amber-500 hover:bg-amber-50 transition-all flex flex-col gap-4"
              >
                <div className="text-slate-500 group-hover:text-amber-600 transition-colors">
                  {cat.icon}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm uppercase tracking-wide leading-snug group-hover:text-amber-700 transition-colors">
                    {cat.label}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">{cat.sublabel}</p>
                </div>
                <span className="text-xs font-bold text-amber-600 mt-auto group-hover:underline">View products →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-16 md:py-24 w-full bg-slate-50 px-6 md:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-amber-600 text-xs font-bold uppercase tracking-[0.25em] mb-2">Product Range</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Our Products</h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold uppercase tracking-widest text-slate-600 border border-slate-300 px-5 py-2.5 hover:border-slate-900 hover:text-slate-900 transition-colors self-start md:self-auto"
            >
              View Full Catalog →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200">
            {displayProducts.map((p: any) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="group bg-white p-6 flex flex-col hover:bg-slate-50 transition-colors"
              >
                <div className="aspect-square bg-slate-50 flex items-center justify-center mb-4 overflow-hidden border border-slate-100">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.prodname}
                      className="w-full h-full object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-slate-300 text-xs font-bold uppercase tracking-widest">No Image</div>
                  )}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1">{p.category}</p>
                <h3 className="text-sm font-bold text-slate-900 uppercase leading-snug group-hover:text-amber-700 transition-colors">{p.prodname}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANUFACTURING STORY ─── */}
      <section className="py-16 md:py-24 w-full bg-white px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-amber-600 text-xs font-bold uppercase tracking-[0.25em] mb-2">About Us</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-6">
                Four Decades of Industrial Eye Protection
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Founded in 1983 in Davanagere, Karnataka, OSWAL Industries manufactures a complete range of industrial safety eyewear including polycarbonate goggles, cobalt blue furnace glasses, welding helmets, chemical splash goggles, and laser protection.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Our products meet CLI Approval and IS 5983 / 1980 certification requirements. We supply to steel plants, foundries, pharmaceutical manufacturers, construction firms, and heavy engineering units across India.
              </p>
              <Link
                href="/about"
                className="inline-block border border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs px-6 py-3 hover:bg-slate-900 hover:text-white transition-colors"
              >
                About OSWAL Industries →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '1983', label: 'Year Established' },
                { value: '40+', label: 'Years Manufacturing' },
                { value: 'CLI', label: 'Approved' },
                { value: 'IS 5983', label: 'Certified' },
              ].map(item => (
                <div key={item.label} className="border border-slate-200 p-6 text-center">
                  <div className="text-3xl md:text-4xl font-black text-amber-600 mb-1">{item.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── INQUIRY SECTION ─── */}
      <section id="inquiry" className="py-16 md:py-24 w-full bg-slate-50 px-4 sm:px-6 md:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-slate-200 bg-white overflow-hidden shadow-sm">

            {/* Left: Contact Info */}
            <div className="bg-slate-900 text-white p-8 sm:p-12 md:p-16 flex flex-col justify-center">
              <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.25em] mb-3">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Bulk Orders & Quotations</h2>
              <p className="text-slate-300 text-base leading-relaxed mb-10">
                We supply safety eyewear to industries, contractors, and distributors across India. Contact us for bulk pricing, custom orders, or tender requirements.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 border border-slate-700 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-0.5">Phone</p>
                    <a href="tel:+919535354312" className="text-white font-bold text-base hover:text-amber-400 transition-colors">+91 95353 54312</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 border border-slate-700 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-0.5">Email</p>
                    <a href="mailto:oswaloptical@yahoo.co.in" className="text-white font-medium text-sm hover:text-amber-400 transition-colors break-all">oswaloptical@yahoo.co.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 border border-slate-700 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-0.5">Address</p>
                    <p className="text-slate-300 font-medium text-sm leading-relaxed">OSWAL Industries<br />Davanagere, Karnataka, India</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">GST No.</p>
                  <p className="font-mono text-slate-300 text-sm tracking-wider">29AAFPO7702C1ZT</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-8 sm:p-12 md:p-16">
              <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-8">Send An Inquiry</h3>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
