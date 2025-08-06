const express = require("express");
const router = express.Router();
const {
  editInventory,
  addInventoryItem,
  saveEditInventoryChanges,
  deleteInventoryItem,
  viewInventory,
  assignInventoryItem,
  getFreeItems,
  getLabs,
  getInventoryItems,
  sendInventoryRequest,
  getRequests
} = require("../controllers/inventoryController.js");

// Route to edit inventory (dummy update)
// router.put("/edit", editInventory);  // You can later use PUT or PATCH

router.post("/addInventoryItem", async(request, response)=>{
  await addInventoryItem(request, response);
});

router.get("/editInventory", async(request, response)=>{
  await editInventory(request, response);
});

router.post("/submitEditedInventory", async(request, response)=>{
  await saveEditInventoryChanges(request, response);
});

router.post("/editInventoryDelete", async(request, response)=>{
  await deleteInventoryItem(request, response);
});

router.get("/fetchFromInventoryDB", async(req,res)=>{
  await viewInventory(req,res);
});

router.post("/assignInventoryItem", assignInventoryItem);
router.get("/freeItems", getFreeItems);
router.get("/labs", getLabs);
router.get("/getInventoryItems", getInventoryItems);
router.post("/sendRequest", sendInventoryRequest);
router.get("/getRequests", getRequests);


module.exports = router;



