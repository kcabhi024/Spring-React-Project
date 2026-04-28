import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./EditProduct.css";

function EditProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/products/${id}`, product);
      alert("✅ Product updated successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin">

      {/* ✅ SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">🐾 PetAdmin</h2>

        <nav>
          <Link to="/admin" className="nav-item">Dashboard</Link>
          <Link to="/admin/products" className="nav-item">Products</Link>
          <Link to="/admin/add-product" className="nav-item">Add Product</Link>
        </nav>
      </aside>

      {/* ✅ MAIN CONTENT */}
      <main className="content">
        <div className="edit-card">

          <h2>Edit Product</h2>

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              value={product.name}
              onChange={(e) =>
                setProduct({ ...product, name: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              min={100}
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
          </div>

          <button className="update-btn" onClick={handleUpdate}>
            Update Product
          </button>

        </div>
      </main>

    </div>
  );
}

export default EditProduct;