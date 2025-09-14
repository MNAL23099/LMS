const connectoToDB = require("../models/setupDB.js");

// Add Faculty
async function addFaculty(req, res) {
    const {name} = req.body;
    try {
        const client = await connectoToDB();
        const query = `
            INSERT INTO faculties (name)
            VALUES ($1) RETURNING *
        `;
        const values = [name];
        const result = await client.query(query, values);
        res.json({ success: true, faculty: result.rows[0] });
    } catch (err) {
        console.error("Error adding faculty:", err.message);
        res.status(500).json({ success: false, message: "Failed to add faculty" });
    }
}

// Get all Faculties
async function getFaculties(req, res) {
    try {
        const client = await connectoToDB();
        const result = await client.query(`SELECT * FROM faculties ORDER BY created_at DESC`);
        res.json({ success: true, faculties: result.rows });
    } catch (err) {
        console.error("Error fetching faculties:", err.message);
        res.status(500).json({ success: false, message: "Failed to fetch faculties" });
    }
}

module.exports = { addFaculty, getFaculties };
