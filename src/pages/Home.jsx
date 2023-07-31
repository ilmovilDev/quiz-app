import { Grid } from "@tremor/react"
import categories from '../mokups/categories.json'
import { CategoryCard, SocialNet } from "../components"


export const Home = () => {
    return (
        <>
            <SocialNet />
            <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-4">
                {categories.map(category => (
                    <CategoryCard
                        key={category.id}
                        {...category}
                    />
                ))}
            </Grid>
        </>
    )
}
