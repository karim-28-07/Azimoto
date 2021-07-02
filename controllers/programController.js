const programModel = require('../models/program')


const getprogram = async (req, res) => {
    try {
        
        // const program = req.body
        // const programGet = await programModel.find()
       
            res.json( {
                message : "Teste OK",
                programGet})
       
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}




module.exports = {
    
    getprogram,
    
}