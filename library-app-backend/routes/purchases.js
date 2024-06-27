const { Purchase, validate } = require("../models/purchase");
const { Book } = require("../models/book");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const purchases = await Purchase.find();
  res.send(purchases);
});

router.post("/", async (req, res) => {
  const { products } = req.body;

  // const { error } = validate(product);
  // if (error) return res.status(400).send(error.details[0].message);

  // if (book.numberInStock === 0 )
  // return res.status(400).send("Book is out of stock");

  let purchase = new Purchase({ products });
  await purchase.save();
  const session = await mongoose.startSession();

  for (const product of products) {
    const { productId, quantity } = product;

    const book = await Book.findById(productId);
    console.log(quantity);
    //if (!book) return res.status(400).send("Invalid book.");

    await Purchase.updateOne(
      { _id: productId },
      { $inc: { numberInStock: -quantity } }
    );

    try {
      await session.withTransaction(async () => {
        const result = await purchase.save();
        book.numberInStock = book.numberInStock - quantity;
        book.save();
        res.send(result);
      });
    } catch (ex) {
      console.log(ex);
      res.status(500).send("Something failed.");
    }
  }
});

module.exports = router;
