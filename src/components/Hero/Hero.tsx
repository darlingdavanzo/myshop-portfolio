// src/components/Hero/Hero.tsx
import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import heroImg from '../../assets/images/hero.jpg';

const Hero: React.FC = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] pt-16 overflow-hidden">
      <img
        src={heroImg}
        alt="E-commerce Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          Elevate Your Shopping Experience
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Discover curated products, seamless checkout, and exclusive deals—right at your fingertips.
        </motion.p>

        <motion.a
          href="/shop"
          className="inline-flex items-center bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.07 }}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <ShoppingBagIcon className="w-5 h-5 mr-2" />
          Shop Now
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
