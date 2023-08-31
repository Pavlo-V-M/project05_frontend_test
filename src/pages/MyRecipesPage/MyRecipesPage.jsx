import Header from '../../components/shared/Header/Header/Header';
import MainPageTitle from '../../components/shared/MyPageTitle/MyPageTitle';
import items from '../../../src/ingredients.json';
import RecipeList from '../../components/shared/RecipeList/RecipeList';
import Footer from '../../components/shared/Footer/Footer';

import 'index.scss';

const MyRecipesPage = () => {
  return (
    <div>
      <Header/>
      <MainPageTitle text="My recipes" />
      <RecipeList items={items} />
      <Footer />
    </div>
  );
};

export default MyRecipesPage;