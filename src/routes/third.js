const express = require("express");
const Third = require("../models/Third");
const User = require("../models/User");
const router = express.Router();

//create sheet
router.post("/user/:id", async (req, res) => {
  const sheet = new Third(req.body);

  try {
    await User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { sheets: sheet } },
      { new: true }
    );
    res.status(201).send(sheet);
  } catch (e) {
    res.status(400).send(e);
  }
});

//delete sheet

//update sheet

module.exports = router;
