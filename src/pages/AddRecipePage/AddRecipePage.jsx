import MainPageTitle from '../../components/shared/MyPageTitle/MyPageTitle';
import RecipeDescriptionFields from '../../components/shared/AddRecipeForm/RecipeDescriptionFields/RecipeDescriptionFields';
import PopularRecipes from '../../components/shared/PopularRecipe/PopularRecipe';
import FollowUsAdd from '../../components/shared/FollowUsAdd/FollowUsAdd';

const AddRecipePage = () => {
  return (
    <div className="container">
      <MainPageTitle text="Add recipe" />
      <RecipeDescriptionFields />
      <FollowUsAdd />
      <PopularRecipes />
    </div>
  );
};
export default AddRecipePage;
