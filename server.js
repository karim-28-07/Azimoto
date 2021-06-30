const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { debug } = require("./middlewares/debug")

// const routes = require("./routes/index.js")
const authRoutes  = require("./routes/authRoutes")

const usersRoutes  = require("./routes/userRoutes")

const userRoutes  = require("./routes/userRoutes")

const levelsRoutes  = require("./routes/levelStudyRoutes")
const partenairesRoutes = require("./routes/partenaireRoutes")
const programRoutes = require("./routes/programRoutes")

const partenairesRoutes = require("./routes/partenaireRoutes")

const { port, mongoURL } = require('./utils/config')


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

app.use("/user", authRoutes)

app.use("/users", usersRoutes)

app.use("/user", userRoutes)

app.use("/partenaires", partenairesRoutes)

app.use("/program", programRoutes)

app.use("/partenaires", partenairesRoutes)
app.use("/levels", levelsRoutes)

app.listen(port, () => {
    console.log("Server is listening at port ", port);
})