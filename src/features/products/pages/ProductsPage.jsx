import { ProductsProvider } from "../context/ProductsContext";
import ProductSearcherContainer from "./../containers/ProductSearcherContainer";
import "./ProductsPage.css";

function ProductsPage() {
  return (
    <div className="products-page">
      <ProductsProvider>
        <ProductSearcherContainer />
      </ProductsProvider>
    </div>
  );
}

export default ProductsPage;
