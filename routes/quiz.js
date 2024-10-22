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

    },
    {
        id: "q3",
        text: "Many answers on this one",
        answers: ["yes", "indeed", "this is the one though", "no", " ", "blab", "crap", "blap"],
        correctAnswer: "blab"

    },
    {
        id: "q4",
        text: "And this one is impossible",
        answers: ["no", "it is possible", "I refuse", "yes it is"],
        correctAnswer: "it is impossible indeed"

    },
    {
        id: "q5",
        text: "Last one",
        answers: ["fr"],
        correctAnswer: "fr"

    },
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
    const result = questions.map(question => {
      const answer = answers[question.id]
      const correctAnsw = question.correctAnswer
      
      return {
        question: question.text,
        correct: answer == question.correctAnswer,
        answer,
        correctAnsw,
       

      }
    })
    // questions.forEach(question => {
    //   const answer = answers[question.id]
    //   if (answer == question.correctAnswer) {
    //     console.log("Du har svarat rätt på fråga : ", question.id)
    //   }
    // })

    
    res.render("result.njk", {
      message: "Ditt result at",
      result
    })
})


export default router