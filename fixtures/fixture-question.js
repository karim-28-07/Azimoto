const mongoose = require('mongoose')
const questionModel = require("../models/question")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})


const addQuestion = async () => {

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

addQuestion()