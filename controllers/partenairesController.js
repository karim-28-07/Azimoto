const partenairesModel = require("../models/partners")

const getPartenaires = async (req, res) => {
    try {
        
        // const idprogram = req.params.id
        // const program = await programModel.findById(idprogram)
               res.json( {
                message : "Teste OK",
                } )
       
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = {
    
    getPartenaires,
    
}