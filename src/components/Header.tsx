'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ─── Top Bar ─── */}
      <div className="print:hidden w-full bg-gray-100 border-b border-gray-200">
        <div className="w-full px-4 md:px-8 xl:px-16 mx-auto py-2 flex justify-center md:justify-end items-center gap-4 md:gap-6 text-[11px] md:text-sm text-gray-600 font-semibold">
          <span className="hidden md:inline">📧 oswaloptical@yahoo.co.in</span>
          <span>📞 +91 9535354312</span>
          <span className="hidden md:inline">📍 Davanagere, Karnataka</span>
        </div>
      </div>

      {/* ─── Main Header ─── */}
      <header className="print:hidden w-full bg-white border-b border-gray-200 shadow-sm relative z-50">
        <div className="w-full px-4 md:px-8 xl:px-16 mx-auto flex items-center justify-between h-[70px] md:h-[90px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="OSWAL Industries Home" onClick={() => setMobileMenuOpen(false)}>
            <div className="flex flex-col leading-none">
              <span className="text-[28px] md:text-[48px] font-black tracking-tighter text-gray-900 uppercase">OSWAL</span>
              <span className="text-[9px] md:text-[14px] font-black tracking-[0.38em] text-[#7AC142] uppercase mt-0.5 md:mt-1">Industries</span>
              <span className="text-[7px] md:text-[12px] font-bold tracking-widest text-gray-500 uppercase mt-0.5 md:mt-1">Since 1983</span>
            </div>
          </Link>

          {/* Nav (Desktop) */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/products" className="text-lg font-bold uppercase text-gray-700 hover:text-[#7AC142] transition-colors py-2 border-b-2 border-transparent hover:border-[#7AC142]">
              Products
            </Link>
            <Link href="/about" className="text-lg font-bold uppercase text-gray-700 hover:text-[#7AC142] transition-colors py-2 border-b-2 border-transparent hover:border-[#7AC142]">
              About Us
            </Link>
            <Link href="/library" className="text-lg font-bold uppercase text-gray-700 hover:text-[#7AC142] transition-colors py-2 border-b-2 border-transparent hover:border-[#7AC142]">
              Library
            </Link>
            <Link href="/#contact" className="text-lg font-bold uppercase text-gray-700 hover:text-[#7AC142] transition-colors py-2 border-b-2 border-transparent hover:border-[#7AC142]">
              Contact
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:oswaloptical@yahoo.co.in"
              className="hidden md:inline-block bg-[#7AC142] text-white text-base font-bold uppercase px-8 py-4 rounded hover:bg-gray-800 transition-colors tracking-wider"
            >
              Request Quote
            </a>

            {/* Hamburger Button */}
            <button 
              className="md:hidden p-2 text-gray-900 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[70px] left-0 w-full bg-white border-b border-gray-200 shadow-xl flex flex-col py-4 px-6 z-40">
            <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="text-lg font-black uppercase text-gray-900 py-3 border-b border-gray-100">
              Products
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-black uppercase text-gray-900 py-3 border-b border-gray-100">
              About Us
            </Link>
            <Link href="/library" onClick={() => setMobileMenuOpen(false)} className="text-lg font-black uppercase text-gray-900 py-3 border-b border-gray-100">
              Technical Library
            </Link>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-black uppercase text-gray-900 py-3 border-b border-gray-100">
              Contact
            </Link>
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
              <a href="mailto:oswaloptical@yahoo.co.in" className="text-sm font-bold text-[#7AC142]">📧 oswaloptical@yahoo.co.in</a>
              <a href="tel:+919535354312" className="text-sm font-bold text-gray-700">📞 +91 9535354312</a>
              <span className="text-sm font-medium text-gray-500">📍 Davanagere, Karnataka</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
