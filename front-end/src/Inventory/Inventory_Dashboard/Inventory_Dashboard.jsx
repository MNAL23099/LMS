import Navbar from "../../Nav/Navbar";
import viewInventoryCard from "../../assets/viewInventoryCard.jpg";
import generateReportCard from "../../assets/generateReportCard.png";
import editInventoryCard from "../../assets/editInventoryCard.png";

function Inventory_Dashboard(){
    return (
        <>
            <Navbar pageType = "Inventory Dashboard"/>

            {/* View inventory card */}
            <div className="card" style={{width: "18rem"}}>
            <img src={viewInventoryCard} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">View Current Inventory</h5>
                <p className="card-text">View the current stats of lab inventory</p>
                <a className="btn btn-primary">View</a>
            </div>
            </div>

            {/* Edit inventory card */}
            <div className="card" style={{width: "18rem"}}>
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
        
        </>
    );
}

export default Inventory_Dashboard;