
import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import AuthForm from 'components/RegistrationPage/AuthForm';
// import { Link } from 'react-router-dom';

// import BackgroundComponent from '../src/components/shared/Background/Background';

const WelcomePage = lazy (() => import( './pages/WelcomePage/WelcomePage'));

const MainPage = lazy (() => import('./pages/MainPage/MainPage'));
const DrinksPage = lazy (() => import('./pages/DrinksPage/DrinksPage'));
const AddRecipePage = lazy (() => import('./pages/AddRecipePage/AddRecipePage'));
const MyRecipesPage = lazy (() => import('./pages/MyRecipesPage/MyRecipesPage'));
const FavoritesPage = lazy (() => import('./pages/FavoritesPage/FavoritesPage'));
// import RecipePage from './pages/RecipePage/RecipePage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// const App = () => {
//   return (
//         <Routes>
//           {/* <Route path="/" element={<WelcomePage />} /> */}
//           {/* <Route path="/registration" element={<AuthForm isRegistration />} /> */}
//           {/* <Route path="/signin" element={<AuthForm />} /> */}
//           {/* <Route path="/" element={<SharedLayout />}> */}
//             <Route path="/main" element={<MainPage />} />
//             <Route path="/drinks" element={<DrinksPage />} />
//             <Route path="/add" element={<AddRecipePage />} />
//             <Route path="/my" element={<MyRecipesPage />} />
//             {/* <Route path="/favorite" element={<FavoritesPage />} /> */}
//             {/* <Route path="/recipe/:recipeId" element={<RecipePage />} /> */}
//             {/* <Route path="*" element={<NotFoundPage />} /> */}
//           </Route>
//         </Routes>
//   );
// };

export const App = () => {
  return (
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route path="registration" element={<AuthForm isRegistration />} />
      <Route path="signin" element={<AuthForm />} />
      <Route path="/" element={<SharedLayout />}>
        <Route path="main" element={<MainPage />} />
        <Route path="drinks" element={<DrinksPage />} />
        <Route path="add" element={<AddRecipePage />} />
        <Route path="my" element={<MyRecipesPage />} />
        <Route path="favorite" element={<FavoritesPage />} />
        {/* <Route path="/recipe/:recipeId" element={<RecipePage />} /> */}
        <Route path="*" element={"NotFound"} />

        </Route>
      </Routes>
  );
};


export default App;

