const express = require("express")
const router = express.Router()
const { getprogram } = require("../controllers/programController")

router.get('/', getprogram)




router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
