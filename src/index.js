import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'redux/store';

import App from './App';

import './index.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// >>>>>>> from main-page-test

// import App from './components/App';
// import App from './App';
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter basename="/project05_frontend_test">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// >>>>>>> from main-page-test