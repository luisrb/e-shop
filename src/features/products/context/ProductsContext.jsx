import { createContext } from "react";
import { removeAccents } from "../../../utils/removeAccents";
import useProducts from "../hooks/useProducts";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const { products, productsFiltered, setProductsFiltered } = useProducts();

  const handleSearchChange = (value) => {
    const valueWithoutAccentsAndLowerCase = removeAccents(value).toLowerCase();

    const newProducts = products.filter((product) => {
      const titleWithoutAccentsAndLowerCase = removeAccents(
        product.title
      ).toLowerCase();

      return titleWithoutAccentsAndLowerCase.includes(
        valueWithoutAccentsAndLowerCase
      );
    });

    setProductsFiltered(newProducts);
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsFiltered, filter: handleSearchChange }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
