const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

process.on("uncaughtRejection", (ex) => {
  console.log("WE GOT AN UNCOUGHT EXCEPTION");
  logger.error(ex.message, ex);
});

const logger = winston.createLogger({
  format: winston.format.cli(),
  transports: [
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "logfile.log" }),
  ],
});
winston.exceptions.handle(logger);

module.exports = logger;
