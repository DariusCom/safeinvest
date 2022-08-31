const mongoose = require("mongoose");

const availableSymbols = mongoose.Schema({
  symbols: {
    type: Object,
  },
});

module.exports = mongoose.model("Symbol", availableSymbols);
