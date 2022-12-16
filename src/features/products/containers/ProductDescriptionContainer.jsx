import { useContext } from "react";
import { ProductDetailContext } from "../context/ProductDetailContext";
import "./ProductDescriptionContainer.css";

function ProductDescriptionContainer() {
  const { product } = useContext(ProductDetailContext);

  if (!product) {
    return null;
  }

  return (
    <div className="product-page__detail">
      <h1>{product.title}</h1>
      <p>{product.description}</p>

      <h3>{product.price}€</h3>
    </div>
  );
}

export default ProductDescriptionContainer;
