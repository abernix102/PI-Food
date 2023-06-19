import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {diets} from '../redux/actions'

const Create = () => {
    const listDiets = useSelector(state => state.allDiets)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(diets())
    },[dispatch])

    return (
      <div>
        <form>
          <label htmlFor="file">
            Nose
            <input type="file" id="file" />
          </label>
          <label htmlFor="recipe">
            Recipe
            <input type="text" id="recipe" name="recipe" />
          </label>
          <label htmlFor="summary">
            Summary:
            <input type="text" id="summary" name="summary" required />
          </label>
          <label htmlFor="healthScore">
            Health Score:
            <input type="number" id="healthScore" name="healthScore" min="0" max="100" required />
          </label>
          <label htmlFor="steps">
            Steps:
            <textarea id="steps" name="steps" required></textarea>
          </label>
          <label htmlFor="mySelect">Select an option:
          <select name="mySelect" id="mySelect">
          {listDiets?.map((option) => (
          <option key={option.name} value={option.id}>
            {option.name}
          </option>
        ))}
          </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Create;
  