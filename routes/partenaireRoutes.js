const express = require("express")
const router = express.Router()
const { getPartenaires } = require("../controllers/partenairesController.js")


router.get('/', getPartenaires  )



router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
