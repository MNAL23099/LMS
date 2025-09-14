const express = require("express");
const cors = require("cors");

const createTables = require("./models/allTables.js");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use(express.json());
app.use(require("./session.js"));

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/inventory", require("./routes/inventory"));
app.use("/labStaff", require("./routes/labStaff"));
app.use("/labManagement", require ("./routes/labManagement"));
app.use("/Course", require("./routes/Course"));
app.use("/LabSub" , require("./routes/LabSub"));
app.use("/labEngineer", require("./routes/labEngineer"));
app.use("/accounts", require("./routes/accounts"));
app.use("/session", require("./routes/session"));
app.use("/uploadFileTest", require("./routes/fileUploadTest.js"));
app.use("/faculties", require("./routes/faculties"));
app.use("/students", require("./routes/student") );


app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.listen(5000, async ()=>{
  console.log("Server has been started!");

  //Create tables
  await createTables(); //Create users table
});





