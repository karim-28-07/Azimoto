const express = require("express")
const router = express.Router()
const { addnewTeam, getTeamById, deleteTeam, updateTeam } = require("../controllers/teamController")

 
router.post('/', addnewTeam)
router.get("/:id", getTeamById)
router.delete('/:id/deleteteam', deleteTeam)
router.patch('/:id/updateteam', updateTeam)

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
    