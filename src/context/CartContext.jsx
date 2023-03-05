import React, { createContext, useState } from 'react';

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add item to cart array
  const clearCart = () => {
    setCart([]);
  }

  // Function to add item to cart array
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let pos = cart.findIndex(x => x.id === item.id);
      cart[pos].quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, {...item, quantity:quantity}]);
    }
  }

  // Function to check if item exists in cart array
  const isInCart = (id) => {
    return cart.some(x => x.id === id);
  }
  
  // Function to remove item from cart array
  const removeItem = (id) => {
     const products = cart.filter(x => x.id !== id);
     setCart(products);
  }

  // Function to calculate total item quantity
  const cartTotalQuantity = () => {
    return cart.reduce((total, item) => total += item.quantity, 0);
  }

  // Function to calculate total item price
  const cartTotalPrice = () => {
    return cart.reduce((total, item) => total += (item.quantity * item.price), 0);
  }

  return (
    <CartContext.Provider value={{ cart, clearCart, addItem, removeItem, cartTotalQuantity, cartTotalPrice }}>
      { children }
    </CartContext.Provider>
  );
};

export default CartContextProvider;