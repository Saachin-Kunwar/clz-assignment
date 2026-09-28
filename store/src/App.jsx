import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import NewArrivals from './components/NewArrivals';
import PromoBanners from './components/PromoBanners';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <TopBar />
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <NewArrivals />
      <PromoBanners />
      <Footer />
    </div>
  );
}