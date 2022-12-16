import { useContext } from "react";
import { ShoppingCartContext } from "../../../context/ShoppingCart";
import { ProductDetailContext } from "../context/ProductDetailContext";
import "./ProductActionsContainer.css";

function ProductActionsContainer() {
  const { addProduct, products } = useContext(ShoppingCartContext);
  const { product } = useContext(ProductDetailContext);

  const handleChange = () => {
    addProduct([...products, product]);
  };

  return (
    <div className="product-actions">
      <button onClick={handleChange}>Add to cart</button>
    </div>
  );
}

export default ProductActionsContainer;
