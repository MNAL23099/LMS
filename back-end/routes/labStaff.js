const express = require("express");
const router = express.Router();

const {addStaff, viewStaff,editStaff,saveEditStaffChanges,deleteStaffMember, assignLabsHandler, returnAvailableLabs, saveAssignedLab, returnAssignedLabs, unAssignLab,returnAssignedlabEngineers} = require("../controllers/staffController.js");

router.post("/addStaff", async(request, response)=>{
    await addStaff(request, response);
})

router.get("/viewStaff", async(request, response)=>{
    await viewStaff(request, response);
})

// Get all staff to display on edit page
router.get("/editStaff", async (req, res) => {
  await editStaff(req, res);
});

// Submit edited staff changes
router.post("/submitEditedStaff", async (req, res) => {
    console.log("route accessed!");
  await saveEditStaffChanges(req, res);
});

// Delete staff member
router.post("/deleteStaff", async (req, res) => {
  await deleteStaffMember(req, res);
});

router.post("/assignLabs", async(request, response)=>{
    await assignLabsHandler(request, response);
})

router.post("/availableLabs", async(request, response)=>{
    await returnAvailableLabs(request, response);
})

router.post("/assignLabToStaffMember", async(request, response)=>{
    await saveAssignedLab(request, response);
})

router.get("/viewEditAssignedLabs", async(request, response)=>{
    await returnAssignedLabs(request, response);
})

router.post("/unAssignLab", async(request, response)=>{
    await unAssignLab(request, response);
})

router.get("/viewHiredEngineerForCourses", async(request, response)=>{ //this is for assigned courses
    await returnAssignedlabEngineers(request, response);
})


module.exports = router;