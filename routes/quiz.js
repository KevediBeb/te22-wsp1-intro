import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.render("quiz.njk", {
        message: "QUIZ"
    })
})

const questions = [
    {
        id: "q1",
        text: "How many diddles did Diddy diddle?",
        answers: ["10", "infinite", "none", "some"],
        correctAnswer: "infinite"

    },
    {
        id: "q2",
        text: "How what please help me what whats going on what",
        answers: ["yes", "no", "idk", "what"],
        correctAnswer: "what"

    }
]

router.get("/questions", (req, res) => {
    
    res.render("questions.njk", {
        message: "Frågor",
        questions
    })
})

router.post("/end", (req, res) => {
    const answers = req.body
    console.log(answers)
    questions.forEach(question =>{
        const answer = answers[question.id]
        if(answer == question.correctAnswer){
            console.log("du har svarat rätt på : ", question.id)
        }
    })
    res.json(answers)
})


export default router