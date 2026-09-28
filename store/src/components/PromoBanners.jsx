import React from 'react';

export default function PromoBanners() {
  return (
    <section className="py-8 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Banner 1: Join the Movement */}
      <div className="relative group overflow-hidden rounded-md bg-[#121212] text-white p-8 sm:p-12 flex flex-col justify-between min-h-[350px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800" 
            alt="Be part of something real" 
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <div className="relative z-10 space-y-2">
          <span className="text-[11px] uppercase tracking-widest text-gray-300 font-semibold">
            Join the Movement
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
            Be Part of <br /> Something Real.
          </h3>
        </div>

        <div className="relative z-10 pt-6">
          <button className="bg-yellow-400 text-black font-bold uppercase text-xs px-6 py-3 tracking-wider hover:bg-yellow-500 transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Banner 2: Limited Drop */}
      <div className="relative group overflow-hidden rounded-md bg-[#121212] text-white p-8 sm:p-12 flex flex-col justify-between min-h-[350px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" 
            alt="Exclusive styles" 
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <div className="relative z-10 space-y-2">
          <span className="text-[11px] uppercase tracking-widest text-gray-300 font-semibold">
            Limited Drop
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
            Exclusive Styles. <br /> Limited Quantities.
          </h3>
        </div>

        <div className="relative z-10 pt-6">
          <button className="border border-white text-white font-bold uppercase text-xs px-6 py-3 tracking-wider hover:bg-white hover:text-black transition-colors">
            Explore Now
          </button>
        </div>
      </div>

    </section>
  );
}