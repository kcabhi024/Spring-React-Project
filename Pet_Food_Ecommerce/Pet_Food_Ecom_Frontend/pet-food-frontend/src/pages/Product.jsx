import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Product.css";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="product-page">

      <h2 className="title">🐾 All Products</h2>

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  );
}

export default Product;