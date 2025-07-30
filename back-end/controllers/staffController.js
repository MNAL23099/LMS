const connectToDB = require("../models/setupDB.js");
const {getLabName} = require("../sharedFunctions.js");

//------------------------------------------------------------------Add Staff Starts Here------------------------------------------------------------------//

async function addStaff(req, res){

    //These are the name, email and designation of the staff member just added, we need email to make sure that
    //this staff member is not present in any other lab
    const {name, email, designation} = req.body;

    //Return if either itemName or itemQuantity is null
    if (await requestIsNotNull(name, email, designation) == false){
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
            await addNewRow(name, await getLabName(), email, designation);
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

async function requestIsNotNull(name, email, designation){ //This function returns true if the variables inside parameter 
  //are not null

  if (name && email && designation){
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
    let query = "SELECT * FROM lab_staff WHERE email = $1";
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

async function addNewRow(name, labName, email, designation){ //Add new row to the DB for this staff member name, his designation, email and its lab_name

  const lsmClient = await connectToDB();

  try{
    const query = `INSERT INTO lab_staff(name, lab_name, email, designation)
    VALUES($1, $2, $3, $4)`;
    await lsmClient.query(query, [name, labName, email, designation]);
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
    const labName = await getLabName();
    const query = `SELECT * FROM lab_staff WHERE lab_name = $1`;
    const data = lsmClient.query(query, [labName]);
    return data; //Return all the data
  }
  catch(error){
    console.log(`error: fetchLabStaffFromDB()-> ${error.message}`);
  }
}

//------------------------------------------------------------------View Staff Ends Here------------------------------------------------------------------//

//------------------------------------------------------------------Assign Labs Starts Here------------------------------------------------------------------//

async function assignLabsHandler(req, res){
  console.log("fetch called!");
  const {staffType} = req.body;
  const data = await returnLabStaffEmails(staffType);
  res.json(data.rows);
}

async function returnLabStaffEmails(staffType){ //This function takes in lab staff type as paramter and returns all the avaiblae staff emails of that type from DB

  const lmsClient = await connectToDB();

  const query = "SELECT email FROM university_staff WHERE role = $1";

  try {
    const data = await lmsClient.query(query, [staffType]);
    return data;
  }
  catch (error){
    console.log(`staffController.js -> returnLabStaffEmails() -> ${error.message}`);
  }

}

//------------------------------------------------------------------Assign Labs Ends Here------------------------------------------------------------------//

module.exports = {
  addStaff,
  viewStaff,
  assignLabsHandler,
};