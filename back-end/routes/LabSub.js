const express = require("express");
const router = express.Router();
const { getAssignedLabs } = require("../controllers/SubManageController.js");

// GET route with path parameter
router.get("/getAssignedLabs/:email", getAssignedLabs);

module.exports = router;
