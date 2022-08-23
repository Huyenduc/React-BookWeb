import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux';
import store from "./redux/store"
import { createStore } from 'redux';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import rootReducer from './redux/reducer/index'
const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(rootReducer)
console.warn(store)
root.render(
  //<React.StrictMode>
    
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    
    
  //</React.StrictMode>
);


