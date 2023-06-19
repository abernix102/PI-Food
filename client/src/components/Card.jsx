import { Link } from "react-router-dom";

const Card = ({id,name,image, summary, healthScore, diets})=>{
    return(
        <div>
            <h2><Link to={`/detail/${id}`}>{name}</Link></h2>
            <img src={image} alt={name}/>
            <p>summary:{summary}</p>
            <p>Health Score: {healthScore}</p>
            <ul>
            {diets.map((diet) => (
            <li key={diet.name}>{diet.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default Card;