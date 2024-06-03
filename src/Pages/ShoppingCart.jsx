import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import { CartContext } from "..content/CartContext.jsx";

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext();
  //CartContext
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div style={{ padding: "2rem" }}>
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            <span>{item.name}</span>
            <span>${item.price}</span>
            <span>Quantity: {item.quantity}</span>
            <button
              style={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "0.5rem 1rem",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}

        <div style={{ textAlign: "right", padding: "1rem 0" }}>
          <p>Total: ${totalPrice}</p>
          <button
            style={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "0.5rem 1rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Proceed to Checkout
          </button>
          <button
            style={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "0.5rem 1rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Guest Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
