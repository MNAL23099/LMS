const connectToDatabase = require("../models/setupDB"); //Import the lms client for our database

// Dummy data for now — will replace with DB later
const users = [];

// Sign Up logic
async function signUpUser(req, res) {
  
  const lmsClient = await connectToDatabase(); //Get the lmsClient

  //Import the json from frontend
  const { username, password, accountType, email } = req.body;
  console.log(username); 
  console.log(accountType);

  //Run query to insert data into db
  if (username && password && accountType && email){
    if (await userAlreadyExists() == false){ //If user already exists then don't add him in db, otherwise do
      console.log("Sign up user already exists!");
      return;
    }
    const query = `INSERT INTO users(name, password, account_type, email)
                  VALUES($1, $2, $3, $4)`;

    try{
      await lmsClient.query(query, [username, password, accountType, email]);
      console.log("User has been added to db!");
    }
    catch (error){
      console.log("Error in putting signed up user to the database");
      console.log(error.message);
    }

  }
  else {
    console.log("User did not fill all fields of sign up form");
  }
  
  res.status(201).json({ message: "User registered successfully" });
};

async function userAlreadyExists(targetEmail){
  const lmsClient = await connectToDatabase();

  const query_get_Users = `SELECT * FROM users`;
  try {
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
const signInUser = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", username });
};

module.exports = { signUpUser, signInUser };
