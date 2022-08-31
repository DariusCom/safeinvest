const asyncHandler = require("express-async-handler");
const Symbol = require("../models/symbolsModel");

const getSymbols = asyncHandler(async (req, res) => {
  // Get the object with the symbols from the database
  const symbols = await Symbol.find({});

  // If the symbol that is being search for is in the object from the database
  // then return status code 200 with a json in which you have the information
  // from that symbol, else return status code 404 and throw an error
  if (symbols[0]["symbols"][req.query["symbol"]]) {
    res
      .status(200)
      .json({ symbols: [symbols[0]["symbols"][req.query["symbol"]]] });
  } else {
    res.status(404);
    throw new Error("Symbol not found!");
  }
});

module.exports = {
  getSymbols,
};
