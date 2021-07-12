const teamModel = require("../models/team")
const mongoose = require("mongoose")



const addnewTeam = async (req, res) => {
    try {
        const {name, description,image} = req.body
        const newTeam = await teamModel.create({name, description, image} )
        res.json({ message: "Team was created!", newTeam })
      
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was a problem :( " })
    }    
    
}

const getTeamById = async (req, res) => {
    try {
        const Idteam = req.params.id
        const team = await teamModel.findById(Idteam)

        if (team) {
            res.json(team)
        } else {
            res.json({
                message: "Team member not found"
            })
        }
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}


const deleteTeam = async (req, res) => {
    try {
        const Idteam = req.params.id
        const teamDelete = await teamModel.deleteOne({ _id: Idteam })
        console.log("deleteteam", teamDelete)
        res.json({ message: "User was deleted", teamDelete})
    } catch (error) {
        console.log("Error", error)
        res.status(500).json({ message: "There was a problem :(" })
    }
}


const updateTeam = async (req, res) => {
    try {
        const Idteam = req.params.id
        const teamUpdate = await teamModel.updateOne({ _id: Idteam })
        console.log("teamupdate", teamUpdate)
        res.json({ message: "User was updated", teamUpdate})
    } catch (error) {
        console.log("Error", error)
        res.status(500).json({ message: "There was a problem :(" })
    }
}

module.exports = { addnewTeam, getTeamById, deleteTeam, updateTeam }