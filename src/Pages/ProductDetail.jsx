import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const product = {
  id: 1,
  name: "Bead A",
  price: 10,
  description: "Beautiful bead",
  image: "link-to-image-a",
};

const ProductDetail = () => {
  return (
    <>
      <Header />
      <div
        style={{
          border: "1px solid #ddd",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div style={{ textAlign: "center" }}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <label style={{ display: "block", marginBottom: "1rem" }}>
            Quantity:
            <input type="number" min="1" max="99" defaultValue="1" />
          </label>
          <button
            style={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "0.5rem 1rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
