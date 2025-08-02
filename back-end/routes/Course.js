const express = require("express")
const router = express.Router();
const {Add_courses} = require("../controllers/CoursesController.js");
router.post("/addcourse", async (req, res)=>{
    await Add_courses(req,res);
});

module.exports = router;


