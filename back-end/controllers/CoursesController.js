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
        const query = `SELECT * FROM Courses WHERE course_name = $1`;
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
        const query = `INSERT INTO Courses(course_name) VALUES($1)`;
        await lsmClient.query(query, [courseName]);
    } catch (error) {
        console.log(`error: addCourseToCoursesTable()-> ${error.message}`);
        return;
    }
}

// View all courses
// async function view_courses(req, res) {
//     try {
//         const query_view = `SELECT * FROM courses`;
//         const lsmClient = await connectToDB();
//         const data = await lsmClient.query(query_view);
//         res.json(data.rows);
//     } catch (error) {
//         console.log(`error: courses -> View()-> ${error.message}`);
//     }
// }

module.exports = { Add_courses };