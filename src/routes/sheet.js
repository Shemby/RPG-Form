const express = require("express");
const Sheet = require("../models/Sheet");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

//create sheet
router.post("/user/sheets", auth, async (req, res) => {
  const sheet = new Sheet(req.body);
  try {
    await User.updateOne(
      { _id: req.user._id },
      { $push: { sheets: sheet } },
      { new: true }
    );
    sheet.save();

    res.status(201).send(sheet);
  } catch (e) {
    res.status(400).send(e);
  }
});

//read all sheets
router.get("/user/sheets", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("sheets").exec();
    res.send(user.sheets);
  } catch (e) {
    res.status(500).send(e);
  }
});

//read sheet
router.get("/user/sheets/:id", auth, async (req, res) => {
  try {
    const sheet = await Sheet.findById(req.params.id);
    res.send(sheet);
  } catch (e) {
    res.status(500).send();
  }
});

//update sheet
router.patch("/user/sheets/:id", auth, async (req, res) => {
  try {
    const sheet = await Sheet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(sheet);
  } catch (e) {
    res.status(500).send();
  }
});

//delete sheet
router.delete("/user/sheets/:id", auth, async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.user._id },
      { $pull: { sheets: req.params.id } },
      { multi: true }
    );
    await Sheet.findByIdAndDelete(req.params.id);
    res.send(`1 item was deleted`);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
