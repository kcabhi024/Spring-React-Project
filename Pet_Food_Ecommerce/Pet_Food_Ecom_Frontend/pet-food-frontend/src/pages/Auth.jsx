// src/pages/Auth.jsx
import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import "./Auth.css";

function Auth() {
  const [mode, setMode] = useState("login"); // login | register
  const [showPass, setShowPass] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const BASE_URL = "http://localhost:8080/auth";

  // ================= HANDLE LOGIN / REGISTER =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(form.email)) {
      alert("Invalid email format");
      return;
    }

    try {
      // ================= LOGIN =================
      if (mode === "login") {
        const res = await axios.post(`${BASE_URL}/login`, {
          email: form.email,
          password: form.password,
        });

        console.log(res.data);

        alert(typeof res.data === "object"
          ? JSON.stringify(res.data)
          : res.data);

        if (res.data === "Login successful" || res.data?.email) {
          localStorage.setItem("isLoggedIn", "true");
          window.location.href = "/";
        }
      }

      // ================= REGISTER =================
      else {
        const res = await axios.post(`${BASE_URL}/register`, {
          name: form.username,   // IMPORTANT FIX
          email: form.email,
          password: form.password,
          phone: form.phone,
        });

        console.log(res.data);

        alert(typeof res.data === "object"
          ? JSON.stringify(res.data)
          : res.data);

        if (res.data === "User registered successfully") {
          setMode("login");
        }
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  // ================= GOOGLE LOGIN (UI ONLY) =================
  const handleGoogle = () => {
    alert("Google OAuth will be connected later");
  };

  // ================= FORGOT PASSWORD =================
  const handleForgot = () => {
    alert("Reset link sent to email");
    setForgotOpen(false);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        {/* LEFT */}
        <div className="auth-left">
          <h1>🐾 PetFood Nepal</h1>
          <p>Premium food for your pets</p>
        </div>

        {/* RIGHT */}
        <div className="auth-right">

          {/* SWITCH */}
          <div className="auth-switch">
            <button
              className={mode === "login" ? "active" : ""}
              onClick={() => setMode("login")}
            >
              Login
            </button>

            <button
              className={mode === "register" ? "active" : ""}
              onClick={() => setMode("register")}
            >
              Register
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit}>

            {/* LOGIN */}
            {mode === "login" && (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />

                <div className="pass-box">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                  <span onClick={() => setShowPass(!showPass)}>
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </>
            )}

            {/* REGISTER */}
            {mode === "register" && (
              <>
                <input
                  type="text"
                  placeholder="Username"
                  value={form.username}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[0-9]/g, "");
                    setForm({ ...form, username: value });
                  }}
                />

                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => {
                    let value = e.target.value.replace(/[^0-9]/g, "");
                    if (value.length > 10) value = value.slice(0, 10);
                    setForm({ ...form, phone: value });
                  }}
                />

                <div className="pass-box">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                  <span onClick={() => setShowPass(!showPass)}>
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </>
            )}

            <button className="primary-btn">
              {mode === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          {/* GOOGLE */}
          <button className="google-btn" onClick={handleGoogle}>
            <FaGoogle /> Continue with Google
          </button>

          {/* FORGOT */}
          {mode === "login" && (
            <p className="forgot" onClick={() => setForgotOpen(true)}>
              Forgot Password?
            </p>
          )}
        </div>
      </div>

      {/* MODAL */}
      {forgotOpen && (
        <div className="modal-bg">
          <div className="modal-box">
            <h3>Reset Password</h3>
            <input type="email" placeholder="Email" />
            <button onClick={handleForgot}>Send Reset Link</button>
            <span onClick={() => setForgotOpen(false)}>Close</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Auth;