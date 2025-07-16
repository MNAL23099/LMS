const connectoToDB = require("./setupDB.js");

async function createTables(){
    await createTable_Users();
}

async function createTable_Users(){

    const client = await connectoToDB();
    if (!client){ //If client was not returned then just return
        return;
    }
    
    const query_MakeTable_Users = `CREATE TABLE IF NOT EXISTS Users
      (ID SERIAL PRIMARY KEY, 
      Name VARCHAR(100), 
      Password VARCHAR(100), 
      Account_Type VARCHAR(100), 
      Email VARCHAR(100))`;

    client.query(query_MakeTable_Users, (err, data) => {
        if (err) {
            console.log("User Table can not be created!");
            console.log(err.message);
        }
        else {
            console.log("Users table created!");
        }
    });
}

module.exports = createTables;


