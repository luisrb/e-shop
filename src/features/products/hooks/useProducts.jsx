import { useEffect, useState } from "react";
import { removeAccents } from "../../../utils/removeAccents";
import { getAllProducts } from "../services/product";

function useProducts() {
  const [productsOrigin, setProductsOrigin] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState(productsOrigin);

  useEffect(() => {
    getAllProducts().then((products) => {
      setProductsOrigin(products);
      setProductsFiltered(products);
    });
  }, []);

  const handleFilter = (value) => {
    const valueWithoutAccentsAndLowerCase = removeAccents(value).toLowerCase();

    const newProducts = productsOrigin.filter((product) => {
      const titleWithoutAccentsAndLowerCase = removeAccents(
        product.title
      ).toLowerCase();

      return titleWithoutAccentsAndLowerCase.includes(
        valueWithoutAccentsAndLowerCase
      );
    });

    setProductsFiltered(newProducts);
  };

  return { products: productsFiltered, handleFilter };
}

export default useProducts;
