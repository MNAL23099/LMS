import { useState } from "react";
import Navbar from "../../Nav/Navbar";

function EditInventory(){
    fetchAndDisplayData();

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [id, setID] = useState("");

    return(
    <>
        <Navbar pageType="Edit Inventory"/>

        <div id="editInventory-div_1">

        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Current Inventory
            </button>
            <ul id="editInventory-dropDown" className="dropdown-menu">
            </ul>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Item Name</span>
            <input onChange={(e)=>{setName(e.target.value)}} id="editInventory-input_itemName" type="text" className="form-control" placeholder="Item Name" aria-label="Username" aria-describedby="basic-addon1" />

            <span className="input-group-text" id="basic-addon1">Quantity</span>
            <input onChange={(e)=>{setQuantity(e.target.value)}} id="editInventory-input_quantity" type="text" className="form-control" placeholder="Quantity" aria-label="Username" aria-describedby="basic-addon1" />

            {/* Store the item ID but hide it from the user */}
            <input onChange={(e)=>{setID(e.target.value)}} id="editInventory-itemID" type="hidden" />

        </div>

        <button onClick={()=>{submitEditedInventory(name, quantity, id)}} type="button" className="btn btn-success">Save Changes</button>
        <button type="button" className="btn btn-danger">Delete This Item</button>

        </div>
    
    </>
    )

    function displayAllDetails(itemName, inventoryItems){ //This function displays all the details of this inventory item
    //Including its name and quantity inside the empty input bars

    var itemQuantity = null;
    var itemID = null;

    for(let i=0; i<inventoryItems.length; i++){ //Search for the item quantity for this itemName
        if (itemName == inventoryItems[i].name){
            itemQuantity = inventoryItems[i].quantity;
            itemID = inventoryItems[i].id;
        } 
    }

    const input_itemName = document.getElementById("editInventory-input_itemName");
    const input_itemQuantity = document.getElementById("editInventory-input_quantity");
    const input_itemID = document.getElementById("editInventory-itemID");

    input_itemName.value = itemName;
    input_itemQuantity.value = itemQuantity;
    input_itemID.value = itemID;

    setName(input_itemName.value);
    setQuantity(input_itemQuantity.value);
    setID(input_itemID.value);

}

function fetchAndDisplayData(){ //This function fetches the current inventory items from backend and displays them inside the frontend
    
    fetch("http://localhost:5000/inventory/editInventory")
    .then((response) => {return response.json()})
    .then((jsonData) => {

        //This is the <ul> which will store the incoming data in the form of <li>
        const dropDown = document.getElementById("editInventory-dropDown");

        for(let i=0; i<jsonData.length; i++){

            const li = document.createElement("li");

            const a = document.createElement("a");
            a.href = "#";
            a.className = "dropdown-item";
            a.textContent = jsonData[i].name;

            a.onclick = ()=>{
                displayAllDetails(a.textContent, jsonData);
            }

            li.appendChild(a);
            dropDown.appendChild(li);
        }
    })
}

function submitEditedInventory(name, quantity, id){ //This function is called when user clicks on submit

    fetch("http://localhost:5000/inventory/submitEditedInventory", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({itemName: name, itemQuantity: quantity, itemID: id})
    })
    .then((res)=>{return res.text()})
    .then((textRes)=>{
        if (textRes == "missing_entries"){
            window.alert("Please select an item to edit first!");
        }
        else if (textRes == "success"){
            window.alert("Inventory has been edited!");
        }
    })

}

}

export default EditInventory;