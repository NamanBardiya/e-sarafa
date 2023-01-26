const mongoose = require("mongoose");

const Shop = mongoose.model(
  "Shop",
  new mongoose.Schema({
    name: String,
    description: String,
    borrowers:[String],
    owners:[String],
    loans:[String]
  })
);

module.exports = Shop;
