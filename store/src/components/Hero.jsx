import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-[#121212] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold bg-gray-800 px-3 py-1 rounded">
            New Collection
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
            Built Different. <br />
            <span className="text-yellow-400">Made to Stand Out.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            Premium streetwear for those who set their own rules.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-yellow-400 text-black font-bold uppercase text-xs sm:text-sm px-8 py-4 tracking-wider hover:bg-yellow-500 transition-colors">
              Shop Now
            </button>
            <button className="border border-white text-white font-bold uppercase text-xs sm:text-sm px-8 py-4 tracking-wider hover:bg-white hover:text-black transition-colors">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Right Column: Models & Banner Images */}
        <div className="lg:col-span-7 grid grid-cols-3 gap-4 relative">
          <div className="space-y-4 pt-8">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600" 
              alt="Streetwear model 1" 
              className="w-full h-72 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=600" 
              alt="Streetwear model 2" 
              className="w-full h-96 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="space-y-4 pt-12">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600" 
              alt="Streetwear model 3" 
              className="w-full h-72 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
}