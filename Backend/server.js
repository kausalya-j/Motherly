// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/motherly", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Import routes
const authRoutes = require("./routes/authRoutes");
const journalRoutes = require("./routes/journalRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/journal", journalRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// // User Schema
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model("User", userSchema);

// // Signup Route
// app.post("/api/auth/signup", async (req, res) => {
//   try {
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
// app.post("/api/auth/login", async (req, res) => {
//   try {
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

let journalEntries = {}; // Example in-memory storage for journal entries

// GET endpoint to fetch journal entries
app.get("/api/journal", (req, res) => {
  res.json({ entries: journalEntries });
});

// POST endpoint to save journal entries
app.post("/api/journal", (req, res) => {
  const { date, entry } = req.body;
  journalEntries[date] = entry; // Save the entry
  res.status(201).json({ message: "Entry saved successfully!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
