const express = require("express");
const router = express.Router();
const { getAssignedLabs } = require("../controllers/SubManagerController.js");

// GET route
router.get("/getAssignedLabs", getAssignedLabs);

module.exports = router;
