import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-black text-white text-xs py-2 px-4 flex justify-between items-center tracking-wider uppercase font-medium">
      <div className="flex items-center gap-2">
        <span>🚚 FREE SHIPPING ON ORDERS OVER $100</span>
      </div>
      <div className="hidden md:block text-center">
        <span>⚡ 10% OFF YOUR FIRST ORDER | CODE: STREET10</span>
      </div>
      <div className="flex items-center gap-4 text-gray-400">
        <span className="hover:text-white cursor-pointer">HELP & SUPPORT</span>
        <span className="hover:text-white cursor-pointer">TRACK ORDER</span>
      </div>
    </div>
  );
}