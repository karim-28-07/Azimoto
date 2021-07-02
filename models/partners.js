const mongoose = require("mongoose")

const partnersSchema = new mongoose.Schema({

    name: { type: String, required: true, unique: true },
    description: String,
    image: String,
    
})

const partnersModel = mongoose.model("partners", partnersSchema)

module.exports = partnersModel