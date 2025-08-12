// controllers/SubManagerController.js
const connectToDB = require("../models/setupDB.js");

const getAssignedLabs = async (req, res) => {
  try {
   const userEmail = req.query.email;
    const result = await db.query(
      "SELECT * FROM assigned_labs WHERE lab_sub_mail = $1",
      [userEmail]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching assigned labs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAssignedLabs };
