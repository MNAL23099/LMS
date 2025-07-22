const connectToDB = require("./models/setupDB");
const fs = require("fs").promises;

async function getCurrentSession(){ //Return the email of the person currently signed in

  const filePath = "./userData/current_session.txt";

  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log(`Current session:  ${data}`);
    return data;
  }
  catch (error){
    console.log("Issue in loading current session");
    console.log(error.message);
    return;
  }

}

async function getLabName(){ //Return the lab assigned to the person currently logged in to the website
  const lsmClient = await connectToDB();

  const currentSessionMail = await getCurrentSession();
  
  try {
    //Check inside DB that which lab is assigned to currentSessionMail
    let query = `SELECT lab_name FROM assigned_labs WHERE lab_eng_mail = $1`;

    const data = await lsmClient.query(query, [currentSessionMail]);
    if (data.rowCount == 0){
      console.log("No lab found for the currently logged in lab engineer!");
      return;
    }
    return data.rows[0].lab_name;
  }
  catch (error){
    console.log(`error: getLabName() -> ${error.message}`);
    return;
  }
  
}

module.exports = {
  getCurrentSession,
  getLabName,
}