import { createContext } from "react";
import useProducts from "../hooks/useProducts";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const { products, handleFilter } = useProducts();

  return (
    <ProductsContext.Provider value={{ products, filter: handleFilter }}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
