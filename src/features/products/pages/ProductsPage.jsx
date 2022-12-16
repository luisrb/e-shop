import { ProductsProvider } from "../context/ProductsContext";
import ProductListContainer from "./../containers/ProductListContainer";
import ProductSearcherContainer from "./../containers/ProductSearcherContainer";
import "./ProductsPage.css";

function ProductsPage() {
  return (
    <div className="products-page">
      <ProductsProvider>
        <ProductSearcherContainer />
        <ProductListContainer />
      </ProductsProvider>
    </div>
  );
}

export default ProductsPage;
