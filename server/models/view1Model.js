const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const view1Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    drink: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    product_amount: {
      type: String,
      // required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("view1", view1Schema);
