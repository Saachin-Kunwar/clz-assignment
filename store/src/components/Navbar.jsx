import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-black tracking-tighter uppercase font-sans">
        URBANX
      </Link>

      <ul className="hidden lg:flex items-center gap-8 font-semibold text-sm tracking-wide">
        <li><Link to="/" className="hover:text-gray-600 transition-colors">HOME</Link></li>
        <li>
          <Link to="/shop" className="hover:text-gray-600 flex items-center gap-1 transition-colors">
            SHOP <ChevronDown size={14} />
          </Link>
        </li>
        <li><Link to="/shop" className="hover:text-gray-600 transition-colors">NEW ARRIVALS</Link></li>
        <li><Link to="/shop" className="hover:text-gray-600 transition-colors">COLLECTIONS</Link></li>
        <li><Link to="/shop" className="hover:text-gray-600 transition-colors">SALE</Link></li>
        <li><Link to="/about" className="hover:text-gray-600 transition-colors">ABOUT US</Link></li>
      </ul>

      <div className="flex items-center gap-5 text-gray-800">
        <Search className="cursor-pointer hover:text-black" size={20} />
        <User className="cursor-pointer hover:text-black" size={20} />
        
        {/* Shopping bag opens cart drawer */}
        <div 
          onClick={() => setIsCartOpen(true)} 
          className="relative cursor-pointer"
        >
          <ShoppingBag className="hover:text-black" size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}