// routes/journalRoutes.js
const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journalController");
const auth = require("../middleware/auth");

// Make sure to use the properly exported controller methods
router.post("/entries", auth, journalController.createEntry);
router.get("/entries", auth, journalController.getEntries);

module.exports = router;
