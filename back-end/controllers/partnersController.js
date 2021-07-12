const partnersModel = require("../models/partners")

const getPartners = async (req, res) => {
    try {


        const partners = await partnersModel.find()  //chercher les partenaires dans la BD
        
        res.json({
            message: "Teste OK",
            partners
        })

    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}


const addNewPartner = async (req, res) => {
    try {
        const partners = req.body

        const newPartner = await partnersModel.create(partners) 
        res.json({
            message: "Teste OK",
            newPartner
        })

    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}


const findPartnersById = async (req, res) => {
    try {

        const partners = req.params.id
        const foundPartners = await partnersModel.findById(partners) // chercher un partenaire par id dans la BD

        res.json({
            message: 'Teste ok /partners',
            foundPartners
        })
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const deletePartner = async (req, res) => {
    try {
        const partner = req.params.id
        const partnerDelete = await partnersModel.deleteOne({ _id: partner }) // supprimé un partenaire par id dans la BD

        res.json({
            message: "partner was deleted",
            partnerDelete
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })

    }
}

const updatePartner = async (req, res) => {
    try {
        const idPartner = req.params.id
        const data = req.body
        const partnerUpdate = await partnersModel.updateOne({ _id: idPartner }, data) // changer une donnée parmis les données du partenaire dans la BD

        console.log(partnerUpdate)
        
        res.json({
            message: "Partner was updated",
            partnerUpdate
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}


module.exports = {

    getPartners,
    addNewPartner,
    findPartnersById,
    updatePartner,
    deletePartner
}