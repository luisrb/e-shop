import { useContext } from "react";
import ProductSearcher from "../components/ProductSearcher";
import { ProductsContext } from "../context/ProductsContext";
import "./ProductSearcherContainer.css";

function ProductSearcherContainer() {
  const { filter } = useContext(ProductsContext);

  return (
    <div className="product-searcher-container">
      <ProductSearcher searchChange={filter} />
    </div>
  );
}

export default ProductSearcherContainer;
