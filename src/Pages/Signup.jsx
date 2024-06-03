import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSubmit } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useSubmit();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("your-backend-api-url/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Something went wrong.");
      } else {
        // Redirect to login page after successful signup
        history.push("/login");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f8f8f8",
        }}
      >
        <form
          style={{
            backgroundColor: "#fff",
            padding: "2rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
          }}
          onSubmit={handleSubmit}
        >
          <h2 style={{ marginTop: "0" }}>Sign Up</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "1rem" }}
          >
            Name:
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
              required
            />
          </label>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "1rem" }}
          >
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
              required
            />
          </label>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "1rem" }}
          >
            Password:
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
              required
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "0.5rem",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              marginTop: "1rem",
            }}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#333", textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
