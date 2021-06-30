const mongoose = require("mongoose")

const answersTextSchema = new mongoose.Schema({
    value: { type: String, required: true },
    answersText: [{
        type: mongoose.Types.ObjectId,
        ref: "answerText"
    }]
   
})

const answerTextModel = mongoose.model("AnswerText", answersTextSchema)

module.exports = answersTextModel