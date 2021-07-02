const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({

    name: { type: String, required: true, unique: true },
    description: String,
    image: String,
    role: { type: Number, required: true },
    created: { type: Date, default: Date.now }
})

const teamModel = mongoose.model("Team", teamSchema)

module.exports = teamModel