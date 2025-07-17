const connectToDatabase = require("../models/setupDB"); //Import the lms client for our database

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

// Sign In logic
// const signInUser = (req, res) => {
//   const { username, password } = req.body;

//   const user = users.find(
//     (user) => user.username === username && user.password === password
//   );

//   if (user) {
//     return res.status(401).json({ message: "Invalid credentials" });
//   }

//   res.json({ message: "Login successful", username });
// };

 module.exports = {signUpUser};
