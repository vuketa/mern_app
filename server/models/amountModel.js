const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const amountSchema = new Schema({
  product_amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("amount", amountSchema);
