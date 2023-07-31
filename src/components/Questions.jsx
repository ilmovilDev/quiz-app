import { useEffect, useState } from "react"
import { Result } from "./Result"
import { Button, Card, Flex, Grid, Text, Title } from "@tremor/react"

export const Questions = ({ indexQuestion, setIndexQuestion, question, questionsFiltered, setActiveQuiz }) => {

    const [activeResult, setActiveResult] = useState(false)
    const [score, setScore] = useState(0)
    const [answerRandon, setAnswerRandon] = useState([])
    const [selectAnswerIndex, setSelectAnswerIndex] = useState(null)
    const [answered, setAnswered] = useState(false)

    useEffect(() => {
        const { incorrect_answers, correct_answer } = question;
        const answer = [...incorrect_answers, correct_answer];
        setAnswerRandon(answer.sort(() => Math.random() - 0.5))
    }, [question]);

    const checkAnswer = (answer, index) => {

        if (answer === question.correct_answer) {
            setScore(score + 1)
        }
        setSelectAnswerIndex(index)
        setAnswered(true)

    }

    const onNextQuestion = () => {
        setIndexQuestion(indexQuestion + 1)
        setSelectAnswerIndex(null)
        setAnswered(false)
    }

    const onReset = () => {
        setScore(0)
        setIndexQuestion(0)
        setActiveQuiz(false)
    }

    return activeResult ? (
        <Result
            score={score}
            questionsFiltered={questionsFiltered}
            onReset={onReset}
        />
    ) : (
        <Card className="text-center flex flex-col gap-8">

            <Flex>
                <Text>{`${indexQuestion + 1} / ${questionsFiltered.length}`}</Text>
                <Text>{`Dificultad: ${question.difficulty}`}</Text>
            </Flex>

            <Button
                aria-label="regresar a categorias"
                variant="light"
                color="sky"
                onClick={onReset}
            >
                Reiniciar
            </Button>

            <Title>{question.question}</Title>

            <Grid numItems={1} numItemsMd={2} className="gap-4">
                {answerRandon.map((answer, index) => (
                    <Button
                        aria-label="opciones de respuestas"
                        key={answer}
                        variant={
                            answered && (selectAnswerIndex === index || answer === question.correct_answer)
                                ? "primary"
                                : "secondary"
                        }
                        className="duration-300"
                        onClick={() => checkAnswer(answer, index)}
                        disabled={answered && selectAnswerIndex !== index}
                        color={
                            selectAnswerIndex !== null
                                ? answer === question.correct_answer
                                    ? "green"
                                    : selectAnswerIndex === index
                                        ? "red"
                                        : "slate"
                                : "slate"
                        }
                    >
                        {answer}
                    </Button>
                ))}
            </Grid>

            {indexQuestion + 1 === questionsFiltered.length ? (
                <Button
                    aria-label="finalizar preguntas"
                    color="sky"
                    onClick={() => {
                        setAnswered(false);
                        setActiveResult(true);
                    }}
                >
                    Finalizar
                </Button>
            ) : (
                <Button
                    aria-label="siguiente pagina"
                    color="sky"
                    onClick={onNextQuestion}
                    disabled={!answered}
                >
                    Siguiente Pregunta
                </Button>
            )}

        </Card>
    )
}
