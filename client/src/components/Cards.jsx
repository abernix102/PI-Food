import Card from '../components/Card.jsx'

const Cards = ({recipeAll}) => {
    return(
        <div>
        {
            recipeAll?.map(({id, name,image, summary, healthScore, diets})=>{
                return(
                    <Card
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    summary={summary}
                    healthScore={healthScore}
                    diets={diets}
                    />
                )
            })
        }
        </div>
    )
}

export default Cards;