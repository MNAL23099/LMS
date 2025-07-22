const connectoToDB = require("./setupDB.js");

async function createTables(){
    await createTable_Users();
    await createTable_Assigned_labs();
    await createTable_current_session();
    await createTable_inventory();
    await createTable_lab_staff();
    await insertDummyData(); //Insert dummy data that is supposed to be received from another database
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

async function createTable_Assigned_labs(){ //This Table tells which lab engineer is assigned to
    //which lab

    const client = await connectoToDB();
    if (!client){ //If client was not returned then just return
        return;
    }
    
    const query_MakeTable_Users = `CREATE TABLE IF NOT EXISTS assigned_Labs
      (id SERIAL PRIMARY KEY, 
      lab_name VARCHAR(100), 
      lab_eng_mail VARCHAR(100))`;

    client.query(query_MakeTable_Users, (err, data) => {
        if (err) {
            console.log("Assigned_Labs Table can not be created!");
            console.log(err.message);
        }
        else {
            console.log("Assigned_Labs table created!");
        }
    });

}

async function insertDummyData(){ //This function adds dummy data inside Assigned_labs table and Users

    const lmsClient = await connectoToDB();

    //Assigned_labs dummy data
    let query_dummyData_Assigned_labs = `SELECT * FROM Assigned_labs WHERE lab_eng_mail = $1`;
    const targetValue_1 = "kashif@itu.edu.pk";
    const data = await lmsClient.query(query_dummyData_Assigned_labs, [targetValue_1]);

    if (data.rowCount == 0){
        query_dummyData_Assigned_labs = `INSERT INTO Assigned_labs(lab_name, lab_eng_mail)
        VALUES($1, $2)`;
        try{
            const name = "Controls Lab";
            const lab_eng_mail = "kashif@itu.edu.pk";
            lmsClient.query(query_dummyData_Assigned_labs, [name, lab_eng_mail]);
            console.log("Assigned_labs dummy data done!");
        }
        catch (error){
            console.log("Issue in adding dummy data to Assigned_labs");
            console.log(error.message);
        }
        
    }
    else {
        console.log("Dummy data of Assigned_labs done!");
    }

    //Users dummy data
    let query_dummyData_Users = 'SELECT * FROM Users WHERE email = $1';
    const targetValue = "kashif@itu.edu.pk";
    const data_1 = await lmsClient.query(query_dummyData_Users, [targetValue]);
    if (data_1.rowCount == 0){
        query_dummyData_Users = `INSERT INTO Users(name, email, password, account_type)
        VALUES($1, $2, $3, $4)`;
        try{
            const name = "Kashif";
            const email = "kashif@itu.edu.pk";
            const pass = "123";
            const accountType = "lab_engineer";
            lmsClient.query(query_dummyData_Users, [name, email, pass, accountType]);
            console.log("Users dummy data done!");
        }
        catch (error){
            console.log("Issue in adding dummy data to Users");
            console.log(error.message);
        }
    }
    else {
        console.log("Dummy data of Users done!");
    }
}

async function createTable_current_session(){ //This table stores the ID of the person that is currently
    //signed into the website. This table is supposed to have just one row

    const client = await connectoToDB();
    if (!client){ //If client was not returned then just return
        return;
    }
    
    const query_MakeTable_current_session = `CREATE TABLE IF NOT EXISTS current_session
      (email VARCHAR(100) PRIMARY KEY)`;

    client.query(query_MakeTable_current_session, (err, data) => {
        if (err) {
            console.log("current_session table can not be created!");
            console.log(err.message);
        }
        else {
            console.log("current_session table created!");
        }
    });
}

async function createTable_inventory(){ //This table stores the inventory item name and its quantity
    //it also stores which lab has that inventory item

    const client = await connectoToDB();
    if (!client){ //If client was not returned then just return
        return;
    }
    
    const query_MakeTable_current_session = `CREATE TABLE IF NOT EXISTS inventory
      (ID SERIAL PRIMARY KEY,
      name VARCHAR(100),
      quantity INT,
      lab_name VARCHAR(100))`;

    client.query(query_MakeTable_current_session, (err, data) => {
        if (err) {
            console.log("inventory table can not be created!");
            console.log(err.message);
        }
        else {
            console.log("inventory table created!");
        }
    });
}

async function createTable_lab_staff(){ //This table stores the inventory item name and its quantity
    //it also stores which lab has that inventory item

    const client = await connectoToDB();
    if (!client){ //If client was not returned then just return
        return;
    }
    
    const query_MakeTable_current_session = `CREATE TABLE IF NOT EXISTS lab_staff
      (id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      designation VARCHAR(100),
      lab_name VARCHAR(100))`;

    client.query(query_MakeTable_current_session, (err, data) => {
        if (err) {
            console.log("lab_staff table can not be created!");
            console.log(err.message);
        }
        else {
            console.log("lab_staff table created!");
        }
    });
}



module.exports = createTables;


