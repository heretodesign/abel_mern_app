const express = require('express');
// const validator = require('validator');
// const Product = require('../models/product');
// const auth = require('../middleware/auth');
const axios = require('axios')
const router = new express.Router();

const storeProducts = [{
    _id: 1111,
    name: 'Jordan AirMax II',
    slug: 'jordan_airmax_ii',
    image: 'alexander-rotker-l8p1aWZqHvE-unsplash',
    price: 1200,
    description: 'Step into a new AF-1 world with the Nike Air Force 1 React LV8. The oversized Swoosh, "AIR" graphic on the midsole and new sole pattern provide big style while Nike React technology adds exceptional comfort. Glow-in-the-dark details around the Swoosh and blacklight-sensitive material gives the AF-1 a glow up.',
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
    description: 'The legend lives on in the Nike Air Force 1 07 Craft—a modern take on the iconic AF-1 with new details like fresh graphics on the tongue and heel. Crisp leather, brushed suede and exposed stitching on the upper add texture and depth while the new plush liner feels soft and comfortable. Its redesigned shape returns to OG roots, adding heritage style.',
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
    description: 'Step into a new AF-1 world with the Nike Air Force 1 React LV8. The oversized Swoosh, "AIR" graphic on the midsole and new sole pattern provide big style while Nike React technology adds exceptional comfort. Glow-in-the-dark details around the Swoosh and blacklight-sensitive material gives the AF-1 a glow up.',
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
    description: 'The legend lives on in the Nike Air Force 1 07 Craft—a modern take on the iconic AF-1 with new details like fresh graphics on the tongue and heel. Crisp leather, brushed suede and exposed stitching on the upper add texture and depth while the new plush liner feels soft and comfortable. Its redesigned shape returns to OG roots, adding heritage style..',
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
    description: 'When LeBron accelerates down the court, he produces tremendous force. The LeBron 18 is designed to harness his abilities while helping with the stress he puts on his body. Combined cushioning underfoot allows him to use his power for unstoppable bursts of speed',
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
    description: 'When LeBron accelerates down the court, he produces tremendous force. The LeBron 18 is designed to harness his abilities while helping with the stress he puts on his body. Combined cushioning underfoot allows him to use his power for unstoppable bursts of speed',
    category: 'Nike Kids Shoe',
    inCart: false,
    quantity: 0,
    total: 0
  }
];

/**
 * @createProducts
 */
router.post('/products', async (req, res) => {
  const _id = Math.floor(Math.random() * 9900 + 1100);

  try {
    const newProduct = {
      _id: _id,
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      inCart: req.body.inCart,
      quantity: req.body.quantity,
      total: req.body.total
    };

    await storeProducts.push(newProduct);
    res.status(201).json(newProduct);

  } catch (error) {
    res.status(400).send(error);
  }
});


/**
 * @getProducts
 */
router.get('/products', async (req, res) => {
  try {
    res.status(200).send(storeProducts);
  } catch (error) {
    res.status(500).send({
      error: 'failed to get store products!'
    });
  }
});

/**
 * @getProductById
 */
router.get('/products/:id', async (req, res) => {
  try {
    const id = req.params._id;
    const productData = req.body;
    let data = []
    const findExist = storeProducts.find(product => {
      return product._id === parseInt(req.params.id);
    });

    if (!findExist) {
      return res.status(404).send({
        error: true,
        msg: 'id does not exist'
      });
    }
    // data.push(findExist)
    res.send(findExist);

  } catch (error) {
    res.status(500).send({
      error: "failed to get specific product by slug!"
    })
  }
});

router.get("/product/:slug", async (req, res) => {
  const slug = req.params.slug;
  let data = []
  try {

    const product = await storeProducts.find(product => {
      return product.slug === slug
    })

    if (!product) {
      res.status(404).send()
    }
    // data.push(product)
    res.send(product)
  } catch (error) {
    res.status(500).send({
      error: "failed to get specific product by slug!"
    })
  }
})

// router.post('/products', auth, async (req, res) => {
//     const product = new Product({
//         ...req.body,
//         owner: req.user._id
//     })

//     try {
//         await product.save()
//         res.status(201).send(product)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// router.get("/products", auth, async (req, res) => {
//     try {
//         const products = await Product.find({
//             owner: req.user._id
//         })
//         res.send(products)
//         // await req.user.populate('products').execPopulate()
//         // res.status(200).send(req.user.products)
//     } catch (error) {
//         res.status(500).send({
//             error: "failed to get products by this user!"
//         })
//     }
// })

// router.get("/products/:id", auth, async (req, res) => {
//     const _id = req.params.id

//     try {
//         const product = await Product.findOne({
//             _id,
//             owner: req.user._id
//         })
//         if (!product) {
//             res.status(404).send()
//         }
//         res.send(product)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// router.patch("/products/:id", auth, async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ["description", "completed"]
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({
//             error: "Invalid updates!"
//         })
//     }

//     try {
//         const product = await Product.findOne({
//             _id: req.params.id,
//             owner: req.user._id
//         })

//         if (!product) {
//             return res.status(404).send()
//         }

//         updates.forEach((update) => product[update] = req.body[update])
//         await product.save()
//         res.send(product)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// router.delete("/products/:id", auth, async (req, res) => {
//     try {
//         // const product = await product.findByIdAndDelete(req.params.id)
//         const product = await Product.findOneAndDelete({
//             _id: req.params.id,
//             owner: req.user._id
//         })

//         if (!product) {
//             return res.status(404).send()
//         }
//         res.send(product)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// router.post('/products', (req, res) => {
//   const _id = Math.floor(Math.random() * 9900 + 1100);
//   const newProduct = {
//     _id: _id,
//     name: req.body.name,
//     image: req.body.image,
//     price: req.body.price,
//     description: req.body.description,
//     category: req.body.category,
//     inCart: req.body.inCart,
//     quantity: req.body.quantity,
//     total: req.body.total
//   };

//   storeProducts.push(newProduct);

//   res.status(201).json(newProduct);

//   console.log('created new', newProduct);
// });

module.exports = router;