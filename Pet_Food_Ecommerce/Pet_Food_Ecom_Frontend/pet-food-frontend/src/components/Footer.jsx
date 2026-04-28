// src/components/Footer.jsx
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container py-5">
        <div className="row">

          {/* Logo + About */}
          <div className="col-md-3">
            <h4 className="footer-logo">🐾 PetFood</h4>
            <p>Your trusted pet food store in Nepal. Quality food for happy pets.</p>
          </div>

          {/* Categories */}
          <div className="col-md-3">
            <h5>Categories</h5>
            <ul className="footer-links">
              <li>Dog Food</li>
              <li>Cat Food</li>
              <li>Bird Food</li>
              <li>Fish Food</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>Home</li>
              <li>Products</li>
              <li>Cart</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h5>Subscribe</h5>
            <div className="d-flex">
              <input className="form-control" placeholder="Email" />
              <button className="btn btn-success ms-2">Join</button>
            </div>

            <div className="social-icons mt-3">
              <span>🌐</span>
              <span>📘</span>
              <span>📸</span>
              <span>🐦</span>
            </div>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p>© 2026 PetFood Nepal | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;