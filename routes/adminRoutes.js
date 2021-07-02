const express = require("express")
const router = express.Router()
const { signupAdmin, loginAdmin} = require("../controllers/adminController")

router.post("/signupAdmin",signupAdmin)

router.post("/loginAdmin",loginAdmin)

module.exports = router