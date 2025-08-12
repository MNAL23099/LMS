import Navbar from "../Nav/Navbar";
import { useNavigate } from "react-router-dom";
import inventoryPicture from "../assets/inventoryAssign.png";
import courseAssignPicture from "../assets/course_assignment.png";
import allocateInventory from "../assets/allocateInventory.png";
import React, { useEffect } from "react";

// import AssignInventory from "./assignInventoryToLab";
const LabSubDashboard = () => {

  const navigate = useNavigate();

 useEffect(() => {
  const userEmail = localStorage.getItem("email"); 
    fetch("http://localhost:5000/LabSub/getAssignedLabs?email=test@example.com") 
          .then(res => {
            if (!res.ok) throw new Error(`HTTP error ${res.status}`);
            return res.json();
          })
          .then(data => console.log(data))
          .catch(err => console.error("Fetch error:", err));
      }, []);
  function goToCourseDasboard(){
    navigate("/Coursessubdash");
  }

  function goToAllocateInventory()
  {
    navigate("/InventoryAllocation");
  }
 
  return (
    <>
      <Navbar pageType="Lab Sub Manager Dashboard"/>
      <div>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {/* Inventory Allocation Card */}
          <div className="card" style={{ width: "15rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800" }}>
            <img src={allocateInventory} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
              <h5 className="card-title" style={{ fontWeight: 700 }}>Inventory Allocation</h5>
              <p className="card-text">Request and Assign inventory</p>
              <button onClick={goToAllocateInventory} className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "none", objectFit: "contain", padding: "10px" }}>Go</button>
            </div>
          </div>
          {/* Course Assignment  Card */}
          <div className="card" style={{ width: "15rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800" }}>
            <img src={courseAssignPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
              <h5 className="card-title" style={{ fontWeight: 700 }}>Course Assignment</h5>
              <p className="card-text"> Assign the courses to labs </p>
              <button onClick={goToCourseDasboard} className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default LabSubDashboard;
