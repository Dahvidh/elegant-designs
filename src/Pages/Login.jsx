import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <div
        className="login-page"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f8f8f8",
        }}
      >
        <form
          className="login-form"
          style={{
            backgroundColor: "#fff",
            padding: "2rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
          }}
        >
          <h2 style={{ marginTop: "0" }}>Login</h2>
          <label style={{ display: "block", marginBottom: "1rem" }}>
            Email:
            <input
              type="email"
              name="email"
              required
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
          <label style={{ display: "block", marginBottom: "1rem" }}>
            Password:
            <input
              type="password"
              name="password"
              required
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </label>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.5rem",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Login
          </button>
          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{ color: "#333", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
