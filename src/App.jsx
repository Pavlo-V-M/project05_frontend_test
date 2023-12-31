import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import AuthForm from 'components/RegistrationPage/AuthForm';

import useLoading from './components/shared/Loader/useLoading';
import Loader from "./components/shared/Loader/Loader";
import NotFound from 'components/shared/404/404';

// import BackgroundComponent from '../src/components/shared/Background/Background';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));
const DrinksCategory = lazy(() => import('./pages/DrinksPage/DrinksCategory'));
const AddRecipePage = lazy(() => import('./pages/AddRecipePage/AddRecipePage'));
const MyRecipesPage = lazy(() => import('./pages/MyRecipesPage/MyRecipesPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const RecipePageById = lazy(() => import('./pages/RecipePage/RecipePage'));

export const App = () => {
  const { isLoading } = useLoading();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route path="registration" element={<AuthForm isRegistration />} />
      <Route path="signin" element={<AuthForm />} />
      <Route path="/" element={<SharedLayout />}>
        <Route path="main" element={<MainPage />} />
        <Route path="/drinks" element={<DrinksPage />}>
          <Route path=":categoryName" element={<DrinksCategory />} />
        </Route>
        <Route path="add" element={<AddRecipePage />} />
        <Route path="my" element={<MyRecipesPage />} />
        <Route path="favorite" element={<FavoritesPage />}/>
        <Route path="recipe/:recipeId" element={<RecipePageById />} />
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
