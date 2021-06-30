const mongoose = require("mongoose")

const studySchema = new mongoose.Schema({
    level1:String,
    level2:String,
    level3:String,
    level4:String,
    level5:String,
    level6:String,
    level7:String
})

const levelStudyModel = mongoose.model("Study", studySchema)

module.exports = levelStudyModel