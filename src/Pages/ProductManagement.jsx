import React from "react";
import Sidebar from "../components/Sidebar";

const products = [
  { id: 1, name: "Bead A", price: 10, stock: 50 },
  // Add more products as needed
];

const ProductManagement = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "2rem" }}>
        <h2>Product Management</h2>
        <button
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            cursor: "pointer",
            marginBottom: "1rem",
          }}
        >
          Add New Product
        </button>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "#f4f4f4",
                  border: "1px solid #ddd",
                  padding: "0.5rem",
                }}
              >
                ID
              </th>
              <th
                style={{
                  backgroundColor: "#f4f4f4",
                  border: "1px solid #ddd",
                  padding: "0.5rem",
                }}
              >
                Name
              </th>
              <th
                style={{
                  backgroundColor: "#f4f4f4",
                  border: "1px solid #ddd",
                  padding: "0.5rem",
                }}
              >
                Price
              </th>
              <th
                style={{
                  backgroundColor: "#f4f4f4",
                  border: "1px solid #ddd",
                  padding: "0.5rem",
                }}
              >
                Stock
              </th>
              <th
                style={{
                  backgroundColor: "#f4f4f4",
                  border: "1px solid #ddd",
                  padding: "0.5rem",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {product.id}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {product.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  ${product.price}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {product.stock}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  <button style={{ marginRight: "0.5rem" }}>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ProductManagement;
