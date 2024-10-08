import express from "express" // ESM
import nunjucks from "nunjucks"
import morgan from "morgan"
import indexRouter from "./routes/index.js"
import searchRouter from "./routes/search.js"
import calcRouter from "./routes/calc.js"

const app = express()
nunjucks.configure("views", {
    autoescape: true,
    express: app,

})

app.use(express.static("public"))
app.use(morgan("dev"))

// lyssna på GET request på webbroten

app.use("/", indexRouter)
app.use("/search", searchRouter)
app.use("/calc", calcRouter)

// testa med att surfa localhost:3000/cjslacjsa
app.use((req, res) => {
    res.status(404).render("404.njk", {
        title: "404 not found"
    })

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000")
})