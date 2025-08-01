const connectoToDB = require("./setupDB.js");

async function createTables(){
    await createTable_Users();
    await createTable_assigned_labs();
    await createTable_current_session();
    await createTable_inventory();
    await createTable_lab_staff();
    await createTable_university_staff();
    await createTable_labs();
    await insertDummyData(); 
    
}//Insert dummy data that is supposed to be received from another database
// Standalone function to create labs table
async function createTable_labs(){
    // This table stores labs with id and lab_name
    const client = await connectoToDB();
    if (!client){
        return;
    }
    const query_MakeTable_labs = `CREATE TABLE IF NOT EXISTS labs
      (id SERIAL PRIMARY KEY,
      lab_name VARCHAR(100))`;
    client.query(query_MakeTable_labs, (err, data) => {
        if (err) {
            console.log("labs table can not be created!");
            console.log(err.message);
        }
        else {
            console.log("labs table created!");
        }
    });
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

async function createTable_assigned_labs(){ //This Table tells which lab engineer is assigned to
    //which lab

    const client = await connectoToDB();
    if (!client){ //If client was not returned then just return
        return;
    }
    
    const query_MakeTable_Users = `CREATE TABLE IF NOT EXISTS assigned_Labs
      (id SERIAL PRIMARY KEY, 
      lab_name VARCHAR(100), 
      lab_eng_mail VARCHAR(100),
      lab_ass_mail VARCHAR(100),
      lab_tec_mail VARCHAR(100))`;

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

async function insertDummyData(){ //This function adds dummy data inside and university_staff

    const lmsClient = await connectoToDB();

    //Assigned_labs dummy data
    // let query_dummyData_Assigned_labs = `SELECT * FROM Assigned_labs WHERE lab_eng_mail = $1`;
    // const targetValue_1 = "kashif@itu.edu.pk";
    // const data = await lmsClient.query(query_dummyData_Assigned_labs, [targetValue_1]);

    // if (data.rowCount == 0){
    //     query_dummyData_Assigned_labs = `INSERT INTO Assigned_labs(lab_name, lab_eng_mail)
    //     VALUES($1, $2)`;
    //     try{
    //         const name = "Controls Lab";
    //         const lab_eng_mail = "kashif@itu.edu.pk";
    //         lmsClient.query(query_dummyData_Assigned_labs, [name, lab_eng_mail]);
    //         console.log("Assigned_labs dummy data done!");
    //     }
    //     catch (error){
    //         console.log("Issue in adding dummy data to Assigned_labs");
    //         console.log(error.message);
    //     }
        
    // }
    // else {
    //     console.log("Dummy data of Assigned_labs done!");
    // }

    //Users dummy data
    // let query_dummyData_Users = 'SELECT * FROM Users WHERE email = $1';
    // const targetValue = "kashif@itu.edu.pk";
    // const data_1 = await lmsClient.query(query_dummyData_Users, [targetValue]);
    // if (data_1.rowCount == 0){
    //     query_dummyData_Users = `INSERT INTO Users(name, email, password, account_type)
    //     VALUES($1, $2, $3, $4)`;
    //     try{
    //         const name = "Kashif";
    //         const email = "kashif@itu.edu.pk";
    //         const pass = "123";
    //         const accountType = "lab_engineer";
    //         lmsClient.query(query_dummyData_Users, [name, email, pass, accountType]);
    //         console.log("Users dummy data done!");
    //     }
    //     catch (error){
    //         console.log("Issue in adding dummy data to Users");
    //         console.log(error.message);
    //     }
    // }
    // else {
    //     console.log("Dummy data of Users done!");
    // }

    //Add a lab engineer to university_staff
    let query_dummyData_university_staff = 'SELECT * FROM university_staff WHERE email = $1';
    const targetValue = "kashif@itu.edu.pk";
    const data_1 = await lmsClient.query(query_dummyData_university_staff, [targetValue]);
    if (data_1.rowCount == 0){
        query_dummyData_university_staff = `INSERT INTO university_staff(name, email, role)
        VALUES($1, $2, $3)`;
        try{
            const name = "Kashif";
            const email = "kashif@itu.edu.pk";
            const role = "lab_engineer";
            lmsClient.query(query_dummyData_university_staff, [name, email, role]);
            console.log("univeristy_staff dummy data done!");
        }
        catch (error){
            console.log("Issue in adding dummy data to university_staff");
            console.log(error.message);
        }
    }
    else {
        console.log("Dummy data of university_staff done!");
    }

    //Add a lab technician to university_staff
    let query_dummyData_university_staff_2 = 'SELECT * FROM university_staff WHERE email = $1';
    const targetValue_2 = "usman@itu.edu.pk";
    const data_2 = await lmsClient.query(query_dummyData_university_staff_2, [targetValue_2]);
    if (data_2.rowCount == 0){
        query_dummyData_university_staff_2 = `INSERT INTO university_staff(name, email, role)
        VALUES($1, $2, $3)`;
        try{
            const name = "Usman";
            const email = "usman@itu.edu.pk";
            const role = "lab_technician";
            lmsClient.query(query_dummyData_university_staff_2, [name, email, role]);
        }
        catch (error){
            console.log("Issue in adding dummy data to university_staff");
            console.log(error.message);
        }
    }

    //Add a lab assistant to university_staff
    let query_dummyData_university_staff_3 = 'SELECT * FROM university_staff WHERE email = $1';
    const targetValue_3 = "ali@itu.edu.pk";
    const data_3 = await lmsClient.query(query_dummyData_university_staff_3, [targetValue_3]);
    if (data_3.rowCount == 0){
        query_dummyData_university_staff_3 = `INSERT INTO university_staff(name, email, role)
        VALUES($1, $2, $3)`;
        try{
            const name = "Ali";
            const email = "ali@itu.edu.pk";
            const role = "lab_assistant";
            lmsClient.query(query_dummyData_university_staff_3, [name, email, role]);
        }
        catch (error){
            console.log("Issue in adding dummy data to university_staff");
            console.log(error.message);
        }
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
      email VARCHAR(100),
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

async function createTable_university_staff(){ //This table is filled by the university when they hire new staff, our job is not to hire people

    const client = await connectoToDB();
    if (!client){ //If client was not returned then just return
        return;
    }
    
    const query_MakeTable_current_session = `CREATE TABLE IF NOT EXISTS university_staff
      (id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100),
      role VARCHAR(100))`;

    client.query(query_MakeTable_current_session, (err, data) => {
        if (err) {
            console.log("university_staff table can not be created!");
            console.log(err.message);
        }
        else {
            console.log("university_staff table created!");
        }
    });
}


module.exports = createTables;


