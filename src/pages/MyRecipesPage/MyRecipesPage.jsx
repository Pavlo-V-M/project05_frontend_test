import RecipeList from 'components/shared/RecipeList/RecipeList';
import MainPageTitle from 'components/shared/MyPageTitle/MyPageTitle';
import items from '../../../src/coctails.json';

const MyRecipesPage = () => {
  return (
    <div>
      <MainPageTitle text="My recipes" />
      <RecipeList items={items} />
    </div>
  );
};
export default MyRecipesPage;
