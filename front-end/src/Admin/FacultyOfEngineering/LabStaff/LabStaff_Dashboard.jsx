import Navbar from "../../../Nav/Navbar";
import viewStaffMembers from "../../../assets/viewStaffMembers.webp";
import editStaffMembers from "../../../assets/editStaffMembers.webp";
import addNewStaff from "../../../assets/addNewStaff.webp";
import image_assignLabs from "../../../assets/assignLabs.jpg";
import image_viewEditAssignedLabs from "../../../assets/viewEditAssignedLabs.jpg";
import { useNavigate, useNavigation } from "react-router-dom";

function LabStaff_Dashboard(){
    const navigation = useNavigate();

    function goToAddStaff(){
        navigation("/addLabStaff");
    }
    
    function goToEditStaff(){
        navigation("/editLabStaff");
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

    function goToViewEditAssignedLabs(){
        navigation("/viewEditAssignedLabs");
        window.location.reload();
    }

    return (
        <>
            <Navbar pageType = "Lab Staff Dashboard"/>

            <div id="inventory-div_1">
            {/* View lab staff card */}
            <div onClick={goToViewStaff} className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
            <img src={viewStaffMembers} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                <h5 className="card-title" style={{ fontWeight: 700 }}>View Current Staff</h5>
                <p className="card-text">View the current staff of lab.</p>
                <a className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>View</a>
            </div>
            </div>

            {/* Add inventory card */}
            <div onClick={goToAddStaff} className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
                <img src={addNewStaff} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
                <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                    <h5 className="card-title" style={{ fontWeight: 700 }}>Add new staff members</h5>
                    <p className="card-text">Add a new staff member.</p>
                    <a className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Add</a>
                </div>
            </div>

            {/* Edit inventory card */}
            <div onClick={goToEditStaff} className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
            <img src={editStaffMembers} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                <h5 className="card-title" style={{ fontWeight: 700 }}>Edit Lab Staff</h5>
                <p className="card-text">Edit the current staff members of lab.</p>
                <a className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Edit</a>
            </div>
            </div>

            {/* Edit inventory card */}
            <div onClick={goToViewEditAssignedLabs} className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
            <img src={image_viewEditAssignedLabs} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                <h5 className="card-title" style={{ fontWeight: 700 }}>View And Edit Assigned Labs</h5>
                <p className="card-text">View & Edit the staff members assigned to labs.</p>
                <a className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Edit</a>
            </div>
            </div>

            {/* Generate Physical Report Of Inventory Card */}
            <div onClick={goToAssignLabs} className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
            <img src={image_assignLabs} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                <h5 className="card-title " style={{ fontWeight: 700 }}>Assign Labs</h5>
                <p className="card-text">Assign lab engineers, technicians and assistants to labs of engineering department.</p>
                <a className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Assign</a>
            </div>
            </div>
            </div>

            
    
        
        </>
    );
}

export default LabStaff_Dashboard;