const Product = require("../models/productModel");
const View1 = require("../models/view1Model");
const Amount = require("../models/amountModel");
const mongoose = require("mongoose");

// get all products
const getProducts = async (req, res) => {
  const products = await Product.find({});

  res.status(200).json(products);
};

// get all view1
const getView1 = async (req, res) => {
  const view1 = await View1.find({});

  res.status(200).json(view1);
};

// get a single product
const getProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }

  const product = await View1.findById(id);

  if (!product) {
    return res.status(404).json({ error: "No such product" });
  }
  res.status(200).json(product);
};

// create new product
const createProduct = async (req, res) => {
  const { name, drink, price, amount } = req.body;

  // add document to DB
  try {
    const product = await Product.create({ name, drink, price, amount });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }

  const product = await Product.findOneAndDelete({ _id: id });
  if (!product) {
    return res.status(404).json({ error: "No such product" });
  }
  res.status(200).json(product);
};

// update a product
const updateProduct = async (req, res) => {
  // const { id } = req.params;
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ error: "No such product" });
  // }
  // const productUpdateInfo = await Product.updateOne({ _id: id }, { ...req.body });
  // if (!productUpdateInfo) {
  //   return res.status(404).json({ error: "No such product" });
  // }
  // const product = await Product.findOne({ _id: id })

  const amounts = await Amount.find({});
  console.log(amounts);

  // const amountUpdateInfo = await Amount.updateOne({ productId: id }, { ...req.body });
  // console.log(amountUpdateInfo)
  // if (!amountUpdateInfo) {
  //   return res.status(404).json({ error: "No such product" });
  // }
  // console.log(amountUpdateInfo)
  // const amount = await Amount.findOne({productId: id})
  // console.log(amount)
  // product.amount = amount.amount;
  res.status(200).json(amounts);
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getView1,
};

// [
//   {
//     '$lookup': {
//       'from': 'amount',
//       'localField': '_id',
//       'foreignField': 'productId',
//       'as': 'result'
//     }
//   }, {
//     '$project': {
//       '_id': 1,
//       'img': 1,
//       'name': 1,
//       'drink': 1,
//       'cod': 1,
//       'price': 1,
//       'product_amount': '$result.product_amount'
//     }
//   }, {
//     '$unwind': {
//       'path': '$product_amount'
//     }
//   }
// ]
