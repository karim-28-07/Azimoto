const answerModel = require("../models/answers")
const mongoose = require('mongoose')


// const getAnswer = async (req, res) => {
//     try {
        
//         const answerFound = await answerModel.find()

//         res.json({
//             message : "Answer ok",
//             answerFound})
//     } catch (err) {
//         console.log(err)

//         res.status(500).json({ errorMessage: "There was a problem :(" })
//     }
// }
        
 const createAnswer = async (req, res) => {
     try {
        
         const {valueNumber, valueText, question, user} = req.body
         const answerCreate = await answerModel.create({valueNumber, valueText, question, user})

         res.json({
            message : "New Answer",
            answerCreate 
        })

     } catch (err) {
        
            console.log(err)
            res.status(500).json({ errorMessage: "There was a problem :(" })
        }
    }
         
module.exports = { createAnswer }

// 