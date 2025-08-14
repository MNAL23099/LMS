const { response } = require("express");
const connectToDB = require("../models/setupDB.js");
const fs = require ("fs").promises;
const {getLabName} = require("../sharedFunctions.js");


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
    if (await itemAlreadyInDB(itemName) == true){
      await updateItemQuantity(itemName, itemQuantity);

      res.write("item_updated");
      res.end();
    }
    //But if the item is not already present inside DB then create a new row for it 
    else if(await itemAlreadyInDB(itemName) == false) {
      await addNewRow(itemName, itemQuantity);

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

async function itemAlreadyInDB(itemName) { //This function checks if the item that the user is trying to add is already inside the DB
  //If it is then return true, otherwise return false

  if(!itemName){
    console.log("error:itemAlreadyInDB()-> itemName is null!");
    return;
  }
  const lsmClient = await connectToDB();

  try{
    let query = "SELECT * FROM free_inventory WHERE item_name = $1";
    const data = await lsmClient.query(query, [itemName]);

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

async function updateItemQuantity(itemName, itemQuantity){ //Update add the incoming itemQuantity to the already existing quantity of this item inside DB

  //Error handling
  if (!itemName){
    console.log("error: updateItemQuantity()-> itemName is null!");
    return;
  }
  if (!itemQuantity){
    console.log("error: updateItemQuantity()-> itemQuantity is null!");
    return;
  }

  const lsmClient = await connectToDB();

  try{
    const query = `SELECT item_quantity FROM free_inventory WHERE item_name = $1`;
    const data = await lsmClient.query(query, [itemName]);
    let presentQuantity = data.rows[0].item_quantity;

    //We need to convert itemQuantity to INT
    itemQuantity = parseInt(itemQuantity);

    //We need to convert the presentQuantity to INT
    presentQuantity = parseInt(presentQuantity);
    const newQuantity = presentQuantity + itemQuantity;

    const query_2 = `UPDATE free_inventory SET item_quantity = $1 WHERE item_name = $2`;
    await lsmClient.query(query_2, [newQuantity, itemName]);
    console.log("Item quantity has been updated!");
  }
  catch (error){
    console.log(`error: updateItemQuantity() -> ${error.message}`);
    return;
  }
}

async function addNewRow(itemName, itemQuantity){ //Add new row to the DB for this item name, its quantity and its lab_name

  const lsmClient = await connectToDB();

  try{
    const query = `INSERT INTO free_inventory(item_name, item_quantity)
    VALUES($1, $2)`;
    await lsmClient.query(query, [itemName, itemQuantity]);
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
    const query = `SELECT * FROM free_inventory`;
    const data = lsmClient.query(query);
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
    const query = `UPDATE free_inventory SET item_name = $1, item_quantity = $2 WHERE id = $3`;
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
    const query = `DELETE FROM free_inventory WHERE id = $1`;
    await lsmClient.query(query, [itemID]);
    res.write("success");
    res.end();
  }
  catch (error){
    console.log(`error: inventoryController.js -> deleteInventoryItem()-> ${error.message}`);
  }
   
}
//--------------------------------------------------------------------View inventory Item Starts Here--------------------------------------------------------------------//

async function viewInventory(req,res) {
  try{
  const query = `SELECT * FROM free_inventory`;
  const lsmClient = await connectToDB();
  const data = await lsmClient.query(query);

  if (data.rowCount > 0){
    res.json(data.rows);
  }
  else { //Not being used in the front end right now
    res.write("no_data");
    res.end();
  }

  }
  catch(error){
    console.log(`error: inventoryController.js -> View()-> ${error.message}`);
  }

}

//--------------------------------------------------------------------View inventory Item Ends Here--------------------------------------------------------------------//


//-------------------------------------------------------------------Assign inventory starts here----------------------------------------------------------------------//

const assignInventoryItem = async (req, res) => {
  const { item_name, lab_name, assign_quantity } = req.body;

  const client = await connectToDB();

  try {
    // 1. Get current quantity of item from free_inventory
    const freeQuery = await client.query(
      `SELECT item_quantity FROM free_inventory WHERE item_name = $1`,
      [item_name]
    );

    if (freeQuery.rows.length === 0) {
      return res.status(404).json({ message: "Item not found in free inventory" });
    }

    const available_quantity = freeQuery.rows[0].item_quantity;

    if (available_quantity < assign_quantity) {
      return res.status(400).json({ message: "Not enough quantity in free inventory" });
    }

    // 2. Subtract from free_inventory
    await client.query(
      `UPDATE free_inventory SET item_quantity = item_quantity - $1 WHERE item_name = $2`,
      [assign_quantity, item_name]
    );

    // 3. Check if item already exists in inventory for the given lab
    const inventoryQuery = await client.query(
      `SELECT * FROM inventory WHERE name = $1 AND lab_name = $2`,
      [item_name, lab_name]
    );

    if (inventoryQuery.rows.length > 0) {
      // Item exists for this lab – update quantity
      await client.query(
        `UPDATE inventory SET quantity = quantity + $1 WHERE name = $2 AND lab_name = $3`,
        [assign_quantity, item_name, lab_name]
      );
    } else {
      // Item not in inventory for this lab – insert new row
      await client.query(
        `INSERT INTO inventory (name, quantity, lab_name) VALUES ($2, $1, $3)`,
        [assign_quantity, item_name, lab_name]
      );
    }

    res.status(200).json({ message: "Inventory assigned successfully" });

  } catch (error) {
    console.error("Error assigning inventory:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getFreeItems = async (req, res) => {
  const client = await connectToDB();
  try {
    const result = await client.query("SELECT item_name, id FROM free_inventory");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching free items:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getLabs = async (req, res) => {
  const client = await connectToDB();
  try {
    const result = await client.query("SELECT DISTINCT lab_name, id FROM labs");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching labs:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getInventoryItems = async (req, res) => {
  const client = await connectToDB();
  try {
    const result = await client.query("SELECT id, item_name FROM free_inventory");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Error fetching inventory items");
  }
};

const sendInventoryRequest = async (req, res) => {
  const client = await connectToDB();
  const { item, quantity } = req.body;
  try {
    const query = "INSERT INTO inventory_requests (item_name, quantity, status) VALUES ($1, $2, $3)";
    await client.query(query, [item, quantity, "Pending"]);
    res.status(200).send("Request submitted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error submitting request");
  } 
};

const getRequests = async (req, res) => {
  const client = await connectToDB();
  try {
    const result = await client.query("SELECT item_name, quantity, status FROM inventory_requests ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Error fetching requests");
  }
};

//-------------------------------------------------------------------Assign inventory Ends here----------------------------------------------------------------------//

//-------------------------------------------------------------------Super Manager handling inventory requests from Sub Manager starts here----------------------------------------------------------------------//

async function returnPendingInventoryRequests(req, res){ //This function returns the pending inventory requests from DB
  const lsmClient = await connectToDB();
  try{
    const query = `SELECT * FROM inventory_requests WHERE status = $1`;
    const data = await lsmClient.query(query, ["Pending"]);

    if (data.rowCount > 0){
      res.json(data.rows);
    }
  }
  catch (error){
    console.log(`inventoryController.js -> returnPendingInventory() -> ${error.message}`);
  }
  
}

async function markPendingRequest(req, res){ //Sets the statsus of row of pending request as either accepted or rejected

  const {mark, id} = req.body;

  const lsmClient = await connectToDB();

  const query = `UPDATE inventory_requests SET status = $1 WHERE id = $2`;
  try {
    lsmClient.query(query, [mark, id]); //Set the received status on the desired row where this id matches
    res.write("success");
    res.end();
  }
  catch(error) {
    console.log(`inventoryController.js -> markPendingRequest() -> ${error.message}`);
    res.write("failure");
    res.end();
  }

}

//-------------------------------------------------------------------Super Manager handling inventory requests from Sub Manager Ends here----------------------------------------------------------------------//

// Controller function to fetch allocated inventory
async function viewAllocatedInventory(req, res) {
  try {
    const query = `SELECT * FROM inventory`; // allocated inventory table
    const lsmClient = await connectToDB();
    const data = await lsmClient.query(query);

    if (data.rowCount > 0) {
      res.json(data.rows);
    } else {
      res.status(404).send("No allocated inventory found");
    }
  } catch (error) {
    console.log(`error: inventoryController.js -> viewAllocatedInventory() -> ${error.message}`);
    res.status(500).send("Server error");
  }
}




module.exports = {
  editInventory,
  addInventoryItem,
  saveEditInventoryChanges,
  deleteInventoryItem,
  viewInventory,
  assignInventoryItem,
  getFreeItems,
  getLabs,
  getInventoryItems,
  sendInventoryRequest,
  getRequests,
  returnPendingInventoryRequests,
  markPendingRequest,
  viewAllocatedInventory
};
