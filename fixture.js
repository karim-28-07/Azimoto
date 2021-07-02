const mongoose = require('mongoose')
const levelModel = require("./models/levelStudy")
const questionModel = require("./models/question")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

// hay que cambiar toda la bdd para agregar el tipo(number o string) en "question"

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

addLevel()


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
                text: " Je connais bien mes qualités :",
                order: 1
            },

            {
                text: "Je peux facilement parler de mes qualités :",
                order: 2
            },
            {
                text: "Je sais quelles sont mes valeurs :",
                order: 3
            },
            {
                text: "Je sais quelles sont mes centres d’intérêts :",
                order: 4
            },
            {
                text: "Je sais quelles conditions de travail je souhaite pour plus tard :",
                order: 5
            },
            {
                text: "Je sais quel(s) domaine(s) professionnel(s) me correspond(ent) pour plus tard :",
                order: 6
            },
            {
                text: "Je me sens à l’aise pour travailler en équipe :",
                order: 7
            },
            {
                text: "Je me sens à l’aise pour prendre la parole en public :",
                order: 8
            },
            {
                text: "Je sais quelle place j’aime prendre dans un groupe :",
                order: 9
            },
            {
                text: "Je sais facilement si je peux faire confiance aux autres :",
                order: 10
            },
            {
                text: "Il est facile pour moi de recevoir des compliments :",
                order: 11
            },
            {
                text: " Il est facile pour moi de faire des compliments aux autres :",
                order: 12
            },
            {
                text: "J’ai confiance en moi :",
                order: 13
            },
            {
                text: "J’ai identifié mon projet d’avenir :",
                order: 14
            },
            {
                text: "J’ai confiance en mes capacités pour réaliser mon projet d’avenir",
                order: 15
            },
            {
                text: "Je pense arriver facilement à me fixer des objectifs que je peux tenir :",
                order: 16
            },
            {
                text: "Je me sens mobililsé.e et motivé.e dans mon parcours scolaire et professionnel :",
                order: 17
            },
            {
                text: "Je me sens acteur.trice de mon parcours ? (C’est à dire,  que j’ai l’impression que c’est moi qui décide)",
                order: 18
            },
            {
                text: "Je sais ce qu’est l'Économie Sociale et Solidaire :",
                order: 19
            },
            {
                text: "Je suis à l'écoute de mes émotions et de mon intuition :",
                order: 20
            },
            {
                text: "Je sais faire le tri dans l'information et penser par soi-même :",
                order: 21
            },
            {
                text: "Je sais imaginer, innover et toujours chercher de nouvelles possibilités :",
                order: 22
            },
            {
                text: "Je sais travailler en équipe et apprendre les uns des autre :",
                order: 23
            },
            {
                text: "Je sais porter mes idées, être transparent.e et développer des relations de qualité :",
                order: 24
            },
        ])

        console.log("The collection levels was recreated with the base data");

    } catch (err) {
        console.error(err)
    }
}

addquestion()

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