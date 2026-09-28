import React from 'react';
import { Search, User, ShoppingBag, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-black tracking-tighter uppercase font-sans">
        Vapor Store
      </div>

      {/* Nav Links */}
      <ul className="hidden lg:flex items-center gap-8 font-semibold text-sm tracking-wide">
        <li className="cursor-pointer hover:text-gray-600">HOME</li>
        <li className="cursor-pointer hover:text-gray-600 flex items-center gap-1">
          SHOP <ChevronDown size={14} />
        </li>
        <li className="cursor-pointer hover:text-gray-600">NEW ARRIVALS</li>
        <li className="cursor-pointer hover:text-gray-600">COLLECTIONS</li>
        <li className="cursor-pointer hover:text-gray-600">SALE</li>
        <li className="cursor-pointer hover:text-gray-600">ABOUT US</li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-5 text-gray-800">
        <Search className="cursor-pointer hover:text-black" size={20} />
        <User className="cursor-pointer hover:text-black" size={20} />
        <div className="relative cursor-pointer">
          <ShoppingBag className="hover:text-black" size={20} />
          <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}