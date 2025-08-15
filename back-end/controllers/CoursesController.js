const connectToDB = require("../models/setupDB.js");


async function Add_courses(req, res) {
    const { courseName } = req.body;

    if (!courseName) {
        console.log("courseName is NULL");
        res.write("missing_entries");
        res.end();
        return;
    }

    try {
        const exists = await courseAlreadyExists(courseName);
        if (exists) {
            res.write("course_already_exists");
            res.end();
        } else {
            await addCourseToCoursesTable(courseName);
            res.write("new_course_added");
            res.end();
        }
    } catch (error) {
        console.log(`error: addCourses()-> ${error.message}`);
        res.write("failure");
        res.end();
    }
}

// Check if course already exists in courses table
async function courseAlreadyExists(courseName) {
    const lsmClient = await connectToDB();
    try {
        const query = `SELECT * FROM courses WHERE course_name = $1`;
        const data = await lsmClient.query(query, [courseName]);
        return data.rowCount > 0;
    } catch (error) {
        console.log(`error: courseAlreadyExists()-> ${error.message}`);
        return false;
    }
}

// Add course to courses table
async function addCourseToCoursesTable(courseName) {
    const lsmClient = await connectToDB();
    try {
        const query = `INSERT INTO courses(course_name) VALUES($1)`;
        await lsmClient.query(query, [courseName]);
    } catch (error) {
        console.log(`error: addCourseToCoursesTable()-> ${error.message}`);
        return;
    }
}

// View all courses
async function view_courses(req, res) {
    try { 
      
        const query_view = `SELECT * FROM courses`;
        const lsmClient = await connectToDB();
        const data = await lsmClient.query(query_view);
        res.json(data.rows);
    } catch (error) {
        console.log(`error: courses -> View()-> ${error.message}`);
    }
}

async function Delete_Courses(req,res){
 const {id} = req.body;
  if (!id){
    res.write("missing_entries");
    res.end();
    return;
  }

  try{
    const lsmClient = await connectToDB();
    const query = `DELETE FROM courses WHERE id = $1`;
    await lsmClient.query(query, [id]);
    res.write("success");
    res.end();
  }
  catch (error){
    console.log(`error: CoursesController.js -> deleteCourses()-> ${error.message}`);
  }
}


//--------------------------Sub Manager Functionality Starts Here-------------------------------------------------//

async function Add_a_Row_to_AssignedCourses(req,res){
    console.log("hi");
    const {Courses, lab, labeng,batchNumber } = req.body; //Corrected, the keys that are being sent from the frontend were not matching the keys being received here
    if (!Courses|| !lab || !labeng || !batchNumber) {
        console.log("Missing entries:", Courses, lab, labeng,batchNumber);
        res.write("missing_entries");
        res.end();
        return;
    }
    try{
        console.log("Insert params:", Courses, lab, labeng,batchNumber);
        const lsmClient = await connectToDB();
        if (!lsmClient) {
            console.log("DB connection failed");
            res.write("db_error");
            res.end();
            return;
        }
        const query_yyy = `INSERT INTO assicourses (course_name, lab, labEngineer, batchnumber) VALUES($1, $2, $3, $4)`;
        await lsmClient.query(query_yyy, [Courses, lab, labeng,batchNumber]);
        res.write("success");
        res.end();
    }
    catch(error){
        console.log(`error: CoursesController.js -> AssignedCourses()-> ${error.message}`);
        res.write("Not added");
        res.end();
    }
}

async function View_Assigned_Courses(req,res){
    try { 
   
        const query_view_1 = `SELECT * FROM assicourses`;
        const lsmClient = await connectToDB();
        const data = await lsmClient.query(query_view_1);
        res.json(data.rows);
    } catch (error) {
        console.log(`error: assicourses -> View()-> ${error.message}`);
    }

}
async function Filter_Assigned_Courses(req,res){
    console.log("here i sm tired");
     const {batchNumber} = req.body;
    if(!batchNumber){
        console.log("no data");
    }
  
try {
    const query_view_2 = `SELECT * FROM assicourses WHERE batchnumber = $1`;
    const lsmClient = await connectToDB();
    const data = await lsmClient.query(query_view_2, [batchNumber]);
    res.json(data.rows);
} catch (error) {
        console.log(`error: assicourses -> filter_View()-> ${error.message}`);
    }

}

async function UnAssign_Courses(req,res){
    const {ID} = req.body;
   if (!ID){
    res.write("missing_entries");
    res.end();
    return;
  }

  try{
    const lsmClient = await connectToDB();
    const query = `DELETE FROM assicourses WHERE id = $1`;
    await lsmClient.query(query, [ID]);
    res.write("success");
    res.end();
  }
    catch(error){
         console.log(`error: assicourses -> unassign_courses-> ${error.message}`);
    }


}

module.exports = { Add_courses, view_courses, Delete_Courses, Add_a_Row_to_AssignedCourses,View_Assigned_Courses,Filter_Assigned_Courses,UnAssign_Courses};