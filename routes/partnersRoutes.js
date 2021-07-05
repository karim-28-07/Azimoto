const express = require("express")
const router = express.Router()
const { getPartners, findPartnersById, updatePartner, deletePartner } = require("../controllers/partnersController.js")


router.get('/', getPartners)
router.get("/partner/:id", findPartnersById)
router.delete('/partner/:id',deletePartner)
router.patch('/:id/partnerupdate',updatePartner)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
