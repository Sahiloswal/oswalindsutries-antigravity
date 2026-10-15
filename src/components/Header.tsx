'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LeadGenerationGate from './LeadGenerationGate';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Library', href: '/library' },
    { label: 'Contact', href: '/#inquiry' },
  ];

  return (
    <>
      {/* ─── Top Contact Bar ─── */}
      <div className="print:hidden w-full bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-1.5 flex justify-end items-center gap-6 text-xs text-slate-400 font-medium">
          <a href="mailto:oswaloptical@yahoo.co.in" className="hover:text-white transition-colors hidden md:block">
            oswaloptical@yahoo.co.in
          </a>
          <a href="tel:+919535354312" className="hover:text-white transition-colors">
            +91 95353 54312
          </a>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400">Davanagere, Karnataka</span>
        </div>
      </div>

      {/* ─── Main Header ─── */}
      <header className="print:hidden w-full bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="OSWAL Industries Home" onClick={() => setMobileMenuOpen(false)}>
            <div className="flex flex-col leading-none">
              <span className="text-[22px] md:text-[28px] font-black tracking-tighter text-slate-900 uppercase leading-none">OSWAL</span>
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] text-amber-600 uppercase mt-0.5">Industries</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200 ml-1"></div>
            <span className="hidden sm:block text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-tight max-w-[80px]">Safety<br/>Eyewear</span>
          </Link>

          {/* Nav (Desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = pathname === link.href || (link.href !== '/' && link.href !== '/#inquiry' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors rounded-sm ${
                    isActive
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTAs (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <LeadGenerationGate
              fileUrl="/catalog"
              fileName="OSWAL Master Catalog"
              buttonText="Download Catalog"
            />
            <a
              href="mailto:oswaloptical@yahoo.co.in"
              className="bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-amber-600 transition-colors"
            >
              Request Quote
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white">
            <nav className="flex flex-col px-4 py-2">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 hover:text-amber-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="py-4 flex flex-col gap-3">
                <LeadGenerationGate
                  fileUrl="/catalog"
                  fileName="OSWAL Master Catalog"
                  buttonText="Download Catalog"
                />
                <a
                  href="mailto:oswaloptical@yahoo.co.in"
                  className="block text-center bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-5 py-3 hover:bg-amber-600 transition-colors"
                >
                  Request Quote
                </a>
                <div className="flex flex-col gap-1 pt-2">
                  <a href="mailto:oswaloptical@yahoo.co.in" className="text-xs text-slate-500">oswaloptical@yahoo.co.in</a>
                  <a href="tel:+919535354312" className="text-xs font-bold text-slate-700">+91 95353 54312</a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
