import { useState } from "react";
import axios from "axios";
import "./AddProduct.css";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/products", product);
      alert("✅ Product added successfully!");

      // reset form after submit
      setProduct({ name: "", price: "", category: "" });
    } catch (error) {
      alert("❌ Failed to add product");
      console.error(error);
    }
  };

  return (
    <div className="add-product-container">
      <h2>➕ Add Product</h2>

      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;