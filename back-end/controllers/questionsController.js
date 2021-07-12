const questionModel = require("../models/question")
const mongoose = require('mongoose')

const createQuestion = async (req, res) => {
    try {
        const question = req.body
        const questionCreate = await questionModel.create(question)
        res.json({
            message: "New question",
            questionCreate
        })

    } catch (err) {

        console.log(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const getQuestion = async (req, res) => {
    try {

        const question = req.body
        const questionFound = await questionModel.find(question)

        res.json({
            message: "teste OK",
            questionFound
        })
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
            findQuestion
        })
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const deleteQuestion = async (req, res) => {
    try {
        const question = req.params.id
        const questionDelete = await questionModel.deleteOne({ _id: question })
        res.json({
            message: "Question was deleted",
            questionDelete
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })

    }
}

const updateQuestion = async (req, res) => {
    try {
        const questionId = req.params.id
        const data = req.body
        const questionUpdate = await questionModel.updateOne({ _id: questionId }, data)
        console.log(questionUpdate)
        res.json({
            message: "Question was updated",
            questionUpdate
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = {
    createQuestion ,getQuestion, findQuestionById, deleteQuestion, updateQuestion
}