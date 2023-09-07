import RecipeDescriptionFields from '../../components/shared/AddRecipeForm/RecipeDescriptionFields/RecipeDescriptionFields';
import PopularRecipes from '../../components/shared/PopularRecipe/PopularRecipe';
import FollowUsAdd from '../../components/shared/FollowUsAdd/FollowUsAdd';
import css from './AddRecipePage.module.scss'

const AddRecipePage = () => {
  return (
    <div className="container">
      <h1 className={css.addRecipeTitle}>Add recipe</h1>
      <div className={css.AddRecipePageWrapper}>
      <RecipeDescriptionFields />
      <div className={css.addRecipeRight}>
      <FollowUsAdd />
      <PopularRecipes />
      </div>
      </div>
      
      
    </div>
  );
};
export default AddRecipePage;
