'use client';

import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartFloatingButton() {
  const { items, setIsCartOpen } = useCart();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-6 right-6 bg-[#7AC142] text-white p-4 rounded-full shadow-2xl hover:bg-gray-900 transition-colors z-30 flex items-center justify-center group border-4 border-white no-print"
      aria-label="Open Enquiry Cart"
    >
      <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
          {totalItems}
        </span>
      )}
    </button>
  );
}
