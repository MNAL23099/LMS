const connectToDB = require("../models/setupDB.js");

const getLabEngineerDashboard = async (req, res) => {
  try {
    // Dummy data for now — later replace with DB queries
    const dashboardData = {
      assignedInventoryCount: 15,
      assignedCoursesCount: 4,
      assignedLabsCount: 2,
    };

    res.status(200).json({
      success: true,
      message: "Lab Engineer dashboard data fetched successfully",
      data: dashboardData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching Lab Engineer dashboard",
      error: error.message,
    });
  }
};

module.exports = { getLabEngineerDashboard };
