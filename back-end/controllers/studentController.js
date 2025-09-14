const {
  addStudentService,
  getAllStudentsService
} = require("../sharedFunctions.js");


async function addStudent(req, res) {
  try {
    const student = await addStudentService(req.body);
    res.status(201).json({ message: "Student added", student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

async function getAllStudents(req, res) {
  try {
    const students = await getAllStudentsService();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

module.exports = { addStudent, getAllStudents };