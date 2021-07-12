const express = require("express")
const router = express.Router()
const { getPartners, findPartnersById, updatePartner, deletePartner, addNewPartner } = require("../controllers/partnersController.js")


router.get('/', getPartners)
router.post('/', addNewPartner )
router.get("/:id", findPartnersById)
router.delete('/:id',deletePartner)
router.patch('/:id/partnerupdate',updatePartner)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
