const express = require("express");
const { connectToDatabase } = require("../db");

const router = express.Router();

// Get all gifts
router.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const gifts = await db.collection("items").find({}).sort({ id: 1 }).toArray();
    res.json(gifts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gifts" });
  }
});

// Get a gift by ID
router.get("/:id", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const gift = await db.collection("items").findOne({
      id: Number(req.params.id)
    });

    if (!gift) {
      return res.status(404).json({ error: "Gift not found" });
    }

    res.json(gift);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gift" });
  }
});

module.exports = router;