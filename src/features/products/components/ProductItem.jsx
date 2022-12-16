import { Link } from "react-router-dom";
import "./ProductItem.css";

function ProductItem({ productData }) {
  if (!productData) {
    return null;
  }

  return (
    <Link to={`/${productData.id}`}>
      <div className="product">
        <div className="product__image">
          <img src={productData.image} alt={productData.title} />
        </div>
        <div className="product__info">
          <h3 className="product__name">{productData.title}</h3>
          <p className="product__price">{productData.price}€</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
