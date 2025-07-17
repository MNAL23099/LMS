const express = require("express");
const router = express.Router();
const { signUpUser, signInUser } = require("../controllers/authController");


// Route for signing up
router.post("/signup", async(req, res)=>{
  await signUpUser(req, res);
});

// Route for signing in
// router.post("/signin", signInUser);

module.exports = router;
