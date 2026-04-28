import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Admin.css";

function AdminDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  const total = products.length;
  const active = products.filter(p => p.active).length;
  const inactive = products.filter(p => !p.active).length;

  return (
    <div className="admin">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">🐾 PetAdmin</h2>

        <nav>
          <Link to="/admin" className="nav-item">Dashboard</Link>
          <Link to="/admin/products" className="nav-item">Products</Link>
          <Link to="/admin/add-product" className="nav-item">Add Product</Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="main">
        <h1 className="title">Dashboard</h1>

        {/* Cards */}
        <div className="card-grid">
          <div className="card">
            <h3>Total Products</h3>
            <p>{total}</p>
          </div>

          <div className="card">
            <h3>Active</h3>
            <p>{active}</p>
          </div>

          <div className="card">
            <h3>Inactive</h3>
            <p>{inactive}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="actions">
          <Link to="/admin/add-product" className="btn primary">
            ➕ Add Product
          </Link>

          <Link to="/admin/products" className="btn secondary">
            📦 Manage Products
          </Link>
        </div>
      </main>

    </div>
  );
}

export default AdminDashboard;