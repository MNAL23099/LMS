const express = require("express")
const router = express.Router();
const {Add_courses,
      view_courses,
      Delete_Courses,
      Add_a_Row_to_AssignedCourses, View_Assigned_Courses} = require("../controllers/CoursesController.js");
router.post("/addcourse", async (req, res)=>{
    await Add_courses(req,res);
});

router.get("/view_course", async(req, res)=>{
    await view_courses(req,res); 
});
router.post("/delete_course", async(req,res)=>{
    await Delete_Courses(req,res);
})

router.post("/assign_course", async(req,res)=>{
    console.log("Route accessed!");
    await Add_a_Row_to_AssignedCourses(req,res);
})

router.get("/view_assigned_courses",async(req,res)=>{ // "/" was missing at the starting of the route url
    console.log("Route accessed!");
    await View_Assigned_Courses(req,res);
})
   
module.exports = router;


