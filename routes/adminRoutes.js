const express = require("express")
const router = express.Router()
const { signupAdmin, loginAdmin} = require("../controllers/adminController")
const { validationSignupAdmin, validationLogin} = require ("../middlewares/validationMiddlewares")


router.post("/signupAdmin",validationSignupAdmin, signupAdmin)

router.post("/loginAdmin", validationLogin, loginAdmin)

module.exports = router