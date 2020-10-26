const mongoose = require('mongoose')
const {
  ObjectId
} = mongoose.Schema;

const Cart = mongoose.model("Cart", {
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    },
    quantity: Number,
    price: Number,
  }],
  cartTotal: Number,
  totalAfterDiscount: Number,
  orderBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
}, {
  timestamp: true
})

module.exports = Cart