import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      
      <div className="product-image">
        <img
          src={product.image || "https://via.placeholder.com/300x200"}
          alt={product.name}
        />
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>
        <p className="price">Rs {product.price}</p>
        <p className="category">{product.category}</p>

        <button className="view-btn">View Product</button>
      </div>

    </div>
  );
}

export default ProductCard;