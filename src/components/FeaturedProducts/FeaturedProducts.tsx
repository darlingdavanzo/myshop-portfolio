// src/components/FeaturedProducts/FeaturedProducts.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import ProductCard from '../ProductCard/ProductCard';
import type { Product } from '../../types';
import { fetchAllProducts } from '../../services/products';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { 
      staggerChildren: 0.2, 
      delayChildren: 0.1 
    }
  }
};

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchAllProducts().then(setProducts);
  }, []);

  const featured = products.slice(0, 3);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-extrabold text-emerald-600">Featured Products</h2>
        <p className="mt-2 text-gray-600">
          Handpicked favorites just for you.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {featured.map((prod) => (
          <ProductCard 
            key={prod.id}
            id={prod.id}
            name={prod.name}
            price={prod.price}
            imageUrl={prod.imageUrl}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;
