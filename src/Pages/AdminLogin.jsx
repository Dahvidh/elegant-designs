import React from "react";

const AdminLogin = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          width: "300px",
        }}
      >
        <h2>Admin Login</h2>
        <label style={{ display: "block", marginBottom: "1rem" }}>
          Username:
          <input
            type="text"
            name="username"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "1rem" }}>
          Password:
          <input
            type="password"
            name="password"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
        </label>
        <button
          style={{
            width: "100%",
            padding: "0.5rem",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
