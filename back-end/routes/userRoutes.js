const express = require("express")
const router = express.Router()
const {
    getUsers,
    getUserById, getUser, addNewUser
} = require("../controllers/userController")



router.get("/",  getUsers) //Pour recuperer les users

router.get("/:id", getUserById) //Pour recuperer le User par ID

router.get("/name/:name", getUser) //Pour recuperer le User par Name

router.post("/",addNewUser)  //Pour ajouter New User(SignIn)

// router.patch("/:id/role", updateUser) //Pour modifier user par ID

// router.delete("/:id",deleteuser) //Pour supprimer les Users

// router.put("/:id",replaceUser)  



router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
