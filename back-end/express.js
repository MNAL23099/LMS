// express.js

const express = require("express");
const cors = require("cors");
const {Pool} = require("pg");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());             // allows frontend (React) to access backend
app.use(express.json());     // parses JSON from incoming requests

// Routes
app.use("/auth", require("./routes/auth")); // signup/signin
app.use("/dashboard", require("./routes/dashboard")); // dashboard data
app.use("/inventory", require("./routes/inventory")); // inventory data
// app.use("/inventory-dashboard", require("./routes/inventoryDashboard")); // optional

// Default route to test server is working
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.post("/signup", (req, res)=>{
  const {username, password, email, accountType} = req.body;
  console.log(username);
  console.log(email);
  console.log(password);
  console.log(accountType);
})

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

//Make the users table
require(".//models/users");


