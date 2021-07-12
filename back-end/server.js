const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { debug } = require("./middlewares/debug")
// const router = express.Router()

// const routes = require("./routes/index.js")
const authRoutes  = require("./routes/authRoutes")

const usersRoutes  = require("./routes/userRoutes")

const levelsRoutes  = require("./routes/levelStudyRoutes")

const partnersRoutes = require("./routes/partnersRoutes")

const programRoutes = require("./routes/programRoutes")

const questionsRoutes = require("./routes/questionsRoutes")

const adminRoutes = require("./routes/adminRoutes")

const teamRoutes = require("./routes/teamRoutes")

const answersRoutes = require("./routes/answersRoutes")
const { port, mongoURL } = require('./utils/config')

const router = require("./routes/authRoutes")


mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const app = express()

app.use(cors())

app.use(express.json())

app.use(debug)

app.use("/", router)        //http://localhost:8080/user/login

app.use("/user", authRoutes)

app.use("/users", usersRoutes)


app.use("/program", programRoutes)

app.use("/questions", questionsRoutes)

app.use ("/admins", adminRoutes)

app.use ("/login", adminRoutes )

app.use("/levels", levelsRoutes)

app.use("/teams", teamRoutes)

//app.use("/", teamRoutes) génere un problème

app.use("/answers", answersRoutes)

// app.use("/", teamRoutes)

app.use("/", partnersRoutes)


app.listen(port, () => {
    console.log("Server is listening at port ", port);
})