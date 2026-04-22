import { useState } from "react";
import axios from "axios";
import "./auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        await axios.post("http://localhost:8080/api/auth/login", {
          email: form.email,
          password: form.password
        });
        alert("Login Success");
      } else {
        await axios.post("http://localhost:8080/api/auth/register", form);
        alert("Register Success");
        setIsLogin(true);
      }
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className="auth-wrapper">

      <div className="auth-card">

        {/* LEFT SIDE */}
        <div className={`panel ${isLogin ? "active" : ""}`}>
          <h2>Login</h2>

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button onClick={handleSubmit}>Login</button>

          <p onClick={() => setIsLogin(false)}>
            Don't have account? Register
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className={`panel ${!isLogin ? "active" : ""}`}>
          <h2>Register</h2>

          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button onClick={handleSubmit}>Register</button>

          <p onClick={() => setIsLogin(true)}>
            Already have account? Login
          </p>
        </div>

      </div>
    </div>
  );
}