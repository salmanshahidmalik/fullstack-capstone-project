const express = require("express");
const { connectToDatabase } = require("../db");

const router = express.Router();

// Search gifts by category
router.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { category } = req.query;

    const filter = category
      ? { category: { $regex: category, $options: "i" } }
      : {};

    const gifts = await db.collection("items")
      .find(filter)
      .sort({ id: 1 })
      .toArray();

    res.json(gifts);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
});

module.exports = router;