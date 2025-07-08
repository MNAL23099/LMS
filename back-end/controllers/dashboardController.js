const getDashboardData = (req, res) => {
  res.json({
    message: "Dashboard data loaded successfully",
    stats: {
      totalInventoryItems: 36,
      lowStockItems: 4,
      reportsGenerated: 5,
    }
  });
};

module.exports = { getDashboardData };
