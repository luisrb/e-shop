import { useEffect, useState } from "react";
import { getAllProducts } from "../services/product";

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return { products };
}

export default useProducts;
