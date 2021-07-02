const questionModel = require("../models/question")

const getQuestion = async (req, res) => {
    try {
        const question = await questionModel.findOne()

        res.json({
            message : "teste OK",
            question})
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}



module.exports = {
    getQuestion
}