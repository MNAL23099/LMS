const express = require("express");
const router = express.Router();

const {addStaff, viewStaff, assignLabsHandler} = require("../controllers/staffController.js");

router.post("/addStaff", async(request, response)=>{
    await addStaff(request, response);
})

router.get("/viewStaff", async(request, response)=>{
    await viewStaff(request, response);
})

router.post("/assignLabs", async(request, response)=>{
    await assignLabsHandler(request, response);
})

module.exports = router;