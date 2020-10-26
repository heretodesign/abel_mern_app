const mongoose = require('mongoose')
const {
  ObjectId
} = mongoose.Schema;

const Order = mongoose.model("Order", {
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    },
    quantity: Number,
  }],
  cartTotal: Number,
  orderStatus: {
    type: String,
    default: "Not Processed",
    enum: [
      "Not Processed",
      "Cash on delivery",
      "Processing",
      "Cancelled",
      "Completed,"
    ]
  },
  orderBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamp: true
})

module.exports = Order