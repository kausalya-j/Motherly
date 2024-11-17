// controllers/journalController.js
const Journal = require("../models/Journal");

// Make sure to export the functions properly
const journalController = {
  createEntry: async (req, res) => {
    try {
      const journal = new Journal({
        user: req.user._id,
        content: req.body.content,
        date: req.body.date || new Date(),
      });
      await journal.save();
      res.status(201).json(journal);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getEntries: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = 12;
      const skip = (page - 1) * limit;

      const entries = await Journal.find({ user: req.user._id })
        .sort({ date: -1 })
        .skip(skip)
        .limit(limit + 1);

      const hasMore = entries.length > limit;
      const paginatedEntries = entries.slice(0, limit);

      const formattedEntries = paginatedEntries.reduce((acc, entry) => {
        const dateStr = new Date(entry.date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
        acc[dateStr] = entry.content;
        return acc;
      }, {});

      res.json({
        entries: formattedEntries,
        hasMore,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = journalController;
