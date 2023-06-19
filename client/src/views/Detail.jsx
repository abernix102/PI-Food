import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () =>{
    const {id} = useParams();
    const[recipe, setRecipe] = useState({});
    const [error, setError] = useState("");

    useEffect(()=>{
       const fetchData = async()=>{
        try{
           const {data} = await axios.get(`http://localhost:3001/recipes/${id}`)
           if(!data) throw new Error('receta no encontrada');
           setRecipe(data)
        }catch(error) {
           setError(error.message);
        }
       }
       fetchData();
    },[id])

    return(
          <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>{recipe.name}</h2>
        </div>
      )}
    </div>
    )
}

export default Detail;