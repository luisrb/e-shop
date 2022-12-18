import { useContext } from "react";
import ProductDetail from "../components/ProductDetail";
import { ProductDetailContext } from "../context/ProductDetailContext";

function ProductDescriptionContainer() {
  const { product } = useContext(ProductDetailContext);

  if (!product) {
    return null;
  }

  return (
    <>
      <ProductDetail product={product} />
    </>
  );
}

export default ProductDescriptionContainer;
