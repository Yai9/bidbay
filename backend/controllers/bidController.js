const Bid = require("../models/bidModel");
const mongoose = require("mongoose");

const getBids = async (req, res) => {
  const bids = await Bid.find({});

  res.status(200).json(bids);
};

const getBid = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Bid id not found." });
  }

  const bid = await Bid.findById(id);

  if (!bid) {
    return res.status(404).json({ error: "No such bid." });
  }

  res.status(200).json(bid);
};

const createBid = async (req, res) => {
  const { title, description, image } = req.body;

  try {
    if (!title || !description || !image) {
      throw new Error("Bid validation failed.");
    }
    const bid = await Bid.create({ title, description, image });
    res.status(200).json(bid);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const deleteBid = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Bid id not found." });
  }

  const bid = await Bid.findOneAndDelete({ _id: id });

  if (!bid) {
    return res.status(404).json({ error: "No such bid." });
  }

  res.status(200).json(bid);
};

const updateBid = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Bid id not found." });
  }

  const bid = await Bid.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!bid) {
    return res.status(404).json({ error: "No such bid." });
  }

  res.status(200).json(bid);
};

module.exports = {
  getBids,
  getBid,
  createBid,
  deleteBid,
  updateBid,
};
