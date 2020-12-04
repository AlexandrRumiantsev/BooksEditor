import React from 'react';
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";

import browserHistory from "../../browser-history";
import {AppRoute} from "./const";

import MainScreen from "../main-screen/main-screen";
import AddScreen from "../add-screen/add-screen";
import EditScreen from "../edit-screen/edit-screen";

import {indexedDBCreater} from '../../serveces/Indexed-db/Indexed-db-creater';


const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
    <Switch>
      <Route exact
        path={AppRoute.ROOT}
        render={({history}) => (
          <MainScreen />
        )}
      />
      <Route exact
        path={AppRoute.EDIT_BOOK}
        render={({history, match}) => (
          <EditScreen match={match}/>
        )}
      />
      <Route
        exact
        path={AppRoute.ADD_BOOK}
        render={({history}) => {
          return (
            <AddScreen />
          );
        }}
      />
      <Route
        exact
        path={AppRoute.TEST}
        render={({history}) => {
          indexedDBCreater(
            Test
          )
        }}
      />
    </Switch>
  </BrowserRouter>
  );
};


export default App;

