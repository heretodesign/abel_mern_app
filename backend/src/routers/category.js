const express = require('express');
// const validator = require('validator');
// const Category = require('../models/category');
// const auth = require('../middleware/auth');
const router = new express.Router();
const slugify = require("slugify")

const storeCategories = [{
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
 * @createProducts
 */
router.post('/categories', async (req, res) => {
  const _id = Math.floor(Math.random() * 9900 + 1100);

  try {
    const newCategory = {
      _id: _id,
      name: req.body.name,
      slug: slugify(name)
      // slug: req.body.slug
    };

    await storeCategories.push(newCategory);
    res.status(201).json(newCategory);

  } catch (error) {
    res.status(400).send(error);
  }
});


/**
 * @getCategories
 */
router.get('/categories', async (req, res) => {
  try {
    res.status(200).send(storeCategories);
  } catch (error) {
    res.status(500).send({
      error: 'failed to get store categories!'
    });
  }
});

/**
 * @getCategoryBySlug
 */
router.get('/category/:slug', (req, res) => {
  const slug = req.params.slug;
  let data = []
  const singleCategory = storeCategories.find(category => {
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

const storeProducts = [{
    _id: 1111,
    name: 'Jordan AirMax II',
    slug: 'jordan_airmax_ii',
    image: 'alexander-rotker-l8p1aWZqHvE-unsplash',
    price: 1200,
    description: 'The Kyrie 6 is made from lightweight fabric and has a wide strap across the top to lock you in. It is curved on the bottom with rubber traction wrapping up the sides to help keep you in control when making quick cuts to the basket.',
    category: 'Nike Mens Shoe',
    inCart: false,
    quantity: 0,
    total: 0
  },
  {
    _id: 1112,
    name: 'Nike Airforce White Stripe',
    slug: 'nike_airforce_white_stripe',
    image: 'maksim-larin-Ai356rggKvw-unsplash',
    price: 2600,
    description: 'The Kyrie 6 is made from lightweight fabric and has a wide strap across the top to lock you in. It is curved on the bottom with rubber traction wrapping up the sides to help keep you in control when making quick cuts to the basket.',
    category: 'Nike Mens Shoe',
    inCart: false,
    quantity: 0,
    total: 0
  },
  {
    _id: 1113,
    name: 'Retro stripe 2',
    slug: 'retro_stripe_2',
    image: 'revolt-164_6wVEHfI-unsplash',
    price: 2200,
    description: 'The Kyrie 6 is made from lightweight fabric and has a wide strap across the top to lock you in. It is curved on the bottom with rubber traction wrapping up the sides to help keep you in control when making quick cuts to the basket.',
    category: 'Nike Mens Shoe',
    inCart: false,
    quantity: 0,
    total: 0
  },
  {
    _id: 1114,
    name: 'Nike Air Jordans',
    slug: 'nike_air_jordan',
    image: 'maksim-larin-1vy2QcZd5FU-unsplash',
    price: 2030,
    description: 'The Kyrie 6 is made from lightweight fabric and has a wide strap across the top to lock you in. It is curved on the bottom with rubber traction wrapping up the sides to help keep you in control when making quick cuts to the basket.',
    category: 'Nike Mens Shoe',
    inCart: false,
    quantity: 0,
    total: 0
  },
  {
    _id: 1115,
    name: 'Nike White Stripe Mamba 2',
    slug: 'nike_white_stripe_mamba_2',
    image: 'taylor-smith-rSrFgJQtjko-unsplash',
    price: 2000,
    description: 'The Kyrie 6 is made from lightweight fabric and has a wide strap across the top to lock you in. It is curved on the bottom with rubber traction wrapping up the sides to help keep you in control when making quick cuts to the basket.',
    category: 'Nike Mens Shoe',
    inCart: false,
    quantity: 0,
    total: 0
  },
  {
    _id: 1116,
    name: 'Nike EX Keran Vol 3',
    slug: 'nike_ex_keran_vol_3',
    image: 'jade-scarlato-I70aNOmj314-unsplash',
    price: 450,
    description: 'The Kyrie 6 is made from lightweight fabric and has a wide strap across the top to lock you in. It is curved on the bottom with rubber traction wrapping up the sides to help keep you in control when making quick cuts to the basket.',
    category: 'Nike Mens Shoe',
    inCart: true,
    quantity: 0,
    total: 0
  },
  {
    _id: 1117,
    name: 'Nike Mode Flat II',
    slug: 'nike_mode_flat_ii',
    image: 'grailify-6Fm1f2kvRWg-unsplash',
    price: 450,
    description: 'N For all lovers of all things sneakers  - White Stripe',
    category: 'Nike Womens Shoe',
    inCart: false,
    quantity: 0,
    total: 0
  },
  {
    _id: 1118,
    name: 'Airforce Max Air Flyer II',
    slug: 'airforce_max_air_stripe_ii',
    image: 'jade-scarlato-Kx7c8eqKlEI-unsplash',
    price: 450,
    description: 'N For all lovers of all things sneakers  - White Stripe',
    category: 'Nike Kids Shoe',
    inCart: false,
    quantity: 0,
    total: 0
  }
];


/**
 * @getCategoryBySlug
 */
router.get('/category/api/:slug', async (req, res) => {
  try {
    // const category = await storeCategories.findOne({
    //   slug: req.params.slug
    // }).exe();
    const singleCategory = storeCategories.find(category => {
      return category.slug === req.params.slug;
    });
    const products = storeProducts.find(category => {
      return products.category === req.params.category;
    }).populate("category").exe();
    // const products = await storeProducts.find({
    //   category
    // }).populate("category").exe();

    res.status(200).json({
      category,
      products
    });
  } catch (error) {
    res.status(500).send({
      error: "failed to fetch category by slug"
    });
  }
});

module.exports = router;