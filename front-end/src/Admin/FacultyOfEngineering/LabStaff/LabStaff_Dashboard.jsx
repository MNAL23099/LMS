import Navbar from "../../../Nav/Navbar";
import viewStaffMembers from "../../../assets/viewStaffMembers.webp";
import editStaffMembers from "../../../assets/editStaffMembers.webp";
import addNewStaff from "../../../assets/addNewStaff.webp";
import image_assignLabs from "../../../assets/assignLabs.jpg";
import { useNavigate, useNavigation } from "react-router-dom";

function LabStaff_Dashboard(){
    const navigation = useNavigate();

    function goToAddStaff(){
        navigation("/addLabStaff");
    }
    
    function goToEditStaff(){
        navigation("/editInventory");
    }

    function goToViewStaff(){
        navigation("/viewLabStaff");
        window.location.reload(); //Reload before going into the viewStaff page
        //If we just navigate without reloading we don't activate the functions inside the webpage
    }

    function goToAssignLabs(){
        navigation("/assignLabs");
        window.location.reload();
    }

    return (
        <>
            <Navbar pageType = "Lab Staff Dashboard"/>

            <div id="inventory-div_1">
            {/* View lab staff card */}
            <div onClick={goToViewStaff} className="card" style={{width: "18rem"}}>
            <img src={viewStaffMembers} class="card-img-top" alt="..."/>
            <div className="card-body themed-card-body">
                <h5 className="card-title">View Current Staff</h5>
                <p className="card-text">View the current staff of lab.</p>
                <a className="btn btn-primary">View</a>
            </div>
            </div>

            {/* Add inventory card */}
            <div onClick={goToAddStaff} className="card" style={{width: "18rem"}}>
                <img src={addNewStaff} class="card-img-top" alt="..."/>
                <div className="card-body themed-card-body">
                    <h5 className="card-title">Add new staff members</h5>
                    <p className="card-text">Add a new staff member.</p>
                    <a className="btn btn-primary">Add</a>
                </div>
            </div>

            {/* Edit inventory card */}
            <div onClick={goToEditStaff} className="card" style={{width: "18rem"}}>
            <img src={editStaffMembers} class="card-img-top" alt="..."/>
            <div className="card-body themed-card-body">
                <h5 className="card-title">Edit Lab Staff</h5>
                <p className="card-text">Edit the current staff members of lab.</p>
                <a className="btn btn-primary">Edit</a>
            </div>
            </div>

            {/* Generate Physical Report Of Inventory Card */}
            <div onClick={goToAssignLabs} className="card" style={{width: "18rem"}}>
            <img src={image_assignLabs} class="card-img-top" alt="..."/>
            <div className="card-body themed-card-body">
                <h5 className="card-title ">Assign Labs</h5>
                <p className="card-text">Assign lab engineers, technicians and assistants to labs of engineering department.</p>
                <a className="btn btn-primary">Assign</a>
            </div>
            </div>
            </div>

            
    
        
        </>
    );
}

export default LabStaff_Dashboard;