import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import NewArrivals from './components/NewArrivals';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <TopBar />
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <NewArrivals />
      {/* Next up: Promo Banners and Footer */}
    </div>
  );
}