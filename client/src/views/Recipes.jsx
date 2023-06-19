import { useEffect } from 'react';
import { DivContainer } from '../styles/recipes';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards';
import { recipe } from '../redux/actions';

const Recipes = () => {
  const recipesAll = useSelector((state) => state.allRecipes); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipe()); 
  }, [dispatch]);

  return (
    <div>
      <DivContainer>
        <Cards recipeAll={recipesAll} />
      </DivContainer>
    </div>
  );
};

export default Recipes;
