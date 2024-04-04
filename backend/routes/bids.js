const express = require("express");
const router = express.Router();

const {
  getBids,
  getBid,
  createBid,
  deleteBid,
  updateBid,
} = require("../controllers/bidController");

// GET ALL
router.get("/", getBids);

// GET SINGLE
router.get("/:id", getBid);

// POST a single bid
router.post("/", createBid);

// DELETE a single bid
router.delete("/:id", deleteBid);

// UPDATE a single bid
router.patch("/:id", updateBid);

module.exports = router;
