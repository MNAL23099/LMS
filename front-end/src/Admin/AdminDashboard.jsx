import Navbar from "../Nav/Navbar";
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
    <>
      <Navbar pageType="Admin Dashboard"/>
      <div>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {/* FOE Card */}
          <div className="card" style={{ width: "15rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800" }}>
            <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
              <h5 className="card-title" style={{ fontWeight: 700 }}>Faculty Of Engineering</h5>
              <p className="card-text">FOE</p>
              <button onClick={goToFOEDashboard} className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* FOS Card */}
          <div className="card" style={{ width: "15rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800" }}>
            <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
              <h5 className="card-title" style={{ fontWeight: 700 }}>Faculty Of sciences</h5>
              <p className="card-text">FOS</p>
              <button className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* FOB Card */}
          <div className="card" style={{ width: "15rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800" }}>
            <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
              <h5 className="card-title" style={{ fontWeight: 700 }}>Faculty Of Business and Economics</h5>
              <p className="card-text">FOB</p>
              <button className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* FOM Card */}
          <div className="card" style={{ width: "15rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800" }}>
            <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
              <h5 className="card-title" style={{ fontWeight: 700 }}>Faculty Of Management</h5>
              <p className="card-text">FOM</p>
              <button className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
