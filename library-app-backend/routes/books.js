const { Book, validate } = require("../models/book");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const books = await Book.find().sort("title");
  res.send(books);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const bookName = await Book.findOne({
    title: { $regex: new RegExp(req.body.title, "i") },
  });

  if (bookName) {
    if (req.body.title.toLowerCase() === bookName.title.toLowerCase())
      return res.status(400).send("Book already exists.");
  }

  try {
    let book = new Book({
      title: req.body.title,
      author: req.body.author,
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate,
      imageLink: req.body.imageLink,
    });
    await book.save();

    res.send(book);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(`Error: \n ${error.message}`);
  }
});

module.exports = router;
