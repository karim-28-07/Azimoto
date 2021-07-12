const programModel = require('../models/program')


const getprogram = async (req, res) => {
    try {
        const users = await programModel.find()

        res.json(users)
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}




module.exports = {
    
    getprogram,
    
}