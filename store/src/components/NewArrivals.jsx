import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { productsData } from '../data/products';

export default function NewArrivals() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
          New Arrivals
        </h2>
        <Link to="/shop" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-gray-600 transition-colors">
          View All <ArrowRight size={16} />
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {productsData.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="group flex flex-col cursor-pointer">
            <div className="relative bg-gray-100 rounded-md overflow-hidden aspect-[3/4] mb-3">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button 
                onClick={(e) => { e.preventDefault(); }} 
                className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 hover:text-black hover:bg-white transition-all"
              >
                <Heart size={16} />
              </button>
            </div>

            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-1 line-clamp-1">
              {product.title}
            </h3>
            <p className="text-sm font-medium text-gray-800 mb-2">
              {product.price}
            </p>

            <div className="flex items-center gap-1.5">
              {product.colors.map((colorClass, idx) => (
                <span 
                  key={idx} 
                  className={`w-3 h-3 rounded-full border border-gray-300 ${colorClass}`}
                />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}