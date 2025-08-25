const express = require("express");
const { addFaculty, getFaculties } = require("../controllers/facultiesController");

const router = express.Router();

router.post("/add", addFaculty);
router.get("/all", getFaculties);

module.exports = router;
