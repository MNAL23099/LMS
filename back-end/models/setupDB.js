const { error } = require("console");

async function connectToDatabase(){

    const prompt = require("prompt-sync")();
    var errorExists = true; //We assume that error is here to run the
    //first iteration of the while loop

    var pgPassword = ""; //The password to be sent to the client

    while(errorExists){// Ask for password till the user gives the right password

        pgPassword = prompt("Postgres Password: \n");

        //Connect to the database
        const {Client} = require("pg");
        const { read } = require("fs");

        //Creating a new object of PostGres Sql, and sending a JSON object in its constructor
        const client = new Client({
            user: "postgres",
            host: "localhost",
            password: pgPassword,
            port: 5432,
            }
        );

        try{
            await client.connect();
            //If no error is caught then error doesn't exist
            errorExists = false;
            return client;
        }
        catch(error) {
            console.log("Wrong password!");
        }
    }
}

module.exports = connectToDatabase;