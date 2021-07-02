const questionModel = require("../models/question")
const mongoose = require('mongoose')

const getQuestion = async (req, res) => {
    try {

        const question = req.body
       
        const questionFound = await questionModel.findOne(question)

        res.json({
            message : "teste OK",
            questionFound})
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const findQuestionById = async (req, res) => {
    try {
        console.log("hola")
        const question = req.params.id
        console.log("id", question)
        const findQuestion = await questionModel.findById(question)
        res.json({
             message: 'Teste ok /question', 
             findQuestion})
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}




module.exports = {
    getQuestion, findQuestionById
}