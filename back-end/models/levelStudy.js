const mongoose = require("mongoose")

const studySchema = new mongoose.Schema({
    name: { type: String, required: true },
})

const levelStudyModel = mongoose.model("Study", studySchema)

module.exports = levelStudyModel