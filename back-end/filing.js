const fs = require("fs").promises;

async function readFile(){
    try{
        const data = await fs.readFile("./userData/current_session.txt", "utf-8");
        console.log(data);
    }
    catch (error){
        console.log(error.message);
    }
   
}

async function writeFile(){
    try{
        fs.writeFile("./userData/current_session.txt", "manalRana@itu.edu.pk");
    }
    catch (error){
        console.log(error.message);
    }
}

module.exports = {
    readFile, 
    writeFile};