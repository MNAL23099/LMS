const express = require("express");
const router = express.Router();

const addStaff = require("../controllers/staffController.js");

router.post("/addStaff", async(request, response)=>{
    await addStaff(request, response);
})

module.exports = router;