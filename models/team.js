const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: Number,
    city: String,
    image: String,
})

const teamModel = mongoose.model("Team", teamSchema)

module.exports = teamModel