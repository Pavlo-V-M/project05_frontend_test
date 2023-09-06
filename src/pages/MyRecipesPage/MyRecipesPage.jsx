import MainPageTitle from 'components/shared/MyPageTitle/MyPageTitle';
import RecipeList from 'components/shared/MyRecipes/RecipeList/RecipeList';

const MyRecipesPage = () => {
  return (
    <div>
      <MainPageTitle text="My recipes" />
      <RecipeList />
    </div>
  );
};
export default MyRecipesPage;
