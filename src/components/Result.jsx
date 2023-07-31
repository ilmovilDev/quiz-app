import { Button, Card, Flex, Text } from "@tremor/react"
import { AnimateText } from "./ui";

const cardStyle = "text-center flex flex-col gap-8 px-10"

export const Result = ({ score, questionsFiltered, onReset }) => {

    const percentage = ((score / questionsFiltered.length) * 100).toFixed(0);

    return (
        <Card
            decoration="bottom"
            decorationColor="sky"
            className={cardStyle}
        >
            <Flex>
                <Text>Acertastre:</Text>
                <Text>{`${score} / ${questionsFiltered.length}`}</Text>
            </Flex>

            <AnimateText>
                {`${percentage}%`}
            </AnimateText>

            <Button
                aria-label="reiniciar teste"
                onClick={onReset}
                variant="light"
                color="sky"
            >
                Vamos de nuevo
            </Button>
        </Card>
    )
}
