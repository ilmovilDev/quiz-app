import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { InitialQuiz, Questions } from "../components";

import questions from "../mokups/questions.json"
import { shuffleQuestions } from "../utils/shuffleQuestions";

export const ShowView = () => {

    const { category } = useParams();
    const [activeQuiz, setActiveQuiz] = useState(false)
    const [indexQuestion, setIndexQuestion] = useState(0)
    const [questionsFiltered, setQuestionsFiltered] = useState(
        questions.filter(question => question.category === category)
    )

    useEffect(() => {
        const newListOfQuestions = shuffleQuestions(questionsFiltered);
        setQuestionsFiltered(newListOfQuestions)
    }, [category])


    return (
        <>
            {activeQuiz ? (
                <Questions
                    indexQuestion={indexQuestion}
                    setIndexQuestion={setIndexQuestion}
                    question={questionsFiltered[indexQuestion]}
                    questionsFiltered={questionsFiltered}
                    setActiveQuiz={setActiveQuiz}
                />
            ) : (
                <InitialQuiz
                    setActiveQuiz={setActiveQuiz}
                    category={category}
                />
            )
            }
        </>
    )
}
