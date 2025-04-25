import React from 'react';
import { useCart } from '../hooks/useCart';
import type { CartItem } from '../types';

const CartPage: React.FC = () => {
  const { items, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return <p className="p-6 text-center">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {items.map((item: CartItem) => (
          <li key={item.product.id} className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{item.product.name}</p>
              <p className="text-gray-500">${item.product.price.toFixed(2)} × {item.quantity}</p>
            </div>
            <button
              onClick={() => removeItem(item.product.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-right">
        <span className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartPage;
