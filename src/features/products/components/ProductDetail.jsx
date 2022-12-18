import "./ProductDetail.css";

function ProductDetail({ product }) {
  return (
    <div className="product-page__detail">
      <h1>{product.title}</h1>
      <p>{product.description}</p>

      <h3>{product.price}€</h3>
    </div>
  );
}

export default ProductDetail;
