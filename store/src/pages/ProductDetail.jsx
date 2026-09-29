import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState('');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-black uppercase mb-4">Product Not Found</h2>
        <Link to="/shop" className="bg-black text-white px-6 py-3 text-xs uppercase font-bold tracking-wider">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1 && product.sizes[0] !== "One Size") {
      alert("Please select a size first!");
      return;
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Back link */}
      <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft size={16} /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[3/4] shadow-sm">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>

        {/* Product Details & Actions */}
        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{product.category}</span>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-1">{product.title}</h1>
            <p className="text-2xl font-bold text-gray-900 mt-2">{product.price}</p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-900">Select Size</label>
              <div className="flex gap-3">
                {product.sizes.map((size, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 text-gray-800 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart CTA */}
          <div className="pt-4">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-black text-white font-bold uppercase text-xs sm:text-sm py-4 tracking-wider hover:bg-gray-800 transition-colors shadow-sm"
            >
              {added ? "Added to Bag ✓" : "Add to Cart"}
            </button>
          </div>

          {/* Extra Info Badges */}
          <div className="border-t border-gray-200 pt-6 space-y-3 text-xs text-gray-600">
            <div className="flex items-center gap-3">
              <Truck size={18} className="text-black" />
              <span>Free standard shipping on orders over $100</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw size={18} className="text-black" />
              <span>30-day hassle-free return policy</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-black" />
              <span>100% secure checkout and data encryption</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}