const teamModel = require("../models/teamRoutesRoutes")
const bcryptjs = require("bcryptjs")
// const jwt = require("jsonwebtoken")
const config = require("../utils/config.js")

const addnewTeam = async (req, res) => {
    try {

        const newTeam = await teamModel.create({ username, image, role })
        res.json({ message: "User was created!", newTeam })
      
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was a problem :( " })
    }    
    
}
