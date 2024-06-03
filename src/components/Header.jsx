import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        padding: "1rem 2rem",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Elegant Designs
      </div>
      <nav
        style={{
          margin: "0 1rem",
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#333",
          }}
        >
          Home
        </a>
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#333",
          }}
        >
          Shop
        </a>
        <a
          href="/about"
          style={{
            textDecoration: "none",
            color: "#333",
          }}
        >
          About
        </a>
        <a
          href="/cart"
          style={{
            textDecoration: "none",
            color: "#333",
          }}
        >
          Cart
        </a>
        <a
          href="/login"
          style={{
            textDecoration: "none",
            color: "#333",
          }}
        >
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;
