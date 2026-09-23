"use client";

import React, { useState } from 'react';

interface PrintButtonProps {
  elementId?: string; 
  filename?: string;
  label?: string;
  className?: string;
}

export default function PrintButton({ elementId, filename = "OSWAL_Datasheet.pdf", label = "Download Data Sheet", className }: PrintButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePrint = () => {
    setIsGenerating(true);
    // Small delay so the spinner renders before the print dialog blocks the thread
    setTimeout(() => {
      window.print();
      setIsGenerating(false);
    }, 150);
  };

  const defaultClasses = "fixed bottom-8 right-8 bg-[#7AC142] hover:bg-gray-800 text-white px-6 py-3 rounded-full shadow-xl print:hidden transition-colors flex items-center gap-2 font-bold z-50 uppercase tracking-widest text-[12px]";
  const buttonClasses = className || defaultClasses;

  return (
    <button 
      onClick={handlePrint}
      disabled={isGenerating}
      className={`${buttonClasses} ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''} print:hidden`}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isGenerating ? (
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        ) : (
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        )}
      </svg>
      {isGenerating ? "Opening..." : label}
    </button>
  );
}
