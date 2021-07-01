const adminModel = require("../models/admin")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../utils/config")

const signupAdmin = async (req, res) => {
    try {
        
        const { email, password, image } = req.body
        const passwordHashed = bcryptjs.hashSync(password)

        const admin = await adminModel.create({email, password: passwordHashed,image})

        res.json({ message: "Admin was created!", id: admin._id })
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

const loginAdmin = async (req, res) => {
    try {
        const admin = req.admin

        const result = bcryptjs.compareSync(req.body.password, admin.password)

        if (result) {
            const token = jwt.sign(
                {
                    id: admin._id
                }, config.secret,
                {
                    expiresIn: 60 * 60
                })

            res.json({ message: "You're now login!", token })
        } else {
            res.status(401).json({ message: "Login failed" })
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

// const onlyAdminTeam = (req, res, next) => {
//     if (req.admin && req.admin.role === 1) {
//         next()
//     } else {
//         res.status(403).json({ message: "I know who you are but you can't do that" })
//     }
// }


module.exports = { signupAdmin, loginAdmin  }