const express = require("express")
const router = express.Router()
const { getAnswer, createAnswer } = require("../controllers/answersController");

// router.get('/', getAnswer)
router.post('/', createAnswer)




router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
