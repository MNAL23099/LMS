const express = require("express");
const router = express.Router();
const {
  getInventory,
  editInventory,
  generateInventoryReport,
  addInventoryItem,
  saveEditInventoryChanges,
  deleteInventoryItem,
} = require("../controllers/inventoryController");

// Route to view all inventory
router.get("/", getInventory);

// Route to edit inventory (dummy update)
// router.put("/edit", editInventory);  // You can later use PUT or PATCH

// Route to generate report
router.get("/report", generateInventoryReport);

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

module.exports = router;
