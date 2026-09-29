import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart (with selected size)
  const addToCart = (product, selectedSize) => {
    setCart((prevCart) => {
      // Check if exact product with same size already exists
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.size === selectedSize
      );

      if (existingIndex > -1) {
        // If it exists, increase quantity
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += 1;
        return newCart;
      } else {
        // Otherwise add new item
        return [...prevCart, { ...product, size: selectedSize, quantity: 1 }];
      }
    });
    setIsCartOpen(true); // Automatically open cart drawer when added
  };

  // Remove item from cart
  const removeFromCart = (id, size) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.size === size)));
  };

  // Total items count for badge
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Total price calculator
  const totalPrice = cart.reduce((sum, item) => {
    const cleanPrice = parseFloat(item.price.replace('$', ''));
    return sum + cleanPrice * item.quantity;
  }, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}