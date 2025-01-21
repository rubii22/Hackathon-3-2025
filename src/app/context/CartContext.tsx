'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';

interface CartItem {
  id: number;
  image: StaticImageData | string;
  productName: string;
  detail: string;
  quantity: number;
  price: string;
}

interface CartContextType {
  items: CartItem[]; // All items in the cart
  addItem: (item: CartItem) => void; // Add an item to the cart
  removeItem: (id: number) => void; // Remove an item from the cart by its ID
  updateQuantity: (id: number, type: 'increase' | 'decrease') => void; // Adjust item quantity
  clearCart: () => void; // Clear the entire cart
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setItems(parsedCart); // Load valid cart items
        } else {
          console.warn('Invalid cart data in localStorage');
        }
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  }, []);

  // Save cart items to localStorage whenever they are updated
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [items]);

  // Add an item to the cart
  const addItem = (newItem: CartItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        // Increase quantity if item already exists
        return currentItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + (newItem.quantity || 1) }
            : item
        );
      }
      // Add new item with default quantity of 1 if not specified
      return [...currentItems, { ...newItem, quantity: newItem.quantity || 1 }];
    });
  };

  // Update the quantity of a specific item in the cart
  const updateQuantity = (id: number, type: 'increase' | 'decrease') => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: type === 'increase' ? item.quantity + 1 : item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove items with a quantity of 0
    );
  };

  // Remove an item from the cart by its ID
  const removeItem = (id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  // Clear all items from the cart
  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
