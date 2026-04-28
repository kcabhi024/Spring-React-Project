import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:8080/users");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/users/${id}`);
    alert("User deleted");
    fetchUsers();
  };

  return (
    <div>
      <h2>👤 Users</h2>

      {users.map((u) => (
        <div key={u.user_id} style={{ marginBottom: "10px" }}>
          <p>{u.name} - {u.email}</p>
          <button onClick={() => deleteUser(u.user_id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Users;