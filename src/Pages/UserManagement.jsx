import React from "react";
import Sidebar from "../components/Sidebar";

const users = [
  { id: 1, name: "User A", email: "usera@example.com" },
  // Add more users as needed
];

const UserManagement = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "2rem" }}>
        <h2>User Management</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "0.5rem",
                  backgroundColor: "#f4f4f4",
                }}
              >
                ID
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "0.5rem",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Name
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "0.5rem",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Email
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "0.5rem",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {user.id}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {user.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {user.email}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  <button style={{ marginRight: "0.5rem" }}>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default UserManagement;
