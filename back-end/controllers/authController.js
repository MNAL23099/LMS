const { stat } = require("fs");
const connectToDatabase = require("../models/setupDB"); //Import the lms client for our database
const write_file = require ("fs").promises;


// Sign Up logic, this function runs when /signup of backend is accessed
async function signUpUser(req, res) {
  
  const lmsClient = await connectToDatabase(); //Get the lmsClient

  //Import the json from request
  const { username, password, accountType, email } = req.body;

  //Only proceed if username, password, accountType and email are present
  if (username && password && accountType && email){
    if (await userAlreadyExists(email) == true){ //If user already exists then don't add him in db, otherwise do
      console.log("Sign up user already exists!");
      res.write("user_already_exists");
      res.end();
      return;
    }
    const query = `INSERT INTO users(name, password, account_type, email)
    VALUES($1, $2, $3, $4)`;

    try{ //Try to add the user to database
      await lmsClient.query(query, [username, password, accountType, email]);
      console.log("User has been added to db!");
      res.write("success");
      res.end();
    }
    catch (error){
      console.log("Error in putting signed up user to the database");
      console.log(error.message);
    }

  }
  else {
    console.log("User did not fill all fields of sign up form");
    res.write("missing_entries"); //Return this response to the frontend
    res.end();
  }

};

async function userAlreadyExists(targetEmail){// This function returns true if the target email already exists
  const lmsClient = await connectToDatabase();

  try {
    const query_get_Users = `SELECT * FROM users`;
    const data = await lmsClient.query(query_get_Users);
    for(let i = 0; i < data.rows.length; i++){
      if (data.rows[i].email == targetEmail){
        return true; //If the email already exists inside db then return true
      }
    }
  }
  catch(error){
    console.log("error:userAlreadyExists()->");
    console.log(error.message);
  }

  return false; //User email was not found in db, return false
}
async function signInUser(req, res) {
  const { email, password } = req.body;

  if (await AllFilled(email, password) == false) {
    res.write("Entries are missing");
    res.end();
    return;
  }

  try {
    const lmsdb = await connectToDatabase(); 
    const query = `SELECT email, password, account_status 
                   FROM accounts
                   WHERE email = $1 AND password = $2 AND account_status = $3`;

    const variable = await lmsdb.query(query, [email, password, "Active"]);

    if (variable.rows.length === 0) {
      res.write("Invalid email or password");
      res.end();
      return;
    }

    const status = await getAccountStatus(email);
    if (status !== "Active") {
      res.write("Terminated");
      res.end();
      return;
    }

    if (variable.rows.length > 0) {
      const data_1 = await getAccountRole(email);
      await initializeUserSession(req, data_1);
      res.write(data_1);
      res.end();
    }
  } catch (error) {
    console.log(`error: authcontroller -> signinuser() -> ${error.message}`);
  }
}

async function getAccountRole(email) {
  try {
    const lmsdb = await connectToDatabase(); 
    const query_1 = `SELECT role FROM accounts WHERE email = $1`;
    const data = await lmsdb.query(query_1, [email]);
    if (data.rows.length === 0){
      return null;
    } 
    return data.rows[0].role;
  } catch (error) {
    console.log(`error: authcontroller -> getAccountRole() -> ${error.message}`);
  }
}

async function getAccountStatus(email) {
  try {
    const lmsdb = await connectToDatabase(); 
    const query_1 = `SELECT account_status FROM accounts WHERE email = $1`;
    const data = await lmsdb.query(query_1, [email]);
     if (data.rows.length === 0){
      return null;
    } 
    return data.rows[0].account_status;
  } catch (error) {
    console.log(`error: authcontroller -> getAccountStatus() -> ${error.message}`);
  }
}

async function AllFilled(email, password) {
  if (!email || !password) {
    return false;
  }
  return true;
}

async function initializeUserSession(req, role) {

  req.session.user = { role: role };
  console.log(`signed in session role: ${req.session.user.role}`);
  req.session.save(() => { console.log("session saved!"); });
  return true;
}

module.exports = {signUpUser, signInUser};
