const express = require('express');
const Cart = require('../models/cart');
// const auth = require('../middleware/auth');
const router = new express.Router();
const slugify = require("slugify")

const storeCoupons = [{
    _id: 10511,
    name: 'NIKEZOOM23',
    expiry: '2020-10-24T11:02:22',
    discount: 15
  },
  {
    _id: 10512,
    name: 'NIKEZOOM24I',
    expiry: '2020-10-23T11:02:22',
    discount: 25
  },
  {
    _id: 10513,
    name: 'NIKEZOOM235I',
    expiry: '2020-10-25T11:02:22',
    discount: 28
  }
];

/**
 * @getCoupons
 */
router.get('/cart', async (req, res) => {
  try {
    const cart = await Cart.find({
      product: req.product._id
    })
    res.status(200).send(storeCoupons);
  } catch (error) {
    res.status(500).send({
      error: 'failed to get store coupons!'
    });
  }
});

/**
 * @getCategoryById
 */
router.get('/cart/:_id', async (req, res) => {
  try {
    const _id = req.params._id;
    let data = []
    const findExist = storeCoupons.find(category => {
      return category._id === parseInt(req.params._id);
    });

    if (!findExist) {
      return res.status(404).send({
        error: true,
        msg: 'Coupon does not exist'
      });
    }
    // data.push(findExist)
    res.send(findExist);
  } catch (error) {
    res.status(500).send({
      error: 'failed to get store coupon!'
    });
  }
});

/**
 * @createCoupons
 */
router.post('/coupons', async (req, res) => {
  const _id = Math.floor(Math.random() * 9900 + 1100);

  try {
    const newCoupon = {
      _id: _id,
      name: req.body.name,
      expiry: req.body.expiry,
      discount: req.body.discount
    };

    await storeCoupons.push(newCoupon);
    res.status(201).json(newCoupon);

  } catch (error) {
    res.status(400).send(error);
  }
});


/**
 * @getCouponById
 */


module.exports = router;