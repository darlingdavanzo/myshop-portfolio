import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import type { Product } from '../types';
import { fetchAllProducts } from '../services/products';

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchAllProducts().then(setProducts);
  }, []);

  return (
    <div className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(prod => (
        <ProductCard
          key={prod.id}
          id={prod.id}
          name={prod.name}
          price={prod.price}
          imageUrl={prod.imageUrl}
        />
      ))}
    </div>
  );
};

export default ShopPage;
