import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import NewArrivals from '../components/NewArrivals';
import PromoBanners from '../components/PromoBanners';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <NewArrivals />
      <PromoBanners />
    </>
  );
}