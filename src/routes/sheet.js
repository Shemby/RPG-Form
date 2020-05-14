const express = require("express");
const Sheet = require("../models/Sheet");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

//create a sheet and assign to a given user
router.post("/user/:id", auth, async (req, res) => {
  const sheet = new Sheet(req.body);
  try {
    await User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { sheets: sheet } },
      { new: true }
    );
    sheet.save();

    res.status(201).send(sheet);
  } catch (e) {
    res.status(400).send(e);
  }
});

//read all sheets for a given user
router.get("/user/:id/sheets", auth, async (req, res) => {
  try {
    User.findById(req.params.id)
      .populate("sheets")
      .exec()
      .then((user) => {
        if (!user) {
          return res.status(404).send("no such user");
        }
        res.send(user.sheets);
      });
  } catch (e) {
    res.status(500).send();
  }
});

//read a specific sheet for a given user
router.get("/user/:id/:sheet", auth, async (req, res) => {
  try {
    const sheet = await Sheet.findById(req.params.sheet);
    res.send(sheet);
  } catch (e) {
    res.status(500).send();
  }
});

//update specific sheet for a given user
router.patch("/user/:id/:sheet", auth, async (req, res) => {
  try {
    const sheet = await Sheet.findByIdAndUpdate(req.params.sheet, req.body, {
      new: true,
    });
    res.send(sheet);
  } catch (e) {
    res.status(500).send();
  }
});

//delete specific sheet for a given user
router.delete("/user/:id/:sheet", auth, async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { sheets: req.params.sheet } },
      { multi: true }
    );
    await Sheet.findByIdAndDelete(req.params.sheet);
    res.send(`1 item was deleted`);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
