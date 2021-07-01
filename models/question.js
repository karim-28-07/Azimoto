const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    order: Number,
    deleted: Number,
    created: { type: Date, default: Date.now }
})

const questionModel = mongoose.model("Question", questionSchema)

module.exports = questionModel