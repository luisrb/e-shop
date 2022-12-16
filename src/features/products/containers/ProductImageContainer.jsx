import { useContext } from "react";
import { ProductDetailContext } from "../context/ProductDetailContext";
import "./ProductImageContainer.css";

function ProductImageContainer() {
  const { product } = useContext(ProductDetailContext);

  if (!product) {
    return null;
  }

  return (
    <div className="product-image-container">
      <img src={product.image} alt={product.title} />
    </div>
  );
}

export default ProductImageContainer;
