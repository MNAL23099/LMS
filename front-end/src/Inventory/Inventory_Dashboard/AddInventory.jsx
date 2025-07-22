import { useState } from "react";
import Navbar from "../../Nav/Navbar";

function AddInventory(){

    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");

    function submitForm(e){
        e.preventDefault();
    
        fetch("http://localhost:5000/inventory/addInventoryItem", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({itemName: itemName, itemQuantity: itemQuantity}),
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
        <Navbar pageType="Add Inventory Item"/>

        <div id="addInventory-div_1">
        <form onSubmit={submitForm} id="inventory-div_1-form_1">
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Item Name</label>
            <input onChange={(e)=>{setItemName(e.target.value)}} type="text" className="form-control" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">For example; PC, Circuit board, etc.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Quantity</label>
            <input onChange={(e)=>{setItemQuantity(e.target.value)}} type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </>
    );
}

export default AddInventory;