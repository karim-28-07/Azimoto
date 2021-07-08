const express = require("express")
const router = express.Router()
const {
    getLevels
} = require("../controllers/levelStudyController")

 
router.get("/", getLevels) //Pour recuperer les levels



router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router