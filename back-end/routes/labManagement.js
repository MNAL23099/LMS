const express = require("express");
const router = express.Router();
const {addLabs_for_Management}  = require("../controllers/labManagementContoller.js");

router.post("/addlabs", async (req,res)=>{
    console.log("route was accessed!");
    await addLabs_for_Management(req,res);
})

module.exports = router;