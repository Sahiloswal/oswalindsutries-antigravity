"use client";

import React from 'react';

export default function PrintButton() {
  return (
    <button 
      onClick={() => typeof window !== 'undefined' && window.print()}
      className="fixed bottom-8 right-8 bg-[#7AC142] text-white px-6 py-3 rounded-full shadow-xl print:hidden hover:bg-gray-800 transition-colors flex items-center gap-2 font-bold z-50 uppercase tracking-widest text-[12px]"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
      </svg>
      Print Data Sheet
    </button>
  );
}
