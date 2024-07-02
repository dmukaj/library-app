const { Book } = require("../models/book");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const favorites = await Book.find({ favorited: true }).sort("title");
    // console.log(favorites);
    res.send(favorites);
  } catch {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// POST endpoint to add a book to favorites
router.post("/", async (req, res) => {
  try {
    const favoriteBook = await Book.findById(req.body._id);
    if (!favoriteBook) {
      return res.status(404).send("Book not found.");
    }

    favoriteBook.favorited = req.body.favorited;
    await favoriteBook.save();

    res.send(favoriteBook);
    console.log("test", favoriteBook);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(`Error: \n ${error.message}`);
  }
});

module.exports = router;
