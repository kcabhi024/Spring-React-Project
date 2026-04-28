// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand brand-logo" to="/">
          🐾 PetFood
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="nav">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">

            {/* Search */}
            <div className="search-box">
              <input type="text" placeholder="Search..." />
            </div>

            {/* Cart */}
            <Link to="/cart" className="cart-btn">
              🛒 <span className="cart-count">2</span>
            </Link>

            {/* Login */}
            <Link to="/Auth" className="login-btn">
              Login
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;