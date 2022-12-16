import { createContext, React, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const initialState = JSON.parse(localStorage.getItem("products")) || [];
  const [products, setProducts] = useState(initialState);

  const addProduct = (value) => {
    setProducts(value);
    persistProducts([...products, value]);
  };

  const persistProducts = (value) => {
    localStorage.setItem("products", JSON.stringify(value));
  };

  return (
    <ShoppingCartContext.Provider value={{ products, addProduct }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
export { ShoppingCartProvider, ShoppingCartContext };
