import { Card, Title } from "@tremor/react"
import { Link } from "react-router-dom"

const cardStyle = "text-center flex flex-col gap-4 px-10 hover:scale-105 duration-300"

export const CategoryCard = ({ title, path, image }) => {
    return (
        <Link to={`/showview/${path}`}>
            <Card
                decoration="bottom"
                decorationColor="sky"
                className={cardStyle}
            >
                <img className="w-32 h-32" src={image} alt={`image category ${title}`} />
                <Title color="sky">{title}</Title>
            </Card>
        </Link>
    )
}
