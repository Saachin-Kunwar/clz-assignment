import React from 'react';

export default function Categories() {
  const categories = [
    {
      title: "HOODIES",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "T-SHIRTS",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "PANTS",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "JACKETS",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "ACCESSORIES",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-center mb-10">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((cat, index) => (
          <div key={index} className="group relative overflow-hidden rounded-md bg-gray-100 cursor-pointer shadow-sm">
            <div className="h-72 w-full overflow-hidden">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="font-bold uppercase text-sm sm:text-base tracking-wide">{cat.title}</h3>
              <span className="text-xs text-yellow-400 font-semibold tracking-wider mt-1 underline underline-offset-4 group-hover:text-yellow-300">
                Shop Now
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}