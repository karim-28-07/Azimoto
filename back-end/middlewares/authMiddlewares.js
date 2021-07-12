const userModel = require("../models/user")
const adminModel = require("../models/user")
const jwt = require("jsonwebtoken")
const config = require("../utils/config")

const verifyTokenUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1] // récupérer le token de user

        const result = jwt.verify(token, config.secret) // vérifier le token de user avec le mot secret 

        if (result.id) {
            const user = await userModel.findById({_id: result.id }).lean() // chercher le user avec id dans la BD

            req.user = user
            next()
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(401).json({ message: "You don't have acces to this information" })
    }
}
const verifyTokenAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        const result = jwt.verify(token, config.secret)

        if (result.id) {
            const user = await adminModel.findById({ _id: result.id }).lean()

            req.user = user
            next()
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(401).json({ message: "You don't have acces to this information" })
    }
}

const onlyAdmin = (req, res, next) => {
    if (req.user && req.user.role === 1) {
        next()
    } else {
        res.status(403).json({ message: "I know who you are but you can't do this" })
    }
}

module.exports = { verifyTokenUser, verifyTokenAdmin, onlyAdmin }