import React, { createContext, useState, useEffect } from "react";

//creo context
export const CartContext = createContext([]);

//creo componente
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const totalCompra = () => {
    return items.reduce((acc, el) => el.item.price * el.quantity + acc, 0);
  };

  //reviso si existe en cart
  const isInCart = (id) => items.find((e) => e.item.id === id) !== undefined;
  //borro en cart
  const clear = () => {
    setItems([]);
  };
  //tamaño del carrito
  const cartSize =
    items.length > 0 ? items.reduce((acc, cur) => acc + cur.quantity, 0) : 0;

  //buscar item 
  const getItem = (id) => items.find((e) => e.item.id === id);

  //Remover los items
  const removeItems = (id, ammount) => {
    if (getItem(id).quantity > ammount) {
      setItems(
        items.map((e) => {
          if (e.item.id === id) e.quantity -= ammount;
          return e;
        })
      );
    } else {
      removeItem(id);
    }
  };

  //remover un solo item
  const removeItem = (id) => {
    setItems(items.filter((e) => e.item.id !== id));
  };

  //agrego items
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setItems(
        items.map((i) => {
          if (i.item.id === item.id) i.quantity = i.quantity += quantity;
          return i;
        })
      );
    } else {
      setItems([...items, { item, quantity }]);
    }
  };

  // Mostrar en consika
  useEffect(() => {
    console.log("cart", items);
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addItem, isInCart, removeItem, clear,cartSize, removeItems, totalCompra, }}>
      {children}
    </CartContext.Provider>
  );
};
