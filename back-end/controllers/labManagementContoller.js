const connectToDB = require("../models/setupDB.js");


async function addLabs_for_Management(req,res){
    const { itemName } = req.body;

    // Return if itemName is null or empty
    if (!itemName) {
        console.log("itemName is NULL");
        res.write("missing_entries");
        res.end();
        return;
    }

    try {
        const exists = await labAlreadyExists(itemName);
        if (exists) {
            res.write("lab_already_exists");
            res.end();
        } else {
            await addLabToLabsTable(itemName);
            await addLabToassigned_labs(itemName);
            res.write("new_lab_added");
            res.end();
        }
    } catch (error) {
        console.log(`error: addLabs_for_Management()-> ${error.message}`);
        res.write("failure");
        res.end();
    }
}

// Check if lab already exists in labs table
async function labAlreadyExists(labName) {
    const lsmClient = await connectToDB();
    try {
        const query = `SELECT * FROM labs WHERE lab_name = $1`;
        const data = await lsmClient.query(query, [labName]);
        return data.rowCount > 0;
    } catch (error) {
        console.log(`error: labAlreadyExists()-> ${error.message}`);
        return false;
    }
}


// Add lab to labs table
async function addLabToLabsTable(labName) {
    const lsmClient = await connectToDB();
    try {
        const query = `INSERT INTO labs(lab_name) VALUES($1)`;
        await lsmClient.query(query, [labName]);
    } catch (error) {
        console.log(`error: addLabToLabsTable()-> ${error.message}`);
        return;
    }
}

//Add that same lab to assigned_labs and set
//lab_eng_mail = null, lab_ass_mail = null, lab_tec_mail = null
//because the lab is new so it doesn't have any staff right now
async function addLabToassigned_labs(labName){
    const lsmClient = await connectToDB();
    try {
        const query = `INSERT INTO assigned_labs(lab_name) VALUES($1)`;
        await lsmClient.query(query, [labName]);
    } catch (error) {
        console.log(`error: labManagementController.js -> addLabsToassigned_labs()-> ${error.message}`);
        return;
    }

}
async function view_labs(req,res){
     try{
  const query_view = `SELECT * FROM labs`;
  const lsmClient = await connectToDB();
  const data = await lsmClient.query(query_view);

  res.json(data.rows);
  }
  catch(error){
    console.log(`error: labManagement -> View()-> ${error.message}`);
  }

}

module.exports = { addLabs_for_Management, view_labs };
