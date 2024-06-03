import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f8f8",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ marginRight: "1rem" }}>
        <a href="/policies" style={{ textDecoration: "none", color: "#333" }}>
          Policies
        </a>
        <a href="/contact" style={{ textDecoration: "none", color: "#333" }}>
          Contact
        </a>
      </div>
      <div>
        <a
          href="https://facebook.com"
          style={{ textDecoration: "none", color: "#333", marginRight: "1rem" }}
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          style={{ textDecoration: "none", color: "#333", marginRight: "1rem" }}
        >
          Twitter
        </a>
        <a
          href="https://instagram.com"
          style={{ textDecoration: "none", color: "#333" }}
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
