const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    // Check if the user already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ error: "User already registered" });
    }

    // Create new user without email
    const newUser = new User({ username, password });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Server error during signup" });
  }
};

// exports.signup = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     if (password.length < 6) {
//       return res
//         .status(400)
//         .json({ error: "Password must be at least 6 characters long" });
//     }

//     const userExists = await User.findOne({ username });
//     if (userExists) {
//       return res.status(400).json({ error: "User already registered" });
//     }

//     const newUser = new User({ username, password });
//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res.status(201).json({
//       token,
//       user: {
//         id: newUser._id,
//         username: newUser.username,
//       },
//     });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ error: "Server error during signup" });
//   }
// };

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error during login" });
  }
};

// controllers/authController.js

// const User = require("../models/User");

// exports.signup = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "Username already exists" });
//     }

//     // Create new user
//     const user = new User({
//       username,
//       password,
//     });

//     await user.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ message: "Error creating user" });
//   }
// };
