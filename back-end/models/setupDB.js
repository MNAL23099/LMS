const { Client } = require("pg");

//indicator that tells if the lmsClient has already been made or not
let lmsClient = null;

async function connectToDatabase() {

    if (lmsClient){ //If the lms client was already made then return it
        return lmsClient;
    }

    const client = new Client({
        user: "superdeveloper",
        host: "localhost",
        password: "123",
        database: "postgres", //Connect to this default database for now
        port: "5432"
    });
    try{
        await client.connect();
        console.log("Default database connected!");
        //If connection to the database is successful then connect to LMS
    
        //First check if LMS already exists or not
        const query_CheckDatabaseValidity = `SELECT 1 from pg_database WHERE datname = 'lms'`;
        const response = await client.query(query_CheckDatabaseValidity);

        if (response.rowCount == 0){ //If LMS doesn't exist
            console.log(response.rowCount);
            const query_createDB_LMS = `CREATE DATABASE lms`;
            await client.query(query_createDB_LMS);
        }
        
        //Then end the current database connection (current is default postgres)
        await client.end();
        try{
            const newClient = await connectToLMS();
            return newClient;
        }
        catch(error){
            return null;
        }
        
    }
    catch (error){
        console.log("Issue in connection to default database!");
        console.log(error.message);
        return null;
        //Return null if there is no client to return
    }
    
}

async function connectToLMS(){ //Connect to LMS database

    //Create a new client
    const newClient = new Client({
        user: "superdeveloper",
        host: "localhost",
        password: "123",
        database: "lms", //Connect to this default database for now
        port: "5432"  
    });
    try{
        await newClient.connect();
        console.log("Connected to LMS");
        lmsClient = newClient;
        return newClient;
    }
    catch (error){
        console.log("Issue in connecting to LMS");
        console.log(error.message);
        return null;
    }

}

module.exports = connectToDatabase;