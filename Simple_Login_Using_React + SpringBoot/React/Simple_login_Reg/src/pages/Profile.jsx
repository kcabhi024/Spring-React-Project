import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user?.email,
          password: newPassword,   // 🔥 MUST be "password"
        }),
      });

      const msg = await res.text();
      alert(msg);
      setNewPassword("");
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Profile</h2>

        <p><b>Name:</b> {user?.name}</p>
        <p><b>Email:</b> {user?.email}</p>

        <hr />

        <h3>Change Password</h3>

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleChangePassword} style={styles.button}>
          Update Password
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "60px",
  },
  card: {
    width: "380px",
    padding: "25px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    borderRadius: "12px",
    background: "#fff",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};