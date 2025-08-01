import React from "react";
import { useNavigate } from "react-router-dom";
import inventoryPicture from "../assets/FOE.jpg"; // change path to your actual image
// import reportPicture from "../assets/report.jpg";       // change path to your actual image

const AdminDashboard = () => {
  const navigate = useNavigate();

  // This function will navigate to the inventory dashboard
 const goToFOEDashboard = () => {
  navigate("/foe_dashboard");
};

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <div className="d-flex flex-wrap justify-content-center gap-4">

        {/* FOE Card */}
        <div className="card" style={{ width: "15rem" }}>
          <img src={inventoryPicture} className="card-img-top" alt="Inventory" />
          <div className="card-body themed-card-body">
            <h5 className="card-title">Faculty Of Engineering</h5>
            <p className="card-text">FOE</p>
            <button onClick={goToFOEDashboard} className="btn btn-primary">Go</button>

          </div>
        </div>

        {/* FOS Card */}
        <div className="card" style={{ width: "15rem" }}>
          <img src={inventoryPicture} className="card-img-top" alt="Inventory" />
          <div className="card-body themed-card-body">
            <h5 className="card-title">Faculty Of sciences</h5>
            <p className="card-text">FOS</p>
            <button  className="btn btn-primary">Go</button>
          </div>
        </div>

        {/* FOB Card */}
        <div className="card" style={{ width: "15rem" }}>
          <img src={inventoryPicture} className="card-img-top" alt="Inventory" />
          <div className="card-body themed-card-body">
            <h5 className="card-title">Faculty Of Business and Economics</h5>
            <p className="card-text">FOB</p>
            <button  className="btn btn-primary">Go</button>
          </div>
        </div>

        {/* FOM Card */}
        <div className="card" style={{ width: "15rem" }}>
          <img src={inventoryPicture} className="card-img-top" alt="Inventory" />
          <div className="card-body themed-card-body">
            <h5 className="card-title">Faculty Of Management</h5>
            <p className="card-text">FOM</p>
            <button  className="btn btn-primary">Go</button>
          </div>
        </div>


        {/* Reports Card (Display Only) */}
        {/* <div className="card" style={{ width: "18rem" }}>
          <img src={reportPicture} className="card-img-top" alt="Reports" />
          <div className="card-body themed-card-body">
            <h5 className="card-title">Reports Module (Coming Soon)</h5>
            <p className="card-text">Data analytics and visual reports will be available here.</p>
            <button className="btn btn-secondary" disabled>Coming Soon</button>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default AdminDashboard;
