//This is for temporary backend code from Umar, this is a seperate file so that conflicts don't happen in github! ^^ 

const express = require("express");
const cors = require("cors");
const {Pool} = require("pg"); //This is the library for postgres SQL

const app = express();
const PORT = 5000;

// Enable CORS for all routes (for development)
app.use(cors());
app.use(express.json());

//Creating a new object of PostGres Sql, and sending a JSON object in its constructor
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "LSM",
    password: "Postgres229899615",
    port: 5432,
    }
);

//Query to add 
const query_MakeTable_Users = `CREATE TABLE IF NOT EXISTS Users
(ID INT PRIMARY KEY, 
Name VARCHAR(100), 
Password VARCHAR(100), 
Account_Type VARCHAR(100), 
Email VARCHAR(100))`;

pool.query(query_MakeTable_Users, (err, data) => {
    if (err){
        console.log("Table can not be created!");
    }
    else {
        console.log ("Table created successfully!");
    }
}

);

app.post("/addUser", (req, res) => {
const {userName, userPass, userEmail, accountType} = req.body;
console.log(userName);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
