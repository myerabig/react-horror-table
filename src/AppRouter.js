import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App/App";
import Profile from "./Profile";
import PrivateRoute from './PrivateRoute';

function AppRouter() {
  return (
    <div className="AppRouter">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;