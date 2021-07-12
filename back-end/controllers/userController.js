const userModel = require("../models/user")


const getUsers = async (req, res) => {
    try {
        const name = req.body
        const users = await userModel.create(name)
    
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

const getUser = async (req, res) => {
    try {
        const userName = req.params.name
        const user = await userModel.findOne(userName)

        res.json({
            message: "Test OK",
            user
        })

    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const addNewUser = async (req, res) => {
    try {
        const user = req.body

        const newUser = await userModel.create(user)

        res.json({
            message: "Ok, user was created!",
            newUser
        })
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}




module.exports = {
    getUsers,
    getUserById,
    getUser,
    addNewUser
}