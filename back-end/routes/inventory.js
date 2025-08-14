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
  getRequests,
  returnPendingInventoryRequests,
  markPendingRequest,
  viewAllocatedInventory
} = require("../controllers/inventoryController.js");

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

router.get("/pendingInventoryRequests", async(req,res)=>{
  await returnPendingInventoryRequests(req,res);
});

router.post("/markPendingRequest", async(req,res)=>{
  await markPendingRequest(req,res);
});

router.post("/assignInventoryItem", assignInventoryItem);
router.get("/freeItems", getFreeItems);
router.get("/labs", getLabs);
router.get("/getInventoryItems", getInventoryItems);
router.post("/sendRequest", sendInventoryRequest);
router.get("/getRequests", getRequests);

router.get("/fetchAllocatedInventory", viewAllocatedInventory);

module.exports = router;