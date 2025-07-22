import Navbar from "../../Nav/Navbar";
import viewStaffMembers from "../../assets/viewStaffMembers.webp";
import generateReportCard from "../../assets/generateReportCard.png";
import editStaffMembers from "../../assets/editStaffMembers.webp";
import addNewStaff from "../../assets/addNewStaff.webp";
import { useNavigate, useNavigation } from "react-router-dom";


function LabStaff_Dashboard(){

    const navigation = useNavigate();

    function goToAddStaff(){
        navigation("/addStaff");
    }
    
    function goToEditStaff(){
        navigation("/editInventory");
    }

    return (
        <>
            <Navbar pageType = "Lab Staff Dashboard"/>

            <div id="inventory-div_1">
            {/* View inventory card */}
            <div className="card" style={{width: "18rem"}}>
            <img src={viewStaffMembers} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">View Current Staff</h5>
                <p className="card-text">View the current staff of lab.</p>
                <a className="btn btn-primary">View</a>
            </div>
            </div>

            {/* Add inventory card */}
            <div onClick={goToAddStaff} className="card" style={{width: "18rem"}}>
                <img src={addNewStaff} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Add new staff members</h5>
                    <p className="card-text">Add a new staff member.</p>
                    <a className="btn btn-primary">Add</a>
                </div>
            </div>

            {/* Edit inventory card */}
            <div onClick={goToEditStaff} className="card" style={{width: "18rem"}}>
            <img src={editStaffMembers} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Edit Lab Staff</h5>
                <p className="card-text">Edit the current staff members of lab.</p>
                <a className="btn btn-primary">Edit</a>
            </div>
            </div>

            {/* Generate Physical Report Of Inventory Card */}
            <div className="card" style={{width: "18rem"}}>
            <img src={generateReportCard} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Generate Hardcopy Report</h5>
                <p className="card-text">Generate & Download Staff Members Report</p>
                <a className="btn btn-primary">Generate</a>
            </div>
            </div>
            </div>
        
        </>
    );
}

export default LabStaff_Dashboard;