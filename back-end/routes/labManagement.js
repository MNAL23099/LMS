const express = require("express");
const router = express.Router();
const {addLabs_for_Management, view_labs}  = require("../controllers/labManagementContoller.js");

router.post("/addlabs", async (req,res)=>{
   
    await addLabs_for_Management(req,res);
})

router.get("/viewlabs", async(req,res)=>{
    await view_labs(req,res);
})

module.exports = router;