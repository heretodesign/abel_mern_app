const express = require("express")
// const User = require("../models/user")
// const auth = require("../middleware/auth")
const router = new express.Router()
const axios = require('axios')

const userLoginCredentials = [{
    _id: 3222,
    name: 'abeldevelopermernstack',
    email: 'abeldev@gmail.com',
    password: 'abelshop123',
}];

/**
 * @getUserById
 */
router.get("/users/:id", async (req, res) => {
    const _id = req.params.id

    try {
        const userById = userLoginCredentials.find(product => {
            return product._id === parseInt(req.params.id);
        });

        if (!userById) {
            return res.status(404).send();
        }
        res.send(userById);
        console.log(userById)
    } catch (error) {
        res.status(500).send(error)
    }
})
// router.get('/users/:id', (req, res) => {
//     const id = req.params._id;
//     const findExist = userLoginCredentials.find(product => {
//         return product._id === parseInt(req.params.id);
//     });

//     if (!findExist) {
//         return res.status(404).send({
//             error: true,
//             msg: 'id does not exist'
//         });
//     }
//     res.send(findExist);
// });

/**
 * @loginUser
 */
router.post('/users/login', async (req, res) => {
    try {
        const incomingUser = request.body;

        accounts.push(incomingUser);

        response.json(storeProducts);
    } catch (error) {
        res.status(400).send(error);
    }

})
// router.post('/users/login', async (req, res) => {
//     const _id = Math.floor(Math.random() * 9900 + 1100);

//     try {
//       const newProduct = {
//         _id: _id,
//         name: req.body.name,
//         image: req.body.image,
//         price: req.body.price,
//         description: req.body.description,
//         category: req.body.category,
//         inCart: req.body.inCart,
//         quantity: req.body.quantity,
//         total: req.body.total
//       };

//       await storeProducts.push(newProduct);
//       res.status(201).json(newProduct);

//       axios.post('http://localhost:4005/events', {
//         type: 'ProductCreated',
//         data: {
//           _id,
//           name,
//           description,
//           image,
//           price,
//           category,
//           inCart,
//           quantity,
//           total
//         }
//       });

//     } catch (error) {
//       res.status(400).send(error);
//     }
//   });

/**
 * @createEvent emit an event when you create a product
 */
router.post('/events', (req, res) => {
    console.log('Received Event:', req.body.type);

    res.send({});
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await userLoginCredentials.find(req.body.email, req.body.password)
        // const token = await user.generateAuthToken()
        res.send({
            user,
            // token
        })
        console.log('Received Event:', user);
    } catch (error) {
        res.status(400).send(error)
    }
})



// router.post('/users', async (req, res) => {
//     const user = new User(req.body)
//     try {
//         await user.save()
//         const token = await user.generateAuthToken()
//         res.status(201).send({
//             user,
//             token
//         })
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// router.post('/users/login', async (req, res) => {
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)
//         const token = await user.generateAuthToken()
//         res.send({
//             user,
//             token
//         })

//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// router.post("/users/logout", auth, async (req, res) => {
//     try {
//         req.user.token = req.user.tokens.filter((token) => {
//             return token.token !== req.token
//         })

//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// router.post("/users/logout-all", auth, async (req, res) => {
//     try {
//         req.user.token = []
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// router.get("/users/me", auth, async (req, res) => {
//     res.send(req.user)
// })



// router.get("/users", auth, async (req, res) => {
//     try {
//         const users = await User.find({})
//         res.status(200).send(users)
//     } catch(error) {
//         res.status(500).send(error)
//     }
//     // res.send({
//     //     name: 'abel',
//     //     age: 22,
//     //     email: 'abel@GMAL.COM',
//     //     password: " password123 "
//     // })
//     // User.find({}).then((users) => {
//     //     res.status(200).send(users)
//     // }).catch((error) => {
//     //     res.status(500).send(error)
//     // })
// })


// router.get("/users/:id", async (req, res) => {
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)

//         if (!user) {
//             res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(500).send(error)
//     }
// })


// router.patch("/users/me", auth, async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ["name", "email", "password", "age"]
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({
//             error: "Invalid updates!"
//         })
//     }

//     try {
//         updates.forEach((update) => req.user[update] = req.body[update])
//         await req.user.save()
//         res.send(req.user)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })


// router.delete("/users/me", auth, async (req, res) => {
//     try {
//         await req.user.remove()
//         res.send(req.user)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

module.exports = router