const connectToDB = require("../models/setupDB.js");
const {getLabName} = require("../sharedFunctions.js");

async function addStaff(req, res){
    console.log("Add staff controller function");
    console.log(await getLabName());
}

module.exports = addStaff;