import Navbar from "../Nav/Navbar";
import { useNavigate } from "react-router-dom";
import allocateInventory from "../assets/allocateInventory.png";
import courseAssignment from "../assets/courseAssignment.png";

import React, { useEffect } from "react";


const StudentDashboard = () => {


  return (
    <>
      <Navbar pageType="StudentDashboard"/>
      <div style={{ minHeight: '100vh', background: '#fff', paddingTop: '2rem' }}>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {/* View Courses Card */}
          <div className="card" style={{ width: "17rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px' }}>
            <img src={allocateInventory} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>View Enrolled Courses</h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>can view the courses being enrolled in </p>
              </div>
              <button className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* Upload Lab Card */}
          <div className="card" style={{ width: "17rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px' }}>
            <img src={courseAssignment} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Upload Labs</h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>can uplaod the lab </p>
              </div>
              <button  className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>

          {/* View Marks Card */}
          <div className="card" style={{ width: "17rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px' }}>
            <img src={courseAssignment} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>View Marks </h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}> the marks for checked labs will be displayed here  </p>
              </div>
              <button  className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;