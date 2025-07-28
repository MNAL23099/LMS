const { response } = require("express");
const connectToDB = require("../models/setupDB.js");
const fs = require ("fs").promises;
const {getLabName} = require("../sharedFunctions.js");

// Dummy inventory data
let inventory = [
  { id: 1, name: "Beaker", quantity: 10 },
  { id: 2, name: "Test Tube", quantity: 25 },
  { id: 3, name: "Multimeter", quantity: 5 }
];

// View Inventory
const getInventory = (req, res) => {
  res.json({
    message: "Inventory fetched successfully",
    data: inventory
  });
};

// Generate Report (returning same data for now)
const generateInventoryReport = (req, res) => {
  res.json({
    message: "Inventory report generated",
    report: inventory
  });
};

//--------------------------------------------------------------------Add inventory Item Starts Here--------------------------------------------------------------------//
async function addInventoryItem(req, res){

  const {itemName, itemQuantity} = req.body;

  //Return if either itemName or itemQuantity is null
  if (await requestIsNotNull(itemName, itemQuantity) == false){
    console.log("Either itemName or itemQuantity is NULL");
    res.write("missing_entries");
    res.end();
    return;
  }

  //Continue if itemName and itemQuantity is not NULL
  try {
     
    //If the item alreay is inside DB, don't create a new row in DB, rather just update its quantity
    if (await itemAlreadyInDB(itemName, await getLabName()) == true){
      await updateItemQuantity(itemName, await getLabName(), itemQuantity);

      res.write("item_updated");
      res.end();
    }
    //But if the item is not already present inside DB then create a new row for it 
    else if(await itemAlreadyInDB(itemName, await getLabName()) == false) {
      await addNewRow(itemName, await getLabName(), itemQuantity);

      res.write("new_item_added");
      res.end();
    }
    else {
      console.log("error: addInventoryItem()-> itemAlreadyInDB returning null!");

      res.write("failure");
      return;
    }
  }
  catch (error){
    console.log(`error: addInventoryitem()-> ${error.message}`);
  }

}

async function requestIsNotNull(itemName, itemQuantity){ //This function returns true if the variables inside parameter 
  //are not null

  if (itemName && itemQuantity){
    return true;
  }
  else return false;

}

async function itemAlreadyInDB(itemName, labName) { //This function checks if itemName is already inside the DB
  //If it is then return true, otherwise return false

  if(!itemName){
    console.log("error:itemAlreadyInDB()-> itemName is null!");
    return;
  }
  if(!labName){
    console.log("error:itemAlreadyInDB()-> labName is null!");
    return;
  }

  const lsmClient = await connectToDB();

  try{
    let query = "SELECT * FROM inventory WHERE name = $1 AND lab_name = $2";
    const data = await lsmClient.query(query, [itemName, labName]);

    if (data.rowCount == 0){
      return false;
    }
    else return true;

  }
  catch (error){
    console.log(`error: itemAlreadyInDB()-> ${error.message}`);
    return;
  }

}

async function updateItemQuantity(itemName, labName, itemQuantity){ //Update add the incoming itemQuantity to the already existing quantity of this item inside DB

  //Error handling
  if (!itemName){
    console.log("error: updateItemQuantity()-> itemName is null!");
    return;
  }
  if (!labName){
    console.log("error: updateItemQuantity()-> labName is null!");
    return;
  }
  if (!itemQuantity){
    console.log("error: updateItemQuantity()-> itemQuantity is null!");
    return;
  }

  const lsmClient = await connectToDB();

  try{
    const query = `SELECT quantity FROM inventory WHERE name = $1 AND lab_name = $2`;
    const data = await lsmClient.query(query, [itemName, labName]);
    let presentQuantity = data.rows[0].quantity;

    //We need to convert itemQuantity to INT
    itemQuantity = parseInt(itemQuantity);

    //We need to convert the presentQuantity to INT
    presentQuantity = parseInt(presentQuantity);
    const newQuantity = presentQuantity + itemQuantity;

    const query_2 = `UPDATE inventory SET quantity = $1 WHERE name = $2 AND lab_name = $3`;
    await lsmClient.query(query_2, [newQuantity, itemName, labName]);
    console.log("Item quantity has been updated!");
  }
  catch (error){
    console.log(`error: updateItemQuantity() -> ${error.message}`);
    return;
  }

}

async function addNewRow(itemName, labName, itemQuantity){ //Add new row to the DB for this item name, its quantity and its lab_name

  const lsmClient = await connectToDB();

  try{
    const query = `INSERT INTO inventory(name, quantity, lab_name)
    VALUES($1, $2, $3)`;
    await lsmClient.query(query, [itemName, itemQuantity, labName]);
  }
  catch (error){
    console.log(`error: addNewRow()-> ${error.message}`);
    return;
  }
}

//--------------------------------------------------------------------Add inventory Item Ends Here--------------------------------------------------------------------//

//--------------------------------------------------------------------Edit inventory Item Starts Here--------------------------------------------------------------------//

async function editInventory (req, res){
  
  const data = await fetchInventoryItemsFromDB(); //Fetch from DB
  res.json(data.rows); //Send all the resulting rows in response
}

async function fetchInventoryItemsFromDB(){ //This function fetches all inventory items for the current session lab engineer from DB and returns them in json

  try{
    const lsmClient = await connectToDB();
    const labName = await getLabName();
    const query = `SELECT * FROM inventory WHERE lab_name = $1`;
    const data = lsmClient.query(query, [labName]);
    return data;
  }
  catch(error){
    console.log(`error: fetchInventory()-> ${error.message}`);
  }
}

async function saveEditInventoryChanges(req, res){ //This function is called when user clicks on submit inside the edit inventory page

  const {itemName, itemQuantity, itemID} = req.body;
  if (await entriesExist(itemName, itemQuantity, itemID) == false){
    res.write("missing_entries");
    res.end();
    return;
  }

  try{
    const lsmClient = await connectToDB();
    const query = `UPDATE inventory SET name = $1, quantity = $2 WHERE id = $3`;
    await lsmClient.query(query, [itemName, itemQuantity, itemID]);
    res.write("success");
    res.end();
  }
  catch (error){
    console.log(`error: inventoryController.js -> saveEditInventoryChanges()-> ${error.message}`);
  }
}

//Helper function for editInventory functionality
async function entriesExist(itemName, itemQuantity, itemID){ //Check if all the entries exist

  if (!itemName || !itemQuantity || !itemID){
    return false;
  }
  else return true;
}

async function deleteInventoryItem(req, res){ //This is function for when the user wants to delete an inventory item from the editInventory page

  const {itemID} = req.body;
  if (!itemID){
    res.write("missing_entries");
    res.end();
    return;
  }

  try{
    const lsmClient = await connectToDB();
    const query = `DELETE FROM inventory WHERE id = $1`;
    await lsmClient.query(query, [itemID]);
    res.write("success");
    res.end();
  }
  catch (error){
    console.log(`error: inventoryController.js -> deleteInventoryItem()-> ${error.message}`);
  }
   
}

//--------------------------------------------------------------------Edit inventory Item Ends Here--------------------------------------------------------------------//

module.exports = {
  getInventory,
  editInventory,
  generateInventoryReport,
  addInventoryItem,
  saveEditInventoryChanges,
  deleteInventoryItem,
};
