import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    //res.send("CALCULATOR!!!!!!")

    const query = req.query.q || "" // antigen query eller tom sträng
    
    res.render("calc.njk", {
        title: "Calc",
        query
    })
})

router.get("/add", (req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2
    console.log(num1, num2)
    res.render("calc.njk", 
        {
            title: "calc",
            num1,
            num2,
            sum: Number(num1) + Number(num2)
        }
    )
})

export default router