import { createContext, useContext, useEffect } from "react";
import { BreadCrumbsProductNameContext } from "../../../context/BreadCrumbsProductName";
import useProductDetail from "../hooks/useProductDetail";

const ProductDetailContext = createContext();

function ProductDetailProvider({ children, id }) {
  const product = useProductDetail(id);

  const { changeProductName } = useContext(BreadCrumbsProductNameContext);

  useEffect(() => {
    if (product) {
      changeProductName(product.title);
    }
  }, [product]);

  return (
    <ProductDetailContext.Provider value={{ product }}>
      {children}
    </ProductDetailContext.Provider>
  );
}

export { ProductDetailContext, ProductDetailProvider };
