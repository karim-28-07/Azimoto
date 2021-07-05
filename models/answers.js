const mongoose = require("mongoose")

const answerSchema = new mongoose.Schema({
    valueNumber: Number,
    valueText: String,
    question: {
        type: mongoose.Types.ObjectId,
        ref: "question"
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    created: { type: Date, default: Date.now }

})

const answerModel = mongoose.model("Answer", answerSchema)

module.exports = answerModel