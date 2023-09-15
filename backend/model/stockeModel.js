const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Stock Name"],
    maxLength: [10, "Stock Name cannot exceed 10 characters"],
    minLength: [2, "Stock Name should have more than 2 characters"]
  },

  price: {
    type: Number,
    required: [true, "Please Enter Your Stock Price"]
  }
});

module.exports = mongoose.model('Stock', stockSchema);