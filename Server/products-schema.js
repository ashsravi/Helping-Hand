var mongoose = require('mongoose');

var ProductsSchema = new mongoose.Schema({
  name: String,
  description: String,
  condition: Number,
  images: Array, // array of filepaths to images
  comments: Array // array of objects with body, author, and createdOn properties
});


module.exports = mongoose.model('Products', ProductsSchema);