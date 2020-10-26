const express = require('express');
// const validator = require('validator');
// const Order = require('../models/order');
// const auth = require('../middleware/auth');
const router = new express.Router();
const slugify = require("slugify")

const storeOrder = [{
    _id: 4211,
    name: 'Nike Mens Shoe',
    slug: 'nike_mens_shoe'
  },
  {
    _id: 4212,
    name: 'Nike Womens Shoe',
    slug: 'nike_womens_shoe'
  },
  {
    _id: 4213,
    name: 'Nike Kids Shoe',
    slug: 'nike_kids_shoe'
  }
];

/**
 * @createOrder
 */
router.post('/order', async (req, res) => {
  const _id = Math.floor(Math.random() * 9900 + 1100);

  try {
    const newOrder = {
      _id: _id,
      name: req.body.name,
      slug: slugify(name)
      // slug: req.body.slug
    };

    await storeOrder.push(newOrder);
    res.status(201).json(newOrder);

  } catch (error) {
    res.status(400).send(error);
  }
});


/**
 * @getOrder
 */
router.get('/order', async (req, res) => {
  try {
    res.status(200).send(storeOrder);
  } catch (error) {
    res.status(500).send({
      error: 'failed to get store order!'
    });
  }
});

/**
 * @getOrderBySlug
 */
router.get('/order/:slug', (req, res) => {
  const slug = req.params.slug;
  let data = []
  const singleCategory = storeOrder.find(category => {
    return category.slug === req.params.slug;
  });

  if (!singleCategory) {
    return res.status(404).send({
      error: true,
      msg: 'slug does not exist'
    });
  }
  // data.push(singleCategory)
  res.status(200).json(singleCategory);
});

module.exports = router;