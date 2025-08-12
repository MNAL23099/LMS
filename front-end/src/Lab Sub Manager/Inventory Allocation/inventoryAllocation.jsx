import Navbar from "../../Nav/Navbar";
import { useNavigate } from "react-router-dom";
import inventoryPicture from "../../assets/assignInventory.png";
import requestInventory from "../../assets/requestInventory.png"
// import courseAssignPicture from "../assets/course_assignment.png";


// import AssignInventory from "./assignInventoryToLab";
const LabSubDashboard = () => {
  const navigate = useNavigate();

  // FOR FUTURE WHEN THE PAGE WILL BE FUNCTIONAL 
  
//   useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch(`http://localhost:5000/Lab Sub Manager/LabSubDashboard`);
//     const data = await response.json();
//     setLabData(data); // use this to populate state
//   };

//   fetchData();
// }, []);

 
//   function goToAllocateInventory()
//   {
//     navigate("/InventoryAllocation");
//   }
  function goToAssignInventory()
  {
    navigate("/AssignInventoryToLab");
  }

  function goToRequestInventory()
  {
    navigate("/RequestInventoryForLab");
  }

  
  

  return (
    <>
      <Navbar pageType="Inventory Allocation By Sub-Manager"/>
      <div style={{ minHeight: '100vh', background: '#fff', paddingTop: '2rem' }}>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {/* Assign Inventory Card */}
          <div className="card" style={{ width: "17rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px' }}>
            <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Assign Inventory</h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Assign the given inventory to available labs</p>
              </div>
              <button onClick={goToAssignInventory} className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* Request Inventory Card */}
          <div className="card" style={{ width: "17rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px' }}>
            <img src={requestInventory} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Request Inventory</h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Request the lab inventory from super lab</p>
              </div>
              <button onClick={goToRequestInventory} className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabSubDashboard;
