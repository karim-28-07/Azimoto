const mongoose = require('mongoose')
const teamModel = require("../models/team")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addTeam = async () => {

    try {

        await teamModel.deleteMany({})

        await teamModel.insertMany([

            {
                name: "Karim",
                description: "Le meilleur de notre équipe ",
                image: "Test",
                role: 2
            }

        ])

    } catch (error) {

    }

}

addTeam()