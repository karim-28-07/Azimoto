const mongoose = require('mongoose')
const partnersModel = require('../models/partners');

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addPartners = async () => {

    try {

        await partnersModel.deleteMany({})


        await partnersModel.insertMany([
            {
                name: "konexio",
                description: "le meilleur partenaire",
                image: "Test"
            }
        ])


    } catch (error) {
        console.log(error)
    }

}

addPartners()