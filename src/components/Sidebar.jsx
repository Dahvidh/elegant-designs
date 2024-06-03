import React from "react";

const Sidebar = () => {
  return (
    <aside
      style={{ width: "200px", backgroundColor: "#f4f4f4", padding: "1rem" }}
    >
      <a
        href="/admin/dashboard"
        style={{
          display: "block",
          color: "#333",
          padding: "0.5rem 0",
          textDecoration: "none",
        }}
      >
        Dashboard
      </a>
      <a
        href="/admin/products"
        style={{
          display: "block",
          color: "#333",
          padding: "0.5rem 0",
          textDecoration: "none",
        }}
      >
        Products
      </a>
      <a
        href="/admin/orders"
        style={{
          display: "block",
          color: "#333",
          padding: "0.5rem 0",
          textDecoration: "none",
        }}
      >
        Orders
      </a>
      <a
        href="/admin/users"
        style={{
          display: "block",
          color: "#333",
          padding: "0.5rem 0",
          textDecoration: "none",
        }}
      >
        Users
      </a>
      <a
        href="/admin/settings"
        style={{
          display: "block",
          color: "#333",
          padding: "0.5rem 0",
          textDecoration: "none",
        }}
      >
        Settings
      </a>
    </aside>
  );
};

export default Sidebar;
