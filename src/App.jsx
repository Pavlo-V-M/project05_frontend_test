
import React from 'react';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import AuthForm from 'components/RegistrationPage/AuthForm';
import MyRecipesPage from 'pages/MyRecipesPage/MyRecipesPage';
// import MyRecipes from 'components/shared/MyRecipes/MyRecipes';
// import { Link } from 'react-router-dom';

// import BackgroundComponent from '../src/components/shared/Background/Background';

const WelcomePage = lazy (() => import( './pages/WelcomePage/WelcomePage'));

// import MainPage from './pages/MainPage/MainPage';
const MainPage = lazy (() => import('./pages/MainPage/MainPage'));
const DrinksPage = lazy (() => import('./pages/DrinksPage/DrinksPage'));
const AddRecipePage = lazy (() => import('./pages/AddRecipePage/AddRecipePage'));
const MyRecipesPage = lazy (() => import('./pages/MyRecipesPage/MyRecipesPage'));
const FavoritesPage = lazy (() => import('./pages/FavoritesPage/FavoritesPage'));
// import RecipePage from './pages/RecipePage/RecipePage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter basename="/project05_frontend_test">
      <BackgroundComponent />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/registration" element={<AuthForm isRegistration />} />
        <Route path="/signin" element={<AuthForm />} />
        <Route path="/own" element={<MyRecipesPage />} />
      </Routes>
    </BrowserRouter>
      {/* <BackgroundComponent /> */}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/registration" element={<AuthForm isRegistration />} />
          <Route path="/signin" element={<AuthForm />} />
          <Route path="/" element={<SharedLayout />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/drinks" element={<DrinksPage />} />
            <Route path="/add" element={<AddRecipePage />} />
            <Route path="/my" element={<MyRecipesPage />} />
            <Route path="/favorite" element={<FavoritesPage />} />
            {/* <Route path="/recipe/:recipeId" element={<RecipePage />} /> */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>

  );
};

export default App;


// >>>>>>> from main-page-test

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import BackgroundComponent from 'components/shared/Background/Background.jsx';
// import Welcome from 'components/WelcomePage/WelcomePage.jsx';
// import AuthForm from 'components/RegistrationPage/AuthForm';

// const App = () => {
//   return (
//     <BrowserRouter basename="/project05_frontend_test">
//     <BackgroundComponent/>
//     <Routes>
//       <Route path="/" element={<Welcome />} />
//       <Route path="/registration" element={<AuthForm isRegistration />} />
//       <Route path="/signin" element={<AuthForm />} />
//     </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// >>>>>>> from main-page-test
