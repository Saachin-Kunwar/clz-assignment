import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <TopBar />
      <Navbar />
      <Hero />
      {/* Next components like Hero, Categories, NewArrivals will go here */}
    </div>
  );
}