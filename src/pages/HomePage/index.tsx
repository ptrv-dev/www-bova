import React from 'react';
import Advantages from '../../components/HomePage/Advantages';
import Categories from '../../components/HomePage/Categories';
import DeliveryAndPay from '../../components/HomePage/DeliveryAndPay';
import Hero from '../../components/HomePage/Hero';
import Popular from '../../components/HomePage/Popular';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Categories />
      <Advantages />
      <DeliveryAndPay />
    </>
  );
};

export default HomePage;
