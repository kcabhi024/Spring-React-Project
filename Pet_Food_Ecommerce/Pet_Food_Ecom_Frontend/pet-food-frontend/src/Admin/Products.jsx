import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AdminProduct.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/products");
      setProducts(res.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/products/${id}`);

      // remove instantly from UI (better than reload)
      setProducts(products.filter((p) => p.id !== id));

    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h2>📦 Products</h2>

        <Link className="add-btn" to="/admin/add-product">
          ➕ Add Product
        </Link>
      </div>

      <div className="admin-grid">

        {products.map((p) => (
          <div className="admin-card" key={p.id}>

            <img
              src={p.image || "https://via.placeholder.com/300"}
              alt={p.name}
            />

            <div className="admin-content">
              <h3>{p.name}</h3>
              <p>Category: {p.category}</p>
              <p className="price">Rs {p.price}</p>

              <div className="admin-actions">

                <Link className="edit-btn" to={`/admin/edit-product/${p.id}`}>
                  ✏ Edit
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(p.id)}
                >
                  ❌ Delete
                </button>

              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;