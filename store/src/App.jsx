import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <TopBar />
      <Navbar />
      <Hero />
      <Features />
      <Categories />

      {/* Next components like Hero, Categories, NewArrivals will go here */}
    </div>
  );
}