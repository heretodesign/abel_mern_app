const express = require("express")
const User = require("../models/user")
const auth = require("../middleware/auth")
const router = new express.Router()
const axios = require('axios')

const userLoginCredentials = [{
    _id: 3222,
    name: 'abel mernstack',
    email: 'abel@gmail.com',
    password: 'abelshop123',
    age: '26',
    address: 'Bangsa South 3839, jalan murni 3'
}, {
    _id: 3223,
    name: 'dev mernstack',
    email: 'dev@gmail.com',
    password: 'devshop123',
    age: '26',
    address: 'Bangsa South 3839, jalan murni 3'
}];

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({
            user,
            token
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

/**
 * @getUserById
 */
// router.get("/users/:id", async (req, res) => {
//     const _id = req.params.id

//     try {
//         const userById = userLoginCredentials.find(product => {
//             return product._id === parseInt(req.params.id);
//         });

//         if (!userById) {
//             return res.status(404).send();
//         }
//         res.send(userById);
//         console.log(userById)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

/**
 * @loginUser
 */
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        console.log(user)
        const token = await user.generateAuthToken()
        res.send({
            user,
            token
        })

    } catch (error) {
        res.status(400).send(error)
    }
})
/**
 * @logoutUser
 */
router.post("/users/logout", auth, async (req, res) => {
    try {
        req.user.token = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})
/**
 * @getUserProfile
 */
router.get("/users/me", auth, async (req, res) => {
    res.send(req.user)
})


/**
 * @getSpecificUserById
 */
router.get("/users/:id", async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            res.status(404).send()
        }
        res.send(user)

    } catch (error) {
        res.status(500).send(error)
    }
})
/**
 * @updateUser
 */
router.patch("/users/me", auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ["name", "email", "password", "age", "address"]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({
            error: "Invalid updates!"
        })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (error) {
        res.status(400).send(error)
    }
})
/**
 * @deleteUser
 */
router.delete("/users/me", auth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router