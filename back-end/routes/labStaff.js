const express = require("express");
const router = express.Router();

const {addStaff, viewStaff, assignLabsHandler, returnAvailableLabs, saveAssignedLab, returnAssignedLabs, unAssignLab} = require("../controllers/staffController.js");

router.post("/addStaff", async(request, response)=>{
    await addStaff(request, response);
})

router.get("/viewStaff", async(request, response)=>{
    await viewStaff(request, response);
})

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

module.exports = router;