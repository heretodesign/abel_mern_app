const mongoose = require('mongoose')
const validator = require('validator')

const Coupon = mongoose.model("Coupon", {
  name: {
    type: String,
    trim: true,
    unique: true,
    required: "Name is required",
    minlength: [5, "Too short"],
    maxlength: [32, "Too long"]
  },
  expiry: {
    type: Date,
    unique: true,
  },
  discount: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

module.exports = Coupon