const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    description: String,
    order: Number,
    user_id: String,
    created: { type: Date, default: Date.now }
})

const questionModel = mongoose.model("Question", questionSchema)

module.exports = questionModel