const jwt = require("jsonwebtoken")
const User = require("../models/user")

const userLoginCredentials = [{
    _id: 3222,
    name: 'abeldevelopermernstack',
    email: 'abeldev@gmail.com',
    password: 'abelshop123',
}];

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, "thisismylogin")
        const user = await userLoginCredentials.findOne({
            _id: decoded._id,
            "tokens.token": token
        })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (error) {
        res.status(401).send({
            error: "Please authenticate."
        })
    }
}

module.exports = auth