// Dummy data for now — will replace with DB later
const users = [];

// Sign Up logic
const signUpUser = (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Add new user
  users.push({ username, password });
  res.status(201).json({ message: "User registered successfully" });
};

// Sign In logic
const signInUser = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", username });
};

module.exports = { signUpUser, signInUser };
