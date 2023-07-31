import { Link } from 'react-router-dom';
import { Button, Card, Metric } from '@tremor/react';
import categories from '../mokups/categories.json';

export const InitialQuiz = ({ category, setActiveQuiz }) => {

    const { image } = categories.find((cat) => cat.path === category) || {};

    return (
        <>
            <Link
                to="/"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </Link>
            <Card
                decorationColor="sky"
                decoration="bottom"
                className='text-center px-12 mt-4'
            >
                <Metric className='capitalize'>{category}</Metric>
                <img className='w-48 h-48 my-8' src={image} alt={`Image category ${category}`} />
                <Button
                    aria-label='iniciar questionario'
                    variant='light'
                    color='sky'
                    onClick={() => setActiveQuiz(true)}
                >
                    Iniciar Questionário
                </Button>
            </Card>
        </>
    )
}
