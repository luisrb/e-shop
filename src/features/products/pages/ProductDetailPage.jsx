import { RiArrowLeftLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { ProductDetailProvider } from "../context/ProductDetailContext";
import "./ProductDetailPage.css";

function ProductDetailPage() {
  let { id } = useParams();

  return (
    <ProductDetailProvider id={id}>
      <Link to={`/`} className="go-back">
        <RiArrowLeftLine size="30" /> Go back
      </Link>
      <div className="product-page"></div>
    </ProductDetailProvider>
  );
}

export default ProductDetailPage;
