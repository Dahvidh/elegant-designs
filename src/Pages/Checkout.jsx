import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Checkout = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Billing Information</h2>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "1rem" }}>
            Name:
            <input
              type="text"
              name="name"
              style={{ padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
          <label style={{ marginBottom: "1rem" }}>
            Address:
            <input
              type="text"
              name="address"
              style={{ padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
          <label style={{ marginBottom: "1rem" }}>
            Email:
            <input
              type="email"
              name="email"
              style={{ padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
          <label style={{ marginBottom: "1rem" }}>
            Phone:
            <input
              type="tel"
              name="phone"
              style={{ padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
        </form>
        <h2 style={{ marginTop: "2rem" }}>Payment Information</h2>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "1rem" }}>
            Credit Card Number:
            <input
              type="text"
              name="cardNumber"
              style={{ padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
          <label style={{ marginBottom: "1rem" }}>
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              style={{ padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
          <label style={{ marginBottom: "1rem" }}>
            CVV:
            <input
              type="text"
              name="cvv"
              style={{ padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
        </form>
        <div style={{ marginTop: "2rem", textAlign: "right" }}>
          <p>Order Summary: $100</p>
          <button
            style={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "0.5rem 1rem",
              border: "none",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
