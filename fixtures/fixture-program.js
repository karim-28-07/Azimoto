const mongoose = require('mongoose')
const programModel = require("../models/program")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addProgram = async () => {

    try {

        await programModel.deleteMany({})

        await programModel.insertMany([

            {
                name: "Parcours Collège"
            },
            {
                name: "Atelier(s) Lycée"
            },
            {
                name: "Parcours Tous Azimuts"
            },
            {
                name: "Programme 1 cycle 1 projet"
            },
            {
                name: "Autre"
            },

        ])

    } catch (error) {

    }
}

addProgram()