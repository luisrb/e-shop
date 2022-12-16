import { createContext } from "react";
import useProductDetail from "../hooks/useProductDetail";

const ProductDetailContext = createContext();

function ProductDetailProvider({ children, id }) {
  const product = useProductDetail(id);

  return (
    <ProductDetailContext.Provider value={{ product }}>
      {children}
    </ProductDetailContext.Provider>
  );
}

export { ProductDetailContext, ProductDetailProvider };
