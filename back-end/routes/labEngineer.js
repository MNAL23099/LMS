// routes/labEngineer.js
const express = require("express");
const router = express.Router();
const { getLabEngineerDashboard } = require("../controllers/labEngineerController.js");

// Route to get dashboard data
router.get("/dashboard", getLabEngineerDashboard);

module.exports = router;
