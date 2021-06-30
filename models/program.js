const mongoose = require("mongoose")

const programSchema = new mongoose.Schema({
    name: { type: String, required: true },
    
})

const programModel = mongoose.model("program", programSchema)

module.exports = programModel