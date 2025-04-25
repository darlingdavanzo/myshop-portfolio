import React from 'react';
import Hero from '../components/Hero/Hero';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import IrregularGrid from '../components/IrregularGrid/IrregularGrid';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="py-12 px-4">
        <IrregularGrid />
        <FeaturedProducts />
      </section>
    </>
  );
};

export default HomePage;
