import { RiArrowLeftLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import ProductImageContainer from "../containers/ProductImageContainer";
import { ProductDetailProvider } from "../context/ProductDetailContext";
import ProductActionsContainer from "./../containers/ProductActionsContainer";
import ProductDescriptionContainer from "./../containers/ProductDescriptionContainer";
import "./ProductDetailPage.css";

function ProductDetailPage() {
  let { id } = useParams();

  return (
    <ProductDetailProvider id={id}>
      <Link to={`/`} className="go-back">
        <RiArrowLeftLine size="30" /> Go back
      </Link>
      <div className="product-page">
        <ProductImageContainer />

        <div>
          <ProductDescriptionContainer />
          <ProductActionsContainer />
        </div>
      </div>
    </ProductDetailProvider>
  );
}

export default ProductDetailPage;
