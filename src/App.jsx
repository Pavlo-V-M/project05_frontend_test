import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BackgroundComponent from 'components/shared/Background/Background.jsx';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import AuthForm from 'components/RegistrationPage/AuthForm';
import MainPage from './pages/MainPage/MainPage';
import DrinksPage from './pages/DrinksPage/DrinksPage';
import AddRecipePage from './pages/AddRecipePage/AddRecipePage';
import MyRecipesPage from './pages/MyRecipesPage/MyRecipesPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import RecipePage from './pages/RecipePage/RecipePage';


const App = () => {
  return (
    <BrowserRouter basename="/project05_frontend_test">
    <BackgroundComponent/>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/registration" element={<AuthForm isRegistration />} />
      <Route path="/signin" element={<AuthForm />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/drinks" element={<DrinksPage />} />
      <Route path="/add" element={<AddRecipePage />} />
      <Route path="/my" element={<MyRecipesPage />} />
      <Route path="/favorite" element={<FavoritesPage />} />
      <Route path="/recipe/:recipeId" element={<RecipePage />} />   
    </Routes>
    </BrowserRouter>
  );
};

export default App;