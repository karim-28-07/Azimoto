const express = require("express")
const router = express.Router()
const { getQuestion, findQuestionById, deleteQuestion, updateQuestion } = require("../controllers/questionsController")

router.get("/", getQuestion )
router.get("/question/:id", findQuestionById )
router.delete('/question/:id', deleteQuestion )
router.patch('/:id/questionupdate', updateQuestion)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
