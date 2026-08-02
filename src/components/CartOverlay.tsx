'use client';

import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartOverlay() {
  const { items, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, clearCart } = useCart();

  if (!isCartOpen) return null;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSendEnquiry = () => {
    if (items.length === 0) return;
    
    const subject = encodeURIComponent("Product Enquiry from Catalog");
    
    let bodyText = "Hello OSWAL Industries,\n\nI would like to enquire about the following products:\n\n";
    
    items.forEach((item, idx) => {
      bodyText += `${idx + 1}. [${item.id}] ${item.prodname} - Quantity: ${item.quantity}\n`;
    });
    
    bodyText += "\n\nPlease let me know the pricing and availability.\n\nThank you,\n[Your Name]\n[Your Company]";
    
    const body = encodeURIComponent(bodyText);
    
    window.location.href = `mailto:oswaloptical@yahoo.co.in?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col no-print">
        <div className="p-6 bg-gray-900 text-white flex justify-between items-center">
          <h2 className="font-black uppercase tracking-widest text-lg">Your Enquiry List</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p className="font-bold uppercase tracking-widest text-xs">Your list is empty</p>
              <p className="text-sm mt-2">Add products from the catalog to generate an enquiry.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map(item => (
                <div key={item.id} className="border border-gray-200 p-4 relative group bg-gray-50">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                    title="Remove"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">ID: {item.id}</p>
                  <h3 className="text-sm font-bold text-gray-900 leading-tight pr-6 mb-3">{item.prodname}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-500 uppercase">Qty:</span>
                    <div className="flex items-center border border-gray-300 bg-white">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">-</button>
                      <input 
                        type="number" 
                        min="1" 
                        value={item.quantity} 
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="w-12 text-center text-sm font-bold border-x border-gray-300 py-1"
                      />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-sm uppercase text-gray-600">Total Items:</span>
            <span className="font-black text-xl">{totalItems}</span>
          </div>
          <button 
            onClick={handleSendEnquiry}
            disabled={items.length === 0}
            className={`w-full py-4 font-black uppercase tracking-widest text-sm transition-colors ${
              items.length > 0 ? 'bg-[#7AC142] hover:bg-gray-900 text-white shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Send Email Enquiry
          </button>
          {items.length > 0 && (
            <button onClick={clearCart} className="w-full text-center mt-3 text-xs font-bold text-gray-500 hover:text-red-500 uppercase tracking-widest">
              Clear List
            </button>
          )}
        </div>
      </div>
    </>
  );
}
