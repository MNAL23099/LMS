const connectToDB = require("../models/setupDB.js");
const {getLabName} = require("../sharedFunctions.js");

//------------------------------------------------------------------Add Staff Starts Here------------------------------------------------------------------//

async function addStaff(req, res){

    //These are the name, email and designation of the staff member just added, we need email to make sure that
    //this staff member is not present in any other lab
    const {name, email, role} = req.body;

    //Return if either itemName or itemQuantity is null
    if (await requestIsNotNull(name, email, role) == false){
        console.log(`staffController.js -> addStaff(): requestIsNotNull() is returning false`);
        res.write("missing_entries");
        res.end();
        return;
    }

    //Continue if name and email and designation is not NULL
    try {
        //If the staff member email is already inside, db, we won't add him, rather send a response that the staff member already exists
        if (await staffMemberAlreadyInDB(email) == true){
          res.write("email_already_stored");
          res.end();
          return;
        }
        //But if the staff member email is not already present inside DB then create a new row for it
        else if(await staffMemberAlreadyInDB(email) == false) {
          await addNewRow(name, email, role);
          res.write("new_row_added");
          res.end();
        }
        else { //In case none of the above conditions is running
          console.log("error: addStaff()-> staffMemberAlreadyInDB returning null!");
          res.write("error");
          return;
        }
    }
    catch (error){
      console.log(`error: staffController.js -> addStaff()-> ${error.message}`);
    }
}

async function requestIsNotNull(name, email, role){ //This function returns true if the variables inside parameter 
  //are not null

  if (name && email && role){
    return true;
  }
  else return false;
}

async function staffMemberAlreadyInDB(email) { //This function checks if itemName is already inside the DB
  //If it is then return true, otherwise return false

  if(!email){
    console.log("error:staffMemberAlreadyInDB()-> email is null!");
    return;
  }
  const lsmClient = await connectToDB();

  try{
    let query = "SELECT * FROM university_staff WHERE email = $1";
    const data = await lsmClient.query(query, [email]);

    if (data.rowCount == 0){
      return false;
    }
    else return true;

  }
  catch (error){
    console.log(`error: staffMemberAlreadyInDB()-> ${error.message}`);
    return;
  }
}

async function addNewRow(name, email, role){ //Add new row to the DB for this staff member name, his designation, email and its lab_name

  const lsmClient = await connectToDB();

  try{
    const query = `INSERT INTO university_staff(name, email, role)
    VALUES($1, $2, $3)`;
    await lsmClient.query(query, [name, email, role]);
  }
  catch (error){
    console.log(`error: staffController.js -> addNewRow()-> ${error.message}`);
    return;
  }
}

//------------------------------------------------------------------Add Staff Ends Here------------------------------------------------------------------//

async function editStaff(req, res) {
  try {
    const client = await connectToDB();
    const query = `SELECT * FROM university_staff WHERE department = $1`; // example filter
    const data = await client.query(query, ["Lab"]); // or dynamically get department
    res.json(data.rows);
  } catch (error) {
    console.log(`editStaff() error: ${error.message}`);
  }
}

async function saveEditStaffChanges(req, res) {
  const { staffID, staffName, staffRole } = req.body;

  if (!staffID || !staffName || !staffRole) {
    res.write("missing_entries");
    res.end();
    return;
  }

  try {
    const client = await connectToDB();
    const query = `UPDATE university_staff SET name = $1, role = $2 WHERE id = $3`;
    await client.query(query, [staffName, staffRole, staffID]);
    res.write("success");
    res.end();
  } catch (error) {
    console.log(`saveEditStaffChanges() error: ${error.message}`);
  }
}

async function deleteStaffMember(req, res) {
  const { staffID } = req.body;

  if (!staffID) {
    res.write("missing_entries");
    res.end();
    return;
  }

  try {
    const client = await connectToDB();
    const query = `DELETE FROM university_staff WHERE id = $1`;
    await client.query(query, [staffID]);
    res.write("success");
    res.end();
  } catch (error) {
    console.log(`deleteStaffMember() error: ${error.message}`);
  }
}

module.exports = {
  
};


//------------------------------------------------------------------View Staff Starts Here------------------------------------------------------------------//

async function viewStaff (req, res){ //This is the main function that is called when the viewStaff route is accessed, it takes all the staff members for the currently logged in lab and returns it
  
  const data = await fetchLabStaffFromDB(); //Fetch from DB
  res.json(data.rows); //Send all the resulting rows in response
}

