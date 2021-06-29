const mongoose = require("mongoose")

const answerSchema = new mongoose.Schema({
    text: { type: String, required: true },
    question: String,
    user_id: String,
    question_id: String,
    created: { type: Date, default: Date.now }

})

const answerModel = mongoose.model("Answer", answerSchema)

module.exports = answerModel