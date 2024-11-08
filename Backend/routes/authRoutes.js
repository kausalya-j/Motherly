const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Signup Route
router.post("/signup", authController.signup);

// Login Route
router.post("/login", authController.login);

module.exports = router;

// // routes/authRoutes.js
// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const { getUserModel } = require("../models/User");

// // Signup Route
// router.post("/signup", async (req, res) => {
//   try {
//     const User = getUserModel();
//     const { username, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "Username already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const user = new User({
//       username,
//       password: hashedPassword,
//     });

//     await user.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ message: "Error creating user" });
//   }
// });

// // Login Route
// router.post("/login", async (req, res) => {
//   try {
//     const User = getUserModel();
//     const { username, password } = req.body;

//     // Find user
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // Check password
//     const isValidPassword = await bcrypt.compare(password, user.password);
//     if (!isValidPassword) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     res.json({
//       id: user._id,
//       username: user.username,
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Error logging in" });
//   }
// });

// module.exports = router;
