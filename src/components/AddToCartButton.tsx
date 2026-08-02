'use client';

import { useCart } from '../context/CartContext';

interface AddToCartButtonProps {
  id: string;
  prodname: string;
}

export default function AddToCartButton({ id, prodname }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(id, prodname)}
      className="w-full mt-auto bg-gray-900 text-white py-2 text-[10px] font-black uppercase tracking-widest hover:bg-[#7AC142] transition-colors duration-200"
    >
      + Add to Enquiry
    </button>
  );
}
