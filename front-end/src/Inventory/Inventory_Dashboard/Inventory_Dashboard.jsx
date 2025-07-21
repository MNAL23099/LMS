import Navbar from "../../Nav/Navbar";
import viewInventoryCard from "../../assets/viewInventoryCard.jpg";
import generateReportCard from "../../assets/generateReportCard.png";
import editInventoryCard from "../../assets/editInventoryCard.png";
import addInventoryCard from "../../assets/addInventory.png";
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

    //  const [inventoryData, setInventoryData] = useState([]);
    // const [reportData, setReportData] = useState([]);

    // // ✅ 1. View Inventory Handler
    // const handleView = () => {
    //     fetch("http://localhost:5000/inventory")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("✅ View Inventory Response:", data);
    //         setInventoryData(data.data);
    //     })
    //     .catch(err => console.error("❌ Error fetching inventory:", err));
    // };

    // // ✅ 2. Edit Inventory Handler (Dummy Update)
    // const handleEdit = () => {
    //     fetch("http://localhost:5000/inventory/edit", {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         id: 1,
    //         name: "Beaker",
    //         quantity: 15,
    //     }),
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("✅ Edit Inventory Response:", data);
    //         alert("Inventory item updated successfully!");
    //     })
    //     .catch(err => console.error("❌ Error editing inventory:", err));
    // };

    // // ✅ 3. Generate Report Handler
    // const handleGenerate = () => {
    //     fetch("http://localhost:5000/inventory/report")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("✅ Inventory Report:", data);
    //         setReportData(data.report);
    //     })
    //     .catch(err => console.error("❌ Error generating report:", err));
    // };
    return (
        <>
            <Navbar pageType = "Inventory Dashboard"/>

            <div id="inventory-div_1">
            {/* View inventory card */}
            <div className="card" style={{width: "18rem"}}>
            <img src={viewInventoryCard} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">View Current Inventory</h5>
                <p className="card-text">View the current stats of lab inventory</p>
                <a className="btn btn-primary">View</a>
            </div>
            </div>

            {/* Add inventory card */}
            <div onClick={goToAddItem} className="card" style={{width: "18rem"}}>
                <img src={addInventoryCard} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Add new inventory item</h5>
                    <p className="card-text">Add a new inventory component</p>
                    <a className="btn btn-primary">Add</a>
                </div>
            </div>

            {/* Edit inventory card */}
            <div onClick={goToEditInventory} className="card" style={{width: "18rem"}}>
            <img src={editInventoryCard} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Edit Lab Inventory</h5>
                <p className="card-text">Edit the current stats of lab inventory</p>
                <a className="btn btn-primary">Edit</a>
            </div>
            </div>

            {/* Generate Physical Report Of Inventory Card */}
            <div className="card" style={{width: "18rem"}}>
            <img src={generateReportCard} class="card-img-top" alt="..."/>
            <div className="card-body">
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