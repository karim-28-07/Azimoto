const express = require("express")
const router = express.Router()
const { signupAdmin, loginAdmin} = require("../controllers/adminController")
const { validationSignup, validationLogin} = require ("../middlewares/validationMiddlewares")
const { verifyTokenAdmin, onlyAdmin} = require("../middlewares/authMiddlewares")


router.post("/signupadmin",validationSignup, signupAdmin)

router.post("/loginadmin", validationLogin, loginAdmin)

module.exports = router