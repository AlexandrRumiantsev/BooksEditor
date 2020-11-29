import React from 'react';
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";

import browserHistory from "../../browser-history";
import {AppRoute} from "./const";

import MainScreen from "../main-screen/main-screen";
import AddScreen from "../add-screen/add-screen";
import EditScreen from "../edit-screen/edit-screen";

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
        render={({history}) => (
          <EditScreen />
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
    </Switch>
  </BrowserRouter>
  );
};


export default App;
