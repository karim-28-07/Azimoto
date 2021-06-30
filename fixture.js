const mongoose = require('mongoose')
const levelModel = require("./models/levelStudy")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addLevel = async () => {

    try {
        await levelModel.deleteMany({})

        await levelModel.insertMany([
            {
                collegelevel1: "6éme",
                collegelevel2: "5éme",
                collegelevel3: "4éme",
                collegelevel4: "3éme",
                lyceelevel1: "1éme année",
                lyceelevel2: "2éme année",
                lyceelevel3: "Terminale"
            }
        ])

        console.log("The collection levels was recreated with the base data");

    } catch (err) {
        console.error(err)
    }
}

// addLevel()

const addquestion = async () => {

    try {
        await questionModel.deleteMany({})


        await questionModel.insertMany([
            {
                text: "",
                order: 1
            },
            {
                text: "",
                order: 2
            },
            {
                text: "",
                order: 3
            },
            {
                text: "",
                order: 4
            },
            {
                text: "",
                order: 5
            },
            {
                text: "",
                order: 6
            },
            {
                text: "",
                order: 7
            },
            {
                text: "",
                order: 8
            },
            {
                text: "",
                order: 9
            },
            {
                text: "",
                order: 10
            },
            {
                text: "",
                order: 11
            },
            {
                text: "",
                order: 12
            },
            {
                text: "",
                order: 13
            },
            {
                text: "",
                order: 14
            },
            {
                text: "",
                order: 15
            },
            {
                text: "",
                order: 16
            },
            {
                text: "",
                order: 17
            },
            {
                text: "",
                order: 18
            },
            {
                text: "",
                order: 19
            },
            {
                text: "",
                order: 20
            },
            {
                text: "",
                order: 21
            },
            {
                text: "",
                order: 20
            },
            {
                text: "",
                order: 20
            },
            {
                text: "",
                order: 20
            },
        ])

        console.log("The collection levels was recreated with the base data");

    } catch (err) {
        console.error(err)
    }
}



const showLevel = async () => {
    try {
        const study = await levelModel.find({}).populate("Study")

        // console.log("study", study);
        // console.log("study 1st", study[1].levels);

    } catch (error) {
        console.log(error)
    }
}

showLevel()