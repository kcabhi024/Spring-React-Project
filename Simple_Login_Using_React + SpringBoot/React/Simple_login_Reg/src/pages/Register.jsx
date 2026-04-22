import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      throw new Error("Server error");
    }

    const data = await res.json();

    if (data) {
      alert("Registered successfully");
      navigate("/login");
    } else {
      alert("Email already exists");
    }
  } catch (error) {
    console.log(error);
    alert("Network error");
  }
};
  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="primary-btn" onClick={handleRegister}>
          Register
        </button>

        {/* Google UI (future integration) */}
        <button className="google-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="google"
          />
          Sign up with Google
        </button>

        <p className="switch-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}