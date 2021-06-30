const mongoose = require("mongoose")

const partenairesSchema = new mongoose.Schema({
    
    image: String,
})

const partenairesModel = mongoose.model("Partenaires", partenairesSchema)

module.exports = partenairesModel