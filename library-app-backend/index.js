const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

require("./startup/db")(app);
require("./startup/routes")(app);
require("./startup/config")(app);

const port = process.env.PORT || 3000;

const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
