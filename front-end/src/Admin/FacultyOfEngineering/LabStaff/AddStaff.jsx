import { useState } from "react";
import Navbar from "../../../Nav/Navbar";

function AddStaff(){

    //These are the 3 varaibles that the add staff form will store information inside
    const [staffMemberName, setStaffMemberName] = useState("");
    const [staffMemberRole, setStaffMemberRole] = useState("");
    const [staffMemberEmail, setStaffMemberEmail] = useState("");

    function submitForm(e){
        e.preventDefault();
    
        fetch("http://localhost:5000/labStaff/addStaff", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: staffMemberName, email: staffMemberEmail, role: staffMemberRole}),
        })
        .then((response)=>{return response.text()})
        .then((textResponse)=>{
            if (textResponse == "missing_entries"){
                window.alert("Please fill all entries!");
            }
            else if (textResponse == "email_already_stored"){
                window.alert("This staff member already exists!");
            }
            else if (textResponse == "new_row_added"){
                window.alert("New staff member has been added!");
            }
            else if (textResponse == "error"){
                window.alert("An unexpected error has occurred, please contact the developers!");
            }
            // window.location.reload(); //Reload the window
        }
    );
    }

    return(
        <>
        <Navbar pageType="Add Staff"/>

        <div id="addInventory-div_1" style={{
            minHeight: "100vh",
            background: "radial-gradient(ellipse at center, #a83232 0%, #2b0909 60%, #000 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
        <form onSubmit={submitForm} id="inventory-div_1-form_1" style={{
            background: "linear-gradient(135deg, #141010 30%, #cd0b0bff 70%)",
            borderRadius: "18px",
            boxShadow: "0 8px 32px 0 rgba(80,0,0,0.35), 0 2px 8px 0 rgba(128,0,0,0.25)",
            padding: "2rem 2.2rem",
            maxWidth: "370px",
            width: "100%",
            border: "2px solid #800000",
            color: "#fff"
        }}>
        <h2 style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#fff",
            fontWeight: 800,
            letterSpacing: "1px",
            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
        }}>Add Staff Member</h2>
        <div className="mb-3">
            <label htmlFor="add-inventory-item-name" className="form-label" style={{fontWeight: 500, color: '#fff'}}>Name</label>
            <input onChange={(e)=>{setStaffMemberName(e.target.value)}} type="text" className="form-control" id="add-inventory-item-name" style={{borderRadius: "8px", background: '#232526', color: '#fff', border: '1px solid #fff'}} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="add-inventory-item-name" className="form-label" style={{fontWeight: 500, color: '#fff'}}>Email</label>
            <input onChange={(e)=>{setStaffMemberEmail(e.target.value)}} type="email" className="form-control" id="add-inventory-item-name" style={{borderRadius: "8px", background: '#232526', color: '#fff', border: '1px solid #fff'}} aria-describedby="emailHelp" />
            <div className="form-text" style={{color: '#fff'}}>University assigned email for this person.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="add-inventory-quantity" className="form-label" style={{fontWeight: 500, color: '#fff'}}>Role</label>
            <select onChange={(e)=>{setStaffMemberRole(e.target.value)}} class="form-select" aria-label="Default select example">
                <option selected>Choose Role</option>
                <option value="lab_engineer">Lab Engineer</option>
                <option value="lab_technician">Lab Technician</option>
                <option value="lab_assistant">Lab Assistant</option>
            </select>
        </div>
        <button type="submit" className="inventory-go-btn w-100" style={{
            borderRadius: "25px",
            fontWeight: 700,
            fontSize: "1.1rem",
            background: '#232526',
            color: "white",
            border: "2.5px solid #000",
            boxShadow: "0 2px 8px 0 rgba(191, 161, 74, 0.10)",
            marginTop: "1rem"
        }}>Submit</button>
        </form>
        </div>
        </>
    );
}

export default AddStaff;