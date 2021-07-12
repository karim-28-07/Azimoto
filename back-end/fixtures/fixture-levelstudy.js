const mongoose = require('mongoose')
const levelStudyModel = require("../models/levelStudy")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addLevel = async () => {

    try {
        await levelStudyModel.deleteMany({})

        await levelStudyModel.insertMany([
            {
                name: "6éme année Collége"
            },
            {
                name: "5éme année Collége"
            },
            {
                name: "4éme année Collége"
            },
            {
                name: "3éme année Collége"
            },
            {
                name: "1éme année Lycée"
            },
            {
                name: "2éme année Lycée"
            },
            {
                name: "3éme année Lycée"
            },
        ])

        console.log("The collection levels was recreated with the base data");

    } catch (err) {
        console.error(err)
    }
}

addLevel()