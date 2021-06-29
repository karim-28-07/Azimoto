const userModel = require("../models/user")


const getUsers = async (req, res) => {
    try {
        const users = await userModel.find()

        res.json(users)
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}


const getUserById = async (req, res) => {
    try {
        const idUser = req.params.id
        const user = await userModel.findById(idUser)

        if (user) {
            res.json({ user })
        } else {
            res.json({
                message: "User not found"
            })
        }
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}




module.exports = {
    getUsers,
    getUserById,
    
}