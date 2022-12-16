import "./ProductSearcher.css";

function ProductSearcher({ searchChange }) {
  function handleChange(event) {
    searchChange(event.target.value.trim());
  }

  return (
    <>
      <input type="text" placeholder="Search product" onChange={handleChange} />
    </>
  );
}

export default ProductSearcher;
