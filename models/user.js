const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthday: { type: Date },
    sex: String,
    institution: String,
    image: String,
    program_id: String,
    study_id: String,
    created: { type: Date, default: Date.now }
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel
