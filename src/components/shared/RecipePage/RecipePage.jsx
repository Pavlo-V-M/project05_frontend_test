import { useState, useEffect } from 'react';
import {
  //   Link,
  //   Outlet,
  useParams,
  //   useNavigate,
  //   useLocation,
} from 'react-router-dom';
import PreparationCocktail from '../../../images/PreparationCocktail.jpg';

import IngredientList from './IngredientList';
import css from './RecipePage.module.css';
import fetchDetails from '../api/RecipeById/apiRecipeById';
import cocktailGlass from '../../../images/cocktailglass.jpg';
const RecipeDetails = () => {
  // const recipeId = '639b6de9ff77d221f190c508'
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);

  const { recipeId } = useParams();

  useEffect(() => {
    if (recipeId === '') {
      return;
    }
    fetchRecipeDetails();
    console.log(recipeId);
    // eslint-disable-next-line
  }, [recipeId]);

  const fetchRecipeDetails = () => {
    setLoading(true);
    fetchDetails(recipeId).then(data => {
      setRecipe(data);
      console.log(data);
      setLoading(false);
    });
  };

  return (
    <div className={css.recipe_container}>
      {loading && <div>...Loading</div>}
      <div className={css.recipe_details}>
        <div className={css.recipe_details_main}>
          <p className={css.recipe_glass}>{recipe.glass}</p>
          <h2 className={css.recipe_title}>{recipe.drink}</h2>
          <p className={css.recipe_about}>
            {' '}
            {recipe.description
              ? recipe.drink
              : 'Do you want to mix up some quick and easy cocktail at home? This recipe is for you.'}{' '}
          </p>
          <button className={css.add_button} type="button">
            Add to favorite recipe
          </button>
        </div>
        <img
          src={recipe.drinkThumb ? recipe.drinkThumb : cocktailGlass}
          alt="drink_photo"
          className={css.drink_image}
        />
      </div>
      <div className={css.recipe_ingredients}>
        <p className={css.recipe_ingredients_title}>Ingredients</p>
        <div className={css.recipe_ingredients_list}>
          <IngredientList items={recipe.ingredients} />
        </div>
      </div>
      <div className={css.recipe_preparations}>
        <h3 className={css.recipe_preparations_title}>Recipe Preparation</h3>
        <div className={css.recipe_preparations_info}>
          <div className={css.recipe_instructions}>
            <p className={css.recipe_instructions_text}>
              {' '}
              {recipe.instructions}
            </p>
          </div>

          <img
            src={PreparationCocktail}
            alt="drink_photo"
            className={css.preparation_image}
          />
        </div>
      </div>
    </div>
  );
};
export default RecipeDetails;
