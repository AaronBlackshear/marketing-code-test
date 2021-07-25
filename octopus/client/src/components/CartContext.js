import React, { useState } from 'react'

export const CartContext = React.createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item, quantity) => {
    const cartItemsCopy = { ...cartItems };
    if (cartItemsCopy[item.id]) {
      cartItemsCopy[item.id] = {
        product: item,
        quantity: quantity + cartItemsCopy[item.id].quantity
      }
    } else {
      cartItemsCopy[item.id] = {
        product: item,
        quantity
      }
    }
    setCartItems(cartItemsCopy);
  };

  const removeFromCart = (id) => {
    const cartItemsCopy = { ...cartItems };
    delete cartItemsCopy[id];
    setCartItems(cartItemsCopy);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems,
      cartOpen,
      setCartOpen,
      addToCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
