import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter } from "react-router-dom";

import App from './App';

import './index.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/project05_frontend_test">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
