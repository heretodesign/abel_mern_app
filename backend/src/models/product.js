const mongoose = require('mongoose')
const validator = require('validator')
const {
  ObjectId
} = mongoose.Schema;


const Products = mongoose.model("Products", {
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
    text: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000,
    text: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    maxlength: 32,
  },
  category: {
    type: ObjectId,
    ref: "Category",
  },
  quantity: Number,
  images: {
    type: String,
  },
}, {
  timestamps: true
});

module.exports = Products