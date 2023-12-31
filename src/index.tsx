import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './store'


import './index.scss'
import App from "./App";

const rootEl = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootEl);


root.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>
);