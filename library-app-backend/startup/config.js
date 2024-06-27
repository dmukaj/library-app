const dotenv = require("dotenv");
dotenv.config();


module.exports = function () {
  if (!process.env.JWT_PRIVATE_KEY) {
    console.log("FATAL ERROR: jwtPrivateKey is not defined.");

    process.exit(1);
  }
};