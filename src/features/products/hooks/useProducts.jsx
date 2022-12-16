import { useEffect, useState } from "react";
import { getAllProducts } from "../services/product";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState(products);

  useEffect(() => {
    getAllProducts().then((products) => {
      setProducts(products);
      setProductsFiltered(products);
    });
  }, []);

  return { products, productsFiltered, setProductsFiltered };
}

export default useProducts;
