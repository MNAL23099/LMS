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

            <div id="inventory-div_1" style={{marginTop: '3rem'}}>
            {/* View lab staff card */}
            <div onClick={goToViewStaff} className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem'}}>
            <img src={viewStaffMembers} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                <div className="text-center">
                    <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>View Current Staff</h5>
                    <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>View the current staff of lab.</p>
                </div>
                <a className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>View</a>
            </div>
            </div>

            {/* Add inventory card */}
            <div onClick={goToAddStaff} className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem'}}>
                <img src={addNewStaff} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                    <div className="text-center">
                        <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Add new staff members</h5>
                        <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Add a new staff member.</p>
                    </div>
                    <a className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Add</a>
                </div>
            </div>

            {/* Edit inventory card */}
            <div onClick={goToEditStaff} className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem'}}>
            <img src={editStaffMembers} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                <div className="text-center">
                    <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Edit Lab Staff</h5>
                    <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Edit the current staff members of lab.</p>
                </div>
                <a className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Edit</a>
            </div>
            </div>

            {/* Edit inventory card */}
            <div onClick={goToViewEditAssignedLabs} className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem'}}>
            <img src={image_viewEditAssignedLabs} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                <div className="text-center">
                    <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>View And Edit Assigned Labs</h5>
                    <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>View & Edit the staff members assigned to labs.</p>
                </div>
                <a className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>View</a>
            </div>
            </div>

            {/* Generate Physical Report Of Inventory Card */}
            <div onClick={goToAssignLabs} className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem'}}>
            <img src={image_assignLabs} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                <div className="text-center">
                    <h5 className="card-title " style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Assign Labs</h5>
                    <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Assign lab engineers, technicians and assistants to labs of engineering department.</p>
                </div>
                <a className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Assign</a>
            </div>
            </div>
            </div>

            
    
        
        </>
    );
}

export default LabStaff_Dashboard;