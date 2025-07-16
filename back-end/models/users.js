//This is the table in which all the signed up users will be stored

const connectToDatabase = require("./setupDB.js");

async function createTables(){
    const client = await connectToDatabase();

    //Query to make the users table
    const query_MakeTable_Users = `CREATE TABLE IF NOT EXISTS Users
    (ID INT PRIMARY KEY, 
    Name VARCHAR(100), 
    Password VARCHAR(100), 
    Account_Type VARCHAR(100), 
    Email VARCHAR(100))`;

    client.query(query_MakeTable_Users, (err, data) => {
        if (err){
            console.log("Table can not be created!");
        }
        else {
            console.log ("Users table created successfully!");
        }
    }
    );
}

module.exports = createTables;
    


