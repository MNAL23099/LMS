import { useState } from "react";
import Navbar from "../Nav/Navbar";

function AddStudent() {
  const [studentName, setStudentName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [batch, setBatch] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: studentName, rollNumber, batch }),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.error) {
          window.alert("Error: " + resData.error);
        } else {
          window.alert("Student added successfully!");
          // optionally reset form
          setStudentName("");
          setRollNumber("");
          setBatch("");
        }
      })
      .catch((err) => {
        console.error(err);
        window.alert("Something went wrong. Please try again!");
      });
  };

  return (
    <>
      <Navbar pageType="Add Student" />

      <div
        style={{
          minHeight: "100vh",
          background: "#f5f6fa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={submitForm}
          style={{
            background: "#fff",
            borderRadius: "18px",
            boxShadow:
              "0 8px 32px 0 rgba(0,33,71,0.10), 0 2px 8px 0 rgba(0,33,71,0.08)",
            padding: "2rem 2.2rem",
            maxWidth: "370px",
            width: "100%",
            border: "2px solid #002147",
            color: "#002147",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "1.5rem",
              color: "#002147",
              fontWeight: 800,
              letterSpacing: "1px",
              fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
            }}
          >
            Add Student
          </h2>

          {/* Name */}
          <div className="mb-3">
            <label
              className="form-label"
              style={{ fontWeight: 500, color: "#002147" }}
            >
              Name
            </label>
            <input
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              type="text"
              className="form-control"
              style={{
                borderRadius: "8px",
                background: "#fff",
                color: "#002147",
                border: "1px solid #0056b3",
              }}
            />
          </div>

          {/* Roll Number */}
          <div className="mb-3">
            <label
              className="form-label"
              style={{ fontWeight: 500, color: "#002147" }}
            >
              Roll Number
            </label>
            <input
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              type="text"
              className="form-control"
              style={{
                borderRadius: "8px",
                background: "#fff",
                color: "#002147",
                border: "1px solid #0056b3",
              }}
            />
          </div>

          {/* Batch */}
          <div className="mb-3">
            <label
              className="form-label"
              style={{ fontWeight: 500, color: "#002147" }}
            >
              Batch
            </label>
            <input
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              type="text"
              className="form-control"
              style={{
                borderRadius: "8px",
                background: "#fff",
                color: "#002147",
                border: "1px solid #0056b3",
              }}
            />
          </div>

          <button
            type="submit"
            className="inventory-go-btn w-100"
            style={{
              borderRadius: "25px",
              fontWeight: 700,
              fontSize: "1.1rem",
              background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)",
              color: "#002147",
              border: "none",
              boxShadow: "0 2px 8px 0 rgba(0,33,71,0.10)",
              marginTop: "1rem",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddStudent;
