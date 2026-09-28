import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      title: "CHAOS TEE - BLACK",
      price: "RS490.00",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=500",
      colors: ["bg-black", "bg-gray-500", "bg-white"]
    },
    {
      id: 2,
      title: "WASHED HOODIE - CHARCOAL",
      price: "Rs.890.00",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500",
      colors: ["bg-gray-800", "bg-stone-600"]
    },
    {
      id: 3,
      title: "UTILITY CARGO PANTS - BLACK",
      price: "Rs.999.00",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=500",
      colors: ["bg-black", "bg-neutral-700", "bg-amber-900"]
    },
    {
      id: 4,
      title: "SKETCH TEE - SAND",
      price: "Rs450.00",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=500",
      colors: ["bg-stone-300", "bg-black"]
    },
    {
      id: 5,
      title: "URBANX CAP - BLACK",
      price: "Rs455.00",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=500",
      colors: ["bg-black", "bg-emerald-900"]
    },
    {
      id: 6,
      title: "SOCIETY HOODIE - OLIVE",
      price: "Rs895.00",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=500",
      colors: ["bg-zinc-800", "bg-black"]
    }
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
          New Arrivals
        </h2>
        <a href="#view-all" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-gray-600 transition-colors">
          View All <ArrowRight size={16} />
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col cursor-pointer">
            {/* Image Container with Wishlist Icon */}
            <div className="relative bg-gray-100 rounded-md overflow-hidden aspect-[3/4] mb-3">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 hover:text-black hover:bg-white transition-all">
                <Heart size={16} />
              </button>
            </div>

            {/* Product Info */}
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-1 line-clamp-1">
              {product.title}
            </h3>
            <p className="text-sm font-medium text-gray-800 mb-2">
              {product.price}
            </p>

            {/* Color Swatches */}
            <div className="flex items-center gap-1.5">
              {product.colors.map((colorClass, idx) => (
                <span 
                  key={idx} 
                  className={`w-3 h-3 rounded-full border border-gray-300 Rs{colorClass}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}