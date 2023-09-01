import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import RecipeList from './RecipeList/RecipeList';
import { getMyRecipes } from '../../../redux/recipes/recipes-selectors';
import {
  fetchRecipes,
  deleteRecipes,
} from '../../../redux/recipes/recipes-operations';

const MyRecipes = () => {
  const recipes = useSelector(getMyRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const onDeleteRecipes = _id => {
    dispatch(deleteRecipes(_id));
    console.log(_id);
  };
  return <RecipeList items={recipes} onDelete={onDeleteRecipes} />;
};
export default MyRecipes;
