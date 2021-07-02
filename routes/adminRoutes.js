const express = require("express")
const router = express.Router()
const { signupAdmin, loginAdmin} = require("../controllers/adminController")
const { validationSignupAdmin, validationLoginAdmin} = require ("../middlewares/validationMiddlewares")


router.post("/signupAdmin",validationSignupAdmin, signupAdmin)

router.post("/loginAdmin", validationLoginAdmin, loginAdmin)

module.exports = router