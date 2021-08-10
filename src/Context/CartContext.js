import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, qty) => {
    if (cartItems.some((producto) => producto.name === item.name)) {
      const items = [...cartItems];
      const repIndex = cartItems.findIndex(
        (producto) => producto.name === item.name
      );
      items[repIndex] = {
        ...items[repIndex],
        qty: items[repIndex].qty + qty,
      };
      setCartItems(items);
    } else {
      setCartItems([...cartItems, { ...item, qty }]);
    }
    setCartCount((i) => i + qty);
  };

  const deleteItem = (itemToDelete) => {
    const newArray = cartItems.filter((item) => {
      return item.name !== itemToDelete.name;
    });
    setCartItems(newArray);
    setCartCount((i) => i - itemToDelete.qty);
  };

  return (
    <CartContext.Provider
      value={{ cartCount, cartItems, addToCart, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
