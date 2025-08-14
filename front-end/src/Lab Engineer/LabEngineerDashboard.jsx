import Navbar from "../Nav/Navbar";
import { useNavigate } from "react-router-dom";
import inventoryPicture from "../assets/FOE.jpg"; 
import viewAssignedInventory from "../assets/viewAssignedInventory.png"; 

import React, { useEffect, useState } from "react";

function LabEngineerDashboard() {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);

 const goToViewAllocatedInventory = () => {
  navigate("/viewAllocatedInventory");
 }

  useEffect(() => {
    fetch("http://localhost:5000/labEngineer/dashboard")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setDashboardData(data.data);
        } else {
          console.error("Failed to fetch dashboard data:", data.message);
        }
      })
      .catch((err) => console.error("Error fetching dashboard data:", err));
  }, []);

  if (!dashboardData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar pageType="Lab Engineer Dashboard"/>
      <div>
       
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {/* View Inventory Card */}
          <div className="card" style={{ width: "15rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800" }}>
            <img src={viewAssignedInventory} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
              <h5 className="card-title" style={{ fontWeight: 700 }}>View Assigned Inventory</h5>
              <p className="card-text">See the inventory assigned to its respective lab </p>
              <button onClick={goToViewAllocatedInventory} className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* View Courses Card */}
          <div className="card" style={{ width: "15rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800" }}>
            <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
              <h5 className="card-title" style={{ fontWeight: 700 }}>View Assigned Courses</h5>
              <p className="card-text">See what courses it being given </p>
              <button className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* View Labs Card */}
          <div className="card" style={{ width: "15rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800" }}>
            <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
              <h5 className="card-title" style={{ fontWeight: 700 }}>View Assigned Labs </h5>
              <p className="card-text">See which labs are assigned to it </p>
              <button className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabEngineerDashboard;
