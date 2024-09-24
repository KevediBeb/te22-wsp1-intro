import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    const query = req.query.q || "" // antigen query eller tom sträng
    const names = ["John", "Jane", "Alice", "Bob"]
    const filteredNames = names.filter((name) => 
        name.toLowerCase().includes(query.toLowerCase())
    )
    console.log(filteredNames)
    res.render("search.njk", {
        title: "Search",
        query,
        names: filteredNames,
    })
})

export default router