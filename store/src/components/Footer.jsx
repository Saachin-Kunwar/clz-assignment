import React from 'react';
import { Mail, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Newsletter Box */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-md p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-black rounded-full border border-neutral-800">
              <Mail className="text-yellow-400" size={24} />
            </div>
            <div>
              <h4 className="font-bold uppercase text-sm sm:text-base tracking-wide">Stay in the Loop</h4>
              <p className="text-xs text-neutral-400">New drops, exclusive offers, and more.</p>
            </div>
          </div>
          
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-black border border-neutral-800 text-sm px-4 py-3 rounded-l text-white focus:outline-none focus:border-yellow-400 w-full md:w-80"
            />
            <button className="bg-yellow-400 text-black font-bold uppercase text-xs px-6 py-3 rounded-r tracking-wider hover:bg-yellow-500 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-black tracking-tighter uppercase">URBANX</h2>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Streetwear made for the bold. Designed to break the norm. Worn worldwide.
            </p>
            <div className="flex items-center gap-4 text-neutral-400 pt-2">
              <Instagram size={18} className="hover:text-yellow-400 cursor-pointer" />
              <Twitter size={18} className="hover:text-yellow-400 cursor-pointer" />
              <Youtube size={18} className="hover:text-yellow-400 cursor-pointer" />
              <Facebook size={18} className="hover:text-yellow-400 cursor-pointer" />
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase text-xs tracking-widest text-yellow-400">Shop</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="hover:text-white cursor-pointer">All Products</li>
              <li className="hover:text-white cursor-pointer">Hoodies</li>
              <li className="hover:text-white cursor-pointer">T-Shirts</li>
              <li className="hover:text-white cursor-pointer">Pants</li>
              <li className="hover:text-white cursor-pointer">Jackets</li>
              <li className="hover:text-white cursor-pointer">Accessories</li>
              <li className="hover:text-white cursor-pointer">Sale</li>
            </ul>
          </div>

          {/* Customer Care Links */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase text-xs tracking-widest text-yellow-400">Customer Care</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Shipping & Delivery</li>
              <li className="hover:text-white cursor-pointer">Returns & Exchanges</li>
              <li className="hover:text-white cursor-pointer">Size Guide</li>
              <li className="hover:text-white cursor-pointer">Track Order</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase text-xs tracking-widest text-yellow-400">Company</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Story</li>
              <li className="hover:text-white cursor-pointer">Sustainability</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Wholesale</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Payment Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 URBANX. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>NEP / BTL</span>
            <span>🔒 Secure Checkout</span>
          </div>
        </div>

      </div>
    </footer>
  );
}