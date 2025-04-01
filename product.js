const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  price:Number,
  description: String,
  category:String,
  image:String,
  link: String,
  rating: Number,
  dicount:Number,
  offerprice:Number,
  reviews:String,
});
const product = mongoose.model("product", productSchema);
module.exports = product;