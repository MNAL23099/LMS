// Dummy inventory data
let inventory = [
  { id: 1, name: "Beaker", quantity: 10 },
  { id: 2, name: "Test Tube", quantity: 25 },
  { id: 3, name: "Multimeter", quantity: 5 }
];

// View Inventory
const getInventory = (req, res) => {
  res.json({
    message: "Inventory fetched successfully",
    data: inventory
  });
};

// Edit Inventory (dummy logic to simulate update)
const editInventory = (req, res) => {
  const { id, name, quantity } = req.body;

  const index = inventory.findIndex(item => item.id === id);
  if (index !== -1) {
    inventory[index] = { id, name, quantity };
    return res.json({ message: "Inventory updated", item: inventory[index] });
  } else {
    return res.status(404).json({ message: "Item not found" });
  }
};

// Generate Report (returning same data for now)
const generateInventoryReport = (req, res) => {
  res.json({
    message: "Inventory report generated",
    report: inventory
  });
};

module.exports = {
  getInventory,
  editInventory,
  generateInventoryReport
};
