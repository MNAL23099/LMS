// back-end/routes/dashboard.js

const express = require("express");
const router = express.Router();
const { getDashboardData } = require("../controllers/dashboardController");

// Define GET /dashboard
router.get("/", getDashboardData);

module.exports = router;
