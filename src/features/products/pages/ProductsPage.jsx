import { ProductsProvider } from "../context/ProductsContext";
import "./ProductsPage.css";

function ProductsPage() {
  return (
    <div className="products-page">
      <ProductsProvider>
        <h1>Product List</h1>
      </ProductsProvider>
    </div>
  );
}

export default ProductsPage;
