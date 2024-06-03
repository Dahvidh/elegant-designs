import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products"); // To Replace the URL with backend endpoint here
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div
        className="home-page"
        style={{
          textAlign: "center",
          backgroundColor: "#eee",
          padding: "2rem",
          fontSize: "1.5rem",
        }}
      >
        <h1>Products</h1>
        <div
          className="products"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: "2rem",
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              className="product-card"
              style={{
                textAlign: "center",
                margin: "1rem",
                width: "30%",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                transition: "0.3s",
                borderRadius: "5px",
                padding: "1rem",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", borderRadius: "5px 5px 0 0" }}
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
