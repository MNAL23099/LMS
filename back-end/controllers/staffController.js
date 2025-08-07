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


//------------------------------------------------------------------View Staff Starts Here------------------------------------------------------------------//

async function viewStaff (req, res){ //This is the main function that is called when the viewStaff route is accessed, it takes all the staff members for the currently logged in lab and returns it
  
  const data = await fetchLabStaffFromDB(); //Fetch from DB
  res.json(data.rows); //Send all the resulting rows in response
}

async function fetchLabStaffFromDB(){ //This function fetches all staff member data for the current session lab engineer from DB and returns them in json
  try{
    const lsmClient = await connectToDB();
   
    const query = `SELECT * FROM university_staff`;
    const data = lsmClient.query(query);
    return data; //Return all the data
  }
  catch(error){
    console.log(`error: fetchLabStaffFromDB()-> ${error.message}`);
  }
}

//------------------------------------------------------------------View Staff Ends Here------------------------------------------------------------------//


//------------------------------------------------------------------Edit Staff Starts Here------------------------------------------------------------------//

async function editStaff(req, res) {
  
    const data = await fetchStaffFromDB();
  //   console.log("Staff fetched for edit:", data.rows);

  //   const formatted = data.rows.map(row => ({
  //     id: row.staff_id,
  //     name: row.staff_name,
  //     email: row.staff_email,
  //     role: row.staff_type
  //   }));

  //   res.json(formatted);
  // } catch (err) {
  //   console.error("Error in editStaff:", err.message);
  //   res.status(500).send("Internal Server Error");
  // }
  res.json(data.rows);// to send all teh rows in resonse
}


async function fetchStaffFromDB() {
  try {
    const lsmClient = await connectToDB();  // This uses setupDB
    const query = `SELECT * FROM university_staff`;
    const data = await lsmClient.query(query);  //  FIXED typo here
    return data;
  } catch (error) {
    console.log(`Error: fetchStaffFromDB -> ${error.message}`);
    throw error;  // so the outer function can catch it
  }
}

async function staffMemberIsAssignedToLab(email, currentStaffType){ //This function checks if the staff member is assigned to a lab or not
  //If the staff member is assigned then return true otherwise return false

  const lmsClient = await connectToDB();

  let query = null;
  let data = null;

  if (currentStaffType == "lab_engineer"){
    query = `SELECT * FROM assigned_labs WHERE lab_eng_mail = $1`;
    data = await lmsClient.query(query, [email]);
  }
  else if (currentStaffType == "lab_technician"){
    query = `SELECT * FROM assigned_labs WHERE lab_tec_mail = $1`;
    data = await lmsClient.query(query, [email]);
  }
  else if (currentStaffType == "lab_assistant"){
    query = `SELECT * FROM assigned_labs WHERE lab_ass_mail = $1`;
    data = await lmsClient.query(query, [email]);
  }

  if (data.rowCount == 0){ //If this email is not present inside assigned_labs, it means this email is not assigned to any lab
    return false;
  }
  else return true; //If the rowCount is not 0 then it means that the email is indeed assigned to some lab inside assigned_labs
}

async function saveEditStaffChanges(req, res) {

  const {id, name, email, currentRole, changedRole} = req.body;

  if ( await entriesExist(name, email, id)== false) {
    res.write("missing_entries");
    res.end();
    return;
  }

  //If that staff member is already assigned to a lab then we won't edit him because otherwise all his info in other places will have to be edited
  if (await staffMemberIsAssignedToLab(email, currentRole) == true){
    res.write("staff_member_assingned_to_lab");
    res.end();
    return;
  }

  const lsmClient = await connectToDB();
  let query = null;

  if (changedRole != "no_change") { //If the user selected the role to be changed then update the role too
    try {
      query = `
      UPDATE university_staff 
      SET name = $1, email = $2, role = $3 
      WHERE id = $4`;
      await lsmClient.query(query, [name, email, changedRole, id]);
      res.send("success");
    } catch (error) {
      console.error(`Error in saveEditStaffChanges: ${error.message}`);
      res.status(500).send("Internal Server Error");
    }
  }
  else { //If the user doesn't want to change the role
    try {
      query = `
      UPDATE university_staff 
      SET name = $1, email = $2
      WHERE id = $3`;
      await lsmClient.query(query, [name, email, id]);
      res.send("success");
    } catch (error) {
      console.error(`Error in saveEditStaffChanges: ${error.message}`);
      res.status(500).send("Internal Server Error");
    }
  }
}

//Helper function for editInventory functionality
async function entriesExist(itemName, email, id){ //Check if all the entries exist

  if (!itemName || !email|| !id){
    return false;
  }
  else return true;
}

async function deleteStaffMember(req, res) {
  const { id, currentRole, email } = req.body;

  if (!id || !currentRole || !email) {
    res.write("missing_entries");
    res.end();
    return;
  }

  if (await staffMemberIsAssignedToLab(email, currentRole) == true){
    res.write("staff_member_assingned_to_lab");
    res.end();
    return;
  }

  try {
    const client = await connectToDB();
    const query = `DELETE FROM university_staff WHERE id = $1`;
    await client.query(query, [id]);
    res.write("success");
    res.end();
  } catch (error) {
    console.log(`deleteStaffMember() error: ${error.message}`);
  }
}
//------------------------------------------------------------------Edit Staff Ends Here------------------------------------------------------------------//

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
//----------------------------------------------The Assigned Course starts here----------------------------------------------//


async function returnAssignedlabEngineers(request, response) {
   
  const lmsClient = await connectToDB();

  try {
    const query_yy = `
      SELECT u.email 
      FROM university_staff u 
      JOIN assigned_labs a ON u.email = a.lab_eng_mail 
      WHERE u.role = 'lab_engineer' AND a.lab_eng_mail IS NOT NULL
    `;
    const data = await lmsClient.query(query_yy);
    response.json(data.rows);
  } catch (error) {
    console.log(`staffController->returnAssignedlabEngineers()-> ${error.message}`);
   
  }
}
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
  returnAssignedlabEngineers,
};