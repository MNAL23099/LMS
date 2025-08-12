import { useState } from "react";
import Navbar from "../../../Nav/Navbar";
  

function AddLab(){

    const [itemName, setItemName] = useState("");   //for lab here labs are being added

    function submitForm(e){
        e.preventDefault(); //Prevent the form from reloading
    
        fetch("http://localhost:5000/labManagement/addlabs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({itemName: itemName}),
        })
        .then((response)=>{return response.text()})
        .then((textResponse)=>{
            if (textResponse === "missing_entries") {
                window.alert("Please fill all entries!");
            } else if (textResponse === "new_lab_added") {
                window.alert("New lab detected! It has been added");
            } else if (textResponse === "lab_already_exists") {
                window.alert("Lab already exists! It cannot be added again.");
            } else if (textResponse === "failure") {
                window.alert("Unexpected error occurred! Please contact the developers!");
            }
            window.location.reload(); //Reload the window
        })
    }

    return(
        <>
        <Navbar pageType="Add Lab"/>

        <div id="addInventory-div_1" style={{
            minHeight: "100vh",
            background: "#f5f6fa",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
        <form onSubmit={submitForm} id="inventory-div_1-form_1" style={{
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 8px 32px 0 rgba(0,33,71,0.10), 0 2px 8px 0 rgba(0,33,71,0.08)",
            padding: "2rem 2.2rem",
            maxWidth: "370px",
            width: "100%",
            border: "2px solid #002147",
            color: "#002147"
        }}>
        <h2 style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#002147",
            fontWeight: 800,
            letterSpacing: "1px",
            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
        }}>Add Lab </h2>
        <div className="mb-3">
            <label htmlFor="add-inventory-item-name" className="form-label" style={{fontWeight: 500, color: '#002147'}}>Lab Name</label>
            <input onChange={(e)=>{setItemName(e.target.value)}} type="text" className="form-control" id="add-inventory-item-name" style={{borderRadius: "8px", background: '#fff', color: '#002147', border: '1px solid #0056b3'}} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text" style={{color: '#002147'}}>For example: Microwave lab, Controls Lab etc.</div>
        </div>
        {/* Quantity removed, only lab name needed */}
        <button type="submit" className="inventory-go-btn w-100" style={{
            borderRadius: "25px",
            fontWeight: 700,
            fontSize: "1.1rem",
            background: 'linear-gradient(90deg, #ffd700 0%, #ffb400 100%)',
            color: "#002147",
            border: "none",
            boxShadow: "0 2px 8px 0 rgba(0,33,71,0.10)",
            marginTop: "1rem"
        }}>Submit</button>
        </form>
        </div>
        </>
    );
}

export default AddLab;