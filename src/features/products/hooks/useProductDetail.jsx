import { useEffect, useState } from "react";
import { getProductById } from "../services/product";

function useProductDetail(id) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((product) => {
      setProduct(product);
    });
  }, []);

  return product;
}
export default useProductDetail;
