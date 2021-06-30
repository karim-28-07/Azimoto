const mongoose = require("mongoose")

const answersNumberSchema = new mongoose.Schema({
    value: { type: Number, required: true },
    answersNumber: [{
        type: mongoose.Types.ObjectId,
        ref: "answerNumber"
    }]
   
})

const answerNumberModel = mongoose.model("AnswerNumber", answersNumberSchema)

module.exports = answerNumberModel