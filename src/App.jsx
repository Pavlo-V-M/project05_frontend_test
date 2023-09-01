import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BackgroundComponent from 'components/shared/Background/Background.jsx';
import Welcome from 'components/WelcomePage/WelcomePage.jsx';
import AuthForm from 'components/RegistrationPage/AuthForm';
import MyRecipesPage from 'pages/MyRecipesPage/MyRecipesPage';
// import MyRecipes from 'components/shared/MyRecipes/MyRecipes';

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
  );
};

export default App;
