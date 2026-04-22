import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  // Dummy data (later replace with API)
  useEffect(() => {
    setProducts([
      { id: 1, name: "iPhone 15", price: 1200, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Samsung S24", price: 1100, image: "https://via.placeholder.com/150" },
      { id: 3, name: "MacBook Pro", price: 2500, image: "https://via.placeholder.com/150" },
      { id: 4, name: "AirPods Pro", price: 250, image: "https://via.placeholder.com/150" },
      { id: 5, name: "Smart Watch", price: 199, image: "https://via.placeholder.com/150" },
    ]);
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔥 Featured Products</h1>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            
            <img src={p.image} alt={p.name} style={styles.image} />

            <h3>{p.name}</h3>
            <p style={styles.price}>${p.price}</p>

            <button onClick={() => addToCart(p)} style={styles.button}>
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    background: "#f4f6f9",
    minHeight: "100vh",
  },

  title: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  price: {
    color: "#6a11cb",
    fontWeight: "bold",
  },

  button: {
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(90deg, #6a11cb, #2575fc)",
    color: "white",
    cursor: "pointer",
  },
};

export default Home;