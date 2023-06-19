import { RECIPES, Diets} from "./actions-type"
const initialState = {
   allRecipes: [],
   allDiets:[]
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case RECIPES:
            return{
                allRecipes: payload,
            }
        case Diets:
            return{
                allDiets: payload
            }
        default:
        return{...state}
    }
}

export default reducer;