// <<<<<<< HEAD
import MainPageTitle from './shared/MyPageTitle/MyPageTitle';
import items from '../../src/coctails.json';
import Header from './shared/Header/Header/Header';

//My Footer
import Footer from './shared/Footer/Footer.jsx'

import '../index.scss';
import RecipeList from './shared/RecipeList/RecipeList';
const App = () => {
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
      <Footer />
    </div>
  );
};

export default App;
// ======= >>>>>>> from main-page-test
// import MainPageTitle from './shared/MyPageTitle/MyPageTitle';
// import items from '../../src/coctails.json';

// import '../index.scss';
// import RecipeList from './shared/RecipeList/RecipeList';
// export const App = () => {
//   return (
//     <div
//     // style={{
//     //   height: '100vh',
//     //   display: 'flex',
//     //   justifyContent: 'center',
//     //   alignItems: 'center',
//     //   fontSize: 40,
//     //   color: '#010101',
//     // }}
//     >
//       <MainPageTitle text="My recipes" />
//       <RecipeList items={items} />
//     </div>
//   );
// };
// import { Routes, Route } from "react-router-dom";
// import { lazy } from "react";

// const MainPage = lazy(() => import("../pages/MainPage"));

// export const App = () => {
//   return (
//       <Routes>
//         {/* <Route path="/" element={<Layout />}> */}
//           <Route path="/main" element={<MainPage />} />
//         {/* </Route>  */}
//           {/* <Route path="*" element={<NotFound />} /> */}
//         {/* {/* </Route> */}
//       </Routes>
//   );
// };
// >>>>>>> from main-page-test
