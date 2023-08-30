
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import BackgroundComponent from '../src/components/shared/Background/Background';

import Header from './components/shared/Header/Header/Header';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import AuthForm from 'components/RegistrationPage/AuthForm';
import MainPage from './pages/MainPage';
// import DrinksPage from './pages/DrinksPage/DrinksPage';
// import AddRecipePage from './pages/AddRecipePage/AddRecipePage';
// import MyRecipesPage from './pages/MyRecipesPage/MyRecipesPage';
// import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
// import RecipePage from './pages/RecipePage/RecipePage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import Footer from './components/shared/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter basename="/project05_frontend_test">
      {/* <BackgroundComponent /> */}
      <Header/>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/registration" element={<AuthForm isRegistration />} />
          <Route path="/signin" element={<AuthForm />} />
          <Route path="/main" element={<MainPage />} />
          {/* <Route path="/drinks" element={<DrinksPage />} /> */}
          {/* <Route path="/add" element={<AddRecipePage />} /> */}
          {/* <Route path="/my" element={<MyRecipesPage />} /> */}
          {/* <Route path="/favorite" element={<FavoritesPage />} /> */}
          {/* <Route path="/recipe/:recipeId" element={<RecipePage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
       </Routes>
      <Footer />
      </BrowserRouter>
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
