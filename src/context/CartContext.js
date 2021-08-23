import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // DEFINIR:

  // addItem
  // isInCart
  // clear
  // removeItem

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems([...items, item]);
    setItems(newItems);
  };

  useEffect(() => {
    console.log("cart", items);
  }, [items]);

  return (
    <CartContext.Provider value={{  addItem, items  }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

