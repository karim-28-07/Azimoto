const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    description: { type: String, required: true },
    type : String,
    order: Number,
    deleted : Number,
    created: { type: Date, default: Date.now }
})

const questionModel = mongoose.model("Question", questionSchema)

module.exports = questionModel