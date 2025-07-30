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
            <div  onClick= {goToViewInventory}className="card" style={{width: "18rem"}}>
            <img src={viewInventoryCard} class="card-img-top" alt="..."/>
            <div className="card-body themed-card-body">
                <h5 className="card-title">View Current Inventory</h5>
                <p className="card-text">View the current stats of lab inventory</p>
                <a className="btn btn-primary">View</a>
            </div>
            </div>

            {/* Add inventory card */}
            <div onClick={goToAddItem} className="card" style={{width: "18rem"}}>
                <img src={addInventoryCard} class="card-img-top" alt="..."/>
                <div className="card-body themed-card-body">
                    <h5 className="card-title">Add new inventory item</h5>
                    <p className="card-text">Add a new inventory component</p>
                    <a className="btn btn-primary">Add</a>
                </div>
            </div>

            {/* Edit inventory card */}
            <div onClick={goToEditInventory} className="card" style={{width: "18rem"}}>
            <img src={editInventoryCard} class="card-img-top" alt="..."/>
            <div className="card-body themed-card-body">
                <h5 className="card-title">Edit Lab Inventory</h5>
                <p className="card-text">Edit the current stats of lab inventory</p>
                <a className="btn btn-primary">Edit</a>
            </div>
            </div>

            {/* Generate Physical Report Of Inventory Card */}
            <div className="card" style={{width: "18rem"}}>
            <img src={generateReportCard} class="card-img-top" alt="..."/>
            <div className="card-body themed-card-body">
                <h5 className="card-title">Generate Hardcopy Report</h5>
                <p className="card-text">Generate & Download Inventory Report</p>
                <a className="btn btn-primary">Generate</a>
            </div>
            </div>
            </div>
        
        </>
    );
}

export default Inventory_Dashboard;