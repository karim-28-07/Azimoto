const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({

    name: { type: String, required: true, unique: true },
    description: String,
    image: String,
    created: { type: Date, default: Date.now }
})

const teamModel = mongoose.model("Team", teamSchema)

module.exports = teamModel