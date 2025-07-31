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

module.exports = { addLabs_for_Management };
