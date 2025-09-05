

import React, { useEffect, useState } from "react";
import Navbar from "../Nav/Navbar";
import course_management from "../assets/FOE.jpg"; // replace with your actual image path

const AdminDashboard = () => {
  const [faculties, setFaculties] = useState([]);

  // Fetch all faculties from backend
  const fetchFaculties = async () => {
    try {
      const res = await fetch("http://localhost:5000/faculties/all");
      const data = await res.json();
      if (res.ok) {
        setFaculties(data.faculties); // since your controller sends { success, faculties }
      }
    } catch (err) {
      console.error("Error fetching faculties:", err);
    }
  };

  useEffect(() => {
    fetchFaculties();
  }, []);

  return (
    <>
      <Navbar pageType="AdminDashboard" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Faculties</h2>

        <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  }}>
          {faculties.map((faculty) => (
            <div
              key={faculty.id}
              className="card"
              style={{
                width: "17rem",
                background: "#fff",
                borderRadius: "1rem",
                boxShadow: "0 4px 24px rgba(0,33,71,0.10)",
                border: "1.5px solid #002147",
                fontFamily: "Segoe UI, Arial, sans-serif",
                minHeight: "340px",
              }}
            >
              <img
                src={course_management}
                className="card-img-top"
                alt={faculty.name}
                style={{
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                  height: "140px",
                  objectFit: "cover",
                }}
              />
              <div
                className="card-body d-flex flex-column justify-content-between"
                style={{
                  background: "#fff",
                  color: "#002147",
                  borderRadius: "0 0 1rem 1rem",
                  flex: 1,
                }}
              >
                <div className="text-center">
                  <h5
                    className="card-title"
                    style={{
                      fontWeight: 700,
                      color: "#002147",
                      fontSize: "1.15rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {faculty.name}  {/* Faculty Name */}
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      color: "#002147",
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {/* Department: {faculty.department} Department */}
                  </p>
                </div>
                <button
                  className="btn w-100 mt-auto"
                  style={{
                    background:
                      "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)",
                    color: "#002147",
                    borderRadius: "25px",
                    fontWeight: 700,
                    border: "none",
                  }}
                >
                  View Faculty
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
