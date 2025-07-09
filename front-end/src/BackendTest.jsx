// Example: Connect React to Express backend
import React, { useEffect, useState } from "react";
import { fetchHello } from "./api";

function BackendTest() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchHello()
      .then((data) => setMessage(data.message))
      .catch((err) => setError("Failed to fetch from backend"));
  }, []);

  return (
    <div style={{margin: "2rem", padding: "1rem", border: "1px solid #ccc"}}>
      <h2>Backend Test</h2>
      {message && <p>Backend says: {message}</p>}
      {error && <p style={{color: "red"}}>{error}</p>}
    </div>
  );
}

export default BackendTest;
