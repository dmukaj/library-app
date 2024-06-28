const Joi = require("joi");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255,
  },
  author: {
    type: String,
    trim: true,
    required: true,
  },
  numberInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  dailyRentalRate: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  favorited: {
    type: Boolean,
    required: true,
  },
  imageLink: {
    type: String,
    default: false,
  },
});

function validateBook(book) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(1024).required(),
    author: Joi.string().required(),
    numberInStock: Joi.number().min(0).required(),
    dailyRentalRate: Joi.number().min(0).required(),
    favorited: Joi.boolean(),
    imageLink: Joi.string().required(),
  });
  return schema.validate(book);
}

const Book = mongoose.model("Book", bookSchema);
exports.Book = Book;
exports.validate = validateBook;
