import React from 'react';
import Categories from '../../components/HomePage/Categories';
import Hero from '../../components/HomePage/Hero';
import Popular from '../../components/HomePage/Popular';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Categories />
    </>
  );
};

export default HomePage;
