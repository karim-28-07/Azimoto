const express = require("express")
const router = express.Router()
const { createQuestion ,getQuestion, findQuestionById, deleteQuestion, updateQuestion } = require("../controllers/questionsController")

router.get("/", getQuestion )
router.post("/", createQuestion)
router.get("/question/:id", findQuestionById )
router.delete('/:id', deleteQuestion )
router.patch('/:id/questionupdate', updateQuestion)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
