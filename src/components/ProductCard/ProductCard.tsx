// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import type { Product } from '../../types';
import { useCart } from '../../hooks/useCart';

interface ProductCardProps extends Product {}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl }) => {
  const { addItem } = useCart();

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
    >
      {/* Featured Ribbon */}
      <div className="absolute z-10 mt-3 ml-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded">
        Featured
      </div>

      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-500 mb-4">${price.toFixed(2)}</p>
        <button
          onClick={() => addItem({ id, name, price, imageUrl })}
          className="mt-auto inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:from-emerald-600 hover:to-emerald-700 transition"
        >
          <ShoppingCartIcon className="w-5 h-5 mr-2" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
