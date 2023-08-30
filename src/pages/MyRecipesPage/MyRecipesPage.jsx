import RecipeList from 'components/shared/RecipeList/RecipeList';
import MainPageTitle from 'components/shared/MyPageTitle/MyPageTitle';

const MyRecipesPage = () => {
  return (
    <div>
      <MainPageTitle text="My recipes" />
      <RecipeList />
    </div>
  );
};
export default MyRecipesPage;
