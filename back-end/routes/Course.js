const express = require("express")
const router = express.Router();
const {Add_courses,
      view_courses,
      Delete_Courses,
      Add_a_Row_to_AssignedCourses, 
      View_Assigned_Courses,
      Filter_Assigned_Courses,
      UnAssign_Courses,
      view_to_lab_engineer,
    //  getLabEngineerEmail
     } = require("../controllers/CoursesController.js");
    
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
    
    await Add_a_Row_to_AssignedCourses(req,res);
})

router.get("/view_assigned_courses",async(req,res)=>{ // "/" was missing at the starting of the route url

    await View_Assigned_Courses(req,res);
})

router.post("/filter_assign_course", async(req,res)=>{
    console.log("Route accessed!");
    await  Filter_Assigned_Courses(req,res);
})

router.post("/unassin_course", async(req,res)=>{
    await UnAssign_Courses(req,res);
})
router.post("/view_courses_to_lab_engineer", async(req,res)=>{
    await view_to_lab_engineer(req,res);
})
// router.post("/post_courses_to_lab_engineer", async(req,res)=>{
//     await getLabEngineerEmail(req,res);              // for getting the email of lab engineer
// })

module.exports = router;


