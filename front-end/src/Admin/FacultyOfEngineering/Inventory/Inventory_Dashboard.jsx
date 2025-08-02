import Navbar from "../../../Nav/Navbar";
import viewInventoryCard from "../../../assets/viewInventoryCard.jpg";
import generateReportCard from "../../../assets/generateReportCard.png";
import editInventoryCard from "../../../assets/editInventoryCard.png";
import addInventoryCard from "../../../assets/addInventory.png";
import "./Inventory_Dashboard.css";
import { useNavigate, useNavigation } from "react-router-dom";


function Inventory_Dashboard(){

    const navigation = useNavigate();

    function goToAddItem(){
        navigation("/addInventory");
    }
    
    function goToEditInventory(){
        navigation("/editInventory");
    }
    
    function goToViewInventory(){
        navigation("/viewInventory");
        window.location.reload();
    }
    return (
        <>
            <Navbar pageType = "Inventory Dashboard"/>

            <div id="inventory-div_1">
            {/* View inventory card */}
            <div  onClick= {goToViewInventory} className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
            <img src={viewInventoryCard} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                <h5 className="card-title" style={{ fontWeight: 700 }}>View Current Inventory</h5>
                <p className="card-text">View the current stats of lab inventory</p>
                <a className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>View</a>
            </div>
            </div>

            {/* Add inventory card */}
            <div onClick={goToAddItem} className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
                <img src={addInventoryCard} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
                <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                    <h5 className="card-title" style={{ fontWeight: 700 }}>Add new inventory item</h5>
                    <p className="card-text">Add a new inventory component</p>
                    <a className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Add</a>
                </div>
            </div>

            {/* Edit inventory card */}
            <div onClick={goToEditInventory} className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
            <img src={editInventoryCard} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                <h5 className="card-title" style={{ fontWeight: 700 }}>Edit Lab Inventory</h5>
                <p className="card-text">Edit the current stats of lab inventory</p>
                <a className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Edit</a>
            </div>
            </div>

            {/* Generate Physical Report Of Inventory Card */}
            <div className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
            <img src={generateReportCard} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                <h5 className="card-title" style={{ fontWeight: 700 }}>Generate Hardcopy Report</h5>
                <p className="card-text">Generate & Download Inventory Report</p>
                <a className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Generate</a>
            </div>
            </div>
            </div>
        
        </>
    );
}

export default Inventory_Dashboard;