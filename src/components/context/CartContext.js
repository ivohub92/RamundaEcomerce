import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const isInCart = (id) => items.find((i) => i.item.id === id) !== undefined;
  const clear = () => {setItems([]);};
  const cartSize = () => items.reduce((a, cu) => a + cu.quantity, 0);
  const removeItem = (id) => {
    setItems(items.filter((i) => i.item.id !== id));
  };

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setItems(
        items.map((e) => {
          if (e.item.id === item.id) e.quantity = e.quantity + quantity;
          return e;
        })
      );
    } else {
      setItems([...items, { item, quantity }]);
    }
  };

  useEffect(() => {
    console.log("Cart", items);
  }, [items]);

  
  return (
    <CartContext.Provider value={{ items, addItem, isInCart, removeItem, clear, cartSize }}>
      {children}
    </CartContext.Provider>
  );
};
