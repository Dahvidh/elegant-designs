import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
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
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "0.5rem 1rem",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
