import { RECIPES , Diets} from "./actions-type";
import axios from 'axios';

export const recipe = () => {
    return async (dispatch) => {
        try{
            const {data} = await axios.get('http://localhost:3001/recipe');
            const recipes = data;
            dispatch({
                type: RECIPES,
                payload: recipes 
            })
        }catch(error){
          const errorMessage = error.response.data.error;
          console.log(errorMessage);
        }
    }
}

export const diets = () =>{
    return async (dispatch) =>{
        try{
            const {data} = await axios.get('http://localhost:3001/diet');
            const dietas = data;
            dispatch({
                type: Diets,
                payload: dietas
            })
        }catch(error){
            const errorMessage = error.response.data.error;
            console.log(errorMessage);
        }
    }
}