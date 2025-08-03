const express = require("express");
const cors = require("cors");

const createTables = require("./models/allTables.js");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/inventory", require("./routes/inventory"));
app.use("/labStaff", require("./routes/labStaff"));
app.use("/labManagement", require ("./routes/labManagement"));
app.use("/Course", require("./routes/Course"));
// app.use("/LabSub" , require("./routes/LabSub"));
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.listen(5000, async ()=>{
  console.log("Server has been started!");

  //Create tables
  await createTables(); //Create users table
});





