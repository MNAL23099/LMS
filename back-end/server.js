const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for all routes (for development)
app.use(cors());
app.use(express.json());


// Mount API routes
app.use("/api/auth", require("./auth")); // api bas aik prefix hai tellinh kai yhn request backened ko bhaijo
                                          //plus is line ka meaning ahi kai jb request yhn ai tu ussai auth.js mai bahijdo
app.use("/api/inventory", require("./inventory"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
