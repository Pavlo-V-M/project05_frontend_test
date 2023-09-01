import MainPageTitle from 'components/shared/MyPageTitle/MyPageTitle';
import MyRecipes from 'components/shared/MyRecipes/MyRecipes';

const MyRecipesPage = () => {
  return (
    <div>
      <MainPageTitle text="My recipes" />
      <MyRecipes />
    </div>
  );
};
export default MyRecipesPage;
