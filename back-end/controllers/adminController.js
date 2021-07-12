const adminModel = require("../models/admin")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../utils/config")

const signupAdmin = async (req, res) => {
    try {
        
        const { email, password, image } = req.body  // récupérer les données 
        const passwordHashed = bcryptjs.hashSync(password)  // haché le MDP avant de l'enregistrer dans la BD

        const admin = await adminModel.create({email, password: passwordHashed,image}) // créer l'admin et l'enregistré dans la BD avec un MDP haché 

        res.json({ message: "Admin was created!", id: admin._id })

    } catch (error) {

        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

const loginAdmin = async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const validAdmin = await adminModel.findOne({ email : email })

        const result = bcryptjs.compareSync(password, validAdmin.password) // comparer les deux MDP 

        if (result) {                      // si le resultat est true
            
            const token = jwt.sign(        // on creer un token pour l'admin
                {
                    id: validAdmin._id
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