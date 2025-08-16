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
 
async function signInUser(req,res){
  
  const {email, password} = req.body;
  
  if(await AllFilled(email , password) == false){
    // res.write("Entries are missing");
    // res.end();
    res.json({status: "missing_fields"});
    return;
  }

  try{
    const lmsdb = await connectToDatabase(); 
    const query = `SELECT email, password FROM accounts
    WHERE email = $1 AND password = $2 `;
    const variable = await lmsdb.query(query, [email, password]);

    if (variable.rows.length > 0){
      const accountRole =  await getAccountRole(email);
      if (await initializeUserSession(req, accountRole) == true){
        res.json({ status: "success", role: accountRole });
      }
      else res.json({status: "error"});
    }
    else if (variable.rows.length == 0){
      res.json({status: "credentials_mismatch"});
    }
  }
  catch(error){
    console.log(`error: authController.js -> signInUser()-> ${error.message}`)
  }
}

async function AllFilled(email, password){
  if(!email || !password){
    return false;
  }
  return true;
}
async function getAccountRole(targetEmail){
   const lmsdb = await connectToDatabase();
   try{
   const query_2 = `SELECT role FROM accounts WHERE email = $1`
   const variable_2 = await lmsdb.query(query_2,[targetEmail]); 
   return variable_2.rows[0].role;
   }
   catch(error){
     console.log(`error: authController.js-> ACCOUNTYPE-> signInUser()-> ${error.message}`)
   }
   
}

async function initializeUserSession(req, role){
  req.session.user = {role: role};
  console.log(`signed in session role: ${req.session.user.role}`);
  req.session.save(()=>{console.log("session saved!");});
  
  return true;
}
module.exports = {signUpUser, signInUser};
