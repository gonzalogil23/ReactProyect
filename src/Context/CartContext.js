import React, { createContext, useState } from "react";
import { createOrder } from "../service/cartService";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [order, setOrder] = useState({});

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

  const createNewOrder = async ({ name, email, phone, address, city }) => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.qty;
    });
    const order = {
      buyer: {
        name,
        email,
        phone,
        address,
        city,
      },
      items: cartItems,
      total,
    };
    const newOrder = await createOrder(order);
    debugger;
    setOrder(newOrder);
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartItems,
        addToCart,
        deleteItem,
        createNewOrder,
        order,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
