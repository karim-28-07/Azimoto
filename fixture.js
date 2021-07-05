const mongoose = require('mongoose')
const levelModel = require("./models/levelStudy");
const partnersModel = require('./models/partners');
const questionModel = require("./models/question")
const userModel = require("./models/user")
const programModel = require("./models/program")
const adminModel = require("./models/admin")
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

        const levelStudy = await levelModel.findOne({name : "3éme année Collége"})
        console.log(levelStudy)
        const programAzimuto = await programModel.findOne({name : "Parcours Collège"})

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
                lvlstudy : levelStudy._id,
                programs : programAzimuto._id

            }

        ])
        console.log("The collection levels was recreated with the base data");

    } catch (err) {
        console.error(err)
    }
   
}

// addUser()

const addProgram = async ()=> {

    try {

        await programModel.deleteMany({})

        await programModel.insertMany([

            {
                name : "Parcours Collège"
            },
            {
                name : "Atelier(s) Lycée"
            },
            {
                name : "Parcours Tous Azimuts"
            },
            {
                name : "Programme 1 cycle 1 projet"
            },
            {
                name : "Autre"
            },
        
            ])
        
    } catch (error) {
        
    }
}

// addProgram()

const addLevel = async () => {

    try {
        await levelModel.deleteMany({})

        await levelModel.insertMany([
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

// addLevel()


// const showLevel = async () => {
//     try {
//         const study = await levelModel.find({}).populate("Study")

//         // console.log("study", study);
//         // console.log("study 1st", study[1].levels);

//     } catch (error) {
//         console.log(error)
//     }
// }

// showLevel()


const addquestion = async () => {

    try {
        await questionModel.deleteMany({})


        await questionModel.insertMany([
            {
                description: " Je connais bien mes qualités :",
                type: "multiple",
                order: 1
            },

            {
                description: "Je peux facilement parler de mes qualités :",
                type: "multiple",
                order: 2
            },
            {
                description: "Je sais quelles sont mes valeurs :",
                type: "multiple",
                order: 3
            },
            {
                description: "Je sais quelles sont mes centres d’intérêts :",
                type: "multiple",
                order: 4
            },
            {
                description: "Je sais quelles conditions de travail je souhaite pour plus tard :",
                type: "multiple",
                order: 5
            },
            {
                description: "Je sais quel(s) domaine(s) professionnel(s) me correspond(ent) pour plus tard :",
                type: "multiple",
                order: 6
            },
            {
                description: "Je me sens à l’aise pour travailler en équipe :",
                type: "multiple",
                order: 7
            },
            {
                description: "Je me sens à l’aise pour prendre la parole en public :",
                type: "multiple",
                order: 8
            },
            {
                description: "Je sais quelle place j’aime prendre dans un groupe :",
                type: "multiple",
                order: 9
            },
            {
                description: "Je sais facilement si je peux faire confiance aux autres :",
                type: "multiple",
                order: 10
            },
            {
                description: "Il est facile pour moi de recevoir des compliments :",
                type: "multiple",
                order: 11
            },
            {
                description: " Il est facile pour moi de faire des compliments aux autres :",
                type: "multiple",
                order: 12
            },
            {
                description: "J’ai confiance en moi :",
                type: "multiple",
                order: 13
            },
            {
                description: "J’ai identifié mon projet d’avenir :",
                type: "multiple",
                order: 14
            },
            {
                description: "J’ai confiance en mes capacités pour réaliser mon projet d’avenir",
                type: "multiple",
                order: 15
            },
            {
                description: "Je pense arriver facilement à me fixer des objectifs que je peux tenir :",
                type: "multiple",
                order: 16
            },
            {
                description: "Je me sens mobililsé.e et motivé.e dans mon parcours scolaire et professionnel :",
                type: "multiple",
                order: 17
            },
            {
                description: "Je me sens acteur.trice de mon parcours ? (C’est à dire,  que j’ai l’impression que c’est moi qui décide)",
                type: "multiple",
                order: 18
            },
            {
                description: "Je sais ce qu’est l'Économie Sociale et Solidaire :",
                type: "multiple",
                order: 19
            },
            {
                description: "Je suis à l'écoute de mes émotions et de mon intuition :",
                type: "texte",
                order: 20
            },
            {
                description: "Je sais faire le tri dans l'information et penser par soi-même :",
                type: "texte",
                order: 21
            },
            {
                description: "Je sais imaginer, innover et toujours chercher de nouvelles possibilités :",
                type: "texte",
                order: 22
            },
            {
                description: "Je sais travailler en équipe et apprendre les uns des autre :",
                type: "texte",
                order: 23
            },
            {
                description: "Je sais porter mes idées, être transparent.e et développer des relations de qualité :",
                type: "texte",
                order: 24
            },
        ])

        console.log("The collection levels was recreated with the base data");

    } catch (err) {
        console.error(err)
    }
}

// addquestion()

// const showQuestions = async () => {
//     try {
//         const questions = await questionModel.find({}).populate("Question")

//         // console.log("study", study);
//         // console.log("study 1st", study[1].levels);

//     } catch (error) {
//         console.log(error)
//     }
// }

// showQuestions()

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

// addPartners()

const addAdmin = async () => {

    const passwordAdmin = "1234Admin?"
    const passwordHacheAdmin = bcryptjs.hashSync(passwordAdmin)


    try {

        await adminModel.deleteMany({})


        await adminModel.insertMany([

            {
                email : "admin@gmail.com",
                password : passwordHacheAdmin,
                image : "Test"

            }

        ])
        
    } catch (error) {
        console.log(error)
    }

}

addAdmin()