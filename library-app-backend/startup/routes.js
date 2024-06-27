const express = require("express");
const books = require("../routes/books");
const users = require("../routes/users");
const auth = require("../routes/auth")
const purchases = require("../routes/purchases")
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.use(express.json());
  app.use("/api/books", books);
  app.use("/api/users", users)
  app.use("/api/auth", auth);
  app.use("/api/purchases", purchases)
  app.use(error);
};
