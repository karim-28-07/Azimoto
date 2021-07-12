const mongoose = require('mongoose')
const adminModel = require("../models/admin")
const bcryptjs = require("bcryptjs")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addAdmin = async () => {

    const passwordAdmin = "1234Admin?"
    const passwordHacheAdmin = bcryptjs.hashSync(passwordAdmin)


    try {

        await adminModel.deleteMany({})


        await adminModel.insertMany([

            {
                email: "admin@gmail.com",
                password: passwordHacheAdmin,
                image: "Test"

            }

        ])

    } catch (error) {
        console.log(error)
    }

}

addAdmin()