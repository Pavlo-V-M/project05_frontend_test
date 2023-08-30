import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// import { Provider } from 'react-redux';
// import App from 'App';

// import store from 'redux/store';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// >>>>>>> from main-page-test

import App from './components/App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/project05_frontend_test">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// >>>>>>> from main-page-test