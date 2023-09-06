import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addFavorites, deleteFavorites } from 'redux/favoriteCocktails/favorites-operations';

import {useParams} from 'react-router-dom';
import PreparationCocktail from '../../../images/PreparationCocktail.jpg';
import { AddButton, RemoveButton } from './AddButton';
import IngredientList from './IngredientList';
import css from './RecipePage.module.scss';
import fetchDetails from '../api/RecipeById/apiRecipeById';
import cocktailGlass from '../../../images/cocktailglass.jpg';
import { FetchId } from '../api/RecipeById/apiRecipeById';
import Loader from '../Loader/Loader';
const RecipeDetails = ()=> {
    const dispatch = useDispatch();
  

const [recipe, setRecipe] = useState('');
const [loading, setLoading] = useState(false);
const [id, setId] = useState('');
const [usersId, setUsersId]= useState([]);

const { recipeId } = useParams();
const [favorite, setFavorite] =useState(false)

  useEffect(() => {
        if (recipeId === '') {
          return;
        }
        fetchUserID();
      fetchRecipeDetails();

         // eslint-disable-next-line 
      }, [recipeId]);
    
   
 

      const fetchRecipeDetails = () => {
        setLoading(true);
        fetchDetails(recipeId).then(data => {
          setRecipe(data);
    
          setUsersId(data.usersId);
          
          setLoading(false);
        });
      };
      const onDeleteFavorites = recipeId => {
     
        dispatch(deleteFavorites(recipeId));
        fetchRecipeDetails();
        setFavorite(false)
      };
      const handleFavButton = recipeId=> {
        dispatch(addFavorites(recipeId)); 
        fetchRecipeDetails();
        setFavorite(true)  };

     
      const email = useSelector(state => state.auth.data.user.email);
    const fetchUserID = () => {
      setLoading(true);
      FetchId(email).then(data => {
        setId(data);
     
        setLoading(false);
      });
    };
   
      return (
        <div className={css.recipe_container}>
         
          {loading && <div><Loader/></div>}
          <div className={css.recipe_details}>
          <div className={css.recipe_details_main}>
          <p className={css.recipe_glass}>{recipe.glass}</p>
          <h2 className={css.recipe_title}>{recipe.drink}</h2>
          <p className={css.recipe_about}> { recipe.description? recipe.drink: "Do you want to mix up some quick and easy cocktail at home? This recipe is for you."}  </p>
          <div>
         { favorite || usersId.includes(id)  ? <RemoveButton  id={recipeId} onDeleteFavorites={onDeleteFavorites} />: <AddButton id={recipeId} handleFavButton={handleFavButton}/>} 
        </div>

          
          </div>
          <img 
      
                      src ={recipe.drinkThumb? recipe.drinkThumb: cocktailGlass}
                   
                      alt="drink_photo"
                      className={css.drink_image}
                    />
          </div>
          <div className={css.recipe_ingredients}>
          <p className={css.recipe_ingredients_title}>Ingredients</p>
          <div className={css.recipe_ingredients_list}>
          <IngredientList items={recipe.ingredients}/>
          </div>

          </div>
          <div className={css.recipe_preparations}>
          <h3 className={css.recipe_preparations_title}>Recipe Preparation</h3>
          <div className={css.recipe_preparations_info}>
          <div className={css.recipe_instructions}>
            <p className={css.recipe_instructions_text}> {recipe.instructions}</p>
          </div>
          
          <img 
                 src= {PreparationCocktail}
                alt="drink_photo"
                className={css.preparation_image}/>
                  
</div>
          </div>
      </div>
    );
  }
  export default RecipeDetails;
