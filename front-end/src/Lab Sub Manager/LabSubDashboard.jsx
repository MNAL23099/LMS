import Navbar from "../Nav/Navbar";
import { useNavigate } from "react-router-dom";
// import inventoryPicture from "../assets/inventoryAssign.png";
// import courseAssignPicture from "../assets/course_assignment.png";
import allocateInventory from "../assets/allocateInventory.png";
import courseAssignment from "../assets/courseAssignment.png";

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
      <div style={{ minHeight: '100vh', background: '#fff', paddingTop: '2rem' }}>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {/* Inventory Allocation Card */}
          <div className="card" style={{ width: "17rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px' }}>
            <img src={allocateInventory} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Inventory Allocation</h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Request and Assign inventory</p>
              </div>
              <button onClick={goToAllocateInventory} className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* Course Assignment  Card */}
          <div className="card" style={{ width: "17rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px' }}>
            <img src={courseAssignment} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Course Assignment</h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Assign the courses to labs</p>
              </div>
              <button onClick={goToCourseDasboard} className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LabSubDashboard;
