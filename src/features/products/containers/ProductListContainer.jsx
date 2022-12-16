import { useContext } from "react";
import ProductItem from "../components/ProductItem";
import { ProductsContext } from "../context/ProductsContext";
import "./ProductListContainer.css";

function ProductListContainer() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="product-container">
      {products.length > 0 &&
        products.map((product) => {
          return <ProductItem key={product.id} productData={product} />;
        })}

      {products.length === 0 && (
        <p className="product-container__no-products">No products found! :(</p>
      )}
    </div>
  );
}

export default ProductListContainer;