async function fetchLabStaffFromDB(){ //This function fetches all staff member data for the current session lab engineer from DB and returns them in json
  try{
    const lsmClient = await connectToDB();
    const labName = await getLabName();
    const query = `SELECT * FROM university_staff WHERE name = $1`;
    const data = lsmClient.query(query, [labName]);
    return data; //Return all the data
  }
  catch(error){
    console.log(`error: fetchLabStaffFromDB()-> ${error.message}`);
  }
}

//------------------------------------------------------------------View Staff Ends Here------------------------------------------------------------------//
// async function editStaff (req, res){
  
//   const data = await fetchStaffFromDB(); //Fetch from DB
//   res.json(data.rows); //Send all the resulting rows in response
// }

// async function fetchStaffFromDB(){ //This function fetches all inventory items for the current session lab engineer from DB and returns them in json

//   try{
//     const lsmClient = await connectToDB();
//     const query = `SELECT * FROM university_staff`;
//     const data = await lsmClient.query(query);

//     return data;
//   }
//   catch(error){
//     console.log(`error: fetchInventory()-> ${error.message}`);
//   }
// }

async function editStaff(req, res) {
  try {
    const data = await fetchStaffFromDB();
    console.log("Staff fetched for edit:", data.rows);

    const formatted = data.rows.map(row => ({
      id: row.staff_id,
      name: row.staff_name,
      email: row.staff_email,
      role: row.staff_type
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Error in editStaff:", err.message);
    res.status(500).send("Internal Server Error");
  }
}


async function fetchStaffFromDB() {
  try {
    const lsmClient = await connectToDB();  // This uses setupDB
    const query = `SELECT * FROM university_staff`;
    const data = await lsmClient.query(query);  // ✅ FIXED typo here
    return data;
  } catch (error) {
    console.log(`Error: fetchStaffFromDB -> ${error.message}`);
    throw error;  // so the outer function can catch it
  }
}


async function saveEditStaffChanges(req, res) {
  const { id, name, email, role } = req.body;

  if (!name || !email || !id || !role) {
    res.status(400).send("Missing entries");
    return;
  }

  try {
    const lsmClient = await connectToDB();
    const query = `
      UPDATE university_staff 
      SET staff_name = $1, staff_email = $2, staff_type = $3 
      WHERE staff_id = $4
    `;
    await lsmClient.query(query, [name, email, role, id]);
    res.send("success");
  } catch (error) {
    console.error(`Error in saveEditStaffChanges: ${error.message}`);
    res.status(500).send("Internal Server Error");
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
//------------------------------------------------------------------Assign Labs Starts Here------------------------------------------------------------------//

async function assignLabsHandler(req, res){
  const {staffType} = req.body;
  const data = await returnLabStaffEmails(staffType);
  if (data.rowCount > 0){
    res.json(data.rows);
  }
  
}

async function returnLabStaffEmails(staffType){ 
  //This function takes in lab staff type as paramter and returns all the avaiblae staff emails of that type from DB
  //It uses a nested query to check if that email is present inside assigned_labs, if that email is present inside assigned_labs then don't return it
  //Otherwise do return it

  const lmsClient = await connectToDB();

  var query = null; //Set the query based on the type of staff requested by the user

  if (staffType == "lab_engineer"){
    query = `SELECT email FROM university_staff u
    WHERE role = $1 
    AND NOT EXISTS (
    SELECT 1 FROM assigned_labs a WHERE a.lab_eng_mail = u.email);`;
  }
  else if (staffType == "lab_technician"){
    query = `SELECT email FROM university_staff u
    WHERE role = $1 
    AND NOT EXISTS (
    SELECT 1 FROM assigned_labs a WHERE a.lab_tec_mail = u.email);`;
  }
  else if (staffType == "lab_assistant"){
    query = `SELECT email FROM university_staff u
    WHERE role = $1 
    AND NOT EXISTS (
    SELECT 1 FROM assigned_labs a WHERE a.lab_ass_mail = u.email);`;
  }

  try {
      const data = await lmsClient.query(query, [staffType]);
      return data;
    }
    catch (error){
      console.log(error.message);
    }

}

async function returnAvailableLabs(req, res){
  //Fetch those labs that are not already assigned to any 

  const {staffType} = req.body; //This is the staff type for which user is trying to find an available lab, if there is a lab which has vacancy for this staff type then we return it

  const lmsClient = await connectToDB();
  var query = null;

  //Set the query according to staffType
  if (staffType == "lab_engineer"){ //Return the labs in which lab_eng_mail is null
    query = `SELECT labs.lab_name FROM labs
             JOIN assigned_labs ON labs.lab_name = assigned_labs.lab_name
             WHERE assigned_labs.lab_eng_mail IS NULL
             `;
  }
  else if (staffType == "lab_technician"){ //Return the labs in which lab_tec_mail is null
     query = `SELECT labs.lab_name FROM labs
             JOIN assigned_labs ON labs.lab_name = assigned_labs.lab_name
             WHERE assigned_labs.lab_tec_mail IS NULL
             `;
  }
  else if (staffType == "lab_assistant"){ //Return the labs in which lab_ass_mail is null
    query = `SELECT labs.lab_name FROM labs
             JOIN assigned_labs ON labs.lab_name = assigned_labs.lab_name
             WHERE assigned_labs.lab_ass_mail IS NULL
             `;
  }

  try {
    const data = await lmsClient.query(query);
    res.json(data.rows);
  }
  catch (error){
    console.log(`staffController.js -> returnAvailableLabs() -> ${error.message}`);
  }

}

//This function gets called upon ultimate form submission when user selects a lab staff member and the name of the lab to assign that staff member to
async function saveAssignedLab(req, res){

  const {staffType, staffMember, labName} = req.body;
  const lmsClient = await connectToDB();

  //If anything from the form is missing, alert the user and do not proceed
  if (await itemsExist(staffType, labName, staffMember) == false){
    res.write("missing_entries");
    res.end();
    return;
  }

  //But if everything is fine then proceed

  //Set the query according to staff member
  //If the staff member is a lab engineer then we add lab engineer mail to DB and so on
  var query = null;
  if (staffType == "lab_engineer"){
    query = `UPDATE assigned_labs SET lab_eng_mail = $1 WHERE lab_name = $2`;
    await lmsClient.query(query, [staffMember, labName]);
  }
  else if (staffType == "lab_technician"){
    query = `UPDATE assigned_labs SET lab_tec_mail = $1 WHERE lab_name = $2`;
    await lmsClient.query(query, [staffMember, labName]);
  }
  else if (staffType == "lab_assistant"){
    query = `UPDATE assigned_labs SET lab_ass_mail = $1 WHERE lab_name = $2`;
    await lmsClient.query(query, [staffMember, labName]);
  }
  res.write("success");
  res.end();
}

//Returns true if parameters exist, else false
//Also check if the parameters are default selected values of nothing or not
async function itemsExist(staffType, labName, staffMember){

  console.log(staffType);
  console.log(labName);
  console.log(staffMember);

  if (staffType && labName && staffMember && staffType != "nothing" && labName != "nothing" && staffMember != "nothing"){
    return true;
  }
  else if (!staffType || !labName || !staffMember || staffType == "nothing" || labName == "nothing" || staffMember == "nothing"){
    return false;
  }
}

//------------------------------------------------------------------Assign Labs Ends Here------------------------------------------------------------------//

//------------------------------------------------------------------viewEditAssignedLabs Starts Here------------------------------------------------------------------//

async function returnAssignedLabs(req, res){

  const lmsClient = await connectToDB();

  const query = `SELECT * FROM assigned_labs`;

  const data = await lmsClient.query(query);

  //Send the data in response if there are any rows
  if (data.rowCount > 0){
    res.json(data.rows);
  }
}

//This function receives the staffType and the mail of the staff member to remove him from the lab, it also receives the name of the lab to 
async function unAssignLab(req, res){

  const lmsClient = await connectToDB();

  const {targetEmail, targetLab, staffType} = req.body;

  var query = null;

  if (staffType == "lab_engineer"){
    query = `UPDATE assigned_labs SET lab_eng_mail = NULL WHERE lab_eng_mail = $1 AND lab_name = $2`;
  }
  else if (staffType == "lab_technician"){
    query = `UPDATE assigned_labs SET lab_tec_mail = NULL WHERE lab_tec_mail = $1 AND lab_name = $2`;
  }
  else if (staffType == "lab_assistant"){
    query = `UPDATE assigned_labs SET lab_ass_mail = NULL WHERE lab_ass_mail = $1 AND lab_name = $2`;
  }

  try {
    await lmsClient.query(query, [targetEmail, targetLab]);
    res.write("success");
    res.end();
  }
  catch (error){
    console.log(`staffController.js -> unAssignLab() -> ${error.message}`);
    res.write("error");
  }
}

//------------------------------------------------------------------viewEditAssignedLabs Ends Here------------------------------------------------------------------//

module.exports = {
  addStaff,
  viewStaff,
  editStaff,
  saveEditStaffChanges,
  deleteStaffMember,
  assignLabsHandler,
  returnAvailableLabs,
  saveAssignedLab,
  returnAssignedLabs,
  unAssignLab,
};