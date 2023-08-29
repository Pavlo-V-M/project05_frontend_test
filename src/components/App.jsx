import MainPageTitle from './shared/MyPageTitle/MyPageTitle';
import items from '../../src/coctails.json';
import Header from './Header/Header/Header';

import '../index.scss';
import RecipeList from './shared/RecipeList/RecipeList';
export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Header/>
      <MainPageTitle text="My recipes" />
      <RecipeList items={items} />
    </div>
  );
};
