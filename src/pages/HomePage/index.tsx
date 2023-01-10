import React from 'react';
import Advantages from '../../components/HomePage/Advantages';
import Categories from '../../components/HomePage/Categories';
import DeliveryAndPay from '../../components/HomePage/DeliveryAndPay';
import Hero from '../../components/HomePage/Hero';
import Popular from '../../components/HomePage/Popular';
import Reviews from '../../components/HomePage/Reviews';
import WeOnMap from '../../components/HomePage/WeOnMap';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Categories />
      <Advantages />
      <DeliveryAndPay />
      <Reviews />
      <WeOnMap />
    </>
  );
};

export default HomePage;
