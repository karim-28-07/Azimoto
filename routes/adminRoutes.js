const express = require("express")
const router = express.Router()
const { signupAdmin, loginAdmin} = require("../controllers/adminController")
const { validationSignup, validationLogin} = require ("../middlewares/validationMiddlewares")


router.post("/signupAdmin",validationSignup, signupAdmin)

router.post("/loginAdmin", validationLogin, loginAdmin)

module.exports = router