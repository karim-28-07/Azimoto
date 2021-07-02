const express = require("express")
const router = express.Router()
const { getPartners } = require("../controllers/partnersController")


router.get('/', getPartners  )



router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
