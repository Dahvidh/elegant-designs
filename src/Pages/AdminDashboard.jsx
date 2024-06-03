import React from "react";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "2rem" }}>
        <h2>Admin Dashboard</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              backgroundColor: "#f8f8f8",
              padding: "1rem",
              textAlign: "center",
              flex: 1,
              margin: "0 1rem",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Total Sales</h3>
            <p>$10,000</p>
          </div>
          <div
            style={{
              backgroundColor: "#f8f8f8",
              padding: "1rem",
              textAlign: "center",
              flex: 1,
              margin: "0 1rem",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Total Orders</h3>
            <p>500</p>
          </div>
          <div
            style={{
              backgroundColor: "#f8f8f8",
              padding: "1rem",
              textAlign: "center",
              flex: 1,
              margin: "0 1rem",
            }}
          >
            <h3 style={{ marginTop: 0 }}>New Users</h3>
            <p>50</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
