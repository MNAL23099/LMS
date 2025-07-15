const express = require("express");
const router = express.Router();
const { signUpUser, signInUser } = require("../controllers/authController");

// Route for signing up
router.post("/signup", (req, res)=>{
  const {username, password, email, accountType} = req.body;
  console.log(username);
  console.log(email);
  console.log(password);
  console.log(accountType);
});

// Route for signing in
router.post("/signin", signInUser);

module.exports = router;
