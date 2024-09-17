import express from "express" // ESM
import nunjucks from "nunjucks"

const app = express()
nunjucks.configure("views", {
    autoescape: true,
    express: app,

})

app.use(express.static("public"))

// lyssna på GET request på webbroten

app.get("/", (req, res) => {
    // request, response

   // res.send("HELLO WORLD")
   console.log(req.query)
   const name = req.query.name
   console.log(name)
    res.render("index.njk", {
        message: `HELLO ${name}`,
        title: "Nunjucks hello world",

    })

    //console.log("req")
    //res.status(418).sendFile("status code")
    //res.send ("AAAAAAAAAAAAAA")

    //console.log("res")
    //res.json({message: "Hello World"})
})



app.get("/om", (req, res) => {
    
    res.render("om.njk", {
        message: "BELLO",
        title: "Nurld",

    })
})

app.get("/watch", (req, res) => {
    const movieID = req.query.v
    console.log(movieID)

    const movies = {
        "balls":{
            title: "los pollos hermanos",
            year: 2008,
            video: "https://www.youtube.com/embed/B9RgougnhiE",
            desc: "Los pollos hermanos is a very legitimate fast food chain. Yeah subscribe and like and commant down beloiw to wina  free chicken"
        }
    }

    const movie = movies[movieID]

    console.log(movie)
    res.render("watch.njk", {
        movie: movie,
        title: "watch",

    })
    //res.json(movie)
    
})

app.get("/ytub", (req, res) => {
    const ID = req.query.v
    console.log(ID)
    res.render("ytub.njk", {
        title: "youtube",
        ID: ID,
        

    })

})

app.get("/readme", (req, res) => {
    res.send("HELLO WORLD")
   
})
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000")
})