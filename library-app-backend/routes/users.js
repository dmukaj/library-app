const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");

router.get("/me", auth, async (req, res) => {
  console.log("here");
  const user = await User.findById(req.user._id).select("email");
  res.send(user);
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered");
    console.log("test ok", user);

    user = new User(_.pick(req.body, ["email", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();

    res.header("x-auth-token", token).send(_.pick(user, ["email"]));
  } catch (error) {
    console.log("Error occured", error);
  }
});

module.exports = router;
