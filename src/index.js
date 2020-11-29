import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {createLocalStorage} from "./serveces/local-storage/local-storage";
import rootReducer from "./store/reducers/root-reducer";



const store = createStore(
  rootReducer
);

Promise.all([
  store.dispatch({
    type: 'LOAD_BOOKS',
    payload: createLocalStorage()[`books`]
  }),
])
.then(() => {
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
})

