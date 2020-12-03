import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {createLocalStorage} from "./serveces/local-storage/local-storage";
import rootReducer from "./store/reducers/root-reducer";


const localStorageServices = createLocalStorage(
  () => store.dispatch()
);

import {redirect} from "./store/middlewares/redirect";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(localStorageServices)),
    applyMiddleware(redirect)
  )
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

