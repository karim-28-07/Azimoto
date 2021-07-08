const express = require("express")
const router = express.Router()
const questionsRoutes  = require("./questionsRoutes")
// const answersRoutes  = require("./answersRoutes")
const authRoutes  = require("./authRoutes")
// const teamRoutes  = require("./teamRoutes")
// const userRoutes  = require("./userRoutes")

router.use("/auth", authRoutes)
router.use("/questions", questionsRoutes)
// router.use("/answers", answersRoutes)
// router.use("/team", teamRoutes)
// router.use("/users", userRoutes)

module.exports = router