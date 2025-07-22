import { useState } from "react";
import Navbar from "../../Nav/Navbar";

function AddStaff(){

    const [personName, setPersonName] = useState("");
    const [personDesignation, setPersonDesignation] = useState("");

    function submitForm(e){
        e.preventDefault();
    
        fetch("http://localhost:5000/labStaff/addStaff", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: personName, designation: personDesignation}),
        })
        .then((response)=>{return response.text()})
        .then((textResponse)=>{
            if (textResponse == "missing_entries"){
                window.alert("Please fill all entries!");
            }
            else if (textResponse == "new_item_added"){
                window.alert("New item detected! It has been added");
            }
            else if (textResponse == "item_updated"){
                window.alert("Item already exists! Quantity has been updated!");
            }
            else if (textResponse == "failure"){
                window.alert("Unexpected error occured! Please contact the developers!");
            }
            window.location.reload(); //Reload the window
        }
    );
    }

    return(
        <>
        <Navbar pageType="Add Staff Member"/>

        <div id="addInventory-div_1">
        <form onSubmit={submitForm} id="inventory-div_1-form_1">
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input onChange={(e)=>{setPersonName(e.target.value)}} type="text" className="form-control" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">The name of this staff member.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Designation</label>
            <input onChange={(e)=>{setPersonDesignation(e.target.value)}} type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </>
    );
}

export default AddStaff;