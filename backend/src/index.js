const express = require('express')
require("./db/mongoosedb")
const cors = require('cors')

const userRouter = require("./routers/user")
const productRouter = require("./routers/product")
const categoryRouter = require("./routers/category")
const couponRouter = require('./routers/coupon');
const orderRouter = require('./routers/order');
const cartRouter = require('./routers/cart');

const app = express()
app.use(express.json())
app.use(cors())

app.use(userRouter)
app.use(productRouter)
app.use(categoryRouter)
app.use(couponRouter)
app.use(cartRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log("User Server is up on port " + PORT)
})