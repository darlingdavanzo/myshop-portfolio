import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import type { Product } from '../types';
import { fetchProductById } from '../services/products';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (id) fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading…</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl text-gray-700 mb-6">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addItem(product)}
        className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
