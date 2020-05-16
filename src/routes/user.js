const express = require("express");
const User = require("../models/User");
const Sheet = require("../models/Sheet");
const auth = require("../middleware/auth");

const router = express.Router();

//Create User
router.post("/user", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

//login user
router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

//logout user
router.post("/user/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

//Read user profile
router.get("/user/profile", auth, (req, res) => {
  res.send(req.user);
});

//Update User
router.patch("/user/profile", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "username", "email", "password"];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidUpdate) {
    return res.status(400).send({ error: "invalid update" });
  }

  try {
    updates.forEach((update) => {
      req.user[update] = req.body[update];
    });

    await req.user.save();

    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Delete User
router.delete("/user/profile", auth, async (req, res) => {
  try {
    await req.user.sheets.forEach((sheet) => {
      Sheet.deleteOne({ _id: sheet }, function (err) {
        if (err) console.log(err);
        console.log("gottem");
      });
    });
    await req.user.remove();
    res.send(`${req.user.name} has been removed`);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
