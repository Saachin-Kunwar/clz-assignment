import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sliding Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white text-gray-900 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} />
              <h2 className="font-black uppercase tracking-wider text-sm">Your Shopping Bag</h2>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <ShoppingBag size={48} className="mx-auto text-gray-300" />
                <p className="text-gray-500 text-sm font-medium">Your bag is currently empty.</p>
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-20 object-cover rounded bg-gray-100" />
                  <div className="flex-1">
                    <h4 className="font-bold text-xs uppercase tracking-wide text-gray-900 line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Size: <span className="font-semibold text-gray-800">{item.size || "Standard"}</span></p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    <p className="text-sm font-bold text-gray-900 mt-1">{item.price}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-gray-400 hover:text-red-600 p-2 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-6 space-y-4 bg-gray-50">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-600 uppercase tracking-wider text-xs">Subtotal</span>
                <span className="font-black text-base">${totalPrice}</span>
              </div>
              <p className="text-[11px] text-gray-500">Shipping & taxes calculated at checkout.</p>
              <button 
                onClick={() => alert("Checkout functionality coming soon!")}
                className="w-full bg-black text-white font-bold uppercase text-xs py-4 tracking-widest hover:bg-gray-800 transition-colors shadow-sm"
              >
                Proceed to Checkout
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}