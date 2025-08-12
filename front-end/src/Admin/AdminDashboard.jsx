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
        <div className="d-flex flex-wrap justify-content-center gap-4" style={{marginTop: '3rem'}}>
          {/* FOE Card */}
          <div className="card d-flex flex-column justify-content-between" style={{ width: "15rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem' }}>
            <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Faculty Of Engineering</h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>FOE</p>
              </div>
              <button onClick={goToFOEDashboard} className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* FOS Card */}
          <div className="card d-flex flex-column justify-content-between" style={{ width: "15rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem' }}>
            <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Faculty Of Sciences</h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>FOS</p>
              </div>
              <button className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* FOB Card */}
          <div className="card d-flex flex-column justify-content-between" style={{ width: "15rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem' }}>
            <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Faculty Of Business and Economics</h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>FOB</p>
              </div>
              <button className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* FOM Card */}
          <div className="card d-flex flex-column justify-content-between" style={{ width: "15rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem' }}>
            <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Faculty Of Management</h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>FOM</p>
              </div>
              <button className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
