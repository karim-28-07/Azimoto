const mongoose = require('mongoose')
const levelStudyModel = require("../models/levelStudy");
const userModel = require("../models/user")
const programModel = require("../models/program")
const bcryptjs = require("bcryptjs")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addUser = async () => {

    const password = "123Karim@"
    const passwordHache = bcryptjs.hashSync(password)

    try {

        const levelStudy = await levelStudyModel.findOne({ name: "6éme année Collége" })
        console.log("levelStudy", levelStudy)
        
        const programAzimuto = await programModel.findOne({ name: "Autre" })
        console.log("programAzimuto", programAzimuto)

        await userModel.deleteMany({})

        await userModel.insertMany([
            {
                email: "karim.konexio@gmail.com",
                password: passwordHache,
                firstName: "karim",
                lastName: "Mezouar",
                birthday: "1986-07-28",
                sex: "Men",
                institution: "Konexio",
                image: "test",
                lvlstudy: levelStudy._id,
                programs: programAzimuto._id
            }
        ])

        console.log("The collection levels was recreated with the base data");

        mongoose.disconnect()

    } catch (err) {
        console.error(err)
    }

}

addUser()


